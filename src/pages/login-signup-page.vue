<template>
  <section class="main-login-layout">
    <header class="login-signup-header">Log in or sign up</header>
    <section class="details">
      <div class="login">
        <div class="form-title-container">
          <h3 class="form-title">Welcome to Flat-inn</h3>
        </div>
        <form>
          <!-- Sign-up -->
          <div
            v-if="!isLogin"
            class="input-container top-input top-input"
            :class="{ 'top-input': !isLogin }"
          >
            <input
              type="text"
              v-model="fullname"
              ref="fullname"
              placeholder="Fullname"
              required
            />
          </div>
          <div class="input-container" :class="{ 'top-input': isLogin }">
            <input
              type="text"
              v-model="username"
              ref="username"
              placeholder="Username"
              required
            />
          </div>
          <div
            class="input-container bottom-input"
            :class="{ 'no-border-top': !isLogin }"
          >
            <input
              type="password"
              v-model="password"
              ref="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="input-container txt">
            <p>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply. <span>Privacy Policy</span>
            </p>
            <!-- Login -->
          </div>
          <div v-if="isLogin" class="input-container btn-container">
            <button @click.prevent="onLogin">Login</button>
          </div>
          <div v-if="isLogin" class="input-container txt">
            <p>
              new to Flatinn?
              <span @click="toggleMode">Create an account </span>
            </p>
          </div>
          <!-- Sign-up -->
          <div v-if="!isLogin" class="input-container btn-container">
            <button @click.prevent="onSignup">Signup</button>
            <div v-if="!isLogin" class="input-container txt">
              <p>
                already registered?
                <span @click="toggleMode">Sign-in</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.commit({ type: 'setCurrPage', page: 'loginSignup' });
  },
  data() {
    return {
      isLogin: true,
      fullname: null,
      username: null,
      password: null,
    };
  },
  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin;
    },
    onSignup() {},
    onLogin() {
      console.log('this.username', this.username);
      console.log('this.password', this.password);
    },
  },
};
</script>

<style scoped></style>
