<template>
  <div class="about">
    <NavBar />
    
    <b-container>
     <HelloWorld /> 
      <div class="pg-section">
        <b-tabs v-model="tabIndex" fill class="tab-text-sm">
          <b-tab title="Project1" class="tab-text" :title-link-class="linkClass(0)">
            <Project1 />
          </b-tab>
          <b-tab title="Project2" :title-link-class="linkClass(1)">
            <Project2 />
          </b-tab>
          <b-tab title="Project3" :title-link-class="linkClass(2)">
            <Project3 />
          </b-tab>
          <b-tab title="Project4" :title-link-class="linkClass(3)">
            <Project4 />
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import Project4 from "../components/Project4";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "projects",
  components: {
    NavBar,
    Project1,
    Project2,
    Project3,
    Project4,
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