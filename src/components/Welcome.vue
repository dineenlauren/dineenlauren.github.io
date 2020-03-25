<template>
  <div class="welcome welcome-title">
    <div class="box" @click="toggleShow">
      <button v-if="!isShowing">View 1</button>
      <div class="shade" v-if="isShowing">
      <h1>Dineen/Lauren</h1>
      <p>Front-End Web Developer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      isShowing: false
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
.container {
  display: flex;
  flex-wrap: wrap;
}
.box {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 10px;
  line-height: 75px;
  border: solid 1px black;
}

.shade {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #07070771;
}
</style>
