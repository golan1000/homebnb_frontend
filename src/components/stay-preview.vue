<template>
  <li class="stay-preview" @click="goToDetails">
    <div class="stay-preview-img-con">
      <img class="stay-preview-img" :src="stay.imgUrls[0]" alt="" />
    </div>
    <div class="stay-preview-content">
      <div class="stay-preview-content-reviews">
        <p>{{ getAvgRate }}</p>
        <p>{{ stay.reviews.length }}</p>
      </div>
      <div class="stay-preview-details">
        <p>{{ stay.type }}</p>
        <p>{{ stay.loc.address }}</p>
      </div>
      <div class="stay-preview-desc">
        <p>{{ stay.summary }}</p>
      </div>
      <div class="stay-preview-price">
        <p>{{ $filters.currencyUSD(stay.price) }} /night</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "stay-preview",
  props: {
    stay: Object,
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
};
</script>