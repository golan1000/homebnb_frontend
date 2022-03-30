import { storageService } from './async-storage-service'

import { httpService } from './httpService'

const API_URL = 'stay'

window.stayQuery123 = query
// _createOrders()
var gOrders = [
  {
    _id: 'o1225',
    hostId: 'u101',
    createdAt: 9894989,
    buyer: {
      _id: 'u100',
      fullname: 'Bobi Brown',
    },
    totalPrice: 160,
    startDate: '2025/10/24',
    endDate: '2025/10/29',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u101',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/01/15',
    endDate: '2025/01/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h101',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/02/15',
    endDate: '2025/02/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/03/15',
    endDate: '2025/03/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/05/15',
    endDate: '2025/05/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
]
export const stayService = {
  query,
  getById,
  remove,
  save,
  getEmptyStay,
}

// TODO: support paging and filtering and sorting
async function query(filterBy = {}) {
  try {
    console.log('check query!!!!')
    const stays = await httpService.get(API_URL)
    console.log('orders from async mongo=', stays)
    return stays
  } catch (err) {
    console.log('err', err)
    throw new Error('could not get stays')
  }
}
//Tal
function _filterOrders(filterBy, orders) {
  console.log('order filter======================')
  if (!filterBy.address) {
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

function _save(orders) {
  storageService._save(KEY, orders)
}

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
}
