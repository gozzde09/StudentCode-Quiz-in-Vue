<script setup>
  import { ref, onMounted } from 'vue'

  const time = 90
  const timeleft = ref(time)
  const timeout = ref(false)

  const aliciastimer = () => {
    const interval = setInterval(() => {
      timeleft.value--

      if(timeleft.value <= 0) {
        stoptimer(interval)
        timeout.value = true
      }
    }, 1000)
  }

  onMounted(() => {
    aliciastimer()
  })

  watch(timeleft, (newValue) => {
    console.log(newValue)
  })
</script>

<template>
  <div></div>
</template>
