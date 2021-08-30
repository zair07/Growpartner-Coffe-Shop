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
    strongCoffee(state, payload) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 10 * payload.num,
        coffee: state.stocks.coffee - 8 * payload.num,
        water: state.stocks.water - 4 * payload.num
      }
    },
    lightCoffee(state, payload) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 15 * payload.num,
        coffee: state.stocks.coffee - 4 * payload.num,
        water: state.stocks.water - 4 * payload.num
      }
    },
    strongTea(state, payload) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 10 * payload.num,
        tea: state.stocks.tea - 8 * payload.num,
        water: state.stocks.water - 8 * payload.num
      }
    },
    lightTea(state, payload) {
      state.stocks = {
        ...state.stocks,
        milk: state.stocks.milk - 15 * payload.num,
        tea: state.stocks.tea - 4 * payload.num,
        water: state.stocks.water - 4 * payload.num
      }
    },
    sugar(state, payload) {
      state.stocks = {
        ...state.stocks,
        sugar: state.stocks.sugar - 5 * payload.num
      }
    }
  },
  actions: {},
  modules: {}
})
