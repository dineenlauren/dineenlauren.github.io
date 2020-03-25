import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import VuePageTransition from "vue-page-transition";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
// Vue.use(VuePageTransition);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      auth: false,
      title: 'Home'
    }
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      auth: false,
      title: 'About'
    }
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
    meta: {
      auth: false,
      title: 'Projects'
    }
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import( "../views/Test.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
