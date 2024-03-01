<template>
  <nav class="row d-flex navbar navbar-light">
    <div class="d-flex flex-wrap mx-auto">
      <ul class="d-flex flex-wrap mx-auto">
        <li class="nav-item">
          <router-link to="/About" class="nav-link">About Us</router-link>
          <p>
            We are four students studying web development
            at IT-Högskolan. Read about more our team!
          </p>
        </li>
        <li class="nav-item">
          <router-link to="#" class="nav-link"> Contact </router-link>
          <p>
            quiz@studentcode.com <br />
            +46 324 854 93
          </p>
          <a href="quiz@studentcode.com" />
          <a href="tel:+46 324 854 93" />
        </li>
        <li class="nav-item d-flex flex-column">
            <router-link to="/QuizPage" class="nav-link" :class="{ active: $route.path === '/QuizPage' }">
              Quizzes</router-link>
            <p class="mx-auto">HTML & CSS</p>
            <p class="mx-auto">JavaScript</p>
            <p class="mx-auto">WordPress</p>
            <p class="mx-auto">PHP</p>
          </li>

        <li class="nav-item">
          <router-link to="#" class="nav-link"> Github </router-link>
          <a href="https://github.com/aliciaosv/StudentCode" class="link"
            >Länk till projektet</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .nav-link {
    height: 30px;
    font-size: larger;
    font-weight: bolder;
  }

  .nav-item {
    margin: 0 0.8rem;
  }

  .link {
    color: #28a745;
  }

  li {
    list-style: none;
  }
  p{
    margin:0 auto
  }
</style>
