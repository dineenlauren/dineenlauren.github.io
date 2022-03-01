<template>
  <b-container fluid="sm" class="content-container relative">
    <div class="project-title">
      <h3 class="m-0">Wedding RSVP</h3>
      <ul>
        <li>
          <a href="https://www.dineenlauren.com/rsvp-app/#/" target="blank"
            >View Site</a
          >
        </li>
        <li class="mx-2">|</li>
        <li>
          <a
            href="https://github.com/dineenlauren/rsvp-app/tree/gh-pages"
            target="blank"
            >View Code
          </a>
        </li>
      </ul>
    </div>
    <b-row align-h="center">
      <b-col cols="12" lg="11" class="video-gif">
        <b-embed
          type="video"
          aspect="4by3"
          controls
          loop="true"
          allowfullscreen
          class="video-img"
        >
          <source
            poster="../../assets/images/rsvp-app.png"
            src="../../assets/video/vue-firebase.webm"
            type="video/webm"
          />
          <source
            poster="../../assets/images/rsvp-app.png"
            src="../../assets/video/vue-firebase.mp4"
            type="video/mp4"
          />
        </b-embed>
      </b-col>
      <b-col cols="12" class="project-text">
        <p class="emphasis">Tech:</p>
        <b-row class="tech">
          <b-col cols="auto" class="item">Vue</b-col>
          <b-col cols="auto" class="item">Bootstrap-Vue</b-col>
          <b-col cols="auto" class="item">Firestore</b-col>
          <b-col cols="auto" class="item">Firebase</b-col>
        </b-row>
        <p>
          <span class="emphasis">What it is: </span> A RSVP website allowing
          users to login and update their RSVP status.
        </p>
        <p>
          <span class="emphasis">Overview: </span>This is a replica of a real
          wedding website I created for a friend's wedding. They needed to
          restrict their guest count, so each guest was given their own login
          credentials. Upon logging in, the RSVP page would display different
          information depending on whether the guest was allowed an additional
          guest or not.
        </p>
        <p>
          <span class="emphasis">How it worked: </span> I used Vue.js as the
          framework for building the user interface, Firebase to handle
          authentication, Firestore as the database, and BootstrapVue for
          styling.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AppRSVP",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-img {
  background-image: url("../../assets/images/rsvp-app.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
