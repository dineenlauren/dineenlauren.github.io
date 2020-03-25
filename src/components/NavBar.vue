<template>
  <div class="nav-container">
    <b-navbar toggleable="md">
      <b-navbar-brand href="/">
        <img :src="logo" class="logo-img" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <!-- <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/test">Test</b-nav-item> -->
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  },
  data() {
    return {
      logo: require("../assets/logo.png"),
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  width: 100% !important;
  background-color: rgba(255, 255, 255, 0.726);
}


.logo-img {
  height: 30px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
