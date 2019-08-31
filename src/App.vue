<template>
  <div id="app" class="min-h-screen">
    <div id="nav" class="flex bg-gray-300">
      <div class="flex-initial">
        Nome applicazione / Logo
      </div>
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/game">Game</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    @apply p-4;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
