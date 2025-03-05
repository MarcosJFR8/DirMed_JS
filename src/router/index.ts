import { createRouter, createWebHistory } from 'vue-router'
import IllnessBarView from '../views/IllnessBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'illness',
      component: IllnessBarView,
    },

  ],
})

export default router
