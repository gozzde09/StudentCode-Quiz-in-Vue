<script setup>
  import { ref, onMounted, watch } from 'vue'

  // Skiss på lösning med timer utefter frågelängd:
  // timeQuiz = 4
  // const props = defineProps({
  //   type: Number,
  //   default: 10
  // })
  // const time = ref(timeQuiz * props.questionNumber)
  // const timeleft = ref(titalTime.value)

  const time = 80
  const timeleft = ref(time)
  const timeout = ref(false)
  let intervalId
  const notime = ref(false)

  const aliciastimer = () => {
    intervalId = setInterval(() => {
      if(timeleft.value > 0) {
        timeleft.value--
      } else {
        // stoptimer(intervalId)
        timeout.value = true
        notime.value = true
        console.log(notime.value)
        clearInterval(intervalId)
      }
    }, 1000)
  }

  const stoptimer = () => {
    clearInterval(intervalId)
  }

  onMounted(() => {
    aliciastimer()
  })

  watch(timeleft, (newValue) => {
    console.log(newValue)
  })
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="p-4">
      <p> {{ timeleft }} seconds remaining</p>
    </div>
  </div>
  <div v-if="notime">
    <div>
    <b-modal id="modal-1" v-model="notime">
      <h2 class="mx-auto my-2 text-center" style="color: #204764; font-weight: bolder">
        Oh no!
      </h2>
      <h2 class="mx-auto my-2 text-center">You ran out of time. Your progress will be lost. Better luck next quiz!</h2>
      <template #footer>
        <router-link to="/QuizStart" class="btn closeBtn">
          Go back to start
        </router-link>
      </template>
    </b-modal>
  </div>
  </div>
</template>
