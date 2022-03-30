// import { userService } from '../../services/user-service-local.js'
import { userService } from '../../services/user.service.mongo'
export default {
  state: {
    loggedInUser: {},
  },
  getters: {
    // Tal
    loggedinUser({ loggedinUser }) {
      return loggedinUser
    },
  },
  mutations: {
    // Tal
    setLoggedinUser(state, { user }) {
      state.loggedinUser = user
    },
  },
  actions: {
    // Tal
    async login({ commit }, { userCred }) {
      try {
        const user = await userService.login(userCred)
        commit({ type: 'setLoggedinUser', user })
        return user
      } catch (err) {
        console.log('userStore: Error in login', err)
        throw err
      }
    },
    // Tal
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: 'setLoggedinUser', user: null })
      } catch (err) {
        console.log('userStore: Error in logout', err)
        throw err
      }
    },
    // Tal
    async signup({ commit }, { userCred }) {
      try {
        const user = await userService.signup(userCred)
        commit({ type: 'setLoggedinUser', user })
        return user
      } catch (err) {
        console.log('userStore: Error in signup', err)
        throw err
      }
    },
  },
}
