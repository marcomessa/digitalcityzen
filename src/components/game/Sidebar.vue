<template>
  <aside class="h-slide bg-gray-200 px-4 py-12 w-full md:w-1/4 flex flex-col justify-between items-center z-10"
         :class="{'menu-open': isMenuOpen}">
    <avatar/>
    <div class="flex flex-col flex-grow w-full items-center">
      <div v-for="(counter, index) in steps" :key="index">
        <transition :duration="1000" appear="" name="timeline" v-if="counter <= step">
          <div class="timeline-slot">
            <div v-if="counter !== 1" class="overflow-hidden">
              <div class="line"></div>
            </div>
            <div class="dot"></div>
            <div class="text absolute">{{counter}}, {{step}}</div>
          </div>
        </transition>
      </div>
    </div>
    <router-link @click.native="restartGame" class="btn btn-large w-2/3" to="/" tag="button">Ricomincia</router-link>
  </aside>
</template>

<script>
import Avatar from './Avatar'

export default {
  name: 'Sidebar',
  components: {
    Avatar
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    restartGame () {
      this.$store.dispatch('home/reset')
      this.$store.dispatch('character/reset')
    }
  },
  computed: {
    isMenuOpen () {
      return this.$store.state.home.isMenuOpen
    },
    steps () {
      return this.$store.state.game.story.steps.length
    }
  }
}
</script>

<style lang="scss" scoped>
  aside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    transition: transform .3s ease;

    &.menu-open {
      transform: translateX(0);
    }

    @screen md {
      @apply w-1/4;
      position: relative;
      transform: translateX(0);
    }
  }

  .timeline-slot {
    @apply relative;
    .dot {
      @apply w-6 h-6 bg-transparent border border-black rounded-full;
    }
    .line {
      @apply h-6 bg-black border-black;
      width: 1px;
      margin: 0 auto;
    }
    .text {
      position: absolute;
      top: 60%;
      right: 0;
      transform: translateX(140%);
      @apply text-xs;
    }
  }

  .timeline-enter-active {
    transition: all .3s ease;
    .line {
      transition: transform .3s ease;
    }
    .text {
      transition: transform .3s ease, opacity .3s ease;
      transition-delay: .6s;
    }
    .dot {
      transition: all .3s ease;
      transition-delay: .3s;
    }
  }

  .timeline-leave-active {
    transition: all .3s ease;
    .line {
      transition: transform .3s ease;
      transition-delay: .6s;
    }
    .text {
      transition: transform .3s ease, opacity .3s ease;
    }
    .dot {
      transition: all .3s ease;
      transition-delay: .3s;
    }
  }

  .timeline-enter, .timeline-leave-to {
    .line {
      transform: translateY(-100%);
    }
    .dot {
      opacity: 0;
    }
    .text {
      transform: translate(140%, -100%);
      opacity: 0;
    }
  }

</style>
