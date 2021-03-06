import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/Layout.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/aboutus",
    name: "AboutUs",
    component: () => import("@/views/AboutUs"),
  },
  {
    path: "/bookroom",
    name: "/BookRoom",
    component: () => import("@/views/smc_components/BookRoom"),
  },
  {
    path: "/news",
    name: "/News",
    component: () => import("@/views/News"),
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/hotel",
        name: "Hotel",
        component: () => import("@/views/Hotel"),
      },
      {
        path: "/evaluation",
        name: "Evaluation",
        component: () => import("@/views/smc_components/Evaluation"),
      },
      {
        path: "/detail",
        name: "Detail",
        component: () => import("@/views/Detail"),
      },
      {
        path: "/order",
        name: "Order",
        component: () => import("@/views/Order"),
      },
      {
        path: "/myOrder",
        name: "MyOrder",
        component: () => import("@/views/MyOrder"),
      },
      {
        path: "/personalInfo",
        name: "PersonalInfo",
        component: () => import("@/views/PersonalInfo"),
      },
      {
        path: "person",
        name: "PersonalInfo",
        component: () => import("@/views/PersonalInfo"),
      },
    ],
  },
  {
    path: "/preferential",
    name: "Preferential",
    component: () => import("@/views/Preferential"),
  },
  {
    path: "/certificatetemplate",
    name: "CertificateTemplate",
    component: () => import("@/views/smc_components/CertificateTemplate.vue"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    component: () => import("@/views/PrivacyPolicy"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register"),
  },
  {
    path: "/home",
    name: "HomeView",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/preordain",
    name: "Preordain",
    component: () => import("@/views/Preordain"),
  },
  {
    path: "/certificate",
    name: "Certificate",
    component: () => import("@/views/smc_components/Certificate"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
