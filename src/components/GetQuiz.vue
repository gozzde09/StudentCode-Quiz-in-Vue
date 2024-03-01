<script setup>
  import { ref, onMounted, computed } from 'vue'
  import axios from 'axios'
  const quizData = ref(null)
  const currentQuestionIndex = ref(0)
  const selectedAnswer = ref('')
  const progress = ref(0)
  const revealAnswer = ref(false)
  const buttonDisabled = ref(false)
  const buttonText = ref('Continue')
  const optionsButtonDisabled = ref(false)

  const isAnswerIncorrect = ref(null)
  const isAnswerIncorrect2 = ref(false)

  //räkna poäng
  const done = ref('')
  const totalCorrectAnswers = ref(0)

  onMounted(async () => {
    try {
      const result = await axios.get(
        'https://quizapi.io/api/v1/questions?apiKey=Fn3mWDcTNToCVxnnLtiH2OXe9XSGTcpUFpl3SUUq&limit=5&tags=javascript'
      )
      quizData.value = result.data
    } catch (error) {
      console.log(error)
    }
  })
  const currentQuestion = computed(() => {
    return quizData.value[currentQuestionIndex.value]
  })

  //Välja svar updateSelectedAnswer(optionValue)
  function selectAnswer(key) {
    const selected = key.split('_')[1]
    console.log('Selected answer ' + selected)
    selectedAnswer.value = selected

    const correctAnswer = getCorrectAnswer();
    isAnswerIncorrect2.value = false


    if (selected === correctAnswer) {
    totalCorrectAnswers.value++
  }else {
    console.log('incorrect answer')
    isAnswerIncorrect.value = key
    isAnswerIncorrect2.value = true
  }
  }
  //Kontrollera om ett svaret matchar selectedAnswer
  //compareSelectedAnser(optionsValue)
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
    optionsButtonDisabled.value = true;
    if (selectedAnswer.value !== getCorrectAnswer()) {
      selectedAnswer.value = getCorrectAnswer()
      // console.log(`Correct answer : ${getCorrectAnswer()}`)

    }

    setTimeout(() => {
      currentQuestionIndex.value++
      selectedAnswer.value = ''
      progress.value += 300 / quizData.value.length
      revealAnswer.value = false
      optionsButtonDisabled.value = false


    }, 1000)
    if (currentQuestionIndex.value === quizData.value.length - 1) {
      buttonDisabled.value = true
      buttonText.value = 'DONE'

      done.value = 'Done'

    }
  }
  //Stänga quiz
  const show = ref(false)
  function clickk() {
    show.value = !show.value
  }
</script>

<template>
  <div v-if="quizData && currentQuestion" class="container d-flex flex-column">
    <!-- GODKÄNNA ATT STÄNGA QUIZ-->
    <!-- RESPONSIV? -->
    <div v-if="show" class="my-modal mx-auto flex">
      <h2 class="mx-auto">Are you sure?</h2>
      <button class="circle" @click="clickk">X</button>
    </div>

    <div class="flex">
      <h1 class="mx-auto">Category: {{ currentQuestion.tags[0].name }}</h1>
      <button @click="clickk" style="background-color: white">X</button>
      <!--Öppnar modal-->
    </div>

    <!-- ProgressBar -->
    <div class="mx-auto d-flex flex-column">
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          :style="{ width: progress + 'px' }"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ currentQuestionIndex }} /{{ quizData.length }}
        </div>
      </div>
    </div>
<!-- FRÅGA -->
    <h2 class="mx-auto my-3" style="max-width: 60%">
      {{ currentQuestionIndex + 1 }}. {{ currentQuestion.question }}
    </h2>
    <!-- ALTERNATIV -->
    <div
      v-for="(answer, key) in currentQuestion.answers"
      :key="key"
      class="d-flex mt-3"
    >
      <!-- BUTTON BLIR INTE RED!!!. Fixa färg till reveal i JS? -->
      <button
        v-if="answer"
        class="mx-auto alternatives"
        :class="{
          disableButton: optionsButtonDisabled,
          reveal: !revealAnswer && isSelected(key),
          correct: revealAnswer && isSelected(key) && getCorrectAnswer(),
          wrong: revealAnswer && !isSelected(key) && key===isAnswerIncorrect && isAnswerIncorrect2


        }"
        @click="selectAnswer(key)"
        :active="isSelected(key)"
      >
        <p class="circle">{{ lastLetter(key) }}</p>
        <h3>{{ answer }}</h3>
      </button>
    </div>
    <BButton
      class="mx-auto px-4 my-2 nextButton"
      style="max-width: 75%"
      variant="success"
      @click="nextQuestion"
      :disabled="buttonDisabled"
    >
      {{ buttonText }}
    </BButton>

    <h4 v-if="done">Totalt antal rätt svar: {{ totalCorrectAnswers }}</h4>
  </div>
  <!--komponent result
        props
        :correctAnswer="totalCorrectAnswers"
        :currentIndex="currentQuestionIndex"
      i result komponenten:
      import {defineProps} from 'vue'
      const {correctAnswer, currentIndex } = defineProps(['correctAnswer','currentIndex'])-->
  <div v-else>
    <h1>{{ totalCorrectAnswers }} / {{ currentQuestionIndex }}</h1>
  </div>
</template>
<style scoped>
.disableButton{
  pointer-events: none;
  cursor: default;
}
  .green {
    background-color:#198754;
  }
.correct {
    border: 6px solid #198754;
  }
  .red {
    background-color: #dc3545;
  }
 .wrong {
    border: 6px solid #dc3545;
  }
  .reveal {
    background-color: #caac29;
  }
  .my-modal {
    z-index: 3;
    width: 400px;
    height: 300px;
    background-color: #caac29;
    margin-bottom: -400px;
  }

  .progress {
    width: 300px;
    height: 30px;
    border-radius: 10px;
    overflow: hidden;
  }

  .circle {
    border: 1px solid black;
    padding: 5px;
    width: 35px;
    cursor: pointer;
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
  }

  .flex button {
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
  .nextButton {
    background-color: #204764 !important;
    color: #ffffff !important;
    padding: 10px;
    margin-bottom: 1rem !important;
  }
</style>
