<template>
  <aside
    class="flex-grow md:h-auto bg-gray-200 px-4 py-12 w-full md:w-1/4 flex flex-col justify-between items-center z-40"
    :class="{'menu-open': isMenuOpen}"
  >
    <avatar />
    <div class="flex flex-col flex-grow w-full items-center py-10">
      <div v-for="(counter, index) in steps" :key="index">
        <transition
          :duration="1000"
          appear
          name="timeline"
          v-if="counter <= currentStep">
          <div class="timeline-slot">
            <div v-if="counter !== 1" class="overflow-hidden">
              <div class="line"></div>
            </div>
            <div class="relative">
              <div class="dot" :class="{'old': currentStep != counter}"></div>
              <div v-if="story.steps[counter - 1].modal !== undefined" class="text">
                <button
                  @click="toggleModal(counter - 1)"
                  class="cursor-pointer"
                >{{story.steps[counter - 1].title}}</button>
              </div>
              <div v-else class="text">{{story.steps[counter - 1].title}}</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <router-link
      @click.native="restartGame"
      class="btn btn-large w-2/3"
      to="/"
      tag="button"
    >Ricomincia</router-link>
  </aside>
</template>

<script>
import Avatar from './Avatar';

export default {
  name: 'Sidebar',
  components: {
    Avatar
  },
  props: {
    story: Object
  },
  data () {
    return {
      step: 1,
      sidebarSteps: []
    }
  },
  methods: {
    restartGame () {
      this.$store.dispatch('home/reset')
      this.$store.dispatch('character/reset')
    },
    toggleModal (step) {
      const body = document.getElementsByTagName('body')[0]
      if (!this.$store.state.home.isMenuOpen) {
        body.classList.toggle('overflow-hidden')
      }
      const modalData = this.story.steps[step].modal
      this.$store.dispatch('modal/toggleModal', modalData)
    }
  },
  computed: {
    isMenuOpen () {
      return this.$store.state.home.isMenuOpen
    },
    steps () {
      return this.story.steps.length
    },
    currentStep () {
      return this.$store.state.game.currentStep
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
  transition: transform 0.3s ease;
  height: calc(100vh - 59px);
  &.menu-open {
    transform: translateX(0);
  }

  @screen md {
    @apply w-1/4 h-auto relative;
    transform: translateX(0);
  }
}

.timeline-slot {
  .dot {
    @apply w-6 h-6 bg-transparent border border-black rounded-full relative;
    &:after {
      content: "";
      @apply absolute bg-yellow-900 rounded-full;
      top: 50%;
      left: 50%;
      width: 80%;
      height: 80%;
      transform: translate(-50%, -50%) scale(0, 0);
      transition: transform 0.3s ease;
    }
    &.old:after {
      transform: translate(-50%, -50%) scale(1, 1);
    }
  }
  .line {
    @apply h-6 bg-black border-black;
    width: 1px;
    margin: 0 auto;
  }
  .text {
    position: absolute;
    top: 50%;
    right: 0;
    width: 150px;
    transform: translate(160px, -50%);
    @apply text-xs;
    button {
      @apply font-bold underline;
    }
  }
}

.timeline-enter-active {
  transition: all 0.3s ease;
  .line {
    transition: transform 0.3s ease;
  }
  .text {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transition-delay: 0.6s;
  }
  .dot {
    transition: all 0.3s ease;
    transition-delay: 0.3s;
  }
}

.timeline-leave-active {
  transition: all 0.3s ease;
  .line {
    transition: transform 0.3s ease;
    transition-delay: 0.6s;
  }
  .text {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .dot {
    transition: all 0.3s ease;
    transition-delay: 0.3s;
  }
}

.timeline-enter,
.timeline-leave-to {
  .line {
    transform: translateY(-100%);
  }
  .dot {
    opacity: 0;
  }
  .text {
    transform: translate(160px, -100%);
    opacity: 0;
  }
}
</style>
