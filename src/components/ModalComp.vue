<template>
  <!-- Button trigger modal -->
  <div>
    <b-button v-b-modal.modal-1 class="circle align-self-end" style="background-color: white; color:black">X</b-button>
    <b-modal id="modal-1">
      <h2 class="mx-auto my-2 text-center" style="color: #204764; font-weight: bolder">
        Are you sure you want to close the quiz?
      </h2>
      <h2 class="mx-auto my-2 text-center">Your progress will be lost.</h2>
      <template #footer>
        <button data-v-e2619669="" class="btn btn-md btn-secondary backBtn" type="button">Back to the
          quiz</button>
          <!-- FUNKAR EJ -->
        <router-link to="/QuizStart" class="btn closeBtn">
          Close this quiz
        </router-link>
      </template>
    </b-modal>
  </div>
</template>
<style>
.modal-body {
  background-color: #f4f3f6;
}

.custom-modal {
  background-color: #f5eddf;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.circle{
  border: 1px solid black;
  min-width: 30px;
  cursor: pointer;
  border-radius: 100%;
  background-color: #f5eddf;
  margin: 0.4rem !important;
  vertical-align: middle;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
}
.circle:hover,.btn-close:hover {
  background-color: #f5e76c !important;
}
.backBtn {
  background-color: #198754 !important;
}

.closeBtn {
  background-color: #ff544d !important;
}

.backBtn,
.closeBtn {
  color: white !important;
  margin: 1rem auto;
}

.closeBtn:hover,
.backBtn:hover {
  opacity: 0.9;
}
</style>
