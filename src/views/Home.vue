<template>
  <transition name="slide-up" mode="out-in">
    <div class="r-fullscreen-overlay">
      <div class="r-fullscreen-overlay__body">
        <h1 class="offset-1">Dineen</h1>
        <h1 class="offset-2">Lauren</h1>
        <h4 class="offset-3">Web Development</h4>
        <router-link class="button" :to="'about'">View</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.r-fullscreen-overlay {
  background: black;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  &__body {
    background-image: url("../assets/images/rainbow-drops.png");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 6;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 600ms cubic-bezier(0.19, 1, 0.22, 1);
  transform: translate3d(0, 0, 0);
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translate3d(0, 100%, 0);
}
.offset-1 {
  font-size: 6rem;
  position: absolute;
  top: 33%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.offset-2 {
  font-size: 6rem;
  position: absolute;
  top: 43%;
  left: 35%;
  transform: translate(-50%, -50%);
}
.offset-3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px 20px;
  z-index: 8 !important;
}
h4.offset-3 {
  font-family: “Didot”, "Times New Roman", Times, serif;
  margin: 0 !important;
}
</style>
