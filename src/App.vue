<template>
  <button class="randomise-colors" @click="updateBackground()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"/>
    </svg>
    Regenerate Colors
  </button>
  <div class="default-page animate-fadescale">
    <img src="./assets/img/lxms-logo.webp" alt="Logo" />
    <div class="default-container">
      <h1>Socials</h1>
      <div class="socials-container">
        <a class="icon-container" target="_blank" href="https://codepen.io/lxnx-fr">
          <svg class="max-w-[48px] aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/></svg>
          <span>Codepen</span>
        </a>
        <a class="icon-container discord" target="_blank" href="https://github.com/lxnx-fr">
          <svg class="max-w-[48px] aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          <span>GitHub</span>
        </a>
        <a class="icon-container" target="_blank" href="mailto:contact@laurinfrank.de">
          <svg class="w-full max-w-[48px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"/></svg>
          <span>E-Mail</span>
        </a>
        <div id="discord" class="icon-container discord">
          <svg class="max-w-[48px] aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
          <span>Discord</span>
        </div>
      </div>
    </div>
  </div>
  <canvas id="canvas" class="orb-canvas"></canvas>
  <Cursor></Cursor>
</template>
<script setup>
import {onMounted} from "vue";
import {createBackground, updateBackground} from "@/assets/js/background";
import Cursor from "@/components/Cursor.vue";
import {addObject, setCursorStyle} from "@/assets/js/dynamicCursor";

onMounted(() => {
  document.querySelector('#discord').onclick = () => {
    navigator.clipboard.writeText('𝔩𝔞𝔲𝔯𝔦𝔫 𝔫𝔬𝔢𝔩#4704');
    setTimeout(() => window.open('https://discordapp.com/users/204321643659526144', '_blank'), 20)
  };
  createBackground();
  if (window.innerWidth > 768) {
    addObject('.randomise-colors', () => setCursorStyle('#000', '#000', '50px', '10px'), () => {});
    addObject('.icon-container span', () => setCursorStyle('#000', '#000', '10px', '7px'), () => {});
  }
});
</script>
<style lang="sass">
@import "@/assets/index.sass"
body, html, #app
  --hue: none
  --hue-complimentary1: none
  --hue-complimentary2: none
  --dark-color: hsl(var(--hue), 100%, 9%)
  --light-color: hsl(var(--hue), 95%, 98%)
  --base: hsl(var(--hue), 95%, 50%)
  --complimentary1: hsl(var(--hue-complimentary1), 95%, 50%)
  --complimentary2: hsl(var(--hue-complimentary2), 95%, 50%)
  --bg-gradient: linear-gradient(to bottom, hsl(var(--hue), 95%, 99%), hsl(var(--hue), 95%, 84%))
  &.cursoring, &.cursoring *, &.cursoring *:hover
    cursor: none
  @apply max-w-full overflow-x-hidden m-0 font-semibold
.default-page
  @apply text-center mx-auto h-screen flex items-center justify-center flex-col gap-6 font-sans
  img
    @apply aspect-auto max-w-xs md:max-w-sm
.default-container
  box-shadow: 0 0 30px 0 rgba(0,0,0,0.2)
  @apply max-w-sm md:max-w-md w-full  backdrop-blur-[40px] bg-white bg-opacity-20 rounded-2xl  px-8 py-4 text-white text-opacity-80 z-20
  h1
    @apply text-3xl md:text-4xl
  h2
    @apply text-sm md:text-sm
.socials-container
  @apply w-full grid grid-cols-4 place-content-center place-items-center pt-8
  .icon-container
    @apply grid grid-cols-1 place-items-center place-content-center gap-2
    span
      @apply w-full
.orb-canvas
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none
  z-index: -1
  background: var(--bg-gradient)
  filter: blur(70px)
  -webkit-backface-visibility: hidden
  -webkit-perspective: 1000px
  -ms-transform: translate3d(0,0,0) translateZ(0)
  backface-visibility: hidden
  perspective: 1000px
  transform: translate3d(0,0,0) translateZ(0)
.randomise-colors
  box-shadow: 0 0 25px 2px rgba(0,0,0,0.2)
  @apply flex gap-3 fixed top-2 left-2 px-2 py-1.5 font-semibold text-xs transition-colors duration-300 ease-in-out rounded-full bg-transparent
  svg
    width: 16px
</style>
