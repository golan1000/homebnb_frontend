<template>
  <div class="about">
    <h1>This is an stay app</h1>
  </div>
  <stay-filter :stays="stays" @filter="onSetFilter" />
</template>
<script>
import stayFilter from '../components/stay-filter.vue'
export default {
  methods: {
    onSetFilter(filterBy) {
      // Tal
      this.$store.dispatch({ type: 'filter', filterBy })
    },
  },
  components: { stayFilter },
}
</script>
<style></style>
