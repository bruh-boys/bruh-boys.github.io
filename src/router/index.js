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
      meta: {
        title: "Home"
      }
    },
    {
      path: "/secret",
      name: "secret",
      component: SecretView,
      meta: {
        title: "Shhhh"
      }
    },
    {
      path: "/contributors",
      name: "contributors",
      component: ContributorsView,
      meta: {
        title: "Contributors"
      }
    },
    {
      path: "/members",
      name: "members",
      component: MembersView,
      meta: {
        title: "Members"
      }
    },
    {
      path: "/404",
      component: NotFound,
      meta: {
        title: "Page not found"
      }
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (router.options.routes.find((route) => route.path === to.path)) {
    const pageTitle = to.meta.title;
    if (pageTitle) {
      document.title = `${pageTitle} | Bruh boys`;
    } else {
      document.title = "Bruh boys";
    }
    return next();

  }
  next({ path: "/404" });
});

export default router;
