<template>
  <section class="app-header-con">
    <div class="app-header" :class="{ details: headerShort }">
      <router-link to="/" class="logo-con">
        <img class="logo-img" src="../assets/logo.svg" alt="img-logo" />
        <div class="logo-txt">Flat-Inn</div>
      </router-link>
      <div v-if="!isStayDetails">
        <div v-if="getShowSmallButton">
          <div class="small-filter-div">
            <button class="small-filter-button" @click="openFilter">
              <div class="small-filter-button-txt-div">
                <h4 class="small-filter-button-txt">Start your search</h4>
              </div>
              <div class="small-filter-button-div">
                <img class="small-filter-button-img" src="../assets/magnifying.svg" alt="small-filter-button-img" />
              </div>
            </button>
          </div>
        </div>
        <div v-show="getShowFilter">
          <stay-filter></stay-filter>
        </div>
      </div>
      <div class="main-nav">
        <div class="main-nav-links">
          <router-link class="menu-link" to="/stay">Explore</router-link>
          <router-link class="menu-link main-nav-host" to="/dashboard">Become a host</router-link>
        </div>
        <div class="menu">
          <div class="img-globe-div">
            <img class="img-globe" src="../assets/globe.svg" alt="img-globe" />
          </div>
          <button class="menu-btn" @click="toggleModal">
            <img src="../assets/hamburger.svg" alt="img-hamburger" class="hamburger" />
            <img class="user-img" src="../assets/user-home.svg" alt="img-user-home" />
          </button>
          <div v-if="isOpen" class="menu-btn-modal" :class="{ modal: modalShort }">
            <router-link @click="toggleModal" class="menu-modal-link" to="/signup">Log in</router-link>
            <router-link @click="toggleModal" class="menu-modal-link" to="/dashboard">Host your home</router-link>
            <router-link @click="toggleModal" class="menu-modal-link" :to="`/user/${loggedInUser._id}`">Account</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <stay-filter /> -->
  </section>
</template>

<script>
import stayFilter from '../components/stay-filter.vue';

export default {
  data() {
    return {
      isOpen: false,
      currPage: null,
      loggedInUser: this.$store.getters.getLoggedUser,
    };
  },
  created() {
    window.addEventListener('scroll', this.checkScroll);
  },
  components: {
    stayFilter,
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    openFilter() {
      console.log('blaaaaaaa');
      this.$store.commit({ type: 'setFilterUp', isFilterUp: true });
      this.$store.commit({ type: 'setWantToSearch', isWantToSearch: true });
    },
    checkScroll() {
      let scrolled = window.pageYOffset;
      if (scrolled > 10) {
        this.$store.commit({ type: 'setFilterUp', isFilterUp: false });
      }
      if (scrolled < 10) {
        this.$store.commit({ type: 'setFilterUp', isFilterUp: true });
      }
    },
  },
  computed: {
    headerShort() {
      if (this.currPage === 'stayDetails' || this.currPage === 'userDetails') return true;
      else return false;
    },
    modalShort() {
      if (this.currPage === 'stayDetails' || this.currPage === 'userDetails') return true;
      else return false;
    },
    headerStyle() {
      let answer = this.$store.getters.isFilterUp;
      if (!answer) return 'background-color:#222';
      if (answer) return 'background-color:white';
      // else return 'opacity:0.1;';
      // else return 'background-color:blue;';
      // background-color: rgba(255, 255, 255, 0.5);
      else return 'background-color: rgba(255, 255, 255, 0.5);';
    },
    isFilterUp() {
      return this.$store.getters.isFilterUp;
    },
    isStayDetails() {
      let loc = window.location.href;
      let strToSearch = '/stay/';
    },
    getShowSmallButton() {
      console.log('show small button');

      console.log('this.isFilterUp ===', this.isFilterUp);

      if (this.$store.getters.getWantToSearch === true) {
        console.log('is search on ================!!!!');
        return false;
      }
      if (this.currPage === 'stayDetails') {
        return true;
      }
      if (!this.isFilterUp) return true;
      return false;
    },
    getShowFilter() {
      if (this.$store.getters.getWantToSearch) return true;
      console.log('show filter');
      console.log('this.isFilterUp ===', this.isFilterUp);
      if (this.currPage === 'stayDetails') {
        return false;
      }
      if (!this.isFilterUp) return false;
      return true;
    },
  },
  watch: {
    '$store.getters.getCurrPage': {
      handler() {
        this.currPage = this.$store.getters.getCurrPage;
      },
    },
  },
};
</script>
