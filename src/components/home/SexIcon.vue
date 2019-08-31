<template>
  <div class="sex-icon"
  :class="{'bg-gray-400 text-white rounded-t': isActive, 'cursor-pointer': !isActive}"
  @click="setSex">
    <font-awesome-icon :icon="icon" size="6x" />
  </div>
</template>

<script>
export default {
  name: 'SexIcon',
  props: {
    icon: {
      required: true,
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive () {
      return this.$store.state.character.sex === this.icon
    }
  },
  methods: {
    setSex () {
      this.$store.dispatch('character/setSex', this.icon)
    }
  }
}
</script>

<style lang="scss" scoped>
.sex-icon {
  @apply h-40 w-32 flex justify-center items-center border-b-4 rounded-b;
  transition: background-color .1s ease, color .1s ease;
  &:hover {
    @apply bg-gray-400 text-white;
  }
}
</style>
