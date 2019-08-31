<template>
  <div class="avatar flex flex-col items-center">
    <figure>
      <div class="w-56 h-56 rounded-full bg-gray-100 relative mb-6">
        <font-awesome-icon class="icon" :icon="icon" size="10x" />
      </div>
    </figure>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  computed: {
    icon () {
      return this.$store.state.character.sex
    },
    name () {
      return this.$store.state.character.name
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    @apply absolute;
    left: 50%;
    top: 33px;
    transform: translateX(-50%);
  }
</style>
