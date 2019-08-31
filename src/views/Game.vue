<template>
  <div class="game flex">
    <sidebar />
  </div>
</template>

<script>
import Sidebar from '../components/game/Sidebar'

export default {
  name: 'Game',
  components: {
    Sidebar
  },
  mounted () {
    this.$store.dispatch('home/setStep', 1)
  }
}
</script>

<style lang="scss" scoped>
  .game {
    height: calc(100vh - 56px);
  }
</style>
