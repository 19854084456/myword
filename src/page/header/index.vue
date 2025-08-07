<template>
  <!-- 导航栏 -->
  <header ref="headerRef" style="position: fixed; top: 0; left: 0; right: 0;">
    <div class="container">
      <nav>
        <a href="#" class="logo">陈南方</a>
        <ul class="nav-links" :class="{ active: isMenuActive }">
          <li><a @click="handleNavClick('home')">首页</a></li>
          <li><a @click="handleNavClick('about')">个人优势</a></li>
          <li><a @click="handleNavClick('projects')">工作经历</a></li>
          <li><a @click="handleNavClick('contact')">联系我</a></li>
          <li><a @click="handleNavClick('ai-chat')">智能AI客服</a></li>
        </ul>
        <div class="hamburger" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['navigate'])

// 响应式数据
const isMenuActive = ref(false)

// 切换移动端菜单
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

// 处理导航点击
const handleNavClick = (target) => {
  // 关闭移动端菜单
  isMenuActive.value = false
  emit('navigate', target)
}

</script>

<style scoped>
/* 你可以在这里添加相应的样式 */
.nav-links.active {
  /* 移动端菜单激活时的样式 */
}

header.scrolled {
  /* 滚动时导航栏的样式 */
}
</style>