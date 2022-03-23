<template>
  <section class="app-main stay-app">
    <h1>Stay-app page</h1>
    <stay-filter :stays="stays" @filter="onSetFilter" />
    <stay-list v-if="stays" :stays="stays" />
  </section>
</template>

<script>
import stayFilter from '../components/stay-filter.vue'
import stayList from '../components/stay-list.vue'
export default {
  methods: {
    onSetFilter(filterBy) {
      // Tal
      this.$store.dispatch({ type: 'filter', filterBy })
    },
  },
  computed: {
    stays() {
      return this.$store.getters.getStays
    },
  },
  components: { stayFilter, stayList },
}
</script>

<style></style>
