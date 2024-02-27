<script setup>
  // import { useRoute } from 'vue-router'

  // const route = useRoute()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-xxl">
      <!-- toggle-knapp för mobile-view -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span class="navbar-toggler-icon"/>
      </button>

      <!-- navbarlänkar -->
      <div
        class="collapse navbar-collapse justify-content-lg-center align-center"
        id="main-nav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              :class="{ active: $route.path === '/' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/QuizPage" class="nav-link"
              :class="{ active: $route.path.startsWith('/QuizPage') }">Quizzes</router-link>
         </li>
          <li class="nav-item">
            <router-link to="/MyResults" class="nav-link" :class="{ active: $route.path === '/MyResults' }">My
              Results</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link" :class="{ active: $route.path === '/About' }">About
              Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-xxl">
      toggle for mobile -->
  <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
    aria-controls="main-nav" aria-expanded="false" aria-label="Toggle Navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->

  <!-- navbarlänkar -->
  <!-- <div class="collapse navbar-collapse justify-content-lg-center" id="main-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">Quiz</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">My Results</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->

  <!-- Default varianten, den vi har nu -->
  <!-- <nav class="d-flex justify-content-evenly">
    <RouterLink to="/"> Hem</RouterLink>
    <RouterLink to="/JavascriptPage"> JavaScript</RouterLink>
    <RouterLink to="/Test">HTML</RouterLink>
    <RouterLink to="/PhpPage">PHP</RouterLink>
    <RouterLink to="/MyResults">Mina Resultat</RouterLink>
  </nav> -->

  <!-- <div class="nav-container">
    <b-nav pills>
      <b-nav-item :class="{ active: activePage === '/' }" @click="thisActivePage('/')">
        <RouterLink to="/" class="nav-text">Home</RouterLink>
      </b-nav-item> -->

  <!-- Dropdownlänkarna -->
  <!-- <b-nav-item-dropdown class="nav-dropdown" text="Quiz" toggle-class="nav-link-custom" right>
        <b-dropdown-item :class="{ active: activePage === '/HtmlPage' }" @click="thisActivePage('/HtmlPage')">
          <RouterLink to="/HtmlPage">HTML</RouterLink>
        </b-dropdown-item>
        <b-dropdown-item :class="{ active: activePage === '/JavascriptPage' }" @click="thisActivePage('/JavascriptPage')"
          class="dropdown-text">
          <RouterLink to="/JavascriptPage">JavaScript</RouterLink>
        </b-dropdown-item>
        <b-dropdown-item :class="{ active: activePage === '/PhpPage' }" @click="thisActivePage('/PhpPage')">
          <RouterLink to="/PhpPage">PHP</RouterLink>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item :class="{ active: activePage === '/MyResults' }" @click="thisActivePage('/MyResults')">
        <RouterLink to="/MyResults" class="nav-text">My Results</RouterLink>
      </b-nav-item>
    </b-nav>
  </div> -->
</template>

<style scoped>
  .nav-link {
    padding: 10px;
    margin: 5px;
    height: 40px;
  }

  .active {
    background-color: #F5DCB4;
    color: black;
    border-radius: 2px;
    transition: background-color 0.3s ease;
  }
</style>
