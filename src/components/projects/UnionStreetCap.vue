<template>
  <b-container fluid="sm" class="mt-5 content-container relative">
    <div class="project-title yellow">
      <h3>Union Street Capital</h3>
      <ul>
        <li>
          <a href="https://www.unionstreetcap.com/" target="blank">View Site</a>
        </li>
      </ul>
    </div>
    <b-row align-h="center">
      <b-col cols="12" lg="11" class="screenshot">
        <a href="https://www.unionstreetcap.com/" target="_blank"
          ><b-img
            :src="require('../../assets/images/unionstreetcap.png')"
            fluid alt="Image of unionstreetcap.com landing page"
          ></b-img
        ></a>
      </b-col>
      <b-col cols="12" class="project-text">
        <p class="emphasis">Tech:</p>
        <b-row class="tech">
          <b-col cols="auto" class="item">CMS</b-col>
          <b-col cols="auto" class="item">Photoshop</b-col>
        </b-row>

        <p>
          <span class="emphasis">What it is: </span> A site promoting client's
          business.
        </p>
        <p>
          <span class="emphasis">Overview: </span> I created this client's
          website on Wix.com, as it is user friendly, which allows the client to
          easily make changes on their own.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UnionStreetCap",
};
</script>

<style scoped>
img {
  object-fit: cover;
  padding: 0 !important;
}
</style>
