<script setup>
import { useRoute } from 'vue-router'
import GetQuiz from '../components/GetQuiz.vue';
const route = useRoute()
</script>

<template>
  <GetQuiz/>
  <div class="cards">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="jumbotron">
          <h4 class="display-4">Are you ready to learn?</h4>
          <p class="lead">Here below we have all our different quizzes, want to pick just one or ace them all? It's up to
            you!</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">html</h5>
            <p class="card-text">Bla bla bla different quizzes different difficulties</p>
            <a href="#" class="btn btn-primary">Go to quiz</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">Bla bla bla different quizzes different difficulties</p>
            <a href="#" class="btn btn-primary">Go to quiz</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">PHP</h5>
            <p class="card-text">Bla bla bla different quizzes different difficulties</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card-body {
  margin-left: -15px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: -15px;
}
</style>
