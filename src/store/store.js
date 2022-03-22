import { createStore } from 'vuex'
// import {store1} from './store1.js'
// import {store2} from './store2.js'

//don't forget to do in console "npm i vuex@next"
export const store = createStore({
  strict: true,
  state: {
    var1: 'bla',
  },
  actions: {
    action1(context, { id }) {
      console.log('id from payload=', id)
      contex.commit({ type: 'mutate1', id })
    },
  },
  mutations: {
    mutate1(state, id) {
      console.log('id = ', id)
      state.var1 = id
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
