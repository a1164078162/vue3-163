import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import General from '../pages/General/General.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personage from '../pages/Personage/Personage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/general',
      component: General
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/personage',
      component: Personage
    },
  ]
})
