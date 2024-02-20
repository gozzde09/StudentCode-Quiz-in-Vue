import { createRouter, createWebHashHistory } from "vue-router";

import Test from "./pages/Test.vue";
import Home from "./pages/Home.vue";
import HtmlPage from './pages/HtmlPage.vue'
import JavascriptPage from './pages/JavascriptPage.vue'
import PhpPage from './pages/PhpPage.vue'
import MyResults from './pages/MyResults.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: "/",
    },

    {
      component: HtmlPage,
      name: "Html-quiz",
      path: "/HtmlPage",
    },
    {
      component: PhpPage,
      name: "Php-quiz",
      path: "/PhpPage",
    },
    {
      component: JavascriptPage,
      name: "JS-quiz",
      path: "/JavascriptPage",
    },
    {
      component: MyResults,
      name: "Mina Resultat",
      path: "/MyResults",
    },
  ],
});
