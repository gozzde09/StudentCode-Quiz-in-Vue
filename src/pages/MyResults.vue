<script setup>
import DifficultyComp from '../components/DifficultyComp.vue';
import { ref, onMounted } from 'vue';

const localStorageData = ref(null);

// Function to retrieve data from local storage
const retrieveDataFromLocalStorage = () => {
  const latestQuizKey = 'latestQuizData'; // Nyckel för senast spelade quiz
  const latestQuizData = JSON.parse(localStorage.getItem(latestQuizKey));
  
  // Om det finns data för senast spelade quiz, sätt den som localStorageData
  if (latestQuizData) {
    localStorageData.value = [latestQuizData];
  } else {
    localStorageData.value = null;
  }
}

// Call the function on component mount
onMounted(() => {
  retrieveDataFromLocalStorage();
});

</script>
<template>
  <!-- Display local storage data -->
  <h1 class="display-4 mx-auto my-3 rubrik">Your Results!</h1>
  <div v-if="localStorageData">
    <div class="d-flex row mx-auto justify-content-evenly">
      <div class="d-flex flex-wrap mx-auto justify-content-evenly card" v-for="data in localStorageData"
        :key="data.category">
        <div class="d-flex">
          <h1 class="display-4 mx-auto rubrik">{{ data.category }}</h1>
          <DifficultyComp :difficulty="data.difficulty" />
        </div>
        <div class="mx-auto row justify-content-center">
          <div class="col-md-10">
            <div class="jumbotron">
              <h3 class="mx-auto">
                YOU GOT: <strong class="result">{{ data.correctAnswers }}/ {{ data.questionAmount }}</strong>
              </h3>
              <p class="lead mx-auto">
                Would you like to make another quiz or go to your result page?
              </p>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-content-between">
            <router-link to="/QuizStart" class="btn blueBtn backBtn mx-auto my-4">
              Try again
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h4>No quiz results found!</h4>
  </div>
</template>

<style scoped>

.card {
  padding: 10px;
  margin-bottom: 10px;
  max-width: 350px;
  background-color: #F4F3F6;
}

.card-body {
  margin: 6px;
  padding: 10px;
}
.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1rem;
}
</style>








