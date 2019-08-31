const state = {
  step: 1,
  transitionName: 'slide-fade'
}

const getters = {

}

const actions = {
  changeStep ({ commit }, delta) {
    commit('CHANGE_STEP', delta)
  },
  changeTransition({commit}, transitionName) {
    commit('CHANGE_TRANSITION', transitionName)
  }
}

const mutations = {
  CHANGE_STEP: (state, delta) => {
    state.step = state.step + delta
  },
  CHANGE_TRANSITION: (state, transitionName) => {
    state.transitionName = transitionName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
