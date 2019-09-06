import story from '../../assets/data/stories'

const state = {
  story: story,
  steps: [],
  currentStep: 1
}

const getters = {

}

const actions = {
  setStory ({ commit }, story) {
    commit('SET_STORY', story)
  },
  setStep ({commit}, step) {
    commit('SET_STEP', step)
  }
}

const mutations = {
  SET_STORY: (state, story) => {
    state.story = story
  },
  SET_STEP: (state, step) => {
    state.currentStep = step
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
