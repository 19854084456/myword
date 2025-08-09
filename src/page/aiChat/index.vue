<template>
  <section id="ai-chat" class="ai-chat-section">
    <div class="container">
      <h2 class="section-title">智能AI客服</h2>
      <div class="chat-container">
        <div class="chat-messages" ref="messagesContainer">
          <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
            <div class="avatar" v-if="message.role === 'assistant'">
              <img v-if="aiAvatar" :src="aiAvatar" alt="AI头像" class="avatar-img" />
              <div v-else class="avatar-text">AI</div>
            </div>

            <div class="message-content-wrapper">
              <div class="message-content" :class="{ 'messageContentRight': message.role === 'user' }">
                {{ message.content }}
              </div>
            </div>

            <div class="avatar" v-if="message.role === 'user'">
              <img v-if="userAvatar" :src="userAvatar" alt="用户头像" class="avatar-img" />
              <div v-else class="avatar-text">我</div>
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
  { role: 'assistant', content: '您好！我是南方智能AI客服，有什么我可以帮您的吗？' },
  { role: 'assistant', content: '您可以对我进行提问，了解我简历个人信息' }
]);

const userInput = ref('');
const isLoading = ref(false);
const messagesContainer = ref(null);

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
  messages.value.push({ role: 'user', content: userInput.value });
  const userMessage = userInput.value;
  userInput.value = '';
  isLoading.value = true;

  scrollToBottom();

  try {
    console.log(userMessage);
    const response = await createAssessment({ question: userMessage });
    console.log(response);
    messages.value.push({ role: 'assistant', content: response.data });
  } catch (error) {
    messages.value.push({
      role: 'assistant',
      content: 'AI部署中，请稍后重新提问'
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
}

.message.assistant .message-content-wrapper {
  margin-left: 0;
}

.message.user .message-content-wrapper {
  margin-right: 0;
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