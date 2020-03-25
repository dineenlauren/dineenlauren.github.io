<template>
  <div class="experience mt-5">
    <b-container>
      <b-row cols="1" cols-sm="2" cols-lg="3">
        <b-col>
          <h4 class="skill-title">Sales</h4>
          <ul class="skill-box">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </b-col>
        <b-col>
          <h4 class="skill-title">Sales</h4>
          <ul class="skill-box">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </b-col>
        <b-col>
          <h4 class="skill-title">Sales</h4>
          <ul class="skill-box">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </b-col>
      </b-row>
      <div class="box-container"></div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Experience",
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