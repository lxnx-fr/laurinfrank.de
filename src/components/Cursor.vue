<template>
  <div class="cursor cursor--dot" id="cursor--dot"></div>
  <div class="cursor cursor--circle" id="cursor--circle"></div>
</template>

<script setup>
import {addObject, createCursor, setCursorStyle} from "@/assets/js/dynamicCursor";
import {onMounted} from "vue";
onMounted(() => {
  if (window.innerWidth < 768) return;
  createCursor(() => {});
})
</script>
<style lang="sass">
.cursor
  position: fixed
  left: 0
  top: 0
  pointer-events: none
  transform: translate3d(0,0,0)
  transition: 0.4s opacity ease
.cursor
  &--dot
    width: 7px
    height: 7px
    left: -2.5px
    top: -2.5px
    border-radius: 50%
    z-index: 111111111
    background: var(--cursor-dot-color)
    will-change: transform
  &--circle
    width: 24px
    height: 24px
    will-change: transform, width, height
    z-index: 111111111
    &:before
      content: ""
      position: absolute
      width: calc(100% + var(--cursor-circle-border-distance))
      height: calc(100% + var(--cursor-circle-border-distance))
      left: calc(-1 * var(--cursor-circle-border-distance) / 2)
      top: calc(-1 * var(--cursor-circle-border-distance) / 2)
      box-shadow: inset 0 0 0 2px var(--cursor-circle-color)
      border-radius: var(--cursor-circle-border-radius)
</style>