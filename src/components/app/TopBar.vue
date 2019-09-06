<template>
    <div id="nav" class="flex justify-between bg-palette1-fourth">
        <div class="flex-initial">
            Nome applicazione / Logo
        </div>
      <div class="flex-initial">
        <menu-button />
      </div>
        <!--<router-link to="/">Home</router-link> |
        <router-link to="/game">Game</router-link>-->
    </div>
</template>
<script>
import MenuButton from './MenuButton'

export default {
  name: 'top-bar',
  components: { MenuButton }
}
</script>
<style lang="scss">

    #nav {
        @apply p-4;
        a {
            font-weight: bold;
            color: #2c3e50;

        }
    }
</style>
