<script setup>
  import { ref, onMounted, watch } from 'vue'

  const time = 90
  const timeleft = ref(time)
  const timeout = ref(false)
  let intervalId

  const aliciastimer = () => {
    intervalId = setInterval(() => {
      if(timeleft.value > 0) {
        stoptimer(intervalId)
        timeleft.value--
      } else {
        clearInterval(intervalId)
        timeout.value = true
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
  <div >
    <p>{{ timeleft }}</p>
  </div>
</template>
