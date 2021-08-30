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
    },
    strongCoffee(state) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 10,
        coffee: state.stocks.coffee - 8,
        water: state.stocks.water - 4
      }
    },
    lightCoffee(state) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 15,
        coffee: state.stocks.coffee - 4,
        water: state.stocks.water - 4
      }
    },
    strongTea(state) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 10,
        tea: state.stocks.tea - 8,
        water: state.stocks.water - 8
      }
    },
    lightTea(state) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 15,
        tea: state.stocks.tea - 4,
        water: state.stocks.water - 4
      }
    },
    sugar(state) {
      state.stocks = {
        ...state.stocks,
        sugar: state.stocks.sugar - 5
      }
    }
  },
  actions: {},
  modules: {}
})
