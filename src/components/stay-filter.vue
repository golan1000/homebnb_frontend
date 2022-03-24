<template>
  <section class="filter-container">
    <div class="location">
      <label for="locations">Location</label>
      <input
        list="addresses"
        name="addresses"
        placeholder="Where are you going?"
        v-model="filterBy.address"
        @change="setfilter"
        @input="setfilter"
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
        <button @click="addGuest('adult')">+</button>
        <span>{{ filterBy.guests.adults }}</span>
        <button @click="removeGuest('adult')">-</button>
      </div>
      <br />

      <div class="children">
        Children:
        <button @click="addGuest('child')">+</button>
        <span>{{ filterBy.guests.children }}</span>
        <button @click="removeGuest('child')">-</button>
      </div>
    </div>
    <div class="block">
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
    </div>

    <div class="search-btn-container">
      <el-button
        :icon="Search"
        size="large"
        class="search-btn"
        @click="setfilterParams"
        color="#ff385c"
        style="color: white"
        circle
      >
      </el-button>
      <!-- <button class="search-btn" @click="setfilterParams">S</button> -->
    </div>
  </section>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
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
      Search,
      filterBy: {
        address: '',
        guests: {
          adults: 0,
          children: 0,
        },
        date: '',
      },
    }
  },
  methods: {
    addGuest(guest) {
      console.log('val', guest)
      if (guest === 'adult') {
        this.filterBy.guests.adults++
        this.setfilter()
      } else {
        this.filterBy.guests.children++
        this.setfilter()
      }
    },
    removeGuest(guest) {
      if (guest === 'adult') {
        if (!this.filterBy.guests.adults) return
        this.filterBy.guests.adults--
        this.setfilter()
      } else {
        if (!this.filterBy.guests.children) return
        this.filterBy.guests.children--
        this.setfilter()
      }
    },

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

<style scoped></style>
