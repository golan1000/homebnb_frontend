<template>
  <section class="filter-container">
    <div class="location input-container">
      <label for="locations"
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
      </label>
      <datalist id="addresses">
        <option
          v-for="(addres, idx) in getAddresses"
          :key="idx"
          :value="addres"
        />
      </datalist>
    </div>
    <div class="trip-dates">
      <div class="check-in input-container">
        <label
          >Check-in <input type="text" placeholder="Add dates" disabled
        /></label>
      </div>
      <div class="check-out input-container">
        <label
          >Check-out <input type="text" placeholder="Add dates" disabled
        /></label>
      </div>
    </div>
    <div class="input-container">
      <div class="guest-flex">
        <div
          class="guest-flex-column"
          @click="IsGuestModalOpen = !IsGuestModalOpen"
        >
          <label>Guests</label>
          <input placeholder="Add guests" disabled />
        </div>

        <button class="search-btn" @click="setfilterParams">
          <img src="../assets/search_white_18dp.svg" alt="search Icon" />
        </button>
      </div>
    </div>
    <section class="guests-modal" v-if="IsGuestModalOpen">
      <div
        class="close-modal-btn"
        title="Close the modal"
        @click="IsGuestModalOpen = false"
      >
        X
      </div>
      <div class="adults guest-flex">
        <div class="modal-txt">
          Adults:
          <input type="text" placeholder="Ages 13 or above" disabled />
          <!-- <span class="span-input"> </span> -->
        </div>
        <div class="modal-btn">
          <button class="btn" @click="addGuest('adult')">+</button>
          <span>{{ filterBy.guests.adults }}</span>
          <button class="btn" @click="removeGuest('adult')">-</button>
        </div>
      </div>

      <div class="children guest-flex">
        <div class="modal-txt">
          Children:
          <input type="text" placeholder="Ages 2-12" disabled />
          <!-- <span class="span-input">Ages 2-12</span> -->
        </div>
        <div class="modal-btn">
          <button class="btn" @click="addGuest('child')">+</button>
          <span>{{ filterBy.guests.children }}</span>
          <button class="btn" @click="removeGuest('child')">-</button>
        </div>
      </div>
    </section>

    <!-- <div class="search-btn-container input-container"> -->
    <!-- <el-button :icon="Search" size="large" class="search-btn" @click="setfilterParams" color="#ff385c" style="color: white" circle> </el-button> -->
    <!-- </div> -->
  </section>
</template>

<script>
import { Search } from '@element-plus/icons-vue';
import { shallowRef } from 'vue';
export default {
  props: {},
  created() {
    this.stays = this.$store.getters.getStays;

    const { address } = this.$route.query;
    if (address) {
      this.filterBy.address = address;
    }
    this.getFilters();
  },

  data() {
    return {
      stays: null,
      Search,
      filterBy: {
        address: '',
        guests: {
          adults: 0,
          children: 0,
        },
      },
      IsGuestModalOpen: false,
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
      const filterFromStore = this.$store.getters.getFilter;
      if (!filterFromStore) console.log('no filter in store....');
      this.filterBy = JSON.parse(JSON.stringify(filterFromStore));
    },
  },
  computed: {
    getAddresses() {
      if (!this.stays) return;
      return this.stays.map(stay => stay.loc.address);
    },
    // Wanted to display the sum of the guest and it does not work.
    sumOfGuests() {
      if (this.guests.adults + this.guests.children === 0) return 'Add guests';
      else return `Guests:${this.guests.adults + this.guests.children}`;
    },
  },
};
</script>
<style scoped></style>
