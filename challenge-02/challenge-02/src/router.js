import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
	component: () =>import(/* webpackChunkName: "users" */ "./pages/Index.vue"),
    name: "Home",
  },
  {
    path: "/users",
	component: () =>import(/* webpackChunkName: "users" */ "./pages/users/Index.vue"),
    name: "UsersIndex",
  },
  {
    path: "/users/create",
	component: () =>import(/* webpackChunkName: "users" */ "./pages/users/Create.vue"),
    name: "UsersCreate",
  },
];

const router = new VueRouter({
  routes,
});
export default router;
