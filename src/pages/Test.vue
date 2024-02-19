
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
function selectAnswer(key) {
  this.selectedAnswers = key;
};
function isSelected(key) {
  return this.selectedAnswers === key;
}
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
  <h1> HTML QUIZ KOMMER HIT </h1>
  <div class="d-flex flex-column- justify-content-center">
    <div v-if="quizData">
      <p>Category: {{ currentQuestion.tags[0].name }}</p>
      <p>Difficulty: {{ currentQuestion.difficulty }}</p>
      <h2>{{ currentQuestion.question }}</h2>
      <p>{{ currentQuestion.description }}</p>
      <!-- <div v-for="(answer, key) in currentQuestion.answers" :key="key">
        <label v-if="answer">
          <input type="radio" :name="'question'" :value="key" v-model="selectedAnswers">
          {{ answer }}
        </label>
      </div> -->
      <!-- <div v-for="(answer, key) in currentQuestion.answers" :key="key">
        <ol :type="'A'" v-if="answer">
          <li>
            <BButton v-if="answer" variant="light" @click="selectAnswer(key)" :active="isSelected(key)">
              {{ answer }}
            </BButton>
          </li>
        </ol>
      </div> -->
      <ol :type="'A'">
        <li v-for="(answer, key) in currentQuestion.answers" :key="key">
          <BButton v-if="answer" class="m-2" variant="light" @click="selectAnswer(key)" :active="isSelected(key)">
            {{ answer }}
          </BButton>
        </li>
      </ol>

      <!-- <div :answers="currentQuestion.answers" /> -->
      <p>Selected Answer: {{ selectedAnswers }}</p>
      <!-- <p> Correct answer : {{ currentQuestion.correct_answer }}</p>  -->
      <p v-if="selectedAnswers === currentQuestion.correct_answer">
        <strong> Correct Answer! </strong>
      </p>
      <BButton class="m-2" variant="success" @click="prevQuestion" :disabled="currentQuestionIndex === 0">Previous
        Question</BButton>
      <BButton class="m-2" variant="success" @click="nextQuestion"
        :disabled="currentQuestionIndex === quizData.length - 1">Next Question</BButton>
    </div>
  </div>
</template>
<style> label {
   background-color: rgb(255, 255, 255);
   border: 1px dotted rebeccapurple;
   border-radius: 50px;
   margin: 10px;
   padding: 10px;
 }

 BButton {
   border-radius: 50%
 }
</style>
