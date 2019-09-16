<template>
  <div class="hello">{{msg}}</div>
</template>

<script>
export default {
  // name of component
  name: "HelloWorld",
  // properties
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
