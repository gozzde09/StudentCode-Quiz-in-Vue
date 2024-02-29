<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios';

  const router = useRouter()

  const category = ref('')
  const difficulty = ref('')
  const questionAmount = ref('')

  const topics = [
    { id: 'html', value: 'html', label: 'HTML' },
    { id: 'javascript', value: 'javascript', label: 'JavaScript' },
    { id: 'php', value: 'php', label: 'PHP' },
    { id: 'wordpress', value: 'wordpress', label: 'Wordpress' }
  ]
  const levels = [
  { id: 'easy', value: 'easy', label: 'Easy', color: '#198754' },
  { id: 'medium', value: 'medium', label: 'Medium', color: '#ebdc4d' },
  { id: 'hard', value: 'hard', label: 'Hard', color: '#dc3545' }
  ]

  const amounts = [
    { id: 'q5', value: '5', label: '5' },
    { id: 'q10', value: '10', label: '10' },
    { id: 'q15', value: '15', label: '15' },
    { id: 'q20', value: '20', label: '20' }
  ]

const QuizStart = async () => {
  if (!category.value || !difficulty.value || !questionAmount.value) {
    alert('Please select topic, difficulty, and question amount.')
    return
  }
  router.push(`QuizPage/${category.value}/${difficulty.value}/${questionAmount.value}`)
  try {
    await axios.get(`https://quizapi.io/api/v1/questions?apiKey=Fn3mWDcTNToCVxnnLtiH2OXe9XSGTcpUFpl3SUUq&limit=${questionAmount.value}&tags=${category.value}&difficulty=${difficulty.value}`)
  } catch (error) {
    console.error('There was an error lol!', error)
    router.push('/error')
  }
}

</script>

<template>
<div class="d-flex flex-column justify-content-center text-center">
    <h4 class="display-4 mx-auto my-3 rubrik">Alright, let's get started!</h4>
    <div class="mx-auto row justify-content-center">
      <div class="col-md-12">
        <div class="jumbotron">
          <p class="lead">
            Before you begin, pick the topic, difficulty and the amount of
            questions you want in your quiz.
          </p>
        </div>
      </div>
    </div>

    <div class="container justify-content-center my-3">
      <h2>Choose a topic</h2>
      <div class="btn-group" role="group" aria-label="Topic">
        <template v-for="topic in topics" :key="topic.id">
          <input
            v-model="category"
            type="radio"
            class="btn-check"
            :name="'topic'"
            :id="topic.id"
            :value="topic.value"
          />
          <label class="btn btn-outline-secondary" :for="topic.id">{{
            topic.label
          }}</label>
        </template>
      </div>
    </div>

    <div class="container justify-content-center mb-3">
      <h2>Choose difficulty</h2>
      <div class="btn-group" role="group" aria-label="Difficulty">
        <template v-for="level in levels" :key="level.id">
          <input
            v-model="difficulty"
            type="radio"
          class="btn-check"
            :name="'level'"
            :id="level.id"
            :value="level.value"
          />
          <label class="btn btn-outline-secondary level-btn" :for="level.id" :style="{ color: level.color }">{{
            level.label
          }}</label>
        </template>
      </div>
    </div>

    <div class="container justify-content-center mb-3">
      <h2>Choose amount of questions</h2>
      <div class="btn-group" role="group" aria-label="Question amount">
        <template v-for="amount in amounts" :key="amount.id">
          <input
            v-model="questionAmount"
            type="radio"
            class="btn-check"
            :name="'questionAmount'"
            :id="amount.id"
            :value="amount.value"
          />
          <label class="btn btn-outline-secondary" :for="amount.id">{{
            amount.label
          }}</label>
        </template>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-secondary btn-lg startBtn mx-auto my-4"
      @click="QuizStart"
    >
      Start Quiz!
    </button>
  </div>
</template>

<style scoped>
  .btn-check:checked + .btn,
  :not(.btn-check) + .btn:active,
  .btn:first-child:active,
  .btn.active,
  .btn.show {
    background-color: #204764 !important;
    border-color: #204764 !important;
    color: white !important;
  }
  .startBtn {
    background-color: #198754 !important;
  }
</style>
