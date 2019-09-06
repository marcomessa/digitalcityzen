<template>
  <div class="bottombar flex-grow flex flex-col justify-between md:h-32 px-4 pt-6 pb-0">
    <p>
      {{currentStep.description}}
    </p>
    <div class="flex justify-center py-10 md:py-2">
      <div v-for="(option, key) in currentStep.options"
           :key="key"
           class="flex-initial">
        <button v-if="readAll" class="btn btn-default" @click="changeStep(option.goTo)">
          {{option.text}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    changeStep (stepId) {
      this.$store.dispatch('game/setStep', stepId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottombar {
    position: static;
    color: white;
    transition: opacity .3s ease;
    background-color: #000;
    &:hover {
      opacity: 1;
    }
    @screen md {
      position: absolute;
      transform: translate(-50%, -50%);
      bottom: 0;
      left:50%;
      width: 80%;
      opacity: .3;
      background-color: transparent;
    }
  }
</style>
