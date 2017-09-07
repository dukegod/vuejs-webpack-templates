/**
 * stote.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    addU(state) {
      return  `${state.count}$`;
    },
  },
  mutations: {
    INCREMENT (state) {
      state.count += 1;
    },
    REDUCE (state) {
      state.count -= 1;
    },
  },
  actions: {
    increment (context) {
      context.commit('INCREMENT')
    },
    reduce (context) {
      context.commit('REDUCE')
    },
  }
})

export default store;
