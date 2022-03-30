import { createStore } from 'vuex'
// import { stayService } from '../services/stays-service-local'
import stayStore from './modules/stay-module'
import userStore from './modules/user-module'
import orderStore from './modules/order-module'

import { stayService } from '../services/stay.service.mongo'
import { userService } from '../services/user.service.mongo'
import { orderService } from '../services/order.service.mongo'

export const store = createStore({
  strict: true,
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    stayStore,
    userStore,
    orderStore,
  },
})
