<template>
  <div class="about">
    <NavBar />
    
    <b-container>
     <HelloWorld /> 
      <div class="pg-section">
        <b-tabs v-model="tabIndex" fill class="tab-text-sm">
          <b-tab title="About Me" class="tab-text" :title-link-class="linkClass(0)">
            <AboutMe />
          </b-tab>
          <b-tab title="Skills" :title-link-class="linkClass(1)">
            <Skills />
          </b-tab>
          <b-tab title="Experience" :title-link-class="linkClass(2)">
            <Experience />
          </b-tab>
          <b-tab title="Education" :title-link-class="linkClass(3)">
            <Education />
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "about",
  components: {
    NavBar,
    AboutMe,
    Skills,
    Experience,
    Education,
    HelloWorld
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["dark-tab"];
      } else {
        return ["light-tab"];
      }
    }
  }
};
</script>

<style>
.tab-text-sm {
  font-size: 14px;
}
</style>