import { storageService } from './async-storage-service.js'

const KEY = 'orderDB'
import gOrders from '../../data/order.json'

_createOrders()
window.createOrders = _createOrders
window.query = query
window.getById = getById
window.remove = remove
window.save = save
window.getEmptyStay = getEmptyStay

export const orderService = {
  query,
  getById,
  remove,
  save,
  getEmptyStay,
}

// TODO: support paging and filtering and sorting
async function query(filterBy = {}) {
  try {
    const orders = JSON.parse(JSON.stringify(gOrders))
    // const orders = await storageService.query(KEY);
    console.log('orders', orders)
    return _filterOrders(filterBy, orders)
  } catch (err) {
    console.log('err', err)
    throw new Error('could not get toys')
  }
}
//Tal
function _filterOrders(filterBy, orders) {
  if (!filterBy.address) {
    console.log('no address')
    return orders
  }
  console.log('orders', orders)
  console.log('filterBy', filterBy)
  let filteredOrders = []
  const regex = new RegExp(filterBy.address, 'i')
  filteredOrders = orders.filter((order) => regex.test(order.address.city))
  return filteredOrders
}

function getById(id) {
  return storageService.get(KEY, id)
}

function remove(id) {
  return storageService.remove(KEY, id)
}

function save(order) {
  const prm = order._id
    ? storageService.put(KEY, order)
    : storageService.post(KEY, order)
  return prm
}

function getEmptyStay() {
  return {
    _id: '',
  }
}

function _save(orders) {}

async function _createOrders() {
  console.log('create orders runnnnn')
  var orders = (await query()) || []

  console.log('result = ', orders)
  if (!orders || orders.length === 0) {
    console.log('there are no orders!!!!')
    orders = gOrders

    console.log('new  ordersss=', orders)
    storageService._save(KEY, orders)
  }
  storageService._save(KEY, orders)
}
