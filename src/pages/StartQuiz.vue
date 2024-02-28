<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container text-center my-5">
    <header class="row justify-content-center mb-5" id="the-jumbo">
      <div class="col-md-6">
        <div class="jumbotron">
          <h4 class="display-4">Alright, let's get started!</h4>
          <p class="lead">Before you begin, pick the topic, difficulty and the amount of questions you want in your quiz.
          </p>
        </div>
      </div>
    </header>
    <!-- Topic -->
    <div class="container justify-content-center mb-3">
      <h6 class="display-6">Choose a topic</h6>
      <div class="btn-group" role="group" aria-label="Topic">
        <input type="radio" class="btn-check" name="topic" id="html" autocomplete="off">
        <label class="btn btn-outline-secondary" for="html">Html</label>

        <input type="radio" class="btn-check" name="topic" id="javascript" autocomplete="off">
        <label class="btn btn-outline-secondary" for="javascript">JavaScript</label>

        <input type="radio" class="btn-check" name="topic" id="php" autocomplete="off">
        <label class="btn btn-outline-secondary" for="php">PHP</label>

        <input type="radio" class="btn-check" name="topic" id="wordpress" autocomplete="off">
        <label class="btn btn-outline-secondary" for="wordpress">Wordpress</label>
      </div>
    </div>
    <!-- Difficulty -->
    <div class="container justify-content-center mb-3">
      <h6 class="display-6">Choose difficulty</h6>
      <div class="btn-group" role="group" aria-label="Difficulty">

        <input type="radio" class="btn-check" name="difficulty" id="easy" autocomplete="off">
        <label class="btn btn-outline-secondary" for="easy">Easy</label>

        <input type="radio" class="btn-check" name="difficulty" id="medium" autocomplete="off">
        <label class="btn btn-outline-secondary" for="medium">Medium</label>

        <input type="radio" class="btn-check" name="difficulty" id="hard" autocomplete="off">
        <label class="btn btn-outline-secondary" for="hard">Hard</label>
      </div>
    </div>
    <!-- Antal frågor -->
    <div class="container justify-content-center mb-3">
      <h6 class="display-6">Choose amount of questions</h6>
      <div class="btn-group" role="group" aria-label="Question amount">
        <input type="radio" class="btn-check" name="questionAmount" id="q5" autocomplete="off">
        <label class="btn btn-outline-secondary" for="q5">5</label>

        <input type="radio" class="btn-check" name="questionAmount" id="q10" autocomplete="off">
        <label class="btn btn-outline-secondary" for="q10">10</label>

        <input type="radio" class="btn-check" name="questionAmount" id="q15" autocomplete="off">
        <label class="btn btn-outline-secondary" for="q15">15</label>

        <input type="radio" class="btn-check" name="questionAmount" id="q20" autocomplete="off">
        <label class="btn btn-outline-secondary" for="q20">20</label>
      </div>
    </div>
    <button type="button" class="btn btn-secondary btn-lg">Start Quiz!</button>

  </div>
</template>

<style scoped>
</style>
