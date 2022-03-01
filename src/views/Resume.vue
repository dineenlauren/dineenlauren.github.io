<template>
  <b-container class="pg-section resume">
    <div class="pg-title">
      <h1>Resume</h1>
      <a href="./assets/DINEEN_Jeffs_Resume.pdf" target="_blank"
        >view/download</a
      >
    </div>
    <div>
      <WkUx />
      <WkOperations />
      <WkBroker />
    </div>
  </b-container>
</template>
<script>
import Education from "../components/resume/Education";
import WkUx from "../components/resume/WkUx";
import WkOperations from "../components/resume/WkOperations";
import WkBroker from "../components/resume/WkBroker";

export default {
  name: "projects",
  components: {
    Education,
    WkUx,
    WkOperations,
    WkBroker,
  },
};
</script>

<style >
.resume .project-title {
  background-color: #a4aa84;
}
.resume > h3,
.resume > h5 {
  text-shadow: 2px 1px 2px #5d5d5d;
}

/* resume overview */
.r-overview > ul {
  margin-bottom: 0.8rem !important;
  padding: 0;
}

.r-overview li {
  letter-spacing: 1px;
  line-height: 1.3;
  font-size: 15px;
}

.emphasis-sm {
  color: #878b6f;
  font-weight: 600;
  text-transform: uppercase;
}
.resume a {
  text-decoration: none;
  letter-spacing: 1.17px;
  line-height: 18px;
  color: #2c3e50;
}

.resume a:hover {
  color: #81948b;
}
</style>