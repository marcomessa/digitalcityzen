<template>
  <aside class="h-full bg-gray-200 px-4 py-12 w-1/4 flex flex-col justify-between items-center">
    <avatar />

    <router-link @click.native="restartGame" class="btn btn-large w-2/3" to="/" tag="button">Ricomincia</router-link>
  </aside>
</template>

<script>
import Avatar from './Avatar'
export default {
  name: 'Sidebar',
  components: {
    Avatar
  },
  methods: {
    restartGame () {
      console.log( 'restart' );
      this.$store.dispatch('home/reset')
      this.$store.dispatch('character/reset')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
