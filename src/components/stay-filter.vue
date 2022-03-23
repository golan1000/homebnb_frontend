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
    <div class="search-btn-container">
      <el-button
        :icon="Search"
        size="large"
        class="search-btn"
        @click="setfilterParams"
        color="#ff385c"
        style="color: white"
        circle
        >Search
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

<style scoped></style>
