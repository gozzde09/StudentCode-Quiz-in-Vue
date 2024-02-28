<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.push('/QuizStart')
}
</script>
<template>
   <div class="d-flex flex-column mx-auto justify-content-evenly">
      <h1 class="display-4 mx-auto my-3">Oops, something went wrong!</h1>
      <div class="mx-auto row justify-content-center">
        <div class="col-md-6">
          <div class="jumbotron">
            <p class="lead">It seems like the page you're looking for can't be found. Try again later or pick another
              difficulty/topic/question amount.</p>
          </div>
        </div>
      </div>
    </div>
  <div class="text-center">
    <button type="button" class="btn btn-secondary btn-lg backBtn my-4" @click="goBack">
      Take me back!
    </button>
  </div>
</template>

<style scoped>
.backBtn {
  background-color: #204764 !important;
}
h1 {
  color: rgb(21, 52, 76);
  font-weight: 400;
}
</style>
