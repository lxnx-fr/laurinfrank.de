

let animateWall = false;
function animate(render, duration, easing, morphData) {
    animateWall = true;
    let start = Date.now();
    (function loop () {
        let p = (Date.now()-start)/duration;
        if (p > 1) {
            render(1, morphData);
        } else {
            requestAnimationFrame(loop);
            render(easing(p), morphData);
        }
    }());
}

let cursorDot;
let cursorCircle;

let currentWig   = null,
    cursorState  = false,
    cursorX      = 0,
    cursorY      = 0;

let jx   = void 0,
    jy   = void 0,
    jdx  = void 0,
    jdy  = void 0;
let morphing = false;
let cursorRadius = 24;

let animateOut = false,
    animateTimeOut,
    lastWig = null;
export function setCursorStyle(dotColor, circleColor, circleBorderRadius, circleBorderDistance) {
    let doc = document.querySelector('#app');
    doc.style.setProperty("--cursor-dot-color", dotColor || "#000000");
    doc.style.setProperty("--cursor-circle-color", circleColor || "rgba(0, 0, 0, 1)");
    doc.style.setProperty("--cursor-circle-border-radius", circleBorderRadius || "24px")
    doc.style.setProperty("--cursor-circle-border-distance", circleBorderDistance || "10px");
}

