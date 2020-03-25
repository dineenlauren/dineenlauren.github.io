<template>
  <div class="mt-5">
    <b-container>
      <b-row cols="1" cols-lg="2">
        <b-col class="red">
          <b-img :src="image" fluid rounded class="img-style"></b-img>
        </b-col>
        <b-col class="yellow">
          <div class="green">
            <h3>
              Dineen
              <span class="style">Lauren</span>
            </h3>
            <h5>Seattle, WA</h5>
          </div>
          <p>My name is Dineen and I am a full-stack designer with a background in sales and business operations. I have a knack for UX, UI and Front-End Development as well as an instinct for streamlining processes to promote efficiency.</p>
          <p>Combining my work experience and technical based skillset allows me to understand office and team dynamic, as well as necessary web improvements. I aim for solutions that mix in personality with function while maintaining a client's needs.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      image: require("../assets/profile.png")
    };
  }
};
</script>

<style scoped>
.image-border {
  border: 1px solid pink;
  border-radius: 10px;
  height: 200px;
  width: auto;
}

.img-style {
  max-height: 400px;
}
.red {
  background-color: #CA7A69;
  /* background-color: rgba(255, 0, 0, 0.3); */
  border-radius: 5px;
}
.green {
  margin-bottom: 20px;
}
.yellow > p {
  font-size: 15px;
  margin: 5px;
}
.yellow {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #706E6E;
}
</style>