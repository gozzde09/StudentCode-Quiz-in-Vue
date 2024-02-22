
<script setup>

import Quiz from "./components/Quiz.vue";
import NavBar from "./components/NavBar.vue"

</script>

<template>
  <header class="d-flex flex-column">
    <div class="d-flex flex-column">
      <h1 class="mx-auto"> StudentCode </h1>
      <h2 class="mx-auto">Don't cheat - Repeat</h2>
    </div>
  </header>
  <NavBar />

  <main>
    <RouterView />
    
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
            <p> quiz@studentcode.com</p>
             <p> +46 324 854 93 </p>
        </div>
        <div class="social-media">
    <h3> SOCIALA MEDIER </h3>
    <p> https://www.facebook.com/studentcode </p>
        <p> https://www.instagram.com/studentcode </p>
</div>

  
        <div class="our-quizzes">
            <h3> VÅRA QUIZ </h3>
            <p> HTML </p> 
            <p> PHP</p> 
            <p> JS </p>
        </div>
        <div class="git-hub">
            <h3> GIT-HUB </h3>
            <p> <a href="Länk till våra git-hub"></a>.</p>
        </div>
    </div>
</footer>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    background-color: #333;
    color: white;
    padding: 20px;
}

.footer-content {
    display: flex;
}

.footer-content > div {
    margin-right: 20px;
}

.footer-content h3 {
    margin-top: 0;
}

.footer-content p {
    margin-bottom: 0;
}

.footer-content a {
    color: white;
    text-decoration: none;
    margin-right: 10px;
}

.footer-content a:hover {
    text-decoration: underline;
}

</style>
