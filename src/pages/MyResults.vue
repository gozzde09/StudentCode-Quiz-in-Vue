<template>
  <div class="d-flex flex-column mx-auto justify-content-evenly">
    <h1 class="display-4 mx-auto my-3">Your Results!</h1>

        
    
    <div class="jumbotron d-flex align-items-center justify-content-center">
  <div class="text-center">
    <h2>
      YOU GOT: {{ totalCorrectAnswers }} / {{ results.length }}
    </h2>
    <p>
      Would you like to make another quiz or go to your result page?
    </p>
  </div>
</div>




    <div class="row justify-content-center" id="result-container">
      <div class="col-md-2">
        <div class="row justify-content-center">
          <div class="col-sm-20" v-for="result in results" :key="result.quiz">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ result.quiz }}</h5>
               
              </div>
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
        { quiz: "HTML" },
        { quiz: "JavaScript" },
        { quiz: "PHP" },
        { quiz: "WordPress"}
      ],
      totalCorrectAnswers: 0, 
      quizData: [], 
    };
  },
  mounted() {
    
    this.results.forEach(result => {
      this.totalCorrectAnswers += result.score === 1 ? 1 : 0;
    });
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
  padding: 20px;
  width: 280px; 
}

h1 {
  color: rgb(21, 52, 76);
  font-weight:200;
}

.card-title {
  font-size: 1.5rem;
}  

.card-text {
  font-size: 1rem;
}
</style>




