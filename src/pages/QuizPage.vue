<script setup>
import { useCategoryStore } from '../store.js'
const categoryStore = useCategoryStore()
</script>

<template>
  <div class="d-flex flex-column mx-auto justify-content-center text-center ">
    <h1 class="display-4 my-3 rubrik">Are you ready to learn?</h1>
    <div class="mx-auto row justify-content-center">
      <div class="col-md-12">
        <div class="jumbotron">
          <p class="lead">Here below we have all our different quizzes, want to pick just one or ace them
            all? It's up
            to
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
            <div class="d-flex align-items-center my-2">
              <img class="card-img-top circle" src="../assets/html.webp" alt="HTML logo" />
              <h4 class="card-title">HTML</h4>
            </div>
            <p class="card-text">The HTML quiz offers a comprehensive assessment of HTML knowledge, covering topics such
              as tags, attributes, and structure, providing an excellent opportunity for learners to test their
              understanding of web development fundamentals.</p>
            <router-link to="/QuizStart" class="btn blueBtn my-2" @click="categoryStore.setCategory('html')">Go to
              quiz</router-link>
          </div>
        </div>
      </div>
      <div class=" d-flex flex-column col-sm-5">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center my-2">
              <img class="card-img-top circle" src="../assets/js.png" alt="JS logo" />
              <h4 class="card-title">JavaScript</h4>
            </div>
            <p class="card-text">The JavaScript quiz presents a dynamic examination, covering essential concepts like
              DOM
              manipulation, event handling, making it an
              indispensable tool for developers seeking to strengthen their front-end development expertise.</p>
            <router-link to="/QuizStart" class="btn blueBtn my-2" @click="categoryStore.setCategory('javascript')">Go to
              quiz</router-link>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column col-sm-5">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center my-2">
              <img class="card-img-top circle" src="../assets/php.png" alt="PHP logo" />
              <h4 class="card-title">PHP</h4>
            </div>
            <p class="card-text">Dive into the essentials of PHP with our comprehensive quiz. From grasping the basics
              to
              mastering advanced concepts, this quiz is crafted to elevate your understanding of server-side scripting.
            </p>
            <router-link to="/QuizStart" class="btn blueBtn my-2" @click="categoryStore.setCategory('php')">Go to
              quiz</router-link>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column col-sm-5">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center my-2">
              <img class="card-img-top circle" src="../assets/WordPress.png" alt="wordpress logo" />
              <h4 class="card-title">WordPress</h4>
            </div>
            <p class="card-text">In the WordPress quiz, participants can explore various aspects of the popular content
              management system, making it an ideal resource for those
              interested in mastering website creation with WordPress.</p>
            <router-link to="/QuizStart" class="btn blueBtn my-2" @click="categoryStore.setCategory('wordpress')">Go to
              quiz</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #F4F3F6;
  box-sizing: border-box;
  margin-bottom: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
}

.circle {
  border: 2px solid #f5eddf;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #f5eddf;
  margin-right: 0.8rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
}

@media only screen and (max-width: 585px) {
  /*KONSTIGT LAYOUT vid 585px*/
}
</style>