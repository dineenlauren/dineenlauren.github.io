<template>
  <section>
    <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
      <!-- NAVBAR LOGO -->
      <b-navbar-brand to="/">
        <img :src="logo" class="logo-img" alt="dineen lauren logo"/>
      </b-navbar-brand>
      <!-- NAVBAR TOGGLE ICONS -->
      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <!-- NAVBAR LINKS -->
      <b-collapse id="nav-collapse" is-nav class="mx-auto">
        <b-navbar-nav class="mx-auto">
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/resume">Resume</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
import { BIcon, BIconChevronBarUp, BIconChevronBarDown } from "bootstrap-vue";
export default {
  name: "SiteNav",
  components: {
    BIcon,
    BIconChevronBarUp,
    BIconChevronBarDown,
  },
  data() {
    return {
      logo: require("../assets/images/dl_logo.svg"),
    };
  },
};
</script>

<style scoped>
.logo-img {
  height: 60px;
}

/* NAV LINKS */
#nav-collapse a {
  text-transform: uppercase !important;
  font-size: 20px !important;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

/* NAV LINKS: HOVER */
#nav-collapse a:hover {
  color: #fff !important;
  background-color: #fec666 !important;
  border-top: solid 1px #fec666 !important;
  border-bottom: solid 1px #fec666 !important;
}

/* CURRENT TAB */
#nav-collapse a.router-link-active {
  color: #fff !important;
  background: #ca7a69;
  border-top: solid 1px #ca7a69;
  border-bottom: solid 1px #ca7a69;
}

@media (min-width: 576px) {
  #nav-collapse {
    border-top: solid 1px #ca7a69;
    border-bottom: solid 1px #ca7a69;
    max-width: 600px !important;
    padding: 0 !important;
  }

  .nav-link {
    display: inline;
    text-align: center !important;
  }
}
</style>
