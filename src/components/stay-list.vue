<template>
  <h4 v-if="stays.length" class="stay-list-title">
    {{
      $route.query.address
        ? `${stays.length} stays in ${$route.query.address}`
        : 'Explore the world!'
    }}
  </h4>
  <h4 v-else>No match found</h4>
  <div v-if="!stays">
    <div>Loading</div>
    <div><img src="../assets/img/loading.gif" alt="Loading" /></div>
  </div>

  <!-- <h4 v-if="$route.query.address" class="stay-list-title">
    {{ stays.length }} stays in
    {{ stays[0].address.city }} 
  </h4>
  <h4 v-else-if="!stays.length">Explore the world!</h4>
  <h4 v-else>No match found</h4> -->
  <br />
  <!-- Buttons for additional filtters -->
  <!-- <expolore-btns class="explore-btns" /> -->
  <section class="explore-btns">
    <button
      @click="togglePrice"
      class="explore-btn"
      :class="{ clicked: isPriceActive }"
    >
      Price
    </button>
    <button
      @click="toggleType"
      class="explore-btn"
      :class="{ clicked: isTypeActive }"
    >
      Type of place
    </button>
    <button
      @click="toggleWifi"
      class="explore-btn"
      :class="{ clicked: isWifiActive }"
    >
      Wifi
    </button>
    <button
      @click="toggleTv"
      class="explore-btn"
      :class="{ clicked: isTvActive }"
    >
      TV
    </button>
    <button
      @click="toggleKitchen"
      class="explore-btn"
      :class="{ clicked: isKitchenActive }"
    >
      Kitchen
    </button>
    <button
      @click="toggleAc"
      class="explore-btn"
      :class="{ clicked: isAcActive }"
    >
      AC
    </button>
    <button
      @click="toggleSmoking"
      class="explore-btn"
      :class="{ clicked: isSmokingAllowedActive }"
    >
      Smoking allowed
    </button>
    <button
      @click="togglePets"
      class="explore-btn"
      :class="{ clicked: isPetsAllowedActive }"
    >
      Pets allowed
    </button>

    <div v-if="isPriceActive" class="price-modal">
      <h3>Price</h3>
      <div class="range-nput">
        <input
          type="number"
          placeholder="minimum price"
          v-model="priceRange.min"
        />
        <input
          type="number"
          placeholder="maximum price"
          v-model="priceRange.max"
        />
      </div>
      <div class="range-buttons">
        <button @click="setPrice">Save</button>
        <button @click="getPriceRange">Clear</button>
      </div>
    </div>
    <div v-if="isTypeActive" class="type-room-modal">
      <h3>Room type</h3>
      <div class="room-options">
        <select v-model="ExploreBtnsFilter.roomType">
          <option value="ENITRE PLACE">entire place</option>
          <option value="PRIVATE ROOM">privare room</option>
        </select>
      </div>
      <div class="room-type-buttons">
        <button @click="setRoom">Save</button>
        <button @click="ExploreBtnsFilter.roomType = []">Clear</button>
      </div>
    </div>
  </section>
  <ul class="stay-list">
    <stay-preview v-for="stay in stays" :stay="stay" :key="stay._id" />
  </ul>
</template>

<script>
import stayPreview from './stay-preview.vue';
import expoloreBtns from './explore-btns.vue';

export default {
  props: {
    stays: {
      type: Array,
      required: true,
    },
  },
  emits: ['btnsFilter'],
  data() {
    return {
      priceRange: { min: 0, max: 100000 },

      isPriceActive: false,
      isTypeActive: false,
      // Amenities
      isWifiActive: false,
      isTvActive: false,
      isKitchenActive: false,
      isAcActive: false,
      isPetsAllowedActive: false,
      isSmokingAllowedActive: false,
      ExploreBtnsFilter: {
        amenities: [],
        roomType: [],
        priceRange: {},
      },
    };
  },
  created() {
    console.log(this.$route.query);
    this.getPriceRange();
  },
  components: {
    stayPreview,
    expoloreBtns,
  },
  methods: {
    togglePrice() {
      this.isPriceActive = !this.isPriceActive;
      this.isTypeActive = false;
    },
    toggleType() {
      this.isTypeActive = !this.isTypeActive;
      this.isPriceActive = false;
    },

    toggleWifi() {
      this.isWifiActive = !this.isWifiActive;
      this.setAmenities('Wifi', this.isWifiActive);
    },
    toggleTv() {
      this.isTvActive = !this.isTvActive;
      this.setAmenities('TV', this.isTvActive);
    },
    toggleKitchen() {
      this.isKitchenActive = !this.isKitchenActive;
      this.setAmenities('Kitchen', this.isKitchenActive);
    },
    toggleAc() {
      this.isAcActive = !this.isAcActive;
      this.setAmenities('Air conditioning', this.isAcActive);
    },
    toggleSmoking() {
      this.isSmokingAllowedActive = !this.isSmokingAllowedActive;
      this.setAmenities('Smoking allowed', this.isSmokingAllowedActive);
    },
    togglePets() {
      this.isPetsAllowedActive = !this.isPetsAllowedActive;
      this.setAmenities('Pets allowed', this.isPetsAllowedActive);
    },

    setAmenities(name, btnStatus) {
      if (btnStatus) {
        if (this.ExploreBtnsFilter.amenities.includes(name)) return;
        this.ExploreBtnsFilter.amenities.push(name);
      } else {
        const idx = this.ExploreBtnsFilter.amenities.findIndex(
          amenity => amenity === name
        );
        this.ExploreBtnsFilter.amenities.splice(idx, 1);
      }
      this.$emit('btnsFilter', this.ExploreBtnsFilter);
    },

    getPriceRange() {
      const prices = this.stays.map(stay => stay.price);
      this.priceRange.min = Math.min(...prices);
      console.log(' priceRange.min', this.priceRange.min);
      this.priceRange.max = Math.max(...prices);
      console.log(' priceRange.max', this.priceRange.max);
    },
    setPrice() {
      this.ExploreBtnsFilter.priceRange.max = this.priceRange.max;
      this.ExploreBtnsFilter.priceRange.min = this.priceRange.min;
      console.log('example', this.ExploreBtnsFilter.priceRange);
      this.$emit('btnsFilter', this.ExploreBtnsFilter);
    },
    setRoom() {
      this.$emit('btnsFilter', this.ExploreBtnsFilter);
    },
  },
};

// computed: {
// bla() {
//   const { address } = this.$route.query;
//   console.log(this.stays);
//   if (address) {
//     return `${this.stays.length} stays in ${address}`;
//   } else {
//     return "Explore the world!";
//   }
// },
// },
</script>
