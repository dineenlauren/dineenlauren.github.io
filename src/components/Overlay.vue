<template>
  <transition appear :name="transitionName" mode="out-in">
    <div class="r-fullscreen-overlay">
      <div class="r-fullscreen-overlay__body">
        <div class="box">
          <div class="parallax"></div>
          <div class="offset-container">
            <h1 class="offset-1">Dineen</h1>
            <h1 class="offset-2">Lauren</h1>
            <p class="box-p">Web Development</p>
          </div>
        </div>
        <slot v-bind="{ close }"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    closable: {
      type: Boolean,
    },
    transitionName: {
      type: String,
      default: "slide-up",
    },
  },

  methods: {
    close() {
      if (!this.closable) return;
      this.$emit("close");
    },
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
</style>
