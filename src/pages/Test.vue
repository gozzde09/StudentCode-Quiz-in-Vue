
<script setup >
import Quiz from "../components/Quiz.vue"
import { ref, onMounted,computed } from 'vue'
import axios from 'axios'
const quizData = ref(null)
const selectedAnswers = [];

onMounted(async () => {
  try {
    const result = await axios.get('https://quizapi.io/api/v1/questions?apiKey=Fn3mWDcTNToCVxnnLtiH2OXe9XSGTcpUFpl3SUUq&limit=5&tags=html')
    quizData.value = result.data
    console.log((quizData.value.length));
  } catch (error) {
    console.log(error)
  }

})
</script>
<template>
  <h1> JAVASCRIPT QUIZ KOMMER HIT </h1>
  <Quiz />
 <div v-if="quizData" v-for="(question, index) in quizData" :key="index">
        <ol  >
      <li>   <p>Category: {{ question.tags[0].name }}</p>
      <p>Difficulty: {{ question.difficulty }}</p>
     <h3>   {{ question.question }} </h3>
      <p>{{ question.description }}</p>

          <div v-for="(answer, key) in question.answers" :key="key">
        <label v-if="answer">
          <input type="radio" :name="'question' + index" :value="key" v-model="selectedAnswers[index]">
          {{ answer }}
        </label>
      </div>
          <p>Selected Answer: {{ selectedAnswers[index] }}</p>
          <p v-if="selectedAnswers[index] === question.correct_answer">
            Correct Answer!
          </p>
              <!-- <button @click="nextQuestion">Nästa fråga</button> -->
          </li>
        </ol>
      </div>
<div v-else>Quiz is loading...</div>
</template>
