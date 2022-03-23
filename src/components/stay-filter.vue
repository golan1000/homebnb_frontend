<template>
  <section class="filter-container">
    <div class="location">
      <label for="locations">Where are you going?</label>
      <input
        list="addresses"
        name="addresses"
        v-model="filterBy.address"
        @change="setfilter"
      />
      <datalist id="addresses">
        <option
          v-for="(addres, idx) in getAddresses"
          :key="idx"
          :value="addres"
        />
      </datalist>
    </div>
    <div class="guests">
      <h4>Add guests</h4>
      <div class="adults">
        Adults:
        <button>+</button>
        <span>{{ filterBy.guests.adults }}</span>
        <button>-</button>
      </div>
      <div class="children">
        Children:
        <button>+</button>
        <span>{{ filterBy.guests.children }}</span>
        <button>-</button>
      </div>
    </div>
    <button @click="setfilterParams">Search</button>
  </section>
</template>

<script>
export default {
  props: {
    // stays: {
    //   type: Array,
    //   // required: true,
    // },
  },
  created() {
    this.stays = [
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
  },
  data() {
    return {
      filterBy: {
        address: '',
        guests: {
          adults: 0,
          children: 0,
        },
      },
      stays: null,
    }
  },
  methods: {
    setfilter() {
      this.$emit('filter', this.filterBy)
    },
    setfilterParams() {
      this.$router.push(`/stay?address=${this.filterBy.address}`)
    },
  },
  computed: {
    getAddresses() {
      return this.stays.map(stay => stay.loc.address)
    },
    addGuest() {},
    removeGuest() {},
  },
}
</script>

<style>
.filter-container {
  width: 757px;
  height: 66px;
  border-radius: 5px;
}
</style>
