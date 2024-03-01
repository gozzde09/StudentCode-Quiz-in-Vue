<template>
  <div class="d-flex flex-column mx-auto justify-content-evenly">
      <h1 class="display-4 mx-auto my-3">Your Results!</h1>
      <div class="mx-auto row justify-content-center">
        <div class="col-md-10">
          <div class="jumbotron">
            <p class="lead"></p>
            <p class="lead"></p>
          </div>
        </div>
      </div>
    </div>

  <div class="row justify-content-center" id="result-container">
    <div class="col-md-2">
      <div class="row justify-content-center">
        <div class="col-sm-20" v-for="result in results" :key="result.quiz">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ result.quiz }}</h5>
              <p class="card-text">Your score: {{ result.score * 100 }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [
        { quiz: "HTML", score: 1/5 },
        { quiz: "JavaScript", score: 5/5 },
        { quiz: "PHP", score: 4/5 },
        { quiz: "WordPress", score: 3/5 }
      ]
    };
  }
}
</script>

<style scoped>

.card {
  padding: 10px;
  margin-bottom: 10px;
  max-width: 350px;
  background-color: #F4F3F6;
}

.card-body {
  margin: 6px;
  padding: 10px;
}

h1 {
  color: rgb(21, 52, 76);
  font-weight:400;
}


.card-title {
  font-size: 1.5rem;
}  

.card-text {
  font-size: 1rem;
}
</style>
