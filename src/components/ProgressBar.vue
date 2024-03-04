<script setup>
  import { defineProps } from 'vue'
  const props = defineProps({
    progressPercent: {
      type: Number,
      required: true
    },
    totalQuestion: {
      type: Number,
      required: true
    }
  })
</script>

<template>
  <div class="mx-auto d-flex align-items-center">
    <span class="mx-2 amount"> 0 </span>
    <div class="progress">
      <div
        class="progress-bar bg-success progress-bar-striped progress-bar-animated"
        role="progressbar"
        :style="{ width: props.progressPercent + '%' }"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
    <span class="mx-2 amount">{{ props.totalQuestion }} </span>
  </div>
</template>

<style>
  .progress {
    width: 10rem;
    height: 25px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f4f3f6;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
  }

  .amount {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 530px) {
    .progress {
      width: 15rem;
    }
  }

  @media only screen and (min-width: 850px) {
    .progress {
      width: 20rem;
    }
  }
</style>
