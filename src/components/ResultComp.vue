<script setup>
import { defineProps } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  correct: {
    type: Number,
    required: true
  },
  questionsAmount: {
    type: Number,
    required: true
  }
})
const goHomePage = () => {
  router.push('/')
}
</script>
<template>
  <button class="circle align-self-end" @click="goHomePage" style="background-color: #f5eddf">
    X
  </button>
  <div class="d-flex flex-column mx-auto justify-content-evenly">
    <h1 class="display-4 mx-auto rubrik">Well done!</h1>
    <div class="mx-auto row justify-content-center">
      <div class="col-md-10">
        <div class="jumbotron">
          <h3 class="mx-auto">
            Your result: <strong class="result">{{ props.correct }}/{{ props.questionsAmount }}</strong>
          </h3>
          <p class="lead mx-auto">
            Would you like to make another quiz or go to your result page?
          </p>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-between">
        <router-link to="/MyResults" class="btn blueBtn mx-auto my-4">
          See all my results
        </router-link>
        <router-link to="/QuizStart" class="btn blueBtn backBtn mx-auto my-4">
          Start a new quiz
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.result {
  color: #198754;
}
</style>
