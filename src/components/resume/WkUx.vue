<template>
  <b-container fluid="sm" class="content-container">
    <div class="project-title">
      <h3 class="m-0">{{ job }}</h3>
      <h5>{{ location }}</h5>
    </div>
    <b-row>
      <b-col cols="12" lg="11">
        <p class="emphasis-sm">{{ date }}</p>
        <!-- <p>{{ title }}</p> -->
      </b-col>
      <b-col cols="12" class="project-text">
        <div class="r-overview my-2">
          <ul v-for="item in description" :key="item">
            <li>{{ item }}</li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "WkUx",
  data() {
    return {
      job: "Freelance UX / Design",
      title: "Freelance",
      date: "Feb 2020 - present",
      location: "Seattle, WA",
      description: {
        1: "Design and create marketing packages, flyers, signs, and other misc. marketing marterials for commercial real estate",
        2: "Design, build and implement websites through content management services that can be self-managed by client",
        3: "Maintain website content, updates and functionality for clients",
      },
    };
  },
};
</script>

<style scoped>
</style>
