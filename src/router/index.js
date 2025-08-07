import { createRouter, createWebHashHistory } from 'vue-router'
import HomeLayout from './../page/homeLayout.vue'
import ProjectsPage from './../page/onlineResume/personalAdvantage.vue'
import SmartNotes from './../page/smartNotes/index.vue'
import AgentCreator from './../page/aiAgent/agentCreator.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/homeLayout',
    meta: {
      title: '陈南方'
    }
  },
  {
    path: '/homeLayout',
    name: 'HomeLayout',
    component: HomeLayout,
    meta: {
      title: '陈南方'
    }
  },
  {
    path: '/projectsPage',
    name: 'projectsPage',
    component: ProjectsPage,
    meta: {
      title: '个人简历'
    }
  },
  {
    path: '/smartNotes',
    name: 'smartNotes',
    component: SmartNotes,
    meta: {
      title: '智慧笔记'
    }
  },
  {
    path: '/agentCreator',
    name: 'agentCreator',
    component: AgentCreator,
    meta: {
      title: '智能助手'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach((to) => {
  document.title = to.meta.title
  if (typeof _hmt !== "undefined") {
    _hmt.push(["_trackPageview", to.fullPath]); // 发送新页面路径
  }
  console.log(_hmt)

});

export default router