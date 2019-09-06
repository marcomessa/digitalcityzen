<template>
  <div class="svg-wrapper"
  :class="[{'t-left': transform === 'left'}, type]">
    <svg v-if="type === 'start'" xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5">
      <g data-name="Livello 2">
        <path class="cls-1" d="M9.75,5A4.75,4.75,0,1,1,5,9.75,4.75,4.75,0,0,1,9.75,5m0-5A9.75,9.75,0,1,0,19.5,9.75,9.76,9.76,0,0,0,9.75,0Z"/>
      </g>
    </svg>
    <svg v-if="type === 'linear'" xmlns="http://www.w3.org/2000/svg" width="19.5" height="35.98" viewBox="0 0 19.5 35.98">
      <g data-name="Livello 2">
        <circle class="cls-1" cx="9.75" cy="26.23" r="9.75"/>
        <line stroke="#000" stroke-width="1"  class="cls-2" x1="9.55" y1="0.02" x2="9.73" y2="19.95"/>
      </g>
    </svg>
    <svg v-if="type === 'toLeft'" xmlns="http://www.w3.org/2000/svg" width="40.3" height="46.5" viewBox="0 0 40.3 46.5">
      <g data-name="Livello 2">
        <circle class="cls-1" cx="9.75" cy="36.75" r="9.75"/>
        <g>
          <path class="cls-2" d="M24.26,14A14.13,14.13,0,0,0,10.17,28.13"/>
          <path class="cls-2" d="M38.3,0A14.22,14.22,0,0,1,24,14"/>
        </g>
      </g>
    </svg>
    <svg v-if="type === 'toRight'" xmlns="http://www.w3.org/2000/svg" width="40.3" height="46.5" viewBox="0 0 40.3 46.5">
      <g data-name="Livello 2">
        <circle class="cls-1" cx="30.55" cy="36.75" r="9.75"/>
        <g>
          <path class="cls-2" d="M16,14A14.13,14.13,0,0,1,30.13,28.13"/>
          <path class="cls-2" d="M2,0A14.22,14.22,0,0,0,16.28,14"/>
        </g>
      </g>
    </svg>

  </div>

</template>

<script>
import anime from 'animejs/lib/anime.es.js'
export default {
  name: 'SvgPath',
  props: {
    type: {
      type: String
    },
    transform: {
      type: String
    }
  },
  mounted () {
    anime({
      targets: '.svg-wrapper',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
  }
}
</script>

<style lang="scss" scoped>
  .cls-1 {
    fill: #79e0e7;
  }
  .cls-2 {
    fill: none;
    stroke: #79e0e7;
    stroke-miterlimit: 10;
    stroke-width: 1px;
  }
  path {
    &:hover {
      fill: red
    }
  }
  .t-left {
    transform: translateX(-43%);
    &.toRight {
      transform: translateX(-26%);
    }
  }
</style>
