import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../views/Store.vue'
import Basket from '../views/Basket.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Store',
    component: Store
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  }
]
const router = new VueRouter({
  routes
})

export default router
