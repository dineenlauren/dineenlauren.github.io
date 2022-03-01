<template>
  <b-container fluid="sm" class="mt-5 content-container relative">
    <div class="project-title yellow">
      <h3>Land Development Site Listing</h3>
      <ul>
        <li>
          <a href="https://uwdevsite.com/" target="blank">View Site</a>
        </li>
      </ul>
    </div>
    <b-row align-h="center">
      <b-col cols="12" lg="11" class="screenshot">
        <a href="https://uwdevsite.com/" target="_blank"
          ><b-img :src="require('../../assets/images/uwdev.png')" fluid alt="Image of uwdevsite.com landing page"></b-img
        ></a>
      </b-col>
      <b-col cols="12" class="project-text">
        <p class="emphasis">Tech:</p>
        <b-row class="tech">
          <b-col cols="auto" class="item">CMS</b-col>
          <b-col cols="auto" class="item">WordPress</b-col>
          <b-col cols="auto" class="item">Photoshop</b-col>
        </b-row>

        <p>
          <span class="emphasis">What it is: </span> A website promoting a land
          development site for sell.
        </p>
        <p>
          <span class="emphasis">Overview: </span> I created this client's
          website with Wordpress.org and bluehost, which allowed for open
          customization and easy modifications.
        </p></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UwDev",
};
</script>

<style scoped>
img {
  object-fit: cover;
  padding: 0 !important;
}
</style>
