<template>
  <li class="stay-preview" @click="goToDetails">
    <!-- <div class="stay-preview-img-con">
      <img class="stay-preview-img" :src="stay.imgUrls[0]" alt="" />
    </div> -->
    <div class="block">
      <el-carousel
        :autoplay="false"
        :loop="false"
        :trigger="'click'"
        height="262.25px"
      >
        <el-carousel-item
          v-for="(imgUrl, index) in stay.imgUrls"
          :key="`img-${index}`"
        >
          <img class="stay-preview-img" :src="imgUrl" alt="" />
        </el-carousel-item>
        <div class="like-stay">
          <img class="like-stay-img" src="../assets/like.svg" alt="" />
        </div>
      </el-carousel>
    </div>
    <div class="stay-preview-content">
      <div class="stay-preview-content-reviews">
        <img class="img-star" src="../assets/star.png" alt="" />
        <p class="reviews-rate">{{ getAvgRate }}&nbsp;</p>
        <p class="reviews-number">({{ stay.reviews.length }} Reviews)</p>
      </div>
      <div class="stay-preview-details">
        <p>{{ stay.type }}</p>
        <span class="stay-preview-details-span">&nbsp;•&nbsp;</span>
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
export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.stay.imgUrls[0]);
    console.log(this.stay.imgUrls[1]);
  },
  components: {},
  methods: {
    goToDetails() {
      this.$router.push(`/stay/${this.stay._id}`);
    },
    getImgUrl(file) {
      const imgUrl = new URL(`../assets/images/${file}`, import.meta.url);
      return imgUrl;
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
  components: {},
};
</script>