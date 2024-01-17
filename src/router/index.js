import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../components/products/Product.vue'
import AboutTwo from '../components/about/About.vue'
import NotFound from '../components/NotFound.vue'
const routes = [
  
  {
    path: '/',
    name: Home,
    meta: {
      title: "Home",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/product/:id",
    name: Product,
    
    meta: {
      title: "Product",
    },
    component: () => import("../components/products/Product.vue"),
    props: true 
  },
  {
    path: "/about/",
    name: AboutTwo,
    meta: {
      title: "AboutTwo",
    },
    component: () => import("../components/about/AboutTwo.vue"),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
 
})


export default router
