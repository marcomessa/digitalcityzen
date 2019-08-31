<template>
  <div class="step">
    <div class="w-3/4 p-4 mb-10">
      <h1 class="big-title mb-10 text-center">Scegli il tuo nome</h1>
      <div class="flex justify-center -mx-4">
        <input v-model="name"
          class="border-b-2 rounded-b px-4 py-2 focus:outline-none text-center focus:border-gray-500 text-xl"
          :class="{'border-red-800 focus:border-red-800': hasError}"
          type="text"
          placeholder="Il mio nome"
          @input="validateInput">
      </div>
    </div>
    <div class="flex-initial flex p-4">
      <step-button text="Indietro" :delta="-1"/>
      <step-button start :disabled="isDisabled" text="Inizia!" :delta="1"/>
    </div>
  </div>
</template>

<script>
import StepButton from './StepButton'

export default {
  name: 'ChooseName',
  components: {
    StepButton
  },
  data () {
    return {
      hasError: false,
      regex: /^[A-Z a-z]{3,}$/
    }
  },
  computed: {
    isDisabled () {
      return this.name.length < 3
    },
    name: {
      get () {
        return this.$store.state.character.name
      },
      set (newName) {
        this.$store.dispatch('character/setName', newName)
      }
    }
  },
  methods: {
    validateInput () {
      const results = this.$store.state.character.name.match(this.regex)
      this.hasError = results === null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
