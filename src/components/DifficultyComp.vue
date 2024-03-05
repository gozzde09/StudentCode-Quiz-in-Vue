<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  difficulty: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="levels mx-2 p-1">
    <!-- <span> Difficulty: </span> -->
    <span v-if="props.difficulty === 'Easy'">
      <i class="bi bi-star-fill level mx-1 easy" />
      <i class="bi bi-star level mx-1 easy" />
      <i class="bi bi-star level mx-1 easy" />
    </span>
    <span c v-if="props.difficulty === 'Medium'">
      <i class="bi bi-star-fill level mx-1 medium" />
      <i class="bi bi-star-fill level mx-1 medium" />
      <i class="bi bi-star level mx-1 medium" />
    </span>
    <span v-if="props.difficulty === 'Hard'">
      <i class="bi bi-star-fill level mx-1 hard" />
      <i class="bi bi-star-fill level mx-1 hard" />
      <i class="bi bi-star-fill level mx-1 hard" />
    </span>
  </div>
</template>

<style>
.easy {
  color: #198754;
}

.hard {
  color: #ff544d;
}

.medium {
  color: #ffb429;
}

/* span{
  color:#204764;
} */
.levels {
  background-color: #f4f3f6;
  border: 1px solid #204764;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
}
</style>
