<template>
  <div class="d-flex flex-column justify-content-center">
    <h1 class="display-4 mx-auto my-3 rubrik">Are you ready to learn?</h1>
    <div class="mx-auto row justify-content-center">
      <div class="col-md-12 mb-4">
        <div class="jumbotron">
          <p class="lead">Here below we have all our different quizzes, want to pick just one or ace them all? It's up to
            you!</p>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column mx-auto container mb-4">
    <div class="col-md-14 row justify-content-center">
      <div class="d-flex flex-column col-sm-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">HTML</h5>
            <p class="card-text">The HTML quiz offers a comprehensive assessment of HTML knowledge, covering topics such
              as tags, attributes, and structure, providing an excellent opportunity for learners to test their
              understanding of web development fundamentals.</p>
            <router-link to="/QuizStart" class="btn blueBtn">Go to quiz</router-link>
          </div>
        </div>
      </div>
      <div class=" d-flex flex-column col-sm-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">The JavaScript quiz presents a dynamic examination, covering essential concepts like DOM
              manipulation, event handling, etc. , making it an
              indispensable tool for developers seeking to strengthen their front-end development expertise.</p>
            <router-link to="/QuizStart" class="btn blueBtn">Go to quiz</router-link>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column col-sm-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">PHP</h5>
            <p class="card-text">The JavaScript quiz presents a dynamic examination of client-side scripting, covering
              essential concepts like DOM manipulation, event handling, etc. , making it an
              indispensable tool for developers seeking to strengthen their expertise.</p>
            <router-link to="/QuizStart" class="btn blueBtn">Go to quiz</router-link>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column col-sm-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Wordpress</h5>
            <p class="card-text">In the WordPress quiz, participants can explore various aspects of the popular content
              management system, including themes, plugins, and customization, making it an ideal resource for those
              interested in mastering website creation with WordPress.</p>
            <router-link to="/QuizStart" class="btn blueBtn">Go to quiz</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #F4F3F6;
  margin-bottom: 1rem;
}
</style>
