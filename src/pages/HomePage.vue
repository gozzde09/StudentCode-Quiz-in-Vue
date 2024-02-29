<template>
  <div class="d-flex flex-column mx-auto justify-content-evenly">
    <h1 class="display-4 mx-auto my-3 rubrik">Welcome!</h1>
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
      <router-link to="/QuizPage" class="mx-auto btn blueBtn btn-lg">Go to quizzes!</router-link>
    </div>
  </div>
</template>
