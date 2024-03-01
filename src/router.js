import { createRouter, createWebHashHistory } from 'vue-router'
import ErrorPage from './pages/ErrorPage.vue'
import HomePage from './pages/HomePage.vue'
import QuizStart from './pages/QuizStart.vue'
import QuizPage from './pages/QuizPage.vue'
import MyResults from './pages/MyResults.vue'
import GetQuiz from './components/GetQuiz.vue'
import AboutPage from './pages/AboutPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage,
      path: '/'
    },
    {
      component: ErrorPage,
      path: '/error'
    },
    {
      component: QuizPage,
      path: '/QuizPage'
    },
    {
      component: AboutPage,
      path: '/about'
    },
    {
      component: QuizStart,
      path: '/QuizStart'
    },
    {
      component: MyResults,
      path: '/MyResults'
    },
    {
      component: GetQuiz,
      path: '/QuizPage/:category/:level/:amount'
      // path: '/category/:category/level/:difficulty/amount/:amount'
    }
  ]
})
