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
      @click="TogglePrice"
      class="explore-btn"
      :class="{ clicked: priceActive }"
    >
      Price
    </button>
    <button
      @click="ToggleType"
      class="explore-btn"
      :class="{ clicked: typeActive }"
    >
      Type of place
    </button>
    <button
      @click="ToggleWifi"
      class="explore-btn"
      :class="{ clicked: wifiActive }"
    >
      Wifi
    </button>
    <button
      @click="ToggleTv"
      class="explore-btn"
      :class="{ clicked: tvActive }"
    >
      TV
    </button>
    <button
      @click="ToggleKitchen"
      class="explore-btn"
      :class="{ clicked: kitchenActive }"
    >
      Kitchen
    </button>
    <button
      @click="ToggleAc"
      class="explore-btn"
      :class="{ clicked: acActive }"
    >
      AC
    </button>
    <button
      @click="ToggleSmoking"
      class="explore-btn"
      :class="{ clicked: smokingActive }"
    >
      Smoking Allowed
    </button>
    <button
      @click="TogglePets"
      class="explore-btn"
      :class="{ clicked: petsActive }"
    >
      Pets Allowed
    </button>
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
  data() {
    return {
      priceActive: false,
      typeActive: false,
      wifiActive: false,
      tvActive: false,
      kitchenActive: false,
      acActive: false,
      smokingActive: false,
      petsActive: false,
    };
  },
  created() {
    console.log(this.$route.query);
  },
  components: {
    stayPreview,
    expoloreBtns,
  },
  methods: {
    TogglePrice() {
      this.priceActive = !this.priceActive;
    },
    ToggleType() {
      this.typeActive = !this.typeActive;
    },
    ToggleWifi() {
      this.wifiActive = !this.wifiActive;
    },
    ToggleTv() {
      this.tvActive = !this.tvActive;
    },
    ToggleKitchen() {
      this.kitchenActive = !this.kitchenActive;
    },
    ToggleAc() {
      this.acActive = !this.acActive;
    },
    ToggleSmoking() {
      this.smokingActive = !this.smokingActive;
    },
    TogglePets() {
      this.petsActive = !this.petsActive;
    },
  },
  computed: {
    // bla() {
    //   const { address } = this.$route.query;
    //   console.log(this.stays);
    //   if (address) {
    //     return `${this.stays.length} stays in ${address}`;
    //   } else {
    //     return "Explore the world!";
    //   }
    // },
  },
};
</script>
