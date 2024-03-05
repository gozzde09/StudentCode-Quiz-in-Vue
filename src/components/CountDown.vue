<script setup>
  import { ref, onMounted, watch } from 'vue'

  const time = 90
  const timeleft = ref(time)
  const timeout = ref(false)
  let intervalId
  const notime = ref(false)

  const aliciastimer = () => {
    intervalId = setInterval(() => {
      if(timeleft.value > 0) {
        stoptimer(intervalId)
        timeleft.value--
      } else {
        clearInterval(intervalId)
        timeout.value = true
        notime.value = true
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
  <div v-if="notime">
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Oh nooo!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>You ran out of time. Would you like to go back and try again?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Go back to quiz</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
