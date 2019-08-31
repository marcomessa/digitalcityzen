const state = {
  step: 1
}

const getters = {

}

const actions = {
  changeStep ({ commit }, delta) {
    commit('CHANGE_STEP', delta)
  }
}

const mutations = {
  CHANGE_STEP: (state, delta) => {
    state.step = state.step + delta
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
