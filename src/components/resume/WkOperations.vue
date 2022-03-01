<template>
  <b-container fluid="sm" class="content-container relative">
    <div class="project-title">
      <h3 class="m-0">{{ job }}</h3>
      <h5>{{ location }}</h5>
    </div>
    <b-row>
      <b-col cols="12" lg="11">
        <p class="emphasis-sm">{{ title }}</p>
        <p>{{ date }}</p>
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
  name: "WkBroker",
  data() {
    return {
      job: "Urban Commercial Partners LLC",
      title: "Office Operations",
      date: "Oct 2017 - Feb 2020",
      location: "Seattle, WA",
      description: {
        1: "Managed our digital marketing packages including designing, building,and maintaining the Firm’s web site, appropriately, on a time sensitive basis to produce the optimal return on investment",
        2: "Experience in managing Firm’s financial records and general office management requirements",
      },
    };
  },
};
</script>

<style scoped>
</style>
