<template>
  <div class="main-container">
    <!-- <img src="../assets/img/hero.jpeg" alt="hero.png" /> -->
    <div class="filter-cont">
      <stay-filter></stay-filter>
    </div>
  </div>
  <div class="destenations">
    <div class="item1" style="background-color: blue">1</div>
    <div class="item2" style="background-color: gray">title</div>
    <div class="item3" style="background-color: red">3</div>
    <div class="item4" style="background-color: purple">4</div>
    <div class="item5" style="background-color: white">
      <div class="imgs-con">
        <div class="dest-grid">
          <div class="img-con10">
            <img class="img1" src="../assets/img/dest/Dubai.jpg" />
          </div>
          <div class="img-con10">
            <img class="img1" src="../assets/img/dest/London.jpg" />
          </div>
          <div class="img-con10">
            <img class="img1" src="../assets/img/dest/NY.jpg" />
          </div>
          <div class="img-con10">
            <img class="img1" src="../assets/img/dest/Sydny.jpg" />
          </div>
          <div class="dest-title">Dubai</div>
          <div class="dest-title">London</div>
          <div class="dest-title">New york</div>
          <div class="dest-title">Sydney</div>
        </div>
      </div>
    </div>
    <div class="item6" style="background-color: grey">6</div>
    <div class="item7" style="background-color: pink">7</div>
    <div class="item5" style="background-color: lightcoral">title</div>
    <div class="item5" style="background-color: lightgreen">9</div>
    <div class="item7" style="background-color: #66f542">12</div>
    <div class="item5" style="background-color: #79a542"></div>
    <div class="item5" style="background-color: #99aa42">40</div>
  </div>

  <div class="div-test">
    <div class="test-grid">
      <div class="test-item" style="background-color: blue">test1</div>
      <div class="test-item" style="background-color: white">test2</div>
      <div class="test-item" style="background-color: red">test3</div>
      <div class="test-item" style="background-color: purple">test4</div>
      <div class="test-item" style="background-color: blue">test1</div>
      <div class="test-item" style="background-color: white">test2</div>
      <div class="test-item" style="background-color: red">test3</div>
      <div class="test-item" style="background-color: purple">test4</div>
      <div class="test-item" style="background-color: blue">test1</div>
      <div class="test-item" style="background-color: white">test2</div>
      <div class="test-item" style="background-color: red">test3</div>
      <div class="test-item" style="background-color: purple">test4</div>
      <div class="test-item" style="background-color: blue">test1</div>
      <div class="test-item" style="background-color: white">test2</div>
      <div class="test-item" style="background-color: red">test3</div>
      <div class="test-item" style="background-color: purple">test4</div>
    </div>
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
