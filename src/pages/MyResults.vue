<script setup>
import DifficultyComp from '../components/DifficultyComp.vue';
import { ref, onMounted } from 'vue';
const localStorageData = ref([]);

// Function to retrieve data from local storage
const retrieveDataFromLocalStorage = () => {
  localStorageData.value = Object.keys(localStorage)
    .filter(key => key.startsWith('quizDataObject_'))
    .map(key => JSON.parse(localStorage.getItem(key)))
    .sort((a, b) => {
      // Sort by category (HTML, JavaScript, PHP, WordPress)
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
}

// Call the function on component mount
onMounted(() => {
  retrieveDataFromLocalStorage();
});

</script>

<template>
  <!-- Display local storage data -->
  <h1 class="display-4 mx-auto my-3 rubrik">Your Results!</h1>
  
  <!-- Render data for each category -->
  <div v-for="category in ['HTML', 'JavaScript', 'PHP', 'WordPress']" :key="category">
    <div class="category-wrapper" v-if="hasResultsForCategory(category)">
      <h2 class="category-title">{{ category }}</h2>
      <div class="d-flex flex-wrap mx-auto justify-content-evenly card" v-for="data in filteredDataByCategory(category)" :key="data.category">
        <!-- Your existing template here -->
      </div>
    </div>
  </div>

  <!-- Display message if no results are available -->
  <div v-if="!localStorageData || localStorageData.length === 0">
    <h4>DO MORE QUIZ!</h4>
  </div>
</template>

<style scoped>
/* Your existing styles here */

.category-wrapper {
  margin-top: 20px;
}

.category-title {
  margin-bottom: 10px;
  font-size: 2rem;
}
</style>









