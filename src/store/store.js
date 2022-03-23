import { createStore } from 'vuex'
// import {store1} from './store1.js'
// import {store2} from './store2.js'

//don't forget to do in console "npm i vuex@next"
export const store = createStore({
  strict: true,
  state: {
    stays: null,
    filterBy: {},
  },
  actions: {
    // Tal
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      // dispatch({ type: 'loadStays' })
    },
  },
  mutations: {
    //Tal
    setFilter(state, filterBy) {
      state.filterBy = filterBy
    },
  },
  getters: {
    getVar(state) {
      return state.var1
    },
  },
  modules: {
    // store1: store1,
    // store2: store2,
  },
})
