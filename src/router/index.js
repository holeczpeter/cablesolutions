import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import PrivacyStatementView from '../views/PrivacyStatementView.vue'
const routes = [
  
  {
    path: '/:pathMatch(.*)*',
    name: HomeView,
    meta: {
      title: "HomeView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: '/',
    name: HomeView,
    meta: {
      title: "HomeView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/product/:id",
    name: ProductView,
    meta: {
      title: "ProductView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/ProductView.vue"),
    props: true 
  },
  
  {
    path: "/about",
    name: AboutView,
    meta: {
      title: "AboutView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/impressum",
    name: ImpressumView,
    meta: {
      title: "ImpressumView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/ImpressumView.vue"),
    props: true 
  },
  {
    path: "/privacy",
    name: PrivacyStatementView,
    meta: {
      title: "PrivacyStatementView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/PrivacyStatementView.vue"),
    props: true 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})


export default router
