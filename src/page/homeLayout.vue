
<script setup>
import Header from './header/index.vue';
import Home from './home/index.vue';
import About from './about/index.vue';
import Project from './projects/index.vue';
import Contact from './contact/index.vue';
import Footer from './footer/index.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const activeSection = ref('hero');

// 处理导航事件
const handleNavigate = (target) => {
  // 滚动到指定元素
  const targetElement = document.getElementById(target);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
const handleScroll = () => {
  const sections = ['hero', 'about', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 200; // 提前激活阈值

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = sections[i];
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <Header @navigate="handleNavigate"></Header> 
    <Home></Home>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
</template>
