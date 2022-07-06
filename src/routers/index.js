import { createRouter, createWebHistory } from "vue-router";

const hello = () => import("../components/HelloWorld.vue");
const mainpage = () => import("../pages/MainPage.vue");
const home = () => import("../pages/Home.vue");
const news = () => import("../pages/News.vue");

const routes = [
  {
    path: "/main",
    name: "main",
    component: hello,
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "首页",
        },
        component: home,
      },
      {
        path: "news",
        name: "news",
        meta: {
          title: "新闻",
        },
        component: news,
      },
    ],
  },
  {
    path: "/",
    name: "mainpage",
    component: mainpage,
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: routes,
});
export default router;
