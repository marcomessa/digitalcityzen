<template>
  <div class="step">
    <div class="w-3/4 p-4 mb-10">
      <h1 class="big-title mb-10 text-center">Scegli il personaggio / sesso</h1>
      <div class="flex justify-center -mx-4">
        <div class="flex-initial px-4">
          <sex-icon icon="mars" />
        </div>
        <div class="flex-initial px-4">
          <sex-icon icon="venus" />
        </div>
      </div>
    </div>
    <div class="flex-initial flex p-4">
      <step-button text="Indietro" :delta="-1"/>
      <step-button :disabled="isDisabled" text="Avanti" :delta="1"/>
    </div>
  </div>
</template>

<script>
import StepButton from './StepButton'
import SexIcon from './SexIcon'

export default {
  name: 'ChooseCharacter',
  components: {
    StepButton,
    SexIcon
  },
  computed: {
    isDisabled () {
      return !this.$store.state.character.sex
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
