<template>
  <!-- Tal -->
  <stay-filter @filter="onSetFilter" :stays="stays" />
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

<style></style>
