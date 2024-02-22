<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-xxl">

      <!-- toggle-knapp för mobile-view -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
        aria-controls="main-nav" aria-expanded="false" aria-label="Toggle Navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbarlänkar -->
      <div class="collapse navbar-collapse justify-content-lg-center align-center" id="main-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            

          </li>
          <li class="nav-item" style="max-width: 45%;">
            <router-link to="/About" class="nav-link" :class="{ active: $route.path === '/About' }">About
              Us</router-link>
              <p>Vi på StudentCode är dedikerade till att erbjuda
            engagerande och underhållande quiz för studenter,
            som tar dig på en resa genom kodens värld.
            Upptäck vårt sortimen av quiz för att fördjupa
            dina kunskaper och ha kul samtidigt! </p>
          </li>
          <li class="nav-item"> 
            <router-link to="#" class="nav-link"> Contact 
            </router-link>
            <h3> </h3>
            <p> quiz@studentcode.com</p>
             <p> +46 324 854 93 </p>
            <p><a href="quiz@studentcode.com"> </a>
              <a href="tel:+46 324 854 93"> </a>.</p>
            </li>
            <li class="nav-item">
            <router-link to="/QuizPage" class="nav-link" :class="{ active: $route.path === '/QuizPage' }"> Quizzes</router-link>
            <p> HTML </p>
            <p> PHP</p>
            <p> JS </p>
            <p> WordPress </p>
         </li>
          

            <li class="nav-item"> 
            <router-link to="#" class="nav-link"> Github 
            </router-link> 
            <p>https://github.com/</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  padding: 10px;
  margin: 5px;
  height: 40px;
}
 
.nav-item {
margin: 0 1rem;

}
.active {
  background-color: #EDE8E3;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}
</style>
