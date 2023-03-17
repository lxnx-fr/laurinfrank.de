import hsl from "hsl-to-hex";
import {createNoise2D} from "simplex-noise";
import debounce from "debounce";


const random = (min, max) => {
    return Math.random() * (max - min) + min
}
const map = (n, start1, end1, start2, end2) => {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
class ColorPalette {
    constructor() {
        this.setColors();
        this.setCustomProperties();
    }
    setColors() {
        // pick a random hue somewhere between 220 and 360
        this.hue = ~~random(190, 290);
        this.complimentaryHue1 = this.hue + 30;
        this.complimentaryHue2 = this.hue + 60;
        // define a fixed saturation and lightness
        this.saturation = 95;
        this.lightness = 50;

        // define a base color
        this.baseColor = hsl(this.hue, this.saturation, this.lightness);
        // define a complimentary color, 30 degress away from the base
        this.complimentaryColor1 = hsl(
            this.complimentaryHue1,
            this.saturation,
            this.lightness
        );
        // define a second complimentary color, 60 degrees away from the base
        this.complimentaryColor2 = hsl(
            this.complimentaryHue2,
            this.saturation,
            this.lightness
        );

        // store the color choices in an array so that a random one can be picked later
        this.colorChoices = [
            this.baseColor,
            this.complimentaryColor1,
            this.complimentaryColor2
        ];
    }

    randomColor() {
        // pick a random color
        return this.colorChoices[~~random(0, this.colorChoices.length)]
        ;
    }

    setCustomProperties() {
        // set CSS custom properties so that the colors defined here can be used throughout the UI
        document.querySelector('#app').style.setProperty("--hue", this.hue);
        document.querySelector('#app').style.setProperty(
            "--hue-complimentary1",
            this.complimentaryHue1
        );
        document.querySelector('#app').style.setProperty(
            "--hue-complimentary2",
            this.complimentaryHue2
        );
    }
}

let colorPalette = null;
let blobs = [];

export function createBackground() {
    const noise2D = createNoise2D();
    colorPalette = new ColorPalette();

    const canvas = document.querySelector('.orb-canvas');
    // Set the size of the canvas to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d');
    window.addEventListener(
        "resize",
        debounce(() => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            blobs.forEach(blob => {
                blob.bounds = blob.setBounds();
            });
        }, 250)
    );
    class Blob {
        constructor(fill = 0x000000) {
            this.bounds = this.setBounds();
            this.x = random(this.bounds["x"].min, this.bounds["x"].max);
            this.y = random(this.bounds["y"].min, this.bounds["y"].max);

            this.scale = 1;
            this.fill = fill;
            this.radius = random(window.innerHeight / 3, window.innerHeight / 3);
            this.xOff = random(0, 1000);
            this.yOff = random(0, 1000);
            this.inc = 0.002;
        }
        draw() {
            context.beginPath();
            context.scale = this.scale;
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fillStyle = this.fill + "c1";
            context.fill();
            context.closePath();
        }

        update() {
            const xNoise = noise2D(this.xOff, this.xOff);
            const yNoise = noise2D(this.yOff, this.yOff);
            const scaleNoise = noise2D(this.xOff, this.yOff);
            this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
            this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
            this.scale = map(scaleNoise, -1, 1, 0.5, 1);
            this.xOff += this.inc;
            this.yOff += this.inc;

        }
        setBounds() {
            // how far from the { x, y } origin can each orb move
            const maxDist = window.innerWidth < 1000
                ? window.innerWidth / 0.75
                : window.innerWidth / 5;
            // the { x, y } origin for each orb (the bottom right of the screen)
            const originX = window.innerWidth / 1.65;
            const originY = window.innerWidth < 1000
                    ? window.innerHeight
                    : window.innerHeight / 1.375;

            // allow each blob to move x distance away from it's x / y origin
            return {
                x: {
                    min: originX - maxDist,
                    max: originX + maxDist
                },
                y: {
                    min: originY - maxDist,
                    max: originY + maxDist
                }
            };
        }
    }

    for (let i = 0; i < 10; i++) {
        blobs.push(new Blob(colorPalette.randomColor()));
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            blobs.forEach(blob => {
                blob.update();
                blob.draw();
            });
            //requestAnimationFrame(animate);
        }
        setInterval(() => {
            animate();
        }, 25);
    } else {
        blobs.forEach(blob => {
            blob.update();
            blob.draw();
        });
    }
}

export function updateBackground() {
    colorPalette.setColors();
    colorPalette.setCustomProperties();
    blobs.forEach(blob => {
        blob.fill = colorPalette.randomColor();
    });
}