<template>
  <div class="game flex flex-wrap relative">
    <sidebar :story="story" />
    <div class="w-full md:w-3/4 flex flex-col flex-grow h-full justify-between relative">
      <game-canvas ref="gameCanvas" :story="story" />
      <bottombar v-on:changeStep="changeStep" :readAll="readAll" :story="story" />
    </div>

  </div>
</template>

<script>
import Sidebar from '../components/game/Sidebar'
import GameCanvas from '../components/game/Canvas'
import Bottombar from '../components/game/Bottombar'

export default {
  name: 'Game',
  components: {
    Sidebar,
    GameCanvas,
    Bottombar
  },
  data () {
    return {
      readAll: false
    }
  },
  methods: {
    changeStep () {
      this.$refs.gameCanvas.resetFrame()
    }
  },
  mounted () {
    this.$store.dispatch('home/setStep', 1)
  },
  computed: {
    story () {
      return this.$store.state.game.story
    }
  }
}
</script>

<style lang="scss" scoped>
  .game {
    @screen md {
      min-height: calc(100vh - 56px);
    }
  }
</style>
