<template>
  <ul class="stay-list">
    <stay-preview v-for="stay in stays" :stay="stay" :key="stay._id" />
  </ul>
</template>

<script>
import stayPreview from "./stay-preview.vue";

export default {
  props: {
    stays: {
      type: Array,
      required: true,
    },
  },
  components: {
    stayPreview,
  },
  methods: {},
};
</script>
