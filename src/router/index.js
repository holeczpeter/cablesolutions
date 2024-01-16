import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../components/products/Product.vue'
import AboutTwo from '../components/about/About.vue'
const routes = [
  {
    path: '/:pathMatch(.*)*',
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
    path: "/about",
    name: AboutTwo,
    meta: {
      title: "AboutTwo",
    },
    component: () => import("../components/about/AboutTwo.vue"),
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
})

router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
    if (to.hash) {
     
      return {
        el: to.hash,
      }
    }
      
  }, 100);
  next();
});
export default router
