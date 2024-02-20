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

const show = ref(false)
function clickk() {
  show.value = !show.value
}

function lastLetter(word) {
  let letter = word.slice(-1).toUpperCase();
  return letter;
}
</script>

<template>
  <div class="overlay">
    <!-- GODKÄNNA ATT STÄNGA QUIZ -->
    <button @click="clickk" :class="{ active: show }">Toggle Overlay</button>
  </div>
  <div v-if="quizData" class="container">
    <div v-if="show" class="my-modal">
      <button class="circle" @click="clickk">close</button>
    </div>

    <div class="flex">
      <h1 class="mx-auto"> {{ currentQuestion.tags[0].name }}</h1>
      <button @click="clickk">X</button> <!--modal-->
    </div>

    <div class="center" style="display: flex;">
      <div class="progressBar">
        <div class="valueProgress"></div>
      </div>
      <p>2/5</p>
      <!--TODO PROGRESSBAR , karusel? -->
    </div>
    <h2 class="center" v-if="selectedAnswers === currentQuestion.correct_answer">
      <strong> Correct Answer! </strong>
    </h2>

    <h2 class="center">{{ currentQuestion.question }}</h2>

    <div v-for="(answer, key) in  currentQuestion.answers " :key="key" class="center" style="margin-top: 40px;">
      <Button v-if="answer" class="alternatives"
        :class="{ 'green': isSelected(key) && selectedAnswers === currentQuestion.correct_answer, 'red': isSelected(key) && selectedAnswers !== currentQuestion.correct_answer }"
        @click="selectAnswer(key)" :active="isSelected(key)">
        <p class="circle">{{ lastLetter(key) }}</p>
        <h3>{{ answer }}></h3>
      </Button>
    </div>

    <!-- <div class="center">
      <button @click="nextQuestion" class="continue">Continue</button>
    </div>
  -->
    <div class="d-flex justify-content-around m-2">
      <BButton class="m-2" variant="success" @click="prevQuestion" :disabled="currentQuestionIndex === 0">Previous
        Question</BButton>
      <BButton class="m-2" variant="success" @click="nextQuestion"
        :disabled="currentQuestionIndex === quizData.length - 1">
        Next Question</BButton>
    </div>
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

.green {
  background-color: green;
}

.red {
  background-color: red;
}

.correct {
  background-color: green;
  /* border-color: rgb(1, 88, 1);
  border-width: 4px; */
  border: 2px solid rgb(1, 88, 1)
}

.wrong {
  background-color: red;
  border: 2px solid rgb(102, 0, 0)
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.my-modal {
  /* display: none; */
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 50;
  top: 50;
  width: 400px;
  /* Full width */
  height: 400px;
  /* Full height */
  background-color: rgb(141, 10, 10);
}

.progressBar {
  width: 350px;
  height: 30px;
  border: 2px solid green;
  border-radius: 10px;
  overflow: hidden;
}

.valueProgress {
  width: 10%;
  height: 100%;
  background-color: rgb(1, 141, 1);

  /* background: linear-gradient(to right, #e5405e 0%, #ffdb3a 45%, #3fffa2 100%); */
  /* border-radius: 7px; */
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
  margin-bottom: 0.5rem
}

.container {
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0.20);
  min-height: 700px;
  min-width: 370px;
  border-radius: 10px;
  position: relative;


}

.alternatives {
  min-width: 200px;
  max-width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 20px;
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

.continue {
  width: 200px;
  position: absolute;
  bottom: 10px;
  border-radius: 10px;
  background-color: rgb(54, 54, 222);
  color: white;
  padding: 10px 0;
}

/* @media only screen and (min-width: 800px) {
  .continue {
    display: none;
  }
} */
</style>
