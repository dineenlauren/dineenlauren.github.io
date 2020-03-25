<template>
  <div id="app">
    <!-- <NavBar /> -->
    <div class="transition-wrapper">
      <transition name="view" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- <div><FooterNav></FooterNav></div> -->
  </div>
</template>

<script>
// import NavBar from "./components/NavBar";

export default {
  components: {
    // NavBar,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("./assets/rainbow-drops.png");
}

.transition-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  margin: auto;
}

.pg-section {
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  box-shadow: 5px 15px 31px #706e6e;
}

.pg-title {
  text-transform: uppercase;
  font-weight: 600;
  color: #706e6e;
  letter-spacing: 10px;
  margin-bottom: 1rem;
}
.view-enter-active,
.view-leave-active {
  transition: all 0.5s;
}
.view-enter,
.view-leave-active {
  opacity: 0;
}
.view-enter {
  transform: translateX(31px);
}
.view-leave-active {
  transform: translateX(-31px);
}

p {
  letter-spacing: 1.3px !important;
  line-height: 1.4;
}

.section {
  border: 1px solid #e9e9e9;
}

/* BOOTSTRAP OVERRIDES */
.card-header {
  background-color: white !important;
}
.dark-tab {
  background-color: #706e6e !important;
  border: white !important;
  border-radius: 0.4rem !important;
  padding: 0.3rem 0.2rem !important;
  font-weight: 500 !important;
  color: white !important;
}
.light-tab {
  border: 1px solid#CA7A69 !important;
  border-radius: 0.4rem !important;
  padding: 0.3rem 0.2rem !important;
  color: #706e6e !important;
  font-weight: 500 !important;
}
.sub-nav {
  width: 100% !important;
}
.sub-nav-tab {
  color: #ca7a69 !important;
  background-color: #fff !important;
  border-color: #dee2e6 #dee2e6 #fff !important;
  border: 1px solid transparent !important;
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}
</style>