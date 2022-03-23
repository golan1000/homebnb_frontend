import { ssrContextKey } from 'vue'
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
<<<<<<< HEAD
    //golan
    update(state, { stayToUpdate }) {
      console.log('mutate --- stay to update=', stayToUpdate)
      var foundIdx = state.stays.findIndex(
        (stay) => stay._id === stayToUpdate._id,
      )
      console.log('foundIdx=', foundIdx)
      state.stays.splice(foundIdx, 1, stayToUpdate)
=======

    //Tal
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
>>>>>>> 640f69093a831b2b86648fe0df786fef758caccb
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
<<<<<<< HEAD
        const stays = await stayService.query()
        commit({ type: 'setStays', stays })
      } catch (err) {
        console.log('err in stay-module in loadToys:', err)
      }
    },

    //golan
    async getById(context, { stayId }) {
      try {
        console.log('trying to find stayId=', stayId)
        var foundStay = await stayService.getById(stayId)

        console.log('foundStay action=', foundStay)

        return foundStay
      } catch (err) {
        console.log('error getById = ', err)
      }
    },

    //golan
    async update(context, { stayToUpdate }) {
      console.log('action ---- stay to update=', stayToUpdate)
      const updatedStay = await stayService.save(stayToUpdate)

      console.log('updated stay =', updatedStay)

      this.commit({ type: 'update', stayToUpdate })
=======
        const stays = await stayService.query(state.filterBy)
        commit({ type: 'setStays', stays })
      } catch (err) {
        console.log('err in stay-module in loadStays:', err)
      }
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy }) //check
      dispatch({ type: 'loadStays' })
>>>>>>> 640f69093a831b2b86648fe0df786fef758caccb
    },
  },
}
