<template>
  <div id="app" class="min-h-screen bg-palette1-third overflow-hidden" :style="appBg">
    <top-bar/>
    <router-view />
    <vue-footer />
    <modal v-if="showModal" />
  </div>
</template>

<style lang="scss">
  #app {
    @apply font-sans;
    color: #2c3e50;
  }

</style>
<script>
import TopBar from './components/app/TopBar'
import VueFooter from './components/app/VueFooter'
import Modal from './components/app/Modal'

export default {
  components: { TopBar, VueFooter, Modal },
  data () {
    return {
      appStyle: {
        backgroundColor: this.appBg
      }
    }
  },
  computed: {
    appBg () {
      return {
        backgroundColor: this.$store.state.game.bg
      }
    },
    showModal () {
      return this.$store.state.modal.showModal
    }
  }
}
</script>
