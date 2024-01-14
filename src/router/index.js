import { createRouter } from 'vue-router'
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


const router = new createRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title =
      to.meta.title + " | Holecz Péter";
  }
});


export default router



