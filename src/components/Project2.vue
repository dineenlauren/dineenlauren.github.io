<template>
  <section>
    <article>
      <h5>First article</h5>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </article>

    <article>
      <h5>First article</h5>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </article>

    <article>
      <h5>First article</h5>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Project2"
};
</script>

<style scoped>
h5 {
  border: 1px solid purple;
}

section {
  display: flex;
  border: 2px solid red;
}

article {
  flex: 1 200px;
  padding: 10px;
  margin: 10px;
  background: aqua;
  border: 2px solid blue;
}

article div {
  border: 1px solid green;
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
</style>