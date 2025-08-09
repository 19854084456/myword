<template>
    <div class="container">
        <!-- 页面内容 -->
        <!-- <component :is="currentPage" /> -->

        <!-- 底部导航栏 -->
        <div class="tab-bar">
            <div v-for="tab in tabs" :key="tab.name" class="tab-item" :class="{ active: currentPage === tab.component }"
                @click="switchTab(tab)">
                <span>{{ tab.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import AgentList from './agentChat.vue';
import Tasks from './agentChat.vue';
import Documents from './agentChat.vue';
import More from './agentChat.vue';

export default {
    components: {
        AgentList,
        Tasks,
        Documents,
        More
    },
    data() {
        return {
            currentPage: 'AgentList',
            tabs: [
                { name: '智能体列表', component: 'AgentList' },
                { name: '任务', component: 'Tasks' },
                { name: '文档', component: 'Documents' },
                { name: '更多', component: 'More' }
            ]
        };
    },
    methods: {
        switchTab(tab) {
            this.currentPage = tab.component;
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    border: 1px solid red;
    max-width: 1000px;
    margin: 0px 0px;
    padding: 0px;
}

.tab-bar {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    z-index: 100;
}

.tab-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #666;
    cursor: pointer;
}

.tab-item.active {
    color: #007AFF;
    font-weight: bold;
}
</style>