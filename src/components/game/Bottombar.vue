<template>
  <div class="bottombar flex-grow flex flex-col justify-between md:h-32 px-4 pt-6 pb-2">
    <p class="md:text-md font-light font-rockSalt text-center">{{currentStep.description}}</p>
    <div class="flex justify-center py-10 md:py-2">
      <div v-for="(option, key) in currentStep.options" :key="key" class="flex-initial">
        <transition name="button">
          <button
            v-if="showOptions"
            class="btn btn-default mx-3"
            @click="changeStep(option.goTo)"
          >{{option.text}}</button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { close } from 'fs';

export default {
  name: 'Bottombar',
  props: {
    story: Object,
    readAll: {
      type: Boolean
    }
  },
  computed: {
    currentStep () {
      const currentStepId = this.$store.state.game.currentStep
      return this.story.steps.find(step => step.id === currentStepId)
    },
    showOptions () {
      return this.$store.state.bottomBar.showOptions
    },
    isAppBgChanged () {
      return this.$store.state.game.bg !== this.currentStep.bg
    }
  },
  methods: {
    changeStep (stepId) {
      this.$store.dispatch('game/setStep', stepId)
      console.log(this.currentStep.options.length)
      this.$store.dispatch('bottomBar/showOptions', false)
      if (this.isAppBgChanged) {
        this.$store.dispatch('game/setBg', this.currentStep.bg)
      }
    }
  },
  mounted () {
    console.log(this.isAppBgChanged)
  }
}
</script>

<style lang="scss" scoped>
.bottombar {
  position: relative;
  z-index: 20;
  color: #ffcc00;
  transition: opacity 0.3s ease;
  background-color: #000;
  &:hover {
    opacity: 1;
  }
}
.button-enter-active,
.button-leave-active {
  transition: all 0.3s;
}
.button-enter, .button-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}
</style>
