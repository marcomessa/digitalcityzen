<template>
  <div class="bottombar flex-grow flex flex-col justify-between md:h-32 px-4 pt-6 pb-0">
    <p class="md:text-md font-light font-roboto text-center">
      {{currentStep.description}}
    </p>
    <div class="flex justify-center py-10 md:py-2">
      <div v-for="(option, key) in currentStep.options"
           :key="key"
           class="flex-initial">
        <button v-if="showOptions" class="btn btn-default" @click="changeStep(option.goTo)">
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
    },
    showOptions () {
      return this.$store.state.bottomBar.showOptions
    }
  },
  methods: {
    changeStep (stepId) {
      this.$store.dispatch('game/setStep', stepId)
      this.$store.dispatch('bottomBar/showOptions', false)
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
  }
</style>
