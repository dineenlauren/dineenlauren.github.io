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
      title: "Associate Broker",
      date: "Oct 2014 - Feb 2020",
      location: "Seattle, WA",
      description: {
        1: "Experience ranges from successful sales of small-scale properties ($200K+) to large complexes ($4M+)",
        2: "Advised clients on how to streamline operations and enhance fiscal performance of their property portfolio",
        3: "Performed all aspects of selling including prospecting, approaching, presenting,handling objections, proposal preparation, closing and follow-up",
      },
    };
  },
};
</script>

<style scoped>
</style>
