import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import singlePost from "../components/singlepost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/article/:id",
    name: "Post",
    component: singlePost,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
