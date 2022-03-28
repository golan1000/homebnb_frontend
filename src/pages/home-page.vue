<template>
  <div class="main-container">
    <div class="filter-cont">
      <stay-filter></stay-filter>
    </div>
  </div>
  <!-- <el-button type="primary">Primary</el-button> -->
  <div class="destenations">
    <div class="item1" style="background-color: "></div>
    <div class="category-title" style="background-color: ">Popular Destinations</div>
    <div class="item3" style="background-color: "></div>
    <div class="item4" style="background-color: "></div>
    <div class="item5" style="background-color: ">
      <div class="dest-grid">
        <div class="img-con10" style="background-color: ">
          <img class="img1" src="../assets/img/dest/Dubai.jpg" />
          <div class="dest-title">Dubai</div>
        </div>
        <div class="img-con10" style="background-color: ">
          <img class="img1" src="../assets/img/dest/London.jpg" />
          <div class="dest-title">London</div>
        </div>
        <div class="img-con10" style="background-color: ">
          <img @click="setfilterParams" class="img1" src="../assets/img/dest/New York.jpg" />
          <div class="dest-title">New york</div>
        </div>
        <div class="img-con10" style="background-color: ">
          <img @click="setfilterParams" class="img1" src="../assets/img/dest/Sydney.jpg" />
          <div class="dest-title">Sydney</div>
        </div>
      </div>
    </div>
    <div class="item6" style="background-color: "></div>
    <div class="item7" style="background-color: "></div>
    <div class="category-title" style="background-color: ">Categories</div>
    <div class="item5" style="background-color: "></div>
    <div class="item7" style="background-color: #"></div>
    <div class="item5" style="background-color: #">
      <div class="dest-grid">
        <div class="img-con10" style="background-color: ">
          <img @click="goToExploreCategories" class="img1" src="../assets/img/category/butiqe.jpg" />
          <div class="dest-title">Boutique</div>
        </div>
        <div class="img-con10" style="background-color: ">
          <img @click="goToExploreCategories" class="img1" src="../assets/img/category/flat.jpg" />
          <div class="dest-title">Flat</div>
        </div>
        <div class="img-con10" style="background-color: ">
          <img @click="goToExploreCategories" class="img1" src="../assets/img/category/hotel.jpg" />
          <div class="dest-title">Hotel</div>
        </div>
        <div class="img-con10" style="background-color: ">
          <img @click="goToExploreCategories" class="img1" src="../assets/img/category/garden1.jpg" />
          <div class="dest-title">Garden</div>
        </div>
      </div>
    </div>
    <div class="item5" style="background-color: #"></div>
  </div>
  <div class="host-container">
    <label class="host-title">Become a host!</label>
    <br />
    <button class="host-btn" onclick="alert('bla')">Learn more</button>
    <!-- <el-button class="host-btn" color="gray" style="color: #ebebeb">Learn more</el-button> -->
    <div class="filter-cont"></div>
  </div>
</template>

<script>
import stayFilter from '../components/stay-filter.vue';
export default {
  props: [],
  emits: [],

  created() {
    console.log('userrrrr=', this.$store.getters.getUser);
  },
  components: {
    stayFilter,
  },
  data() {
    return {
      var1: 'bla',
    };
  },
  methods: {
    // Tal
    setfilterParams(imgSrc) {
      const regex = /[^/\\]+(?:jpg|jpeg|gif|png)/gi;
      var filename = imgSrc.target.src.match(regex).join('');
      const idx = filename.indexOf('.');
      var cityName = filename.substring(0, idx);

      this.$router.push(`/stay?address=${cityName.trim()}`);
    },
    // Tal
    // When we put real room type we can change.
    goToExploreCategories() {
      this.$router.push(`/stay`);
    },
  },
  computed: {
    getCom() {
      return 'blabla';
    },
  },
};
</script>

<style scoped></style>
