import { stayService } from '../../services/stays-service-local.js'

export default {
  state: {
    stays: null,
  },
  getters: {
    getStays(state) {
      return state.stays;
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        const stays = await stayService.query()
        commit({ type: 'setStays', stays });
      } catch (err) {
        console.log('err in stay-module in loadToys:', err);
      }
    },
  }
}
