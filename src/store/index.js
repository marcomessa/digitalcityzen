import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import character from './modules/character'
import game from './modules/game'
import bottomBar from './modules/bottombar'
import modal from './modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    character,
    game,
    bottomBar,
    modal
  }
})
