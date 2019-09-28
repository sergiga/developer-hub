const state = {
  requests: []
}

const getters = {
  getRequestByID: (state) => (id) => {
    return state.requests.find(r => r.id === id)
  },
  requests (state) {
    return state.requests
  }
}

const mutations = {
  ADD_REQUEST (state, request) {
    state.requests.push({ ...request, id: state.requests.length + 1 })
  }
}

const actions = {
  addRequest ({ commit }, request) {
    commit('ADD_REQUEST', request)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
