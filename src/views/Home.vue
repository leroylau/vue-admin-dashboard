<template>
  <div class="home">
    <div>
      <Header />
    </div>
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header
  }
};
</script>

<style lang="scss" scoped>
.home {
  vertical-align: middle;
}
</style>