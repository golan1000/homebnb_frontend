// import { orderService } from '../../services/order.service.async';
import { orderService } from '../../services/order.service.mongo';
export default {
  state: {
    orders: [],
  },
  getters: {
    //Barak
    getOrders(state) {
      console.log(state.orders);
      return state.orders;
    },
  },
  mutations: {
    submitOrder(state, { order }) {
      console.log('mutate ---- submitOrder=', order);

      state.orders.push(order);
    },
    //Barak
    setOrders(state, { orders, user }) {
      console.log(user);
      console.log(state.orders);
      console.log(orders);
      state.orders = orders.filter((order) => user._id === order.hostId);
      console.log(state.orders);
    },
  },
  actions: {
    // Tal converted to async
    async submitOrder(context, { order }) {
      console.log('action ---- submitOrder=', order);
      try {
        let orderId = await orderService.save(order);
        console.log('orderId=', orderId);
        // context.showMsg('Your order is pending...thank you')
        context.commit({ type: 'submitOrder', order });
      } catch (err) {
        console.log('error=', err);
        // context.showMsg(
        //   'We had an error while submitting your order, try again later',
        // )
      }
    },
    showMsg(msg) {
      console.log(msg);
    },
    //Barak
    async loadOrders(context, { user }) {
      try {
        const orders = await orderService.query();
        console.log(orders);
        context.commit('setOrders', { orders, user });
      } catch (err) {
        console.log('err in order-module in loadOrders:', err);
      }
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
