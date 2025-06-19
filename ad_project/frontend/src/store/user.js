// store/user.js
class User {
  constructor(id, email, password) {
    this.id = id
    this.email = email
    this.password = password
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      console.log(payload)
      state.user = payload
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)

      let isRequestOk = true // Изменено на true для теста успеха
      try {
        await new Promise(resolve => setTimeout(() => resolve('Done'), 3000))
        if (isRequestOk) {
          const user = new User(1, email, password)
          commit('setUser', user)
          commit('setLoading', false)
          return user
        } else {
          commit('setLoading', false)
          commit('setError', 'Ошибка регистрации')
          throw new Error('Упс... Ошибка регистрации')
        }
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      let isRequestOk = true
      try {
        await new Promise(resolve => setTimeout(() => resolve('Done'), 3000))
        if (isRequestOk) {
          const user = new User(1, email, password)
          commit('setUser', user)
          commit('setLoading', false)
          return user
        } else {
          commit('setLoading', false)
          commit('setError', 'Ошибка логина или пароля')
          throw new Error('Упс... Ошибка логина или пароля')
        }
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    logoutUser({ commit }) {
      commit('setUser', null)
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  isUserLoggedIn(state) {
    return state.user !== null
  }
}