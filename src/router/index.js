import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/userlist",
      name: "userlist",
      component: () => import("../views/UserList.vue"),
    },
    {
      path: "/userlist/:id",
      name: "user",
      component: () => import("../views/User.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  let isAuthenticated = localStorage.isAuthenticated == "true";
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  } else if (
    // make sure the user is authenticated
    isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name == "login"
  ) {
    // redirect the user to the login page
    return { name: "home" };
  }
});
export default router;
