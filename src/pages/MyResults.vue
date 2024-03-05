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
  <h1 class="display-4 mx-auto my-3 rubrik">Your Results!</h1>
  <div class="d-flex row flex-wrap mx-auto justify-content-evenly" v-if="localStorageData">
    <div class="d-flex flex-wrap mx-auto justify-content-evenly card" v-for="data in localStorageData"
      :key="data.category">
      <div class="d-flex align-items.center">
        <h2 class=" mx-auto rubrik">{{ data.category }}</h2>
        <DifficultyComp :difficulty="data.difficulty" />
      </div>
      
      <div class="mx-auto row justify-content-center">
        <div class="col-md-10">
          <div class="jumbotron">
            <h5 class="mx-auto">
              YOU GOT: <strong class="result">{{
                data.correctAnswers }}/ {{ data.questionAmount }}</strong>
            </h5>
            <p class="lead mx-auto">
              Would you like to make another quiz or go to your result page?
            </p>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-between">
          <router-link to="/QuizStart" @click="categoryStore.setCategory(data.category)"
           class="btn blueBtn backBtn mx-auto my-4">
            Try again
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h4>DO MORE QUIZ!</h4>
  </div>
</template>

<style scoped>

.card {
  padding: 0px;
  margin-bottom: 10px;
  max-width: 300px;
  background-color: #F4F3F6;
}


</style>









