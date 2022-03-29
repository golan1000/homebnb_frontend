<template>
  <section class="filter-container">
    <div class="location-input-container" @click="closeAllModals">
      <div class="location-input-div">
        <label for="locations" class="location-input-label"
          >Location
          <input
            class="location-input"
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
    </div>
    <div class="stay-filter-border"></div>
    <div class="trip-dates-container" @click="openModal('calendar')">
      <div class="check-in-input-container">
        <div class="check-in-input-div">
          <label class="date-input-label"
            >Check-in <input type="text" placeholder="Add dates" disabled
          /></label>
        </div>
      </div>
      <div class="stay-filter-border"></div>
      <div class="check-out-input-container">
        <div class="check-out-input-div">
          <label class="date-input-label"
            >Check-out <input type="text" placeholder="Add dates" disabled
          /></label>
        </div>
      </div>
    </div>
    <div class="stay-filter-border"></div>
    <div class="guest-search-container">
      <div class="guest-container" @click="openModal('guest')">
        <label class="guest-container-label"
          >Guests
          <input :placeholder="sumOfGuests" disabled />
        </label>
      </div>
      <div class="search-container">
        <button class="search-btn" @click="setfilterParams">
          <img src="../assets/svgexport-3.svg" alt="search Icon" />
        </button>
      </div>
    </div>
    <section class="guests-modal" v-if="isGuestModalOpen">
      <div
        class="close-modal-btn"
        title="Close the modal"
        @click="isGuestModalOpen = false"
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

    <div class="modal-date-picker" v-if="isCalanderModalOpen">
      <div
        class="close-modal-btn"
        title="Close the modal"
        @click="isCalanderModalOpen = false"
      >
        X
      </div>
      <v-date-picker
        v-model="filterBy.range"
        color="green"
        is-range
        rows="1"
        columns="2"
        :mask="mask.data"
        :min-date="new Date()"
      />
    </div>

    <!-- <div class="search-btn-container input-container"> -->
    <!-- <el-button :icon="Search" size="large" class="search-btn" @click="setfilterParams" color="#ff385c" style="color: white" circle> </el-button> -->
    <!-- </div> -->
  </section>
</template>

<script>
import { Search } from '@element-plus/icons-vue';
import { useRefHistory } from '@vueuse/core';
import { shallowRef } from 'vue';
export default {
  props: [],
  created() {
    const { address } = this.$route.query;
    if (address) {
      this.filterBy.address = address;
    }
    this.setfilter();
    // this.getFilters();
  },

  data() {
    return {
      // stays: null,
      Search,
      filterBy: {
        address: '',
        guests: {
          adults: 0,
          children: 0,
        },
        range: {
          start: new Date(),
          end: new Date(),
        },
      },
      mask: {
        data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
      },

      isGuestModalOpen: false,
      isCalanderModalOpen: false,
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
      if (!filterFromStore)
        this.filterBy = JSON.parse(JSON.stringify(filterFromStore));
    },
    openModal(modalType) {
      if (modalType === 'calendar') {
        this.isCalanderModalOpen = true;
        this.isGuestModalOpen = false;
      } else {
        this.isGuestModalOpen = true;
        this.isCalanderModalOpen = false;
      }
    },
    closeAllModals() {
      this.isGuestModalOpen = false;
      this.isCalanderModalOpen = false;
    },
  },
  computed: {
    getAddresses() {
      const addresses = [];
      this.$store.getters.getStays.map(stay => {
        if (!addresses.includes(stay.address.city))
          addresses.push(stay.address.city);
      });
      return addresses;
    },

    sumOfGuests() {
      const sum = this.filterBy.guests.adults + this.filterBy.guests.children;
      if (!sum) return 'Add guests';
      else {
        return `Guests: ${sum}`;
      }
    },
    dateForDisplay(timestamp) {
      console.log('timestamp', timestamp);
      return timestamp.toDateString().split(' ').slice(1, 3).join('/');
    },
  },
};
</script>
<style scoped></style>
