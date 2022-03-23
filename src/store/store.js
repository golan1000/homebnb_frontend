import { createStore } from 'vuex'
import { stayService } from '../services/stays-service-local'
import stayStore from './modules/stay-module'

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
  getters: {},
  modules: {
    stayStore,
  },
})
