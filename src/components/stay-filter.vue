<template>
  <section class="filter-container">
    <div class="location">
      <label for="locations">Where are you going?</label>
      <input
        list="addresses"
        name="addresses"
        v-model="filterBy.address"
        @change="setfilter"
        @input="setfilter"
      />
      {{ filterBy }}
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
        <button @click="addGuest" :value="filterBy.guests.adults">+</button>
        <span>{{ filterBy.guests.adults }}</span>
        <button>-</button>
      </div>
      <div class="children">
        Children:
        <button @click="addGuest" :value="filterBy.guests.children">+</button>
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
    stays: {
      type: Array,
      // required: true,
    },
  },
  created() {},
  data() {
    return {
      filterBy: {
        address: '',
        guests: {
          adults: 0,
          children: 0,
        },
      },
    }
  },
  methods: {
    addGuest(val) {
      console.log('val', val)
    },
    removeGuest() {},

    setfilter() {
      this.$emit('filter', JSON.parse(JSON.stringify(this.filterBy)))
    },
    setfilterParams() {
      this.$router.push(`/stay?address=${this.filterBy.address}`)
    },
  },
  computed: {
    getAddresses() {
      if (!this.stays) return
      return this.stays.map(stay => stay.loc.address)
    },
  },
}
</script>

<style scoped>
.filter-container {
  width: 757px;
  height: 66px;
  border-radius: 8px;
  background: red;
}
</style>
