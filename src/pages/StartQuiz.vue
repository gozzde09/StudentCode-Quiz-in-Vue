<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <header class="row justify-content-center" id="the-jumbo">
      <div class="col-md-6">
        <div class="jumbotron">
          <h4 class="display-4">Alright, let's get started!</h4>
          <p class="lead">Before you begin, pick the topic, difficulty and the amount of questions you want in your quiz.
          </p>
        </div>
      </div>
    </header>

    <div class="container justify-content-center">
      <h6 class="display-6">Choose a topic</h6>
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" aria-expanded="false">
          Topic
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Html</a></li>
          <li><a class="dropdown-item" href="#">JavaScript</a></li>
          <li><a class="dropdown-item" href="#">PHP</a></li>
          <li><a class="dropdown-item" href="#">Wordpress</a></li>
        </ul>
      </div>
    </div>
    <div class="container justify-content-center">
      <h6 class="display-6">Choose difficulty</h6>
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" aria-expanded="false">
          Difficulty
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Easy</a></li>
          <li><a class="dropdown-item" href="#">Medium</a></li>
          <li><a class="dropdown-item" href="#">Hard</a></li>
        </ul>
      </div>
    </div>
    <div class="container justify-content-center">
      <h6 class="display-6">Choose amount of questions</h6>
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" aria-expanded="false">
          Question amount
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">5</a></li>
          <li><a class="dropdown-item" href="#">10</a></li>
          <li><a class="dropdown-item" href="#">15</a></li>
          <li><a class="dropdown-item" href="#">20</a></li>
        </ul>
      </div>
    </div>



  </div>
</template>

<style scoped>
</style>
