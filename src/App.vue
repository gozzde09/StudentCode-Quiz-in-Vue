<script setup>
import NavBar from "./components/NavBar.vue"
</script>

<template>
  <!-- <header class="d-flex flex-column">
    <div class="d-flex">
      <img src="./assets/quiz.svg" alt="Logo" style="width:150px" />
      <h1 class="mx-auto"> StudentCode </h1>
      </div>
      <h2 class="mx-auto">Don't cheat - Repeat</h2>
  </header> -->
  <header class="d-flex">
    <img src="./assets/quiz.svg" alt="Logo" id="logo" />
    <div class="d-flex flex-column mx-auto justify-content-center">
      <h1 class="mx-auto">StudentCode</h1>
      <h2 class="mx-auto">Don't cheat - Repeat</h2>
    </div>
  </header>

  <NavBar />

  <main>
    <RouterView />
    <!-- <Quiz /> -->
  </main>

  <footer>
    <div class="footer-content">
      <div class="about-us">
        <h3> OM OSS </h3>
        <p>Vi på StudentCode är dedikerade till att erbjuda
          engagerande och underhållande quiz för studenter,
          som tar dig på en resa genom kodens värld.
          Upptäck vårt sortimen av quiz för att fördjupa
          dina kunskaper och ha kul samtidigt!</p>
      </div>
      <div class="contact">
        <h3> KONTAKTA OSS </h3>
        <p><a href="quiz@studentcode.com"> </a>
          <a href="tel:+46 324 854 93"> </a>.
        </p>
      </div>
      <div class="social-media">
        <h3> SOCIALA MEDIER </h3>
        <p>
          <a href="https://www.facebook.com/studentcode">Facebook</a>
          <a href="https://www.instagram.com/studentcode">Instagram</a>
        </p>
      </div>


      <div class="our-quizzes">
        <h3> VÅRA QUIZ </h3>
        <p> <a href="HTML"></a> <a href="PHP"></a> <a href="JS"></a>.</p>
      </div>
      <div class="git-hub">
        <h3> GIT-HUB </h3>
        <p> <a href="Länk till våra git-hub"></a>.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #fbfbfb);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#logo{
  width:150px;
  margin:1rem -1rem -1rem 1rem ;
}
</style>
