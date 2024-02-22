<script>
// import GetQuiz from '../components/GetQuiz.vue';

</script>
<template>
  <div class="d-flex flex-column mx-auto">
    <h1 class="mx-auto">Welcome!</h1>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="jumbotron">
          <h3>At StudentCode you can test your programming and coding skills.</h3>
          <p class="lead">Discover our range of quizzes to deepen your knowledge
            your skills and have fun at the same time!</p>
        </div>
        <div class="d-flex">
          <button class="mx-auto">
             <router-link to="/StartQuiz" class="btn link mx-auto">Start quiz</router-link> </button>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
h1 {
  color: rgb(32, 71, 100);
  margin: 2rem;
  font-weight: bold;
}

button, .link {
  background-color: #204764 !important;
  color: #ffffff !important;
}
</style>
