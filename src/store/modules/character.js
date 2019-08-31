const state = {
  sex: false,
  name: ''
}

const getters = {

}

const actions = {
  setSex ({ commit }, sex) {
    commit('SET_SEX', sex)
  },
  setName ({commit}, name) {
    commit('SET_NAME', name)
  },
  reset ({commit}) {
    commit('RESET')
  }
}

const mutations = {
  SET_SEX: (state, sex) => {
    state.sex = sex
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  RESET: (state) => {
    state.sex = false
    state.name = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
