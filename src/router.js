import { createRouter, createWebHashHistory } from "vue-router";

import Test from "./pages/Test.vue";
import Home from "./pages/Home.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: "/",
    },
    {
      component: Test,
      name: "Test",
      path: "/Test",
    },
  ],
});
