<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
export default {
  name: "App",
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
};
</script>

<style></style>
