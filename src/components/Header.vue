<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/team">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>