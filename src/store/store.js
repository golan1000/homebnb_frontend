import { createStore } from 'vuex'
import { stayService } from '../services/stays-service-local'
import stayStore from './modules/stay-module'

export const store = createStore({
  strict: true,
  state: {
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    stayStore
  },
})
