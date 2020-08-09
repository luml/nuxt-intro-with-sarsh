import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    supply: 40,
  },
  actions: {
    dispense(context) {
      return context.commit('dispense')
    },

    restock(context) {
      return context.commit('restock')
    }
  },
  mutations: {
    dispense(state) {
      state.supply--
    },
    restock(state) {
      state.supply = 40
    }
  }
})


