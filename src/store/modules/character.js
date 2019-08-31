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
  }
}

const mutations = {
  SET_SEX: (state, sex) => {
    state.sex = sex
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
