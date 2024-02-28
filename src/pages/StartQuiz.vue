<script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  const router = useRouter()
  const category = ref('') // Default
  const level = ref('') // Default
  const amount = ref() // Default
  const startQuiz = () => {
    // console.log('Selected Category:', category.value)
    // console.log('Selected Level:', level.value)
    // console.log('Selected Amount:', amount.value)
    //start the quiz with the selected category, level, and amount
    router.push(`/${category.value}/${level.value}/${amount.value}`)
  }
</script>

<template>
  <div class="container text-center my-5">
    <header class="row justify-content-center mb-5" id="the-jumbo">
      <div class="col-md-6">
        <div class="jumbotron">
          <h4 class="display-4">Alright, let's get started!</h4>
          <p class="lead">
            Before you begin, pick the topic, difficulty and the amount of
            questions you want in your quiz.
          </p>
        </div>
      </div>
    </header>
    <!-- Topic -->
    <div class="container justify-content-center mb-3">
      <h6 class="display-6">Choose a topic</h6>
      <div class="btn-group" role="group" aria-label="Topic">
        <input
          v-model="category"
          type="radio"
          class="btn-check"
          name="topic"
          id="html"
          value="html"
        />
        <label class="btn btn-outline-secondary" for="html">Html</label>

        <input
          v-model="category"
          type="radio"
          class="btn-check"
          name="topic"
          id="javascript"
          value="javascript"
        />
        <label class="btn btn-outline-secondary" for="javascript"
          >JavaScript</label
        >

        <input
          v-model="category"
          type="radio"
          class="btn-check"
          name="topic"
          id="php"
          value="php"
        />
        <label class="btn btn-outline-secondary" for="php">PHP</label>

        <input
          v-model="category"
          type="radio"
          class="btn-check"
          name="topic"
          id="wordpress"
          value="wordpress"
        />
        <label class="btn btn-outline-secondary" for="wordpress"
          >Wordpress</label
        >
      </div>
    </div>
    <!-- Difficulty -->
    <div class="container justify-content-center mb-3">
      <h6 class="display-6">Choose difficulty</h6>
      <div class="btn-group" role="group" aria-label="Difficulty">
        <input
          v-model="level"
          type="radio"
          class="btn-check"
          name="level"
          id="easy"
          value="easy"
        />
        <label class="btn btn-outline-secondary" for="easy">Easy</label>

        <input
          v-model="level"
          type="radio"
          class="btn-check"
          name="level"
          id="medium"
          value="medium"
        />
        <label class="btn btn-outline-secondary" for="medium">Medium</label>

        <input
          v-model="level"
          type="radio"
          class="btn-check"
          name="level"
          id="hard"
          value="hard"
        />
        <label class="btn btn-outline-secondary" for="hard">Hard</label>
      </div>
    </div>
    <!-- Antal frågor -->
    <div class="container justify-content-center mb-3">
      <h6 class="display-6">Choose amount of questions</h6>
      <div class="btn-group" role="group" aria-label="Question amount">
        <input
          v-model="amount"
          type="radio"
          class="btn-check"
          name="questionAmount"
          id="q5"
          value="5"
        />
        <label class="btn btn-outline-secondary" for="q5">5</label>

        <input
          v-model="amount"
          type="radio"
          class="btn-check"
          name="questionAmount"
          id="q10"
          value="10"
        />
        <label class="btn btn-outline-secondary" for="q10">10</label>

        <input
          v-model="amount"
          type="radio"
          class="btn-check"
          name="questionAmount"
          id="q15"
          value="15"
        />
        <label class="btn btn-outline-secondary" for="q15">15</label>

        <input
          v-model="amount"
          type="radio"
          class="btn-check"
          name="questionAmount"
          id="q20"
          value="20"
        />
        <label class="btn btn-outline-secondary" for="q20">20</label>
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
  .startBtn {
    background-color: #204764 !important;
    background-color: #198754 !important;
  }
</style>
