import { stayService } from '../../services/stays-service-local.js'

export default {
  state: {
    stays: null,
    filterBy: {
      address: '',
      guests: {
        adults: 0,
        children: 0,
      },
    },
  },
  getters: {
    getStays(state) {
      return state.stays
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
    },

    //Tal
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        const stays = await stayService.query(state.filterBy)
        commit({ type: 'setStays', stays })
      } catch (err) {
        console.log('err in stay-module in loadStays:', err)
      }
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy }) //check
      dispatch({ type: 'loadStays' })
    },
  },
}
