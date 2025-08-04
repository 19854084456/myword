import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
  routes
})
router.afterEach((to) => {
  if (typeof _hmt !== "undefined") {
    _hmt.push(["_trackPageview", to.fullPath]); // 发送新页面路径
  }
  console.log(_hmt)

});

export default router