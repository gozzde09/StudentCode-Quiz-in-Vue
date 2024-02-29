<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useRoute } from 'vue-router'
const route = useRoute()

const category = ref(route.params.category)
const level = ref(route.params.level)
const amount = ref(route.params.amount)

const quizData = ref(null)
const currentQuestionIndex = ref(0)
const selectedAnswer = ref('')
const progress = ref(0)
const revealAnswer = ref(false)
const buttonDisabled = ref(false)
const buttonText = ref('Continue')

const getQuiz = async (category, level, amount) => {
  try {
    const result = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=Fn3mWDcTNToCVxnnLtiH2OXe9XSGTcpUFpl3SUUq&limit=${amount.value}&tags=${category.value}&difficulty=${level.value}`
    )
    quizData.value = result.data
    console.log(quizData.value.length) //! NÅGRA ÄMNEN HAR INTE ALLA SVÅRIGHETER
  } catch (error) {
    console.log(error)
  }
}
const currentQuestion = computed(() => {
  return quizData.value[currentQuestionIndex.value]
})
getQuiz(category, level, amount)

console.log('route.params.category ' + category.value)
console.log('route.params.level ' + level.value)
console.log('route.params.amount ' + amount.value)

//Välja svar
function selectAnswer(key) {
  const selected = key.split('_')[1]
  console.log('Selected answer ' + selected)
  selectedAnswer.value = selected
}
//Kontrollera om ett svar är valt
function isSelected(key) {
  const isSelectedAnswer = key.split('_')[1]
  return selectedAnswer.value === isSelectedAnswer //True eller false
}
//Hämta rätt svar med en bokstav
const getCorrectAnswer = () => {
  for (const key in currentQuestion.value.correct_answers) {
    if (currentQuestion.value.correct_answers[key] === 'true') {
      const answer = key.split('_')[1]
      console.log('Correct answer ' + answer)
      return answer
    }
  }
}
//A-B-C-D
function lastLetter(word) {
  const letter = word.split('_')[1].toUpperCase()
  return letter
}
//Nästa fråga med progress bar
const nextQuestion = () => {
  revealAnswer.value = true

  if (selectedAnswer.value !== getCorrectAnswer()) {
    selectedAnswer.value = getCorrectAnswer()
    // console.log(`Correct answer : ${getCorrectAnswer()}`)
  }
  setTimeout(() => {
    currentQuestionIndex.value++
    selectedAnswer.value = ''
    progress.value += 400 / quizData.value.length
    revealAnswer.value = false
  }, 2000)
  if (currentQuestionIndex.value === quizData.value.length - 1) {
    buttonDisabled.value = true
    buttonText.value = 'DONE'
  }
}

//Stänga quiz
const show = ref(false)
function close() {
  show.value = !show.value
}
const goBack = () => {
  router.push('/QuizStart')
}
</script>

<template>
  <!-- MODAL- PLACERA DEN PÅ FRÅGORNA? ? Button färger? Skriv gärna mer innehåll i modal :) -->
  <div v-if="show" class="my-modal mx-auto d-flex flex-column flex-wrap" style="max-width: 40%">
    <div class="flex">
      <h2 class="mx-auto my-2" style="color: #204764; font-weight: bolder">Are you sure?</h2>
      <button class="circle m-2" @click="close" style="background-color: white">
        X
      </button>
    </div>
    <div class="flex flex-wrap justify-content-between">
      <button type="button" class="btn backBtn" @click="close">
        Back to the quiz!
      </button>
      <button type="button" class="btn closeBtn" @click="goBack">
        Close this quiz!
      </button>
    </div>
  </div>
  <div v-if="quizData && currentQuestion" class="container d-flex flex-column">
    <!-- GODKÄNNA ATT STÄNGA QUIZ-->
    <!-- RESPONSIVET?? -->
    <div class="flex">
      <h2 class="mx-auto my-2" style="color: #204764; font-weight: bolder">
       {{ currentQuestion.tags[0].name }}
        <span class="level mx-2" style="display:inline-block" :class="{
          medium: currentQuestion.difficulty === 'Medium',
          hard: currentQuestion.difficulty === 'Hard',
          easy: currentQuestion.difficulty === 'Easy'
        }"></span>
      </h2>
      <!-- <h2 class="mx-auto my-2" style="color: #204764; font-weight: bolder" >
        Difficulty: {{ currentQuestion.difficulty }}
      </h2> -->
      <!-- VI KAN TILLÄGGA FÄRG FÖR LEVEL PÅ BÄTTRE SÄTT -->
      <button class="circle" @click="close" style="background-color: white">
        X
      </button>
      <!--Öppnar modal-->
    </div>
    <!-- ProgressBar -->
    <div class="mx-auto d-flex flex-column">
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" :style="{ width: progress + 'px' }" aria-valuenow="25"
          aria-valuemin="0" aria-valuemax="100">
          {{ currentQuestionIndex }} /{{ quizData.length }}
        </div>
      </div>
    </div>
    <!-- FRÅGA -->
    <h2 class="mx-auto my-3" style="max-width: 60%">
      {{ currentQuestionIndex + 1 }}. {{ currentQuestion.question }}
    </h2>
    <!-- ALTERNATIV -->
    <div v-for="(answer, key) in currentQuestion.answers" :key="key" class="d-flex mt-3 flex-wrap">
      <!-- BUTTON BLIR INTE RED!!!. Fixa färg till reveal i JS? -->
      <button v-if="answer" class="mx-auto alternatives" :class="{
        reveal: !revealAnswer && isSelected(key),
        correct: revealAnswer && isSelected(key) && getCorrectAnswer(),
        wrong: revealAnswer && isSelected(key) && !getCorrectAnswer(),
      }" @click="selectAnswer(key)" :active="isSelected(key)">

        <p v-if="revealAnswer && isSelected(key) && getCorrectAnswer()" class="d-flex"><img src="../assets/check.svg" alt="check-symbol"></p>
        <p v-else class="circle">{{ lastLetter(key) }}</p>

        <p class="d-flex">{{ answer }}</p>
      </button>

    </div>
    <BButton class="mx-auto px-4 my-2 blueBtn" style="max-width: 75%" variant="success" @click="nextQuestion"
      :disabled="buttonDisabled">
      {{ buttonText }}
    </BButton>
  </div>
</template>
<style scoped>
.green {
  background-color: #198754;
}

.easy {
  background-color: #198754;
  color: #198754;
}

.correct {
  background-color: #198754;
}

.red {
  background-color: #dc3545;
}

.hard {
  background-color: #dc3545;
  color: #dc3545;
}

.wrong {
  border: 6px solid #dc3545;
}

.reveal {
  background-color: #F5E76C;
}

.medium {
  background-color: #ebdc4d;
  color: #ebdc4d;
}


.my-modal {
  z-index: 3;
  width: 600px;
  background-color: #f5eddf;
  margin: 1rem auto;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

.progress {
  width: 400px;
  height: 30px;
  border-radius: 10px;
  overflow: hidden;
    background-color:  #F4F3F6;
}

.circle {
  border: 1px solid black;
  padding: 5px;
  width: 35px;
  cursor: pointer;
  border-radius: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #f5eddf;
}

.level {
  border-radius: 100%;
  width: 20px;
  height: 20px;
  vertical-align:middle;
  margin-bottom:0.2rem
}

p {
  padding: 5px;
  cursor: pointer;
  font-weight: semi-bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.container {
  margin: 1rem auto;
  border-radius: 10px;
  background-color: #f5eddf;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  max-width:75%;
}

.alternatives {
  width: 350px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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

h2 {
  font-size: 1.4em;
}

.blueBtn {
  margin-bottom: 1rem !important;
}

.backBtn {
  background-color: #198754 !important;
  color: white !important;
  margin: 1rem auto;
}

.closeBtn {
  background-color: #dc3545 !important;
  color: white !important;
  margin: 1rem auto;
}
</style>
