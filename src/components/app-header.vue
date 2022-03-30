<template>
  <section class="app-header-con">
    <div class="app-header" :class="{ details: stayDetails }">
      <router-link to="/" class="logo-con">
        <img class="logo-img" src="../assets/logo.svg" alt="img-logo" />
        <div class="logo-txt">Flat-Inn</div>
      </router-link>
      <div class="main-nav">
        <div class="main-nav-links">
          <router-link class="menu-link" to="/stay">Explore</router-link>
          <router-link class="menu-link main-nav-host" to="/dashboard"
            >Become a Host</router-link
          >
        </div>
        <div class="menu">
          <div class="img-globe-div">
            <img class="img-globe" src="../assets/globe.svg" alt="img-globe" />
          </div>
          <button class="menu-btn" @click="toggleModal">
            <img
              src="../assets/hamburger.svg"
              alt="img-hamburger"
              class="hamburger"
            />
            <img
              class="user-img"
              src="../assets/user-home.svg"
              alt="img-user-home"
            />
          </button>
          <div v-if="isOpen" class="menu-btn-modal">
            <router-link
              @click="toggleModal"
              class="menu-modal-link"
              to="/signup"
              >Log in</router-link
            >
            <router-link @click="toggleModal" class="menu-modal-link" to="/stay"
              >Host your home</router-link
            >
            <router-link @click="toggleModal" class="menu-modal-link" to="/stay"
              >About</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      currPage: null,
    };
  },
  created() {},
  components: {},
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    stayDetails() {
      if (this.currPage === "stayDetails" || this.currPage === "userDetails")
        return true;
      else return false;
    },
  },
  watch: {
    "$store.getters.getCurrPage": {
      handler() {
        this.currPage = this.$store.getters.getCurrPage;
      },
    },
  },
};
</script>
