const state = {
  search: ''
}

const getters = {
  search (state) {
    return state.search
  }
}
const mutations = {
  UPDATE_SEARCH (state, search) {
    state.search = search
  }
}

const actions = {
  updateSearch ({ commit }, search) {
    commit('UPDATE_SEARCH', search)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
