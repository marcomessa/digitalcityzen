<template>
  <div id="app" class="min-h-screen bg-palette1-third">
    <top-bar/>
    <router-view />
    <vue-footer />
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

export default {
  components: { TopBar, VueFooter }
}
</script>
