import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: {
      water: 1000,
      milk: 1000,
      tea: 200,
      coffee: 200,
      sugar: 500,
    }
  },
  mutations: {
    refillShop(state) {
      let obj = {
        water: 1000,
        milk: 1000,
        tea: 200,
        coffee: 200,
        sugar: 500
      }
      state.stocks = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
