<template>
  <div class="home">
    <div class="box" v-if="!isShowing">
      <div class="parallax"></div>
      <div class="offset-container">
        <h1 class="offset-1">Dineen</h1>
        <h1 class="offset-2">Lauren</h1>
        <p class="box-p">Web Developement</p>
      </div>
      <!-- <router-link to="/about">Go to Foo</router-link> -->
      <router-link to="/about">
        <button class="box-btn">View</button>
      </router-link>
      <!-- <div class="landing-container">
        <h1 class="offset-1">Dineen</h1>
        <h1 class="offset-2">Lauren</h1>
        <p class="box-p">Web Developement</p>
      </div>-->
    </div>
    <div class="box-show" v-if="isShowing">
      <NavBar />
      <h1>Dineen/Lauren</h1>
      <p>Front-End Web Developer</p>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      isShowing: false,
      backgroundImg: require("../assets/rainbow-drops.png")
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  height: 100%;
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.box {
  position: relative;
  height: 100%;
  width: auto;
  background: black;
  color: white;
  overflow: auto;
  z-index: 1;
}

.parallax {
  background-image: url("../assets/rainbow-drops.png");
  height: 100%;
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 6;
}
/* .landing-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px red;
} */

.offset-container {
  z-index: 2;
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

.box-p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box-btn {
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

.box-show {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
