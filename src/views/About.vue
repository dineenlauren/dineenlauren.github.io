<template>
  <b-container class="pg-section about">
    <h1 class="pg-title">About</h1>
    <b-container fluid="sm" class="about-container pl-0">
      <!------------- MY WORK SECTION ------------->
      <b-container>
        <h3 class="inline-block">my work</h3>
        <p class="mb-3">
          My name is Dineen and I am a front end developer with a background in
          sales and business operations. I have a knack for UX, UI and Front End
          Development as well as an instinct for streamlining processes to
          promote efficiency.
        </p>
        <p class="mb-3">
          Combining my work experience and technical based skillset allows me to
          understand office and team dynamic, as well as necessary web
          improvements. I aim for solutions that mix in personality with
          function while maintaining a client's needs.
        </p>
      </b-container>

      <!------------- AT A GLANCE SECTION ------------->
      <b-container class="mt-5">
        <h3 class="inline-block">at a glance</h3>
        <!------- WEB DEV -------->
        <h5 class="pl-1 mb-0">Web Development</h5>
        <b-row class="glance">
          <b-col md="auto">
            <p>HTML/CSS/SCCS</p>
          </b-col>
          <b-col md="auto">
            <p>JavaScript</p>
          </b-col>
          <b-col md="auto">
            <p>Vue.js</p>
          </b-col>
          <b-col md="auto">
            <p>React</p>
          </b-col>
          <b-col md="auto">
            <p>WordPress</p>
          </b-col>
          <b-col md="auto">
            <p>Firebase</p>
          </b-col>
          <b-col md="auto">
            <p>Firestore</p>
          </b-col>

          <b-col md="auto">
            <p>Git / Github</p>
          </b-col>
          <b-col md="auto">
            <p>UX / UI</p>
          </b-col>
        </b-row>
      </b-container>
      <!------- ADOBE CREATIVE SUITE -------->
      <b-container class="mt-3">
        <h5 class="pl-1 mb-0">Adobe Creative Suite</h5>
        <b-row class="glance">
          <b-col md="auto">
            <p>Photoshop</p>
          </b-col>
          <b-col md="auto">
            <p>XD</p>
          </b-col>
          <b-col md="auto">
            <p>Premiere Rush</p>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="mt-3">
        <h5 class="pl-1 mb-0">In My Spare Time</h5>
        <b-row class="glance">
          <b-col md="auto">
            <p>Building Things</p>
          </b-col>
          <b-col md="auto">
            <p>Sewing Things</p>
          </b-col>
          <b-col md="auto">
            <p>Fixing Things</p>
          </b-col>
          <b-col md="auto">
            <p>DIY Things</p>
          </b-col>
          <b-col md="auto">
            <p>Video Games</p>
          </b-col>
          <b-col md="auto">
            <p>Board Games</p>
          </b-col>
          <b-col md="auto">
            <p>Card Games</p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <!------------- SIGNATURE LINE ------------->
    <b-row class="signature">
      <b-col sm="12" md="8">
        <b-img
          :src="require('../assets/images/dineenlauren2.png')"
          fluid alt="dineen lauren logo"
        ></b-img>
      </b-col>
      <!------- SOCIAL ICON LINKS -------->
      <b-col class="mt-3">
        <a href="https://github.com/dineenlauren" target="_blank">
          <b-icon-github class="h2"></b-icon-github>
        </a>
        <a href="https://www.linkedin.com/in/dineenjeffs/" target="_blank">
          <b-icon-linkedin class="h2"></b-icon-linkedin>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BImg, BNav } from "bootstrap-vue";
import { BIconLinkedin, BIconEnvelope } from "bootstrap-vue";
export default {
  name: "about",
  components: {
    BImg,
    BIconLinkedin,
    BIconEnvelope,
    BNav,
  },
};
</script>

<style scoped>
.glance p {
  border: 0.7px solid #d1d1d1;
  font-weight: 600;
  padding: 5px;
}
a {
  color: #ca7a69;
  margin: 0 0.25rem;
}

h3 {
  color: #a66456;
  font-size: 2rem;
  font-family: "Courier New", "Lucida Console", monospace;
  text-shadow: 2px 0px 2px #ca7a69;
}

.row > div {
  text-align: center;
  padding: 0.2rem;
}

.item {
  padding: 5px 10px;
  border-radius: 10px;
}

h5 {
  color: #96341f;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1.3px;
  line-height: 1.4;
}

.signature {
  margin-top: 3rem !important;
  -webkit-box-align: end !important;
  align-items: flex-end !important;
}
@media only screen and (min-width: 575px) {
  .about-container {
    max-width: 600px !important;
  }
  div.col > div {
    padding: 0.5rem 1rem;
  }
}
</style>
