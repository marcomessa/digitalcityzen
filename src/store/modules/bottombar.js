const state = {
  showOptions: false
}

const getters = {

}

const actions = {
  showOptions ({ commit }, bool) {
    commit('SHOW_OPTIONS', bool)
  }

}

const mutations = {
  SHOW_OPTIONS: (state, bool) => {
    state.showOptions = bool
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
