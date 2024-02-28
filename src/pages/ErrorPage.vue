<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const goBack = () => {
  router.push('/StartQuiz')
}
</script>
<template>
  <header class="d-flex flex-column mx-auto justify-content-evenly">
    <h3 class="mx-auto my-3">Oops, something went wrong!</h3>
    <div class="mx-auto row justify-content-center">
      <div class="col-md-10">
        <div class="jumbotron">
          <p class="lead">It seems like the page you're looking for can't be found. Try again later or pick another
            difficulty/topic/question amount</p>
        </div>
      </div>
    </div>
  </header>
  <div class="text-center">
    <button type="button" class="btn btn-secondary btn-lg backBtn" @click="goBack">
      Take me back!
    </button>
  </div>
</template>

<style scoped>
.backBtn {
  background-color: #204764 !important;
}
</style>
