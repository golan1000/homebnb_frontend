// import { ssrContextKey } from 'vue'
// import { stayService } from '../../services/stays-service-local.js';
import { stayService } from '../../services/stay.service.mongo'
export default {
  state: {
    stays: [], //need to be empty array important
    filteredStays: [],
    filterBy: {
      address: '',
      guests: {
        adults: 0,
        children: 0,
      },
    },
    exploreFilter: {
      amenities: [],
      roomType: [],
      priceRange: {
        min: -Infinity,
        max: Infinity,
      },
    },
    currPage: 'homePage',
    staysForBackOffice: [],
  },
  getters: {
    getStaysAll(state) {
      return state.stays
    },
    getStays(state) {
      return state.filteredStays
      // return state.stays
    },

    //Tal
    getFilter(state) {
      return state.filterBy
    },
    getCurrPage(state) {
      return state.currPage
    },
    getStaysForBackOffice(state) {
      return state.staysForBackOffice
    },
    // Tal
    getExploreFilter(state) {
      return state.exploreFilter
    },
  },
  mutations: {
    updateFilteredStays(state) {
      if (state.filterBy.address === '')
        state.filteredStays = JSON.parse(JSON.stringify(state.stays))

      let regTest = new RegExp(state.filterBy.address, 'i')

      let currFilteredStays = state.stays.filter((currStay) => {
        if (currStay.address && currStay.address.city) {
          if (regTest.test(currStay.address.city) === true)
            console.log('found city=', currStay.address)

          return regTest.test(currStay.address.city)
        } else {
          console.log('stay with no address=', currStay)
          return false
        }
      })
    },
    setStays(state, { stays }) {
      state.stays = stays
      state.filteredStays = stays
    },
    //golan
    update(state, { stayToUpdate }) {
      console.log('mutate --- stay to update=', stayToUpdate)
      var foundIdx = state.stays.findIndex(
        (stay) => stay._id === stayToUpdate._id,
      )
      console.log('foundIdx=', foundIdx)
      state.stays.splice(foundIdx, 1, stayToUpdate)
    },
    //Tal
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    setCurrPage(state, { page }) {
      state.currPage = page
    },
    setStaysForBackOffice(state, { user }) {
      console.log(state.stays)
      console.log(user)
      // Barak original
      state.staysForBackOffice = state.stays.filter(
        (stay) => user._id === stay.host._id,
      )

      // Tal fixed temp
      // state.staysForBackOffice = state.stays.slice(0, 4);
      console.log(state.staysForBackOffice)
    },
    // Tal
    setExploreFilter(state, { exploreFilter }) {
      state.exploreFilter = JSON.parse(JSON.stringify(exploreFilter))
      // console.log('example from store1 ', exploreFilter);
      // console.log('example from store2', state.exploreFilter);
    },
    updateFilteredStaysLocal(state) {
      let foundStays = state.stays
      if (
        state.exploreFilter.priceRange.min &&
        state.exploreFilter.priceRange.max
      ) {
        let priceMin = state.exploreFilter.priceRange.min
        let priceMax = state.exploreFilter.priceRange.max

        foundStays = foundStays.filter((stay) => {
          if (stay.price >= priceMin && stay.price <= priceMax) {
            return true
          }
        })
      }

      if (state.exploreFilter.roomType.length > 0) {
        console.log('filter by room type!!!!')
        let roomTypes = state.exploreFilter.roomType
        // roomType = roomTypes.map((type) => type.toLowerCase())
        console.log('room types to check=', roomTypes)
        foundStays = foundStays.filter((stay) => {
          // return roomTypes.includes(stay.roomType.toLowerCase()
          return stay.roomType.toLowerCase().search(roomTypes) !== -1
        })
      }

      let filterAmenities = state.exploreFilter.amenities
      if (filterAmenities.length > 0) {
        foundStays = foundStays.filter((currStay) => {
          let foundTotalItems = currStay.amenities.filter((currAmenity) => {
            return filterAmenities.includes(currAmenity)
          })

          return foundTotalItems.length === filterAmenities.length
        })
      }

      // console.log('found total=', found)
      console.log('foundStays=', foundStays)
      state.filteredStays = foundStays
      // ExploreBtnsFilter: {
      //   amenities: [],
      //   roomType: [],
      // priceRange
      // },
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        // commit({ type: 'setStays', stays: [] });
        const stays = await stayService.query(state.filterBy)
        commit({ type: 'setStays', stays })
        // commit({ type: 'updateFilteredStays' })
        console.log('stays from loadstays=', stays)
        commit({ type: 'updateFilteredStaysLocal' })

        return state.filteredStays
      } catch (err) {
        console.log('err in stay-module in loadToys:', err)
      }
    },

    //golan
    async getById(context, { stayId }) {
      try {
        console.log('trying to find stayId=', stayId)
        var foundStay = await stayService.getById(stayId)

        // console.log('foundStay action=', foundStay);

        return foundStay
      } catch (err) {
        console.log('error getById = ', err)
      }
    },

    //golan
    async update(context, { stayToUpdate }) {
      console.log('action ---- stay to update=', stayToUpdate)
      try {
        const updatedStay = await stayService.save(stayToUpdate)
        console.log('updated stay =', updatedStay)
        this.commit({ type: 'update', stayToUpdate })
      } catch (err) {
        console.log('err in update stay:', err)
      }
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy }) //check
      dispatch({ type: 'loadStays' })
      commit({ type: 'updateFilteredStaysLocal' })
      // commit({ type: 'updateFilteredStays' })
    },
    async loadStaysForBackOffice({ commit, state }, { user }) {
      // console.log(state.stays);
      // console.log(user);
      try {
        commit({ type: 'setStaysForBackOffice', user })
      } catch (err) {
        console.log('err in stay-module loadStaysForBackOffice:', err)
      }
    },
    setExploreFilter(context, { exploreFilter }) {
      console.log('setExploreFilter actionnnn')
      context.commit({ type: 'setExploreFilter', exploreFilter })
      context.commit({ type: 'updateFilteredStaysLocal' })
    },
  },
}
