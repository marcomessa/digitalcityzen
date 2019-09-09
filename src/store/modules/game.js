import story from '../../assets/data/stories'

const state = {
  story: story,
  steps: [],
  currentStep: 1,
  bg: '#000',
  sidebarSteps: [
    story.steps[0]
  ]
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
  },
  addStep ({commit}, step) {
    commit('ADD_STEP', step)
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
  },
  ADD_STEP: (state, step) => {
    state.sidebarSteps.push(step)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
