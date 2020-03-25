<template>
<div class="test-container">
  <ul class="flex-container wrap">
    <li class="flex-item orange">1</li>
    <li class="flex-item orange">2</li>
    <li class="flex-item orange">3</li>
    <li class="flex-item orange">4</li>
    <li class="flex-item orange">5</li>
    <li class="flex-item orange">6</li>
    <li class="flex-item orange">7</li>
    <li class="flex-item orange">8</li>
  </ul>

  <ul class="flex-container wrap">
    <li class="flex-item purple">1</li>
    <li class="flex-item purple">2</li>
    <li class="flex-item purple">3</li>
    <li class="flex-item purple">4</li>
    <li class="flex-item purple">5</li>
    <li class="flex-item purple">6</li>
    <li class="flex-item purple">7</li>
    <li class="flex-item purple">8</li>
  </ul>

  <ul class="flex-container wrap">
    <li class="flex-item blue">1</li>
    <li class="flex-item blue">2</li>
    <li class="flex-item blue">3</li>
    <li class="flex-item blue">4</li>
    <li class="flex-item blue">5</li>
    <li class="flex-item blue">6</li>
    <li class="flex-item blue">7</li>
    <li class="flex-item blue">8</li>
  </ul>
</div>
</template>




<script>
export default {
  name: "Test"
};
</script>

<style scoped>
.test-container {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid silver;
  display: flex;
}

.wrap    { 
  flex-wrap: wrap;
}  

.flex-item {
  padding: 5px;
  width: 25px;
  height: 100px;
  margin: 2px;
  line-height: 100px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
}

.orange {
  background: orange;
}

.blue { 
  background: blue;
}

.purple {
  background: purple;
}
</style>