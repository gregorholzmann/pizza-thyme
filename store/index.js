import Vuex from 'vuex'
import axios from 'axios'
import { BASE_URL } from '~/assets/js/constants'

const createStore = () => {
  return new Vuex.Store({
    state: {
      pizzas: []
    },
    getters: {
      getPizzas(state) {
        return state.pizzas;
      }
    },
    mutations: {
      SET_PIZZAS(state, pizzas) {
        state.pizzas = pizzas
      }
    },
    actions: {
      async GET_PIZZAS({ commit }) {
        const DATA_URL = BASE_URL + '/data.json'
        const { data } = await axios.get(DATA_URL)
        commit('SET_PIZZAS', data)
      },
      SET_PIZZAS({ commit }, pizzas) {
        commit('SET_PIZZAS', pizzas)
      }
    }
  })
}

export default createStore
