<script setup>
import { useCategoryStore } from '../store.js'
const categoryStore = useCategoryStore()
import DifficultyComp from '../components/DifficultyComp.vue';
import { ref, onMounted } from 'vue';
const localStorageData = ref([]);
// Function to retrieve data from local storage
const retrieveDataFromLocalStorage = () => {
  localStorageData.value = Object.keys(localStorage)
    .filter(key => key.startsWith('quizDataObject_'))
    .map(key => JSON.parse(localStorage.getItem(key)));
}

// Call the function on component mount
onMounted(() => {
  retrieveDataFromLocalStorage();
});

</script>

<template>
  <!-- Display local storage data -->
  <h1 class=" mx-auto mt-4 rubrik">Results from previous quizzes</h1>
  <div class="d-flex row flex-wrap justify-content-evenly my-4" v-if="localStorageData.length > 0">
    <div class="d-flex flex-wrap card" v-for="data in localStorageData" :key="data.category">
      <div class="d-flex align-items-center justify-content-around">
        <h3 class=" rubrik my-2">{{ data.category }}</h3>
        <DifficultyComp :difficulty="data.difficulty" />
      </div>

      <div class="mx-auto row justify-content-center">
        <div class="col-md-10">
          <div class="jumbotron d-flex flex-column mx-auto">
            <h6>
              Your result: <strong class="result">{{
                data.correctAnswers }}/{{ data.questionAmount }}</strong>
            </h6>
            <p class=" mx-auto">
              Your recent score in this difficulty and category. Are you satisfied or would you like to renew it? It's up to you!
            </p>
            <router-link to="/QuizStart" @click="categoryStore.setCategory(data.category)"
              class="btn blueBtn backBtn mx-auto my-2">
              Try again
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="d-flex flex-wrap justify-content-evenly card mx-auto">
      <div class="d-flex align-items-center">
        <h2 class=" mx-auto rubrik my-2">Oops!</h2>
      </div>

      <div class="mx-auto row justify-content-center">
        <div class="col-md-10">
          <div class="jumbotron">
            <h5 class="mx-auto">
              You haven't done any quizzes yet!
            </h5>
            <p class="lead mx-auto">
              Would you like to do a quiz?
            </p>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-between">
          <router-link to="/QuizStart" class="btn blueBtn backBtn mx-auto my-4">
            Start a quiz
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  padding: 0px;
  margin-bottom: 1rem;
  max-width: 300px;
}

</style>
