import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from './../page/homeLayout.vue'
import ProjectsPage from './../page/onlineResume/personalAdvantage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/homeLayout'
  },
  {
    path: '/homeLayout',
    name: 'HomeLayout',
    component: HomeLayout
  },
  {
    path: '/projectsPage',
    name: 'projectsPage',
    component: ProjectsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router