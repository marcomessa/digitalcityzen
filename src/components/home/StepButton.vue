<template>
  <div>
    <button v-if="!start" :disabled="disabled" @click="changeStep(delta)" class="btn btn-default mx-4">{{text}}</button>
    <router-link :disabled="disabled" v-if="start" class="btn btn-default mx-4" to="/game" tag="button">{{text}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'StepButton',
  props: {
    text: {
      required: true,
      type: String
    },
    delta: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    start: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeStep (delta) {
      this.$store.dispatch('home/changeStep', delta)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
