<template>
  <b-container class="pg-section projects">
    <div class="pg-title">
      <h1>Projects</h1>
    </div>
    <AppRSVP />
    <UnionStreetCap />
    <UwDev />
    <Portfolio />
    <Design />
  </b-container>
</template>
<script>
import AppRSVP from "../components/projects/AppRSVP";
import UnionStreetCap from "../components/projects/UnionStreetCap";
import UwDev from "../components/projects/UwDev";
import Portfolio from "../components/projects/Portfolio";
import Design from "../components/projects/Design";

export default {
  name: "projects",
  components: {
    AppRSVP,
    UnionStreetCap,
    UwDev,
    Portfolio,
    Design,
  },
};
</script>
<style>
.pg-section {
  padding-bottom: 20px;
}
.pg-title {
  padding: 1.5rem 0 1rem 0rem !important;
  margin: 0 !important;
}

.project-text {
  padding: 10px;
}
div.project-text > p {
  padding-top: 10px !important;
}
.video-gif {
  object-fit: cover;
  padding: 0 !important;
}

.project-title {
  padding: 20px;
  position: relative;
  min-height: 100px;
  top: -0.5rem;
  color: white;
  background: url("../assets/images/grid.png");
}

.projects .project-title {
  background-color: #ca7a69;
}

.projects h3 {
  text-shadow: 2px 1px 2px #5d5d5d;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}

.emphasis {
  font-weight: 700;
}

.item {
  color: #995f52;
  margin: 2px;
  font-weight: 600;
}

.projects ul {
  list-style: none;
  padding-left: 0;
}
li {
  display: inline-block;
}
li > a {
  color: #292929;
  font-weight: bold;
  text-transform: uppercase;
}

.content-container {
  border-radius: 10px;
  box-shadow: 5px 15px 31px #706e6e;
  margin-bottom: 4rem !important;
  padding: 0px 0 20px 0 !important;
}

@media only screen and (min-width: 576px) {
  .project-title {
    left: -2rem;
  }
  .video-gif,
  .screenshot {
    top: -2rem;
    padding-right: 15px !important;
    padding-left: 15px !important;
  }

  .content-img {
    left: -3rem;
  }
  .content {
    margin-left: auto;
    top: -1rem;
    max-width: 400px;
    box-shadow: 2px 7px 7px #706e6e;
    border: 1px solid rgba(0, 0, 0, 0.22);
    padding: 3rem 1rem 1rem 2rem;
  }
  .content-container {
    max-width: 600px !important;
  }
  .pg-title {
    padding: 1.5rem !important;
  }
}
</style>
