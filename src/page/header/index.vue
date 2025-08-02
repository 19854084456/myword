<template>
    <!-- 导航栏 -->
    <header ref="headerRef">
      <div class="container">
        <nav>
          <a href="#" class="logo">陈南方</a>
          <ul class="nav-links" :class="{ active: isMenuActive }">
            <li><a href="#home" @click="handleNavClick('#home')">首页</a></li>
            <li><a href="#about" @click="handleNavClick('#about')">个人优势</a></li>
            <li><a href="#projects" @click="handleNavClick('#projects')">工作经历</a></li>
            <li><a href="#contact" @click="handleNavClick('#contact')">联系我</a></li>
          </ul>
          <div class="hamburger" @click="toggleMenu">
            <i class="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  // 响应式数据
  const isMenuActive = ref(false)
  const headerRef = ref(null)
  
  // 切换移动端菜单
  const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value
  }
  
  // 处理导航点击
  const handleNavClick = (target) => {
    // 关闭移动端菜单
    isMenuActive.value = false
    
    // 平滑滚动到目标元素
    const targetElement = document.querySelector(target)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
  
  // 滚动事件处理
  const handleScroll = () => {
    if (headerRef.value) {
      headerRef.value.classList.toggle('scrolled', window.scrollY > 50)
    }
  }
  
  // 生命周期钩子
  onMounted(() => {
    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll)
  })
  
  onBeforeUnmount(() => {
    // 清理事件监听器
    window.removeEventListener('scroll', handleScroll)
  })
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