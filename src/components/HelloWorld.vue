<template>
  <div class="hello">
    <h1 class="pg-title">{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.hello {
  background-color: blue;
} */

</style>