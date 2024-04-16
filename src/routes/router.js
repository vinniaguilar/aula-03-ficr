import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Chat from '../pages/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/chat',
    component: Chat
  },
]

const router = new VueRouter({
  routes
})

export default router