<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/team">Team</router-link>|
    <a @click="onClick">Logout</a>
  </div>
</template>

<script>
import { auth } from "@/main";
export default {
  name: "Header",
  methods: {
    onClick() {
      const user = auth.currentUser();
      user
        .logout()
        .then(response => {
          this.$router.push({
            name: "singin",
            params: { userLoggedOut: true }
          });
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  }
};
</script>