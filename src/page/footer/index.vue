<template>
    <!-- 页脚 -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <a href="#" class="footer-logo">南方</a>
                <ul class="footer-links">
                    <li><a @click="handleNavClick('home')">首页</a></li>
                    <li><a @click="handleNavClick('about')">个人优势</a></li>
                    <li><a @click="handleNavClick('projects')">工作经历</a></li>
                    <li><a @click="handleNavClick('contact')">联系我</a></li>
                    <li><a @click="handleNavClick('ai-chat')">智能AI</a></li>
                </ul>
                <p class="copyright">© 2025 南方个人简历. 保留所有权利</p>
            </div>
        </div>
    </footer>

</template>
<script setup>
const emit = defineEmits(['navigate'])
// 处理导航点击
const handleNavClick = (target) => {
  emit('navigate', target)
}

</script>
