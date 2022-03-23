import { storageService } from './async-storage-service.js'

const KEY = 'stayDB'

_createStays()
window.createStays = _createStays
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
    const stays = await storageService.query(KEY)
    console.log('stays', stays)
    return _filterStays(filterBy, stays)
  } catch (err) {
    console.log('err', err)
    throw new Error('could not get toys')
  }
}
//Tal
function _filterStays(filterBy, stays) {
  if (!filterBy.address) {
    console.log('no address')
    return stays
  }
  console.log('stays', stays)
  console.log('filterBy', filterBy)
  let filteredStays = []
  const regex = new RegExp(filterBy.address, 'i')
  filteredStays = stays.filter((stay) => regex.test(stay.loc.address))
  return filteredStays
}

function getById(id) {
  return storageService.get(KEY, id)
}

function remove(id) {
  return storageService.remove(KEY, id)
}

function save(stay) {
  const prm = stay._id
    ? storageService.put(KEY, stay)
    : storageService.post(KEY, stay)
  return prm
}

function getEmptyStay() {
  return {
    _id: '',
  }
}

function _save(stays) {}

async function _createStays() {
  console.log('create stays runnnnn')
  var stays = (await query()) || []

  console.log('result = ', stays)
  if (!stays || stays.length === 0) {
    stays = [
      {
        _id: '10006546',
        name: 'Ribeira Charming Duplex',
        type: 'House',
        imgUrls: [
          'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          'otherImg.jpg',
        ],
        price: 80.0,
        summary:
          'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
        capacity: 8,
        amenities: [
          'TV',
          'Wifi',
          'Kitchen',
          'Smoking allowed',
          'Pets allowed',
          'Cooking basics',
        ],
        host: {
          _id: '51399391',
          fullname: 'Davit Pok',
          imgUrl:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
          country: 'Portugal',
          countryCode: 'PT',
          address: 'Porto, Portugal',
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
        ],
        likedByUsers: ['mini-user'], // for user-wishlist : use $in
      },
      {
        _id: '10006542',
        name: 'Ribeira Charming Duplex',
        type: 'House',
        imgUrls: [
          'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          'otherImg.jpg',
        ],
        price: 80.0,
        summary:
          'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
        capacity: 8,
        amenities: [
          'TV',
          'Wifi',
          'Kitchen',
          'Smoking allowed',
          'Pets allowed',
          'Cooking basics',
        ],
        host: {
          _id: '51399391',
          fullname: 'Davit Pok',
          imgUrl:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
          country: 'Israel',
          countryCode: 'IL',
          address: 'Tel Aviv, Israel',
          lat: 32.109333,
          lng: 34.855499,
        },
        reviews: [
          {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
          {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 2,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
        ],
        likedByUsers: ['mini-user'], // for user-wishlist : use $in
      },
      {
        _id: '10006516',
        name: 'Ribeira Charming Duplex',
        type: 'House',
        imgUrls: [
          'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          'otherImg.jpg',
        ],
        price: 80.0,
        summary:
          'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
        capacity: 8,
        amenities: [
          'TV',
          'Wifi',
          'Kitchen',
          'Smoking allowed',
          'Pets allowed',
          'Cooking basics',
        ],
        host: {
          _id: '51399391',
          fullname: 'Davit Pok',
          imgUrl:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
          country: 'Portugal',
          countryCode: 'PT',
          address: 'Porto, Portugal',
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
        ],
        likedByUsers: ['mini-user'], // for user-wishlist : use $in
      },
      {
        _id: '10006516',
        name: 'Ribeira Charming Duplex',
        type: 'House',
        imgUrls: [
          'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          'otherImg.jpg',
        ],
        price: 80.0,
        summary:
          'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
        capacity: 8,
        amenities: [
          'TV',
          'Wifi',
          'Kitchen',
          'Smoking allowed',
          'Pets allowed',
          'Cooking basics',
        ],
        host: {
          _id: '51399391',
          fullname: 'Davit Pok',
          imgUrl:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
          country: 'Portugal',
          countryCode: 'PT',
          address: 'Porto, Portugal',
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
        ],
        likedByUsers: ['mini-user'], // for user-wishlist : use $in
      },
      {
        _id: '10006516',
        name: 'Ribeira Charming Duplex',
        type: 'House',
        imgUrls: [
          'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          'otherImg.jpg',
        ],
        price: 80.0,
        summary:
          'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
        capacity: 8,
        amenities: [
          'TV',
          'Wifi',
          'Kitchen',
          'Smoking allowed',
          'Pets allowed',
          'Cooking basics',
        ],
        host: {
          _id: '51399391',
          fullname: 'Davit Pok',
          imgUrl:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
          country: 'Portugal',
          countryCode: 'PT',
          address: 'Porto, Portugal',
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
        ],
        likedByUsers: ['mini-user'], // for user-wishlist : use $in
      },
      {
        _id: '10006516',
        name: 'Ribeira Charming Duplex',
        type: 'House',
        imgUrls: [
          'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          'otherImg.jpg',
        ],
        price: 80.0,
        summary:
          'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
        capacity: 8,
        amenities: [
          'TV',
          'Wifi',
          'Kitchen',
          'Smoking allowed',
          'Pets allowed',
          'Cooking basics',
        ],
        host: {
          _id: '51399391',
          fullname: 'Davit Pok',
          imgUrl:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
          country: 'Portugal',
          countryCode: 'PT',
          address: 'Porto, Portugal',
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
        ],
        likedByUsers: ['mini-user'], // for user-wishlist : use $in
      },
    ]
    storageService._save(KEY, stays)
  }
}
