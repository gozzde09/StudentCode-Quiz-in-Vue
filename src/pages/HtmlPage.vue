<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
const quizData = ref(null)
const currentQuestionIndex = ref(0);
const selectedAnswers = ref("");

onMounted(async () => {
  try {
    const result = await axios.get('https://quizapi.io/api/v1/questions?apiKey=Fn3mWDcTNToCVxnnLtiH2OXe9XSGTcpUFpl3SUUq&limit=5&tags=html')
    quizData.value = result.data
    console.log((quizData.value.length));
  } catch (error) {
    console.log(error)
  }
})
const currentQuestion = computed(() => {
  return quizData.value[currentQuestionIndex.value];
});

const nextQuestion = () => {
  currentQuestionIndex.value++;
  selectedAnswers.value = "";
};

const prevQuestion = () => {
  currentQuestionIndex.value--;
  selectedAnswers.value = "";
};
</script>
<template>
  <h1>HTML QUIZ KOMMER HIT </h1>
  <div class="d-flex flex-column- justify-content-center">
    <div v-if="quizData">
      <p>Category: {{ currentQuestion.tags[0].name }}</p>
      <p>Difficulty: {{ currentQuestion.difficulty }}</p>
      <h2>{{ currentQuestion.question }}</h2>
      <p>{{ currentQuestion.description }}</p>
      <div v-for="(answer, key) in currentQuestion.answers" :key="key">
        <label v-if="answer">
      <input type="radio" :name="'question'" :value="key" v-model="selectedAnswers">
          {{ answer }}
        </label>
      </div>
      <!-- <div :answers="currentQuestion.answers" /> -->
      <!-- <p>Selected Answer: {{ selectedAnswers }}</p>
    <p> Correct answer : {{ currentQuestion.correct_answer }}</p> -->
      <p v-if="selectedAnswers === currentQuestion.correct_answer">
        Correct Answer!
      </p>
      <div class="d-flex">
      <button class="btn btn-warning m-2" @click="prevQuestion" :disabled="currentQuestionIndex === 0">Previous Question</button>
      <button class="btn btn-warning m-2" @click="nextQuestion" :disabled="currentQuestionIndex === quizData.length - 1">Next Question</button>
  </div>
    </div>
  </div>
</template>
<style>
label {
   background-color: rgb(255, 255, 255);
   border: 1px dotted rebeccapurple;
   border-radius: 50px;
   margin: 10px;
   padding: 10px;
 }
</style>
