<template>
  <section id="ai-chat" class="ai-chat-section">
    <div class="container">
      <h2 class="section-title">智能AI客服</h2>
      <div class="chat-container">
        <div class="chat-messages" ref="messagesContainer">
          <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
            <!-- AI消息 -->
            <div class="avatar" v-if="message.role === 'assistant'">
              <img v-if="aiAvatar" :src="aiAvatar" alt="AI头像" class="avatar-img" />
              <div v-else class="avatar-text">AI</div>
            </div>

            <div class="message-content-wrapper">
              <div class="message-header" v-if="message.role === 'assistant'">
                <div class="message-sender">AI客服</div>
                <div class="message-time">{{ formatTime(message.time) }}</div>
              </div>
              <div class="message-header user-header" v-if="message.role === 'user'">
                <div class="message-sender">我</div>
                <div class="message-time">{{ formatTime(message.time) }}</div>
              </div>
              <div class="message-content" :class="{ 'messageContentRight': message.role === 'user' }">
                {{ message.content }}
              </div>
            </div>

            <div class="avatar" v-if="message.role === 'user'">
              <img v-if="userAvatar" :src="userAvatar" alt="用户头像" class="avatar-img" />
              <div v-else class="avatar-text">用户</div>
            </div>
          </div>
        </div>
        <div class="chat-input-container">
          <input v-model="userInput" @keyup.enter="sendMessage" placeholder="请输入您的问题..." :disabled="isLoading" />
          <button @click="sendMessage" :disabled="isLoading || !userInput.trim()">
            {{ isLoading ? 'AI思考中...' : '发送' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { createAssessment } from '@/api/openAi';

const aiAvatar = ref('https://q5.itc.cn/q_70/images03/20250226/e9bb1f7c545648d7895c499eed79c085.gif');
const userAvatar = ref(null);

const messages = ref([
  { role: 'assistant', content: '您好！我是南方智能AI客服，有什么我可以帮您的吗？', time: new Date() },
  { role: 'assistant', content: '您可以对我进行提问，了解我简历个人信息', time: new Date() }
]);

const userInput = ref('');
const isLoading = ref(false);
const messagesContainer = ref(null);

// 格式化时间
const formatTime = (time) => {
  if (!time) return '';
  const date = new Date(time);
  const now = new Date();
  
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  // 如果是今天，只显示时间
  // if (date.toDateString() === now.toDateString()) {
  //   return `${hours}:${minutes}`;
  // } else {
    // 如果是其他日期，显示完整日期和时间
    return `${month}-${day} ${hours}:${minutes}`;
  // }
};

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;

  // 添加用户消息
  const userMessage = {
    role: 'user',
    content: userInput.value,
    time: new Date()
  };
  messages.value.push(userMessage);
  
  const userMessageContent = userInput.value;
  userInput.value = '';
  isLoading.value = true;

  scrollToBottom();

  try {
    console.log(userMessageContent);
    const response = await createAssessment({ question: userMessageContent });
    console.log(response);
    messages.value.push({
      role: 'assistant',
      content: response.data,
      time: new Date()
    });
  } catch (error) {
    messages.value.push({
      role: 'assistant',
      content: 'AI部署中，请稍后重新提问',
      time: new Date()
    });
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};
</script>

<style scoped>
.ai-chat-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
}

.chat-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-messages {
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message {
  display: flex;
  align-items: flex-start;
  max-width: 100%;
}

.message.assistant {
  align-self: flex-start;
  background: transparent;
  color: #333;
  border-bottom-left-radius: 0;
}

.message.user {
  align-self: flex-end;
  background: transparent;
  color: white;
  border-bottom-right-radius: 0;
}

/* 头像样式 */
.avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

/* AI头像背景色 */
.message.assistant .avatar {
  background-color: #17a2b8;
}

/* 用户头像背景色 */
.message.user .avatar {
  background-color: #007bff;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 文字头像样式 */
.avatar-text {
  font-size: 16px;
  font-weight: bold;
}

/* 消息内容包装器 */
.message-content-wrapper {
  max-width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
}

.message.assistant .message-content-wrapper {
  margin-left: 0;
  align-items: flex-start;
}

.message.user .message-content-wrapper {
  margin-right: 0;
  align-items: flex-end;
}

/* 消息头部信息 */
.message-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #666;
}

.user-header {
  flex-direction: row-reverse;
}

.message-sender {
  font-weight: bold;
  margin: 0 5px;
}

.message-time {
  font-size: 12px;
}

.message.assistant .message-sender {
  color: #17a2b8;
}

.message.user .message-sender {
  color: #007bff;
}

/* 消息内容样式 */
.message-content {
  max-width: 100%;
  min-width: 116px;
  padding: 12px 16px;
  border-radius: 18px;
  line-height: 1.5;
}

.messageContentRight {
  text-align: right !important;
}

.message.assistant .message-content {
  background-color: #e9ecef;
  color: #333;
  border-bottom-left-radius: 4px;
}

.message.user .message-content {
  background-color: #007bff;
  color: white;
  border-bottom-right-radius: 4px;
}

.chat-input-container {
  display: flex;
  border-top: 1px solid #eee;
  padding: 15px;
}

.chat-input-container input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
}

.chat-input-container input:focus {
  border-color: #007bff;
}

.chat-input-container button {
  margin-left: 10px;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
}

.chat-input-container button:hover:not(:disabled) {
  background-color: #0056b3;
}

.chat-input-container button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .ai-chat-section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .chat-messages {
    height: 300px;
    padding: 15px;
  }

  .message {
    max-width: 100%;
  }

  .avatar {
    width: 30px;
    height: 30px;
  }

  .avatar-text {
    font-size: 14px;
  }

  .message-content {
    padding: 10px 12px;
  }

  .chat-input-container {
    padding: 10px;
  }

  .chat-input-container input {
    padding: 10px 12px;
    font-size: 14px;
  }

  .chat-input-container button {
    padding: 10px 15px;
    font-size: 14px;
  }
}
</style>