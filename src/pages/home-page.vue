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
    <div class="item5" style="background-color: green">
      <div class="dest-con1">
        <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
        <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
        <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
        <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
      </div>
    </div>
    <div class="item6" style="background-color: grey">6</div>
    <div class="item7" style="background-color: pink">7</div>
    <div class="item5" style="background-color: lightcoral">title</div>
    <div class="item5" style="background-color: lightgreen">9</div>
    <div class="item7" style="background-color: #66f542">12</div>
    <div class="item5" style="background-color: #79a542">
      <div class="dest-con1">
        <div class="dest-con1">
          <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
          <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
          <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
          <div class="dest-info"><img src="blabla.jpg" /> <span>BLA</span></div>
        </div>
      </div>
    </div>
    <div class="item5" style="background-color: #99aa42">40</div>
  </div>
</template>

<script>
import stayFilter from '../components/stay-filter.vue'
export default {
  props: [],
  emits: [],

  created() {
    console.log('userrrrr=', this.$store.getters.getUser)
  },
  components: {
    stayFilter,
  },
  data() {
    return {
      var1: 'bla',
    }
  },
  methods: {
    doThing() {
      this.var1 = 'bla'
      return 'blabla'
    },
  },
  computed: {
    getCom() {
      return 'blabla'
    },
  },
}
</script>

<style scoped>
.main-container {
  background: black;
  margin: 0 auto;
  background: url('../assets/img/hero.jpeg') no-repeat;
  background-size: 100%;
  height: 600px;
  width: 90%;
  background-position: 50%;
}
.filter-cont {
  margin-top: 4.375rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-right: 0;
  margin-left: 0;
}
.destenations {
  display: grid;
  grid-template-rows: 100px 300px 100px 300px;
  grid-template-columns: 100px 1fr 100px;
  width: 100vw;
  /* height: 800px; */
  background-color: #fff;
}
.dest-con1 {
  display: flex;
  width: 100%;
  background-color: blue;
  justify-content: space-between;
}
.dest-info {
  border: 10px solid black;
}
</style>
