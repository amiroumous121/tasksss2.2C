import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import ChildComponent from "./components/ChildComponent.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/child", component: ChildComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
