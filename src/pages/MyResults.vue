<script setup>
  import { ref, onMounted } from 'vue'
  import { useCategoryStore } from '../store.js'
  const categoryStore = useCategoryStore()
  import DifficultyComp from '../components/DifficultyComp.vue'

  const localStorageData = ref([])
  // Hämta data från local storage
  const getDataFromLocalStorage = () => {
    localStorageData.value = Object.keys(localStorage)
      .filter((key) => key.startsWith('quizDataObject_'))
      .map((key) => JSON.parse(localStorage.getItem(key)))
      .sort((a, b) => a.category.localeCompare(b.category)) //alfabetisk
  }

  // Anropa  funktionen
  onMounted(() => {
    getDataFromLocalStorage()
  })
</script>

<template>
  <!-- Display local storage data in a table -->
  <div
    class="d-flex flex-column flex-wrap justify-content-center my-4 card mx-auto"
    v-if="localStorageData.length > 0"
  >
    <h1 class="mx-auto mt-4 rubrik text-center">
      Results from previous quizzes
    </h1>
    <h4 class="mx-4 mt-2 text-center">
      Your recent scores in these difficulties and categories. Are you satisfied
      or would you like to renew it? It's up to you!
    </h4>

    <table
      class="table justify-content-between mx-auto my-4"
      style="max-width: 70%"
    >
      <thead class="justify-content-between mx-auto">
        <tr>
          <th>Category</th>
          <th>Difficulty</th>
          <th>Result</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in localStorageData" :key="data.category">
          <td>
            <h4 class="rubrik">{{ data.category }}</h4>
          </td>
          <td>
            <DifficultyComp :difficulty="data.difficulty" />
          </td>
          <td>
            <h6 class="my-2">
              Your result:
              <strong class="result"
                >{{ data.correctAnswers }}/{{ data.questionAmount }}</strong
              >
            </h6>
          </td>
          <td>
            <router-link
              to="/QuizStart"
              @click="categoryStore.setCategory(data.category)"
              class="btn btn-outline-success"
            >
              Try again
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <div
      class="d-flex flex-wrap justify-content-evenly card mx-auto my-4"
      style="max-width: 40%"
    >
      <div class="d-flex align-items-center my-4">
        <h2 class="mx-auto rubrik my-2">Oops!</h2>
      </div>

      <div class="mx-auto row justify-content-center">
        <div class="col-md-10">
          <div class="jumbotron">
            <h5 class="mx-auto">You haven't done any quizzes yet!</h5>
            <p class="lead mx-auto">Would you like to do a quiz?</p>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-between">
          <router-link
            to="/QuizStart"
            class="btn btn-outline-success mx-auto my-4"
          >
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
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 530px) {
    .card {
      max-width: 80%;
    }
  }

  @media only screen and (min-width: 850px) {
    .card {
      max-width: 70%;
    }
  }
</style>
