<template>
  <div class="d-flex flex-column mx-auto justify-content-evenly">
    <h1 class="display-4 mx-auto my-3">Welcome!</h1>
    <div class="mx-auto row justify-content-center">
      <div class="col-md-10">
        <div class="jumbotron">
          <p class="lead">At StudentCode you can test your programming and coding skills.</p>
          <p class="lead">Discover our range of quizzes to deepen your knowledge
            your skills and have fun at the same time!</p>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <button class="mx-auto">
        <router-link to="/QuizPage" class="btn nav-link mx-auto">Go to quizzes!</router-link> </button>
    </div>
  </div>
</template>
<style scoped>
h1 {
  color: rgb(21, 52, 76);
  font-weight:400;
}

button {
  background-color: #163b56 !important;
  color: #ffffff !important;
  padding: 10px;
}

</style>
