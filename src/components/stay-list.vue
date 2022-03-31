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
    return {};
  },
  created() {
    console.log(this.$route.query);
  },
  components: {
    stayPreview,
    expoloreBtns,
  },
  methods: {},
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
