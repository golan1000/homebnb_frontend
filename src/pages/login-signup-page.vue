<template>
  <section class="main-login-layout">
    <header class="login-header">Log in or sign up</header>
    <div class="login" v-if="isLogin">
      <h3 class="form-title">Welcome to Flat-inn</h3>
      <pre>
        <form>
          <!-- <span class="form-title">Login</span> -->
          <!-- <label>Username:</label> -->
          <input type="text" v-model="login.username" ref="username-login" placeholder="Email"/><br />
          <!-- <label>Password:</label> -->
          <input type="text" v-model="login.password" ref="password-login" placeholder="Password" /><br />
          <button @click.prevent="signup">Login</button>
          <span>not registered?</span><img class="login-form-img" src="../../img/signup.png"  @click="toggleMode"/>
        </form>
        </pre>
    </div>

    <br />

    <div class="signup" v-if="!isLogin">
      <pre>
      <form>
          <!-- <span class="form-title">Sign-up</span> -->
          <label>Username:</label>
          <input type="text"  v-model="signup.username" ref="username-signup" /><br />
          <label>Password:</label>
          <input type="text" v-model="signup.password" ref="password-signup" /><br />
          <label>Email:</label>
          <input type="text"  v-model="signup.email" ref="email-signup" /><br />
          <label>Fullname:</label>
          <input type="text"  v-model="signup.fullname" ref="fullname-signup" /><br />
          <button @click.prevent="signup">Signup</button>
          <span>already registered?</span><img class="login-form-img" src="../../img/login.png" @click="toggleMode" />
        </form>
    </pre>
    </div>
    {{ login }}
    <br />
    {{ username }}
    <br />
    {{ signup }}
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      username: null,
      login: {
        username: null,
        password: null,
      },
      signup: {
        username: null,
        password: null,
        email: null,
        fullname: null,
      },
    };
  },
  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin;
    },
  },
  created() {
    this.$store.commit({ type: "setCurrPage", page: "loginSignup" });
  },
};
</script>

<style scoped></style>
