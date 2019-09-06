const state = {
  currentStep: 1
}

const getters = {

}

const actions = {
  setStory ({ commit }, story) {
    commit('SET_STORY', story)
  }

}

const mutations = {
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
