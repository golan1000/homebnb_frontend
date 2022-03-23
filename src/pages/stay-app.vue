<template>
  <section class="app-main stay-app">
    <stay-list v-if="stays" :stays="stays" />
  </section>
</template>


<script>
import stayList from "../components/stay-list.vue";
export default {
  name: "stay-app",
  data() {
    return {};
  },
  methods: {},
  computed: {
    stays() {
      return this.$store.getters.getStays;
    },
  },
  components: {
    stayList,
  },
};
</script>

<style>
</style>
