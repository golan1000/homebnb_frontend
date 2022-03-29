export default {
  state: {
    orders: [],
  },
  getters: {},
  mutations: {
    submitOrder(state, { order }) {
      console.log('mutate ---- submitOrder=', order)

      this.orders.push(order)
    },
  },
  actions: {
    submitOrder(context, { order }) {
      console.log('action ---- submitOrder=', order)
      context.commit({ type: 'submitOrder', order })
    },
  },
}
