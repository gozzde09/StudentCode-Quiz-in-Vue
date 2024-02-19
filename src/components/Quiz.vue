<template>
  <div class="container">
    <div class="flex">
      <h1> JavaScript</h1>
      <button>X</button>
    </div>

    <div style="display: flex;">
      <div class="progressBar">
        <div class="valueProgress"></div>
      </div>
      <p>1/5</p>
    </div>

    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, voluptatem.</h2>
    <div style="border: 1px solid red;">
      <button class="alternatives flex">
        <p class="circle">A</p>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </button>
      <button class="alternatives flex">
        <p class="circle">A</p>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </button>

      <button class="continue">Continue</button>
    </div>

  </div>
</template>

<style scoped>
.progressBar {
  width: 400px;
  height: 10px;
  border: 1px solid brown;

}
.valueProgress {
  width: 300px;
  height: 10px;
  background-color: green;
}

.circle {
  border: 1px solid black;
  border-radius: 100%;
  text-align: center;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 0;
}

.container {
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0.20);
}

.alternatives {
  min-width: 200px;
  margin: 0 auto;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
}

h1 {
  margin: 0;
  padding: 0;
}

.felx button {
  border-radius: 100%;
}

.continue {
  width: 150px;
}

@media only screen and (min-width: 800px) {
  .continue {
    display: none;
  }
}
</style>
