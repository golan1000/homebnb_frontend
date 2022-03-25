<template>
  <li class="stay-preview" @click="goToDetails">
    <carousel :slides="slides">
      <!-- <div class="stay-preview-img-con">
        <img class="stay-preview-img" :src="stay.imgUrls[0]" alt="" />
      </div> -->
    </carousel>
    <div class="stay-preview-content">
      <div class="stay-preview-content-reviews">
        <img class="img-star" src="../assets/star.png" alt="" />
        <p class="reviews-rate">{{ getAvgRate }}&nbsp;</p>
        <p class="reviews-number">({{ stay.reviews.length }} Reviews)</p>
      </div>
      <div class="stay-preview-details">
        <p>{{ stay.type }}</p>
        <p>{{ stay.loc.address }}</p>
      </div>
      <div class="stay-preview-desc">
        <p>{{ stay.summary }}</p>
      </div>
      <div class="stay-preview-price">
        <p>
          <span class="stay-preview-price-span">{{
            $filters.currencyUSD(stay.price)
          }}</span>
          /night
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import carousel from "./carousel/carousel.vue";

export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  data() {
    return {
      slides: this.stay.imgUrls,
    };
  },
  created() {
    console.log(this.stay.imgUrls[0]);
  },
  components: {},
  methods: {
    goToDetails() {
      this.$router.push(`/stay/${this.stay._id}`);
    },
  },
  computed: {
    getAvgRate() {
      const sumRates = this.stay.reviews.reduce(
        (previousValue, currentValue) => previousValue + currentValue.rate,
        0
      );
      return sumRates / this.stay.reviews.length;
    },
  },
  components: {
    carousel, 
  },
};
</script>