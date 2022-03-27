<template>
  <h4 class="stay-list-title">{{ stays.length }} Stays</h4>
  <br>
  <expolore-btns />
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
  components: {
    stayPreview,
    expoloreBtns,
  },
  methods: {},
};
</script>
