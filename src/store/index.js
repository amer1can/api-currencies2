import { createStore } from 'vuex'

export default createStore({
  state: {
    globalCurrency: [],
    myCurrency: [],
  },
  mutations: {
    addMyCurrency(state, data) {
      this.state.myCurrency.push(data)
    },
    addGlobalCurrency(state, name) {
      this.state.globalCurrency.push(name)
    },
  },
  actions: {
    async addAsyncGlobCur ({commit}, name) {
      const api = "38db08c6c20c307a4a035a2c8fa14002142f5175"
      await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${api}&ids=${name}&interval=1d,30d`)
          .then(response => response.json())
          .then(data => {
            commit('addGlobalCurrency', data[0])
          })
    },
    async addAsyncGlobalCurrency ({commit}, arrCur) {
      const api = "38db08c6c20c307a4a035a2c8fa14002142f5175"
      await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${api}&ids=${arrCur}&interval=1d,30d`)
          .then(response => response.json())
          .then(data => {
            data.forEach(elem => commit('addGlobalCurrency', elem))
          })
    }
  },

  modules: {
  }
})

//API curRate : 4f4a64a15c7007c45ba1ffdeb13a2a8b

//https://realadmin.ru/coding/vuex-general.html
