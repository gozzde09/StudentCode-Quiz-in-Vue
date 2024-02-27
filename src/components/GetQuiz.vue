<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
const quizData = ref(null)
const currentQuestionIndex = ref(0)
const selectedAnswers = ref('')
const progress = ref(0)
const revealAnswer = ref(false)

onMounted(async () => {
  try {
    const result = await axios.get(
      'https://quizapi.io/api/v1/questions?apiKey=Fn3mWDcTNToCVxnnLtiH2OXe9XSGTcpUFpl3SUUq&limit=5&tags=html'
    )
    quizData.value = result.data
    console.log(quizData.value.length)
  } catch (error) {
    console.log(error)
  }
})
const currentQuestion = computed(() => {
  return quizData.value[currentQuestionIndex.value]
})

function selectAnswer(key) {
  selectedAnswers.value = key
}
function isSelected(key) {
  return selectedAnswers.value === key
}

const nextQuestion = () => {
  revealAnswer.value = true
  setTimeout(() => {
    if (selectedAnswers.value === "") {
      const correctAnswer = currentQuestion.value.correct_answer;
      selectAnswer(correctAnswer);
      selectedAnswers.value = correctAnswer;
      console.log(correctAnswer);
    }
    currentQuestionIndex.value++;
    selectedAnswers.value = '';
    progress.value += 400/quizData.value.length;
    revealAnswer.value = false
  }, 2000)
};

const show = ref(false)
function clickk() {
  show.value = !show.value
}

function lastLetter(word) {
  let letter = word.slice(-1).toUpperCase()
  return letter
}
</script>

<template>
  <!-- <div v-if="show" class="overlay">
    GODKÄNNA ATT STÄNGA QUIZ
     <button @click="clickk" :class="{ active: show }">Toggle Overlay</button>
  </div> -->
  <div v-if="quizData" class="container d-flex flex-column">
    <div v-if="show" class="my-modal mx-auto">
      <button class="circle" @click="clickk">close</button>
    </div>

    <div class="flex">
      <h2 class="mx-auto">Category: {{ currentQuestion.tags[0].name }}</h2>
      <button @click="clickk" style="background-color: white">X</button>
      <!--modal-->
    </div>

    <div class="mx-auto d-flex flex-column">
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" :style="{ width: progress + 'px' }" aria-valuenow="25"
          aria-valuemin="0" aria-valuemax="100">
          {{ currentQuestionIndex }} /{{ quizData.length }}</div>
      </div>
    </div>
    <!-- <h2 class="center" v-if="selectedAnswers === currentQuestion.correct_answer">
      <strong> Correct Answer! </strong>
    </h2> -->
    <h2 class="mx-auto my-3" style="max-width:60%">{{ currentQuestion.question }}</h2>
    <div v-for="(answer, key) in currentQuestion.answers" :key="key" class="d-flex mt-3">
      <button v-if="answer" class="mx-auto alternatives" :class="{
        green:
          revealAnswer && isSelected(key) &&
          selectedAnswers === currentQuestion.correct_answer,
        red:
          revealAnswer && isSelected(key) &&
          selectedAnswers !== currentQuestion.correct_answer,
        yellow: revealAnswer === false && isSelected(key),
      }" @click="selectAnswer(key)" :active="isSelected(key)">
        <p class="circle">{{ lastLetter(key) }}</p>
        <h3>{{ answer }}</h3>
      </button>
    </div>
    <BButton class="mx-auto px-4 my-2 next" style="max-width:75%" variant="success" @click="nextQuestion">Continue</BButton>
    <!-- <div class="d-flex justify-content-around m-2">
      <BButton class="m-2" variant="success" @click="prevQuestion" :disabled="currentQuestionIndex === 0">Previous
        Question</BButton>
      <BButton class="m-2" variant="success" @click="nextQuestion"
        :disabled="currentQuestionIndex === quizData.length - 1">
        Next Question</BButton>
    </div> -->
  </div>
</template>

<style scoped>
/* .overlay {
  position: absolute;
  width: 99vw;
  height: 110vh;
  background-color: blue;
  z-index: 100;

} */

.overlay {
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;
}

.green {
  background-color: #28a745;
}

.red {
  background-color: #dc3545;
}

.yellow {
  background-color: #caac29;
}

.correct {
  background-color: #28a745;
  /* border-color: rgb(1, 88, 1);
  border-width: 4px; */
  border: 2px solid rgb(1, 88, 1);
}

.wrong {
  background-color: #dc3545;
  border: 2px solid rgb(102, 0, 0);
}


.my-modal {
  /* display: none; */
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 3;
  /* Sit on top */
  /* left: 150;
  /* top: 150; */
  width: 400px;
  /* Full width */
  height: 300px;
  /* Full height */
  background-color: rgb(141, 10, 10);
  margin: 0 auto;
  margin-bottom: -400px;
  top: 250;
  left: 250;
}

 .progress {
  width:300px;
  height: 30px;
  border-radius: 10px;
  overflow: hidden;
}


.circle {
  /* border: 1px solid black; */
  /* border-radius: 100%; */
  /* text-align: center;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 0; */
  /* border: none; */
  border: 1px solid black;
  padding: 5px;
  width: 35px;
  cursor: pointer;
  /* background-color: rgb(213, 213, 213); */
  border-radius: 100%;
  color: black;
  font-size: 16px;
  font-weight: semi-bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #ede8e3;
}

.container {
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  background-color: #f1dfc1;
}

.alternatives {
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  /* Vertically center the content */
  /* padding: 10px; */
  /* Add padding between the elements */
}

.alternatives h3 {
  margin: 0;
  font-size: 1rem;
  /* Remove default margin for <h3> */
}

.alternatives .circle {
  margin-right: 10px;
  /* Add margin between the circle and the <h3> */
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

h1 {
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 1.4em;
  color: #204764;
}

.flex button {
  /* border: none; */
  border: 1px solid black;
  padding: 5px;
  width: 35px;
  cursor: pointer;
  background-color: rgb(213, 213, 213);
  border-radius: 100%;
  color: black;
  font-size: 16px;
  font-weight: semi-bold;
}
.next {
  background-color: #204764 !important;
  color: #ffffff !important;
  padding: 10px;
  margin-bottom:1rem !important;
}
</style>
