<template>
  <div class="wrapper">
    <nav>NAV NAV NAV NAV NAV</nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
export default {
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style></style>
