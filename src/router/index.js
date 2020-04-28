import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import axios from 'axios/dist/axios.min.js'


Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },  
  {
    path: "/upload_template",
    name: "upload template",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/upload_template.vue"),
    meta: {
        requiresAuth: true,
      }
  },
  {
    path: "/view_template",
    name: "view_template",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/view_tmp.vue"),
      meta: {
        requiresAuth: true,
        }
  },
  
  {
    path: "/edit_template/:id",
    name: "edit_template",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/edit_tmp.vue"),
      meta: {
        requiresAuth: true,
        }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
    meta: {
      requiresVisitor: true,
      }

  },
  {
    path: "/regester",
    name: "regester",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/auth/Register.vue"),
    meta: {
      requiresVisitor: true,
      }

  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/auth/Logout")

  },
  {
    path: "/upload_pdf_queue",
    name: "upload_pdf_queue",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/upload_pdf_queue"),
    meta: {
      requiresAuth: true,
      }

  },  {
    path: "/view_pdf_queue",
    name: "view_pdf_queue",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/view_pdf_queue"),
    meta: {
      requiresAuth: true,
      }

  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard"),
    meta: {
      requiresAuth: true,
      }
    }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
