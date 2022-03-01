<template>
  <b-container fluid="sm" class="content-container relative">
    <div class="project-title">
      <h3 class="m-0">This Portfolio</h3>
      <ul>
        <li>
          <a
            href="https://github.com/dineenlauren/dineenlauren.github.io"
            target="blank"
          >
            View Code
          </a>
        </li>
      </ul>
    </div>
    <b-row align-h="center">
      <b-col cols="12" lg="11" class="screenshot">
        <b-img
          :src="require('../../assets/images/portfolio.png')"
          fluid alt="Image of portfolio landing page"
        ></b-img>
      </b-col>
      <b-col cols="12" class="project-text">
        <p class="emphasis">Tech:</p>
        <b-row class="tech">
          <b-col cols="auto" class="item">Vue</b-col>
          <b-col cols="auto" class="item">Bootstrap-Vue</b-col>
          <b-col cols="auto" class="item">Photoshop</b-col>
          <b-col cols="auto" class="item">Adobe XD</b-col>
        </b-row>
        <p>
          <span class="emphasis">What it is: </span> My portfolio website
          showcasing projects I have created.
        </p>
        <p>
          <span class="emphasis">Overview: </span>I created the graphics and
          logos via Photoshop. I designed / wireframed with XD. Built with
          Vue.js and Bootstrap-Vue.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
