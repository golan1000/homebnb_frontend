// import { orderService } from '../../services/order-service'
import { orderService } from '../../services/order.service.async.js';

export default {
  state: {
    orders: [],
  },
  getters: {},
  mutations: {
    submitOrder(state, { order }) {
      console.log('mutate ---- submitOrder=', order);

      this.orders.push(order);
    },
  },
  actions: {
    // Tal converted to async
    async submitOrder(context, { order }) {
      console.log('action ---- submitOrder=', order);
      try {
        let orderId = await orderService.save(order);
        context.showMsg('Your order is pending...thank you');
        context.commit({ type: 'submitOrder', order });
      } catch (err) {
        context.showMsg(
          'We had an error while submitting your order, try again later'
        );
      }
    },
    showMsg(msg) {
      console.log(msg);
    },
  },
};

// Golan original
// submitOrder(context, { order }) {
//   console.log('action ---- submitOrder=', order)

//   let orderId = await orderService.save(order)
//   if (!orderId) {
//     context.showMsg(
//       'We had an error while submitting your order, try again later',
//     )
//     return
//   }
//   context.showMsg('Your order is pending...thank you')
//   context.commit({ type: 'submitOrder', order })
// },
// showMsg(msg) {
//   console.log(msg)
// },
