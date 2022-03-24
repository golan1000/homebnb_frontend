<template>
  <section class="app-main app-header">
    <div class="logo-con">
    <img class="logo-img" src="../assets/logo.png" alt="">
    <router-link to="/" class="logo-txt">Flat-Inn</router-link>
    </div>
    <div class="main-nav">
      <router-link class="menu-link" to="/stay">Explore</router-link>
      <router-link class="menu-link" to="/stay">Become A Host</router-link>
      <img class="bell-img" src="../assets/bell.png" alt="" />
      <button class="menu-btn" @click="toggleModal">
        <span class="hamburger">☰</span>
        <img class="user-img" src="../assets/user.png" alt="" />
      </button>
      <div v-if="isOpen" class="menu-btn-modal">
        <router-link class="menu-modal-link" to="/stay">Log in</router-link>
        <router-link class="menu-modal-link" to="/stay"
          >Host your home</router-link
        >
        <router-link class="menu-modal-link" to="/stay">About</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {},
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

