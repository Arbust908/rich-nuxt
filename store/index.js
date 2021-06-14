export const state = () => ({
  UMS: false,
  user: false,
  policies: null,
  social: null,
  images: null,
  hero: null,
})

export const getters = {
  isAuthenticated: (state) => {
    return state.user && state.user.id
  },
  isAdmin: (state) => {
    return state.user && state.user.id && state.user.role === 99
  },
}

export const actions = {
  closeModal({ commit }) {
    commit('CLOSE_MODAL', false)
  },
  openPolitics({ commit, state }) {
    const politicsModalInfo = {
      template: 'Politics',
      title: 'Politicas',
      politics: state.policies,
    }
    commit('OPEN_MODAL', politicsModalInfo)
  },
  openConsults({ commit, state }) {
    const consultModalInfo = {
      template: 'Consults',
      title: 'Politicas',
      politics: state.policies,
      link: 'https://wa.me/5491138766488',
    }
    commit('OPEN_MODAL', consultModalInfo)
  },
  openSuccess({ commit }, msg) {
    const modalData = {
      template: 'General',
      title: 'Exito!',
      message: msg,
      type: 'success',
    }
    commit('OPEN_MODAL', modalData)
  },
  openError({ commit }, msg) {
    const modalData = {
      template: 'General',
      title: 'Error',
      message: msg,
      type: 'error',
    }
    commit('OPEN_MODAL', modalData)
  },
  logingIn({ commit }, { token, id, permission, username }) {
    const userInfo = {
      token,
      id,
      permission,
      username,
    }
    commit('LOGING_IN', userInfo)
  },
  setKey({ commit }, data) {
    commit('SET_INFO', data)
  },
}

export const mutations = {
  OPEN_MODAL(state, payload) {
    state.UMS = payload
  },
  CLOSE_MODAL(state, payload) {
    state.UMS = payload
  },
  LOGING_IN(state, payload) {
    state.user = payload
  },
  SET_INFO(state, { key, data }) {
    state[key] = data
  },
}
