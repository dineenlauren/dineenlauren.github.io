<template>
  <div class="hello">
    <h2>Flex-Box</h2>

    <div class="flex-wrapper">
      <div class="box-1 style">1</div>
      <div class="box-2 style">2</div>
      <div class="box-3 style">3</div>
      <div class="box-4 style">4</div>
      <div class="box-5 style">5</div>
      <div class="box-6 style">6</div>
      <div class="box-7 style">7</div>
      <div class="box-8 style">8</div>
      <div class="box-9 style">9</div>
      <div class="box-10 style">10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project1"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.hello {
  padding: 20px;
} */
h3 {
  margin: 40px 0 0;
}
.flex-wrapper {
  background-color: white;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
}
/* FLEX STYLES */
.style {
  padding: 2px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  color: white;
  border-radius: 0.25rem;
  margin: 2px;
  width: 600px;
}
.box-1 {
  background-color: #ff1493;
}
.box-2 {
  background-color: purple;
}
.box-3 {
  background-color: #7b68ee;
}
.box-4 {
  background-color: #1e90ff;
}
.box-5 {
  background-color: #00ced1;
}
.box-6 {
  background-color: #3cb371;
}
.box-7 {
  background-color: #32cd32;
}
.box-8 {
  background-color: #adff2f;
}
.box-9 {
  background-color: #ffd700;
}
.box-10 {
  background-color: #ff4500;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px dotted red;
  display: flex;
}
li {
  border: 1px solid black;
  margin: 0.5em;
  padding: 0.5em;
}
a {
  color: #42b983;
}
</style>