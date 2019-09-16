<template>
  <div class="container">
    <RequestAccount />
    <div class="login">
      <img src="@/assets/SwiftUI-Icon.png" alt v-show="isDarkMode" class="iconImage" />
      <img src="@/assets/logo.png" alt v-if="!isDarkMode" class="iconImage" />
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign with Apple Account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="password"
          required
        />
        <button>Sign In</button>
      </form>
      <router-link
        to="/recover"
        :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}"
      >Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
//import * as netlifyIdentityWidget from "netlify-identity-widget";
import { auth } from "@/main";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  data() {
    email: null;
    password: null;
  },
  computed: {
    isDarkMode: function() {
      return this.$store.getters.isDarkMode;
    },
    onSubmit: function() {
      // refer to the v-model
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then(response => {
          this.$router.replace("/");
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  } /* ,
  mounted() {
    netlifyIdentityWidget.open();
  } */
};
</script>

<style lang="scss" scoped>
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.iconImage {
  width: 200px;
  height: 200px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>