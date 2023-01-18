import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContributorsView from "@/views/ContributorsView.vue";
import MembersView from "@/views/MembersView.vue";
import SecretView from "@/views/SecretView.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/secret",
      name: "secret",
      component: SecretView,
    },
    {
      path: "/contributors",
      name: "contributors",
      component: ContributorsView,
    },
    {
      path: "/members",
      name: "members",
      component: MembersView,
    },
    {
      path: "/404",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (router.options.routes.find((route) => route.path === to.path))
    return next();

  next({ path: "/404" });
});

export default router;
