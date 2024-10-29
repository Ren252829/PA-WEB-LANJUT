// store/index.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null, // Menyimpan informasi user
    isLoggedIn: false, // Menyimpan status login
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isLoggedIn = true
    },
    LOGOUT(state) {
      state.user = null
      state.isLoggedIn = false
    },
  },
  actions: {
    login({ commit }, user) {
      localStorage.setItem('user', JSON.stringify(user)) // Simpan user di localStorage
      commit('SET_USER', user)
    },
    logout({ commit }) {
      localStorage.removeItem('user') // Hapus user dari localStorage saat logout
      commit('LOGOUT')
    },
    checkSession({ commit }) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        commit('SET_USER', user)
      }
    },
  },

  getters: {
    isLoggedIn: state => state.isLoggedIn,
    getUser: state => state.user,
  },
})

export default store
