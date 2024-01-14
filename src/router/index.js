import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../components/products/Product.vue'
import Products from '../components/products/Products.vue'
import About from '../components/about/About.vue'
const routes = [
  {
    path: "/",
    name: Home,
    meta: {
      title: "Home",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/products",
    name: Products,
    meta: {
      title: "Products",
    },
    component: () => import("../components/products/Products.vue"),
  },
  {
    path: "/product",
    name: Product,
    meta: {
      title: "Product",
    },
    component: () => import("../components/products/Product.vue"),
  },
  {
    path: "/about",
    name: About,
    meta: {
      title: "About",
    },
    component: () => import("../components/about/About.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
