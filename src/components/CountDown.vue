<script setup>
  import { ref, onMounted, watch } from 'vue'

  const time = 5
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
  <div>
    <p> {{ timeleft }} seconds remaining</p>
  </div>
  <div v-if="notime">
    Oh no! You ran out of time
  </div>
</template>
