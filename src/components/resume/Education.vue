<template>
  <b-container fluid="sm" class="content-container relative">
    <div>
      <div class="project-title">
        <h3 class="m-0">University of Washington</h3>
        <h5>Seattle Campus - Seattle, WA</h5>
      </div>
      <b-row>
        <b-col cols="12" lg="11">
          <p class="emphasis-sm">Communications and Sales</p>
        </b-col>
        <b-col cols="12" class="project-text">
          <div class="r-overview my-2">
            <ul>
              <li>Michael G. Foster School of Business Sales Program</li>
              <li>Real Estate Broker's License Acquired</li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </div>
    <div>
      <div class="project-title">
        <h3 class="m-0">Seattle University</h3>
        <h5>Seattle, WA</h5>
      </div>
      <b-row>
        <b-col cols="12" lg="11">
          <p class="emphasis-sm">New and Continuing Studies Web Development</p>
        </b-col>
        <b-col cols="12" class="project-text">
          <div class="r-overview my-2">
            <ul>
              <li>Web Development Certificate</li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      item1: {
        school: "University of Washington",
        degree: "Communications and Sales",
        location: "Seattle Campus - Seattle, WA",
        accreditations: {
          1: "Michael G. Foster School of Business Sales Program",
          2: "Real Estate Broker's License Acquired",
        },
      },
      item2: {
        school: "Seattle University",
        degree: "New and Continuing Studies Web Development",
        location: "Seattle, WA",
        accreditations: {
          1: "Web Development Certificate",
        },
      },
    };
  },
};
</script>

<style scoped>
</style>