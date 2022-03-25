<template>
  <div class="main-container">
    <div class="filter-cont">
      <stay-filter></stay-filter>
    </div>
  </div>
  <el-button type="primary">Primary</el-button>
  <div class="destenations">
    <div class="item1" style="background-color: blue">1</div>
    <div class="category-title" style="background-color: gray">Popular Destinations</div>
    <div class="item3" style="background-color: red">3</div>
    <div class="item4" style="background-color: purple">4</div>
    <div class="item5" style="background-color: white">
      <div class="dest-grid">
        <div class="img-con10" style="background-color: grey">
          <img class="img1" src="../assets/img/dest/Dubai.jpg" />
          <div class="dest-title">Dubai</div>
        </div>
        <div class="img-con10" style="background-color: lightgreen">
          <img class="img1" src="../assets/img/dest/London.jpg" />
          <div class="dest-title">London</div>
        </div>
        <div class="img-con10" style="background-color: red">
          <img class="img1" src="../assets/img/dest/NY.jpg" />
          <div class="dest-title">New york</div>
        </div>
        <div class="img-con10" style="background-color: yellow">
          <img class="img1" src="../assets/img/dest/Sydny.jpg" />
          <div class="dest-title">Sydney</div>
        </div>
      </div>
    </div>
    <div class="item6" style="background-color: grey">6</div>
    <div class="item7" style="background-color: pink">7</div>
    <div class="category-title" style="background-color: lightcoral">Top Rated</div>
    <div class="item5" style="background-color: lightgreen">9</div>
    <div class="item7" style="background-color: #66f542">12</div>
    <div class="item5" style="background-color: #79a542">
      <div class="dest-grid">
        <div class="img-con10" style="background-color: grey">
          <img class="img1" src="../assets/img/category/butiqe.jpg" />
          <div class="dest-title">Dubai</div>
        </div>
        <div class="img-con10" style="background-color: lightgreen">
          <img class="img1" src="../assets/img/category/flat.jpg" />
          <div class="dest-title">London</div>
        </div>
        <div class="img-con10" style="background-color: red">
          <img class="img1" src="../assets/img/category/hotel.jpg" />
          <div class="dest-title">New york</div>
        </div>
        <div class="img-con10" style="background-color: yellow">
          <img class="img1" src="../assets/img/category/garden1.jpg" />
          <div class="dest-title">Sydney</div>
        </div>
      </div>
    </div>
    <div class="item5" style="background-color: #99aa42">40</div>
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
    doThing() {
      this.var1 = 'bla';
      return 'blabla';
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
