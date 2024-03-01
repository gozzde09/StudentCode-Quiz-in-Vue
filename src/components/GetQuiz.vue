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

  // console.log('route.params.category ' + category.value)
  // console.log('route.params.level ' + level.value)
  // console.log('route.params.amount ' + amount.value)
  //A-B-C-D
  function getLetter(word) {
    const letter = word.split('_')[1].toUpperCase()
    return letter
  }
  //Välja svar
  function selectAnswer(key) {
    // console.log(key); //answer_a
    const selected = getLetter(key)
    console.log('Selected answer ' + selected)
    selectedAnswer.value = selected
    return selected
  }
  //Kontrollera om ett svar är valt
  function isSelected(key) {
    // console.log(key); //answer_a
    const isSelectedAnswer = getLetter(key)
    return selectedAnswer.value === isSelectedAnswer //True eller false
  }

  //Hämta rätt svar med en bokstav
  const getCorrectAnswer = () => {
    for (const key in currentQuestion.value.correct_answers) {
      if (currentQuestion.value.correct_answers[key] === 'true') {
        // console.log(key); //answer_a_correct
        const answer = getLetter(key)
        console.log('Correct answer ' + answer)
        return answer
      }
    }
  }
  //Nästa fråga med progress bar
  function nextQuestion() {
    revealAnswer.value = true
    console.log(selectedAnswer.value)
    if ( selectedAnswer.value !== getCorrectAnswer()) {
      selectedAnswer.value = getCorrectAnswer()
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
  function handleModal() {
    show.value = !show.value
  }
  const goBack = () => {
    router.push('/QuizStart')
  }
</script>

<template>
  <!-- RESPONSIVET?? -->
  <!-- MODAL- Skriv gärna mer innehåll i modal :) -->
  <!-- GODKÄNNA ATT STÄNGA QUIZ-->
  <div
    v-if="show"
    class="my-modal mx-auto d-flex flex-column flex-wrap"
    style="max-width: 40%"
  >
    <div class="flex">
      <h2 class="mx-auto my-2" style="color: #204764; font-weight: bolder">
        Are you sure?
      </h2>
      <button
        class="circle mx-auto"
        @click="handleModal"
        style="background-color: white"
      >
        X
      </button>
    </div>
    <div class="flex flex-wrap justify-content-between">
      <button type="button" class="btn backBtn" @click="handleModal">
        Back to the quiz!
      </button>
      <button type="button" class="btn closeBtn" @click="goBack">
        Close this quiz!
      </button>
    </div>
  </div>
  <div v-if="quizData && currentQuestion" class="container d-flex flex-column">
    <div class="flex">
      <!-- Difficulty: -->
      <div class="levels mx-1">
        <span
          class="level mx-1 easy"
          style="display: inline-block"
          :style="{ opacity: currentQuestion.difficulty === 'Easy' ? 1 : 0.3 }"
        />
        <span
          class="level mx-1 medium"
          style="display: inline-block"
          :style="{
            opacity: currentQuestion.difficulty === 'Medium' ? 1 : 0.3
          }"
        />
        <span
          class="level mx-1 hard"
          style="display: inline-block"
          :style="{ opacity: currentQuestion.difficulty === 'Hard' ? 1 : 0.3 }"
        />
      </div>
      <h2 class="mx-auto my-2" style="color: #204764; font-weight: bolder">
        {{ currentQuestion.tags[0].name }}
      </h2>

      <button
        class="circle"
        @click="handleModal"
        style="background-color: white"
      >
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
      <!-- BUTTON BLIR INTE RED!!!. TITTA FUNKTIONEN I NEXT-QUESTION  -->
      <!-- SKAPA EN FUNKTION SOM KONTROLLERAR SVARET MED PARAMETER OCH RETURNERAR FALSE-TRUE -->
      <div
        v-if="answer"
        class="mx-auto alternatives"
        :class="{
          default: !isSelected(key),
          reveal: !revealAnswer && isSelected(key),
          correct:
            revealAnswer &&
            isSelected(key) &&
            selectAnswer(key) === getCorrectAnswer(),
          wrong:
            revealAnswer &&
            isSelected(key) &&
            selectAnswer(key) !== getCorrectAnswer()
        }"
        @click="selectAnswer(key)"
        :active="isSelected(key)"
      >
        <p
          v-if="revealAnswer && isSelected(key) && getCorrectAnswer()"
          class="icon"
        >
          <img src="../assets/check.svg" alt="check-symbol" />
        </p>
        <span v-else class="circle d-flex justify-content-center">{{
          getLetter(key)
        }}</span>
        <p class="d-flex">{{ answer }}</p>
      </div>
    </div>
    <BButton
      class="mx-auto px-4 my-2 blueBtn"
      style="max-width: 75%"
      variant="success"
      @click="nextQuestion()"
      :disabled="buttonDisabled"
    >
      {{ buttonText }}
    </BButton>
  </div>
</template>
<style scoped>
  .easy {
    background-color: #198754;
  }

  .correct {
    background-color: #198754;
  }

  .hard {
    background-color: #ff544d;
  }

  .wrong {
    border: 6px solid #ff544d;
  }

  .reveal {
    background-color: #f5e76c;
  }

  .medium {
    background-color: #ffb429;
  }

  .my-modal {
    z-index: 3;
    width: 600px;
    background-color: #f5eddf;
    margin: 1rem auto;
    border-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
  }

  .progress {
    width: 400px;
    height: 30px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f4f3f6;
  }

  .container {
    margin: 2rem auto;
    border-radius: 10px;
    background-color: #f5eddf;
    border-radius: 20px;
    max-width: 65%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
  }

  .levels {
    border: 1px solid #204764;
    border-radius: 5px;
  }

  .default {
    background-color: #f4f3f6;
  }

  .alternatives {
    width: 50%;
    box-sizing: border-box;
    /*Jämlika knappar*/
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
  }

  .circle {
    border: 1px solid black;
    min-width: 30px;
    cursor: pointer;
    border-radius: 100%;
    background-color: #f5eddf;
    margin: 0.4rem !important;
    vertical-align: middle;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
  }

  .level {
    border-radius: 100%;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-bottom: 0.2rem;
  }

  .alternatives:hover,
  .circle:hover {
    background-color: #e1dfe3;
  }

  .circle:hover {
    background-color: #f5e76c !important;
  }

  .alternatives > p {
    padding: 5px;
    margin: 0.5rem 0;
  }

  .flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 1.4em;
  }

  .blueBtn {
    margin-bottom: 2rem !important;
  }

  .backBtn {
    background-color: #198754 !important;
    color: white !important;
    margin: 1rem auto;
  }

  .closeBtn {
    background-color: #ff544d !important;
    color: white !important;
    margin: 1rem auto;
  }

  .closeBtn:hover,
  .backBtn:hover {
    opacity: 0.9;
  }
</style>
