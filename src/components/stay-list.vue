<template>
  <h4 v-if="stays.length" class="stay-list-title">
    {{ stays.length }} stays in {{ stays[0]?.loc.address }}
  </h4>
  <h4 v-else>No match found</h4>
  <br />
  <expolore-btns class="explore-btns" />
  <ul class="stay-list">
    <stay-preview v-for="stay in stays" :stay="stay" :key="stay._id" />
  </ul>
</template>

<script>
import stayPreview from "./stay-preview.vue";
import expoloreBtns from "./explore-btns.vue";

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
  created() {},
  components: {
    stayPreview,
    expoloreBtns,
  },
  methods: {},
};
</script>
