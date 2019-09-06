<template>
  <aside class="h-full bg-gray-200 px-4 py-12 w-full md:w-1/4 flex-col justify-between items-center z-10"
  :class="{'menu-open': isMenuOpen}">
    <avatar />
    <div class="flex flex-col flex-grow w-full items-center">
      <svg-path type="start" />
      <svg-path type="linear" />
      <svg-path type="toLeft" transform="left" />
      <svg-path type="toRight" transform="left" />
    </div>
    <router-link @click.native="restartGame" class="btn btn-large w-2/3" to="/" tag="button">Ricomincia</router-link>
  </aside>
</template>

<script>
import Avatar from './Avatar'
import SvgPath from './SvgPath'

export default {
  name: 'Sidebar',
  components: {
    Avatar,
    SvgPath
  },
  methods: {
    restartGame () {
      this.$store.dispatch('home/reset')
      this.$store.dispatch('character/reset')
    }
  },
  computed: {
    isMenuOpen() {
      return this.$store.state.home.isMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  aside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    transition: transform .3s ease;
    &.menu-open {
      transform: translateX(0);
    }

    @screen md {
      @apply w-1/4;
      position: relative;
      transform: translateX(0);
    }
  }

</style>
