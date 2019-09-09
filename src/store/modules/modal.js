const state = {
  header: 'default header',
  body: 'default body',
  footer: 'default footer',
  showModal: false
}

const getters = {

}

const actions = {
  setHeader ({ commit }, header) {
    commit('SET_HEADER', header)
  },
  setBody ({ commit }, body) {
    commit('SET_BODY', body)
  },
  setFooter ({ commit }, footer) {
    commit('SET_FOOTER', footer)
  },
  toggleModal ({ commit }, data = false) {
    if (data) {
      commit('SET_HEADER', data.header)
      commit('SET_BODY', data.body)
      commit('SET_FOOTER', data.footer)
    }
    commit('TOGGLE_MODAL')
  }

}

const mutations = {
  SET_HEADER: (state, header) => {
    state.header = header
  },
  SET_BODY: (state, body) => {
    state.body = body
  },
  SET_FOOTER: (state, footer) => {
    state.footer = footer
  },
  TOGGLE_MODAL: (state) => {
    state.showModal = !state.showModal
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
