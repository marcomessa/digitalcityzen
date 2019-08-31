<template>
  <div class="home">
    <start-game v-if="step === 1" v-on:changeEvent="changeStep" />
    <choose-character v-if="step === 2" />
    <choose-name v-if="step === 3" />
  </div>
</template>

<script>
// @ is an alias to /src
import StartGame from '../components/home/StartGame'
import ChooseCharacter from '../components/home/ChooseCharacter'
import ChooseName from '../components/home/ChooseName'

export default {
  name: 'home',
  components: {
    StartGame,
    ChooseCharacter,
    ChooseName
  },
  computed: {
    step () {
      return this.$store.state.home.step
    }
  },
  methods: {
    changeStep (delta) {
      this.step = this.step + delta
    }
  }
}
</script>
