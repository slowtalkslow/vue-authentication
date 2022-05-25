import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      // store userData in state
      state.user = userData
      // store userData in local storage
      localStorage.setItem('user', JSON.stringify(userData))
      // add token to axios header
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA(state) {
      // clear local storage
      localStorage.removeItem('user')
      // clear user state ans axios header
      location.reload();

    }
  },
  actions: {
    async register({ commit }, credentials) {
      const { data } = await axios.post('//localhost:3000/register', credentials)
      commit('SET_USER_DATA', data)
    },
    async login({ commit }, credentials) {
      const { data } = await axios.post('//localhost:3000/login', credentials)
      commit('SET_USER_DATA', data)
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
  }
})
