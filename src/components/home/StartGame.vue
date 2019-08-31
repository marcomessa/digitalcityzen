<template>
  <div class="step">
    <div class="w-3/4 p-4 mb-10">
      <h1 class="big-title mb-10 text-center">Titolo</h1>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero magni nam quod repellendus! A, accusantium
        corporis cupiditate debitis deleniti dignissimos illum iste nemo non nostrum quaerat rem sequi veniam
        voluptatem?</p>
    </div>
    <div class="flex-initial p-4">
      <step-button text="Inizia" :delta="1" />
    </div>
  </div>
</template>

<script>
import StepButton from './StepButton'

export default {
  name: 'StartGame',
  components: {
    StepButton
  }
}
</script>

<style lang="scss" scoped>

</style>
