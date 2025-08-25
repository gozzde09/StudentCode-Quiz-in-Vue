<template>
  <div class="d-flex flex-column mx-auto justify-content-evenly mb-4">
    <h1 class="display-4 mx-auto my-3 rubrik">Welcome!</h1>
    <div class="mx-auto row justify-content-center">
      <div class="col-md-10">
        <div class="jumbotron">
          <h3 class="text-center">
            At StudentCode you can test your programming and coding skills.
          </h3>
          <p class="lead text-center">
            Discover our range of quizzes to deepen your knowledge your skills
            and have fun at the same time!
          </p>
        </div>
      </div>
      <div class="d-flex">
        <video class="mx-auto" height="90%" width="60%" controls>
          <source src="/src/assets/StudentCodeIntro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="d-flex">
      <router-link
        to="/QuizPage"
        class="btn blueBtn btn-secondary btn-lg mx-auto"
      >
        Go to quizzes
      </router-link>
    </div>
  </div>
</template>
