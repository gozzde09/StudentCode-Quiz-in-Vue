<script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

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
    { id: 'easy', value: 'easy', label: 'Easy' },
    { id: 'medium', value: 'medium', label: 'Medium' },
    { id: 'hard', value: 'hard', label: 'Hard' }
  ]

  const amounts = [
    { id: 'q5', value: '5', label: '5' },
    { id: 'q10', value: '10', label: '10' },
    { id: 'q15', value: '15', label: '15' },
    { id: 'q20', value: '20', label: '20' }
  ]

  const startQuiz = () => {
    if (!category.value || !difficulty.value || !questionAmount.value) {
      alert('Please select topic, difficulty, and question amount.')
      return
    }
    router.push(
      `/${category.value}/${difficulty.value}/${questionAmount.value}`
    )
  }
</script>

<template>
  <div class="container text-center my-4">
    <header class="row justify-content-center" id="the-jumbo">
      <div class="col-md-6">
        <div class="jumbotron">
          <h4 class="display-5">Alright, let's get started!</h4>
          <p class="lead">
            Before you begin, pick the topic, difficulty and the amount of
            questions you want in your quiz.
          </p>
        </div>
      </div>
    </header>

    <div class="container justify-content-center my-3">
      <h6 class="display-6">Choose a topic</h6>
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
      <h6 class="display-6">Choose difficulty</h6>
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
          <label class="btn btn-outline-secondary" :for="level.id">{{
            level.label
          }}</label>
        </template>
      </div>
    </div>

    <div class="container justify-content-center mb-3">
      <h6 class="display-6">Choose amount of questions</h6>
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
      class="btn btn-secondary btn-lg startBtn"
      @click="startQuiz"
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
  }
  h4 {
    color: #204764;
  }
  .startBtn {
    background-color: #204764 !important;
    background-color: #198754 !important;
  }
</style>
