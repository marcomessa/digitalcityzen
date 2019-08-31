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
  setStep ({ commit }, value) {
    commit('CHANGE_STEP', value)
  },
  changeTransition({commit}, transitionName) {
    commit('CHANGE_TRANSITION', transitionName)
  },
  reset({commit}) {
    commit ('RESET')
  }
}

const mutations = {
  CHANGE_STEP: (state, delta) => {
    state.step = state.step + delta
  },
  SET_STEP: (state, value) => {
    state.step = value
  },
  CHANGE_TRANSITION: (state, transitionName) => {
    state.transitionName = transitionName
  },
  RESET: (state) => {
    state.step = 1
    state.transitionName = 'slide-fade'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
