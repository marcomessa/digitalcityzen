<template>
  <div class="home">
    <transition :name="transitionName">
      <start-game v-if="step === 1" key="start" />
      <choose-character v-if="step === 2" key="character" />
      <choose-name v-if="step === 3" key="name" />
    </transition>
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
    },
    transitionName() {
      return this.$store.state.home.transitionName
    }
  }
}
</script>

<style scoped>
  .home {
    height: calc(100vh - 56px);
    position: relative;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /*.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }*/
  .slide-fade-enter
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateX(-100%);
  }

  .slide-fade-rev-enter-active, .slide-fade-rev-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /*.slide-fade-rev-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }*/
  .slide-fade-rev-enter
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  .slide-fade-rev-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
