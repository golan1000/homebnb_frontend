<template>
  <section class="filter-container">
    <div class="location">
      <label for="locations input-container"
        >Location
        <input
          list="addresses"
          name="addresses"
          type="search"
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
      </label>
    </div>
    <div class="guests input-container">
      <h4>Add guests</h4>
    </div>

    <section class="guests-modal">
      <div class="adults">
        Adults:
        <button class="btn" @click="addGuest('adult')">+</button>

        <span>{{ filterBy.guests.adults }}</span>
        <button class="btn" @click="removeGuest('adult')">-</button>
      </div>

      <div class="children">
        Children:
        <button class="btn" @click="addGuest('child')">+</button>
        <span>{{ filterBy.guests.children }}</span>
        <button class="btn" @click="removeGuest('child')">-</button>
      </div>
    </section>

    <div class="search-btn-container input-container">
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
    </div>
  </section>
  <button @click="test1">test</button>
</template>

<script>
import { Search } from '@element-plus/icons-vue';
import { shallowRef } from 'vue';
export default {
  props: {},
  created() {
    this.stays = this.$store.getters.getStays;

    // const { address } = this.$route.query;
    // if (address) {
    //   console.log('the query address======', address);
    //   this.filterBy.address = address;
    // }
  },

  data() {
    return {
      stays: null,
      Search,
      filterBy: {
        address: '' || this.$route.query,
        guests: {
          adults: 0,
          children: 0,
        },
      },
    };
  },
  methods: {
    addGuest(guest) {
      console.log('val', guest);
      if (guest === 'adult') {
        this.filterBy.guests.adults++;
        this.setfilter();
      } else {
        this.filterBy.guests.children++;
        this.setfilter();
      }
    },
    removeGuest(guest) {
      if (guest === 'adult') {
        if (!this.filterBy.guests.adults) return;
        this.filterBy.guests.adults--;
        this.setfilter();
      } else {
        if (!this.filterBy.guests.children) return;
        this.filterBy.guests.children--;
        this.setfilter();
      }
    },

    setfilter() {
      this.$store.dispatch({
        type: 'filter',
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
    },
    setfilterParams() {
      this.$router.push(`/stay?address=${this.filterBy.address}`);
    },
    getFilters() {
      //  this.filterFromStore = this.$store.getters.getFilter
      // return null;
    },
    test1() {
      console.log('this.$route.params', this.$route.query);
    },
  },
  computed: {
    getAddresses() {
      if (!this.stays) return;
      return this.stays.map(stay => stay.loc.address);
    },
  },
};
</script>
<style scoped></style>
