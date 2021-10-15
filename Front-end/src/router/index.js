import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    // meta: { requiresAuth: true }
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Login/Login.vue"),
  },
  {
    path: "/Registro",
    name: "Registro",
    component: () =>
      import(
        /* webpackChunkName: "registro" */ "../components/Registro/Registro.vue"
      ),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const rutaAuth = to.matched.some(record => record.meta.requiresAuth)

// })

export default router;
