import { orderService } from '../../services/order-service'
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

      let orderId = orderService.save(order)
      if (!orderId) {
        context.showMsg(
          'We had an error while submitting your order, try again later',
        )
        return
      }
      context.showMsg('Your order is pending...thank you')
      context.commit({ type: 'submitOrder', order })
    },
    showMsg(msg) {
      console.log(msg)
    },
  },
}
