<template>
  <section class="app-main stay-app">
    <stay-filter />
    <stay-list v-if="stays" :stays="stays" />
  </section>
</template>

<script>
import stayFilter from "../components/stay-filter.vue";
import stayList from "../components/stay-list.vue";
export default {
  data() {
    return {
      stays: null,
    };
  },
  methods: {},
  computed: {
    stays() {
      return this.$store.getters.getStays;
    },
  },
  components: { stayFilter, stayList },
  created() {
    this.stays = this.$store.getters.getStays;
  },
};
</script>

<style></style>
