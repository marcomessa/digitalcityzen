import story from '../../assets/data/stories'

const state = {
  story: story,
  steps: [],
  currentStep: 1,
  bg: '#000'
}

const getters = {

}

const actions = {
  setStory ({ commit }, story) {
    commit('SET_STORY', story)
  },
  setStep ({commit}, step) {
    commit('SET_STEP', step)
  },
  setBg ({commit}, color) {
    commit('SET_BG', color)
  }
}

const mutations = {
  SET_STORY: (state, story) => {
    state.story = story
  },
  SET_STEP: (state, step) => {
    state.currentStep = step
  },
  SET_BG: (state, color) => {
    state.bg = color
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