export function addCursorStyle(selector, enter, leave) {
    setTimeout(() => {
        document.querySelectorAll(selector).forEach((el) => {
            el.addEventListener('mouseenter', () => {
                enter(el);
            });
            el.addEventListener('mouseleave', () => {
                leave(el);
                setCursorStyle();
            });
        });

    }, 25);
}
const objects = new Map();
export function addObject(selector, enter, leave) {
    setTimeout(() => {
        let elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            objects.set(selector, element);
            element.addEventListener('mouseenter', () => {
                currentWig = [
                    element,
                    element.offsetWidth,
                    element.offsetHeight,
                    element.getBoundingClientRect().left,
                    element.getBoundingClientRect().top
                ];
                clearTimeout(animateTimeOut);
                animateWall = false;
                cursorState = true;
                /**
                 * Add custom options in the enter function to customize the cursor colors, radius, etc.
                 * via DOCUMENT VARIALBLES
                 */
                enter(element);
            });
            element.addEventListener('mouseleave', () => {
                animateOut = true;
                lastWig = currentWig;
                currentWig = null;
                cursorState = false;
                animateWall = false;
                leave(element);
                /**
                 * remove custom options in the leave function to customize the cursor colors, radius, etc.
                 */
                setCursorStyle();
            });
        });
    }, 5);
}
export function createCursor() {
    /**
     * BezierEasing - use bezier curve for transition easing function
     * is inspired from Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = new BezierEasing(0.25, 0.1, 0.25, 1.0)
     * spline(x) => returns the easing value | x must be in [0, 1] range
     */
    function BezierEasing (mX1, mY1, mX2, mY2) {
        if (!(this instanceof BezierEasing)) return new BezierEasing(mX1, mY1, mX2, mY2);

        function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
        function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
        function C(aA1)      { return 3.0 * aA1; }

        // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
        function CalcBezier(aT, aA1, aA2) {
            return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
        }

        // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
        function GetSlope(aT, aA1, aA2) {
            return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
        }

        function GetTForX(aX) {
            // Newton raphson iteration
            let aGuessT = aX;
            for (let i = 0; i < 4; ++i) {
                let currentSlope = GetSlope(aGuessT, mX1, mX2);
                if (currentSlope === 0.0) return aGuessT;
                let currentX = CalcBezier(aGuessT, mX1, mX2) - aX;
                aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
        }
        return function (aX) {
            if (mX1 === mY1 && mX2 === mY2) return aX; // linear
            return CalcBezier(GetTForX(aX), mY1, mY2);
        };
    }
    BezierEasing.css = {
        "ease":        BezierEasing(0.25, 0.1, 0.25, 1.0),
        "linear":      BezierEasing(0.00, 0.0, 1.00, 1.0),
        "ease-in":     BezierEasing(0.42, 0.0, 1.00, 1.0),
        "ease-out":    BezierEasing(0.00, 0.0, 0.58, 1.0),
        "ease-in-out": BezierEasing(0.42, 0.0, 0.58, 1.0)
    };



    document.body.classList.add('cursoring');
    cursorDot    = document.getElementById('cursor--dot');
    cursorCircle = document.getElementById('cursor--circle');

    function smallCursor() {
        cursorDot.style['transform'] = 'translate3d('+cursorX+'px,'+cursorY+'px,0)';
        requestAnimationFrame(smallCursor);
    } smallCursor();

    function circleCursor() {
        if(!jx || !jy) {
            jx = cursorX;
            jy = cursorY;
        } else {
            jdx = (cursorX - jx) * 0.325;
            jdy = (cursorY - jy) * 0.325;
            if(Math.abs(jdx) + Math.abs(jdy) < 0.1) {
                jx = cursorX;
                jy = cursorY;
            } else {
                jx += jdx;
                jy += jdy;
            }
        }
        if (currentWig != null) {
            let shapeX = currentWig[0].getBoundingClientRect().left + currentWig[1] / 2,
                shapeY = currentWig[0].getBoundingClientRect().top + currentWig[2] / 2;
            let wigData;
            if (cursorState === true) {
                wigData = [currentWig[0], cursorRadius, cursorRadius, currentWig[1], currentWig[2], cursorX, cursorY, shapeX, shapeY];
            } else {
                wigData = [currentWig[0], cursorRadius, cursorRadius, cursorRadius, cursorRadius, cursorX, cursorY, shapeX, shapeY];
            }

            if (morphing === false && animateWall === false) {
                animate(cursorMorph, 300, BezierEasing(0.25, 0.1, 0.0, 1.0), wigData);
            }
        } else {
            if (animateOut === true && animateWall === false) {
                let wigData = [lastWig, lastWig[1], lastWig[2], cursorRadius, cursorRadius, jx, jy, null, null];
                animate(cursorMorph, 300, BezierEasing(0.25, 0.1, 0.0, 1.0), wigData);
                animateTimeOut = setTimeout(function() {
                    animateOut = false;
                    animateWall = false;
                },300);
            } else {
                if (lastWig == null) {
                    cursorCircle.style.width  = (cursorRadius) + 'px';
                    cursorCircle.style.height = (cursorRadius) + 'px';
                }
            }
            let maxEase = cursorCircle.offsetWidth - cursorDot.offsetWidth;
            if (jx >= maxEase + cursorX) jx = maxEase + cursorX;
            if (jy >= maxEase + cursorY) jy = maxEase + cursorY;
            cursorCircle.style['transform'] = 'translate(-50%,-50%) translate3d('+jx+'px,'+jy+'px,0)';
        }
        requestAnimationFrame(circleCursor);
    } circleCursor();

    function cursorMorph(p, morphData) {
        let startWidth  = morphData[1],
            startHeight = morphData[2],
            endWidth    = morphData[3]-startWidth,
            endHeight   = morphData[4]-startHeight,
            startX      = morphData[5],
            startY      = morphData[6],
            endX        = morphData[7]-startX,
            endY        = morphData[8]-startY;

        let animatePX   = (startX+endX*p),
            animatePY   = (startY+endY*p);

        if (morphData[7] == null) animatePX = jx;
        if (morphData[8] == null) animatePY = jy;

        cursorCircle.style.width = (startWidth+endWidth*p) + 'px';
        cursorCircle.style.height = (startHeight+endHeight*p) + 'px';
        cursorCircle.style['transform'] = 'translate(-50%,-50%) translate3d('+animatePX+'px,'+animatePY+'px,0)';
        if (p >= 1) {
            morphing = false;
        } else {
            if (morphing === false) morphing = true;
        }
    }
    document.addEventListener('mousemove', function(event) {
        cursorX = event.clientX;
        cursorY = event.clientY;
    }, {passive: true});
    setCursorStyle();
}
