<template>
  <div class="experience mt-5">
    <b-container>
      <div>
        <h4>Top and Bottom</h4>
        <b-card-group deck>
          <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
            <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
          </b-card>

          <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
            <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Project4"
};
</script>

<style scoped>
.yellow {
  background-color: rgba(251, 255, 0, 0.3);
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
}

.title-blue {
  background-color: rgba(0, 153, 255, 0.3);
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
}

.box-container {
  margin: 2rem 0 0 0;
  padding: 0;
}

ul {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.skill-title {
  color: #ca7a69 !important;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}
.skill-box {
  border: 1px solid#CA7A69 !important;
  border-radius: 0.4rem !important;
  color: #706e6e !important;
}
</style>