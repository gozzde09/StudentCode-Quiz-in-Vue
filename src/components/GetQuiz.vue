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
    }, 3000)
    if (currentQuestionIndex.value === quizData.value.length - 1) {
      buttonDisabled.value = true
      buttonText.value = 'DONE'
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
      <h2 class="mx-auto my-2" style="color: #204764; font-weight: bolder">
        Category: {{ currentQuestion.tags[0].name }}
      </h2>
      <button class="circle" @click="clickk" style="background-color: white">
        X
      </button>
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
      class="d-flex mt-3 flex-wrap"
    >
      <!-- BUTTON BLIR INTE RED!!!. Fixa färg till reveal i JS? -->
      <button
        v-if="answer"
        class="mx-auto alternatives"
        :class="{
          reveal: !revealAnswer && isSelected(key),
          wrong:
            revealAnswer && isSelected(key) && getCorrectAnswer() === false,
          correct: revealAnswer && isSelected(key) && getCorrectAnswer()
        }"
        @click="selectAnswer(key)"
        :active="isSelected(key)"
      >
        <p class="circle">{{ lastLetter(key) }}</p>
        <p class="d-flex">{{ answer }}</p>
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
  </div>
</template>
<style scoped>
  .green {
    background-color: #198754;
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
    width: 400px;
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
    font-weight: semi-bold;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #ede8e3;
  }

  p {
    padding: 5px;
    cursor: pointer;
    font-weight: semi-bold;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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

  .nextButton {
    background-color: #204764 !important;
    color: #ffffff !important;
    padding: 10px;
    margin-bottom: 1rem !important;
  }
</style>
