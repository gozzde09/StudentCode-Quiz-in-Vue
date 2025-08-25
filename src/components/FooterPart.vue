<script setup>
  import { useCategoryStore } from '../store.js'
  const categoryStore = useCategoryStore()
</script>

<template>
  <nav class="row d-flex navbar navbar-light footer">
    <div class="d-flex flex-wrap mx-auto">
      <ul class="d-flex flex-wrap mx-auto my-0">
        <li class="nav-item" id="about">
          <router-link to="/About" class="nav-link">About Us</router-link>
          <p>
            We are a group of four students dedicated to the field of web
            development at IT-Högskolan. Read more about our team and our
            project!
          </p>
        </li>
        <li class="nav-item d-flex flex-column">
          <router-link
            to="/QuizPage"
            class="nav-link"
            :class="{ active: $route.path === '/QuizPage' }"
          >
            Quizzes</router-link
          >
          <!-- <p>See and read about our quizzes.</p> -->
          <router-link
            to="/QuizStart"
            :class="[
              'nav-item2',
              { 'active-link': categoryStore.category === 'html' }
            ]"
            @click="categoryStore.setCategory('html')"
            >HTML</router-link
          >
          <router-link
            to="/QuizStart"
            :class="[
              'nav-item2',
              { 'active-link': categoryStore.category === 'javascript' }
            ]"
            @click="categoryStore.setCategory('javascript')"
            >Javascript</router-link
          >
          <router-link
            to="/QuizStart"
            :class="[
              'nav-item2',
              { 'active-link': categoryStore.category === 'php' }
            ]"
            @click="categoryStore.setCategory('php')"
            >PHP</router-link
          >
          <router-link
            to="/QuizStart"
            :class="[
              'nav-item2',
              { 'active-link': categoryStore.category === 'wordpress' }
            ]"
            @click="categoryStore.setCategory('wordpress')"
            >WordPress</router-link
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link mx-2"> Github </a>
          <a
            href="https://github.com/gozzde09/StudentCode-Quiz-in-Vue"
            class="link mx-2"
            >Länk till projektet</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"> Contact </a>
          <p>
            quiz@studentcode.com <br />
            +46 324 854 93
          </p>
          <a href="quiz@studentcode.com" />
          <a href="tel:+46 324 854 93" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  #about {
    max-width: 40%;
  }
  .nav-link {
    height: 30px;
    font-size: larger;
    font-weight: bolder;
  }

  .nav-item {
    margin: 0.5rem auto;
    list-style: none;
    box-sizing: border-box;
  }

  .nav-item2,
  .link {
    color: #204764;
  }

  .nav-item2:hover {
    color: #28a745;
  }

  .active-link,
  .link:hover {
    color: #28a745;
  }

  .nav-link:hover {
    color: #204764;
  }

  @media only screen and (max-width: 630px) {
    .footer {
      font-size: 0.7rem;
    }
  }
  @media only screen and (max-width: 530px) {
    #about {
      max-width: 100%;
    }
  }
</style>
