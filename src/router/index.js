import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../components/products/Product.vue'
import AboutTwo from '../components/about/About.vue'
import ImpressumPage from '../components/support/ImpressumPage.vue'
const routes = [
  
  {
    path: '/:pathMatch(.*)*',
    name: Home,
    meta: {
      title: "Home",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/',
    name: Home,
    meta: {
      title: "Home",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/product/:id",
    name: Product,
    meta: {
      title: "Product",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../components/products/Product.vue"),
    props: true 
  },
  
  {
    path: "/about",
    name: AboutTwo,
    meta: {
      title: "AboutTwo",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../components/about/AboutTwo.vue"),
  },
  {
    path: "/impressum",
    name: ImpressumPage,
    meta: {
      title: "Impresszum",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../components/support/ImpressumPage.vue"),
    props: true 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
 
})


export default router
