<template>
  <button @click="toggleMenu" class="hamburger hamburger--arrowturn focus:outline-none md:hidden"
          :class="{'is-active': isMenuOpen === true}"
          type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'menu-button',
  methods: {
    toggleMenu () {
      this.$store.dispatch('home/toggleMenu')
    }
  },
  computed: {
    isMenuOpen () {
      console.log( 'test' );
      return this.$store.state.home.isMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .hamburger {
    position: relative;
    top: 4px;
    &:focus {
    outline: none;
     }
  }
</style>
