<!-- src/page/aiChat/index.vue -->
<template>
  <section id="ai-chat" class="ai-chat-section">
    <div class="container">
      <h2 class="section-title">智能AI客服</h2>
      <div class="chat-container">
        <div class="chat-messages" ref="messagesContainer">
          <div 
            v-for="(message, index) in messages" 
            :key="index" 
            :class="['message', message.role]"
          >
            <div class="message-content">
              {{ message.content }}
            </div>
          </div>
        </div>
        <div class="chat-input-container">
          <input 
            v-model="userInput" 
            @keyup.enter="sendMessage" 
            placeholder="请输入您的问题..." 
            :disabled="isLoading"
          />
          <button @click="sendMessage" :disabled="isLoading || !userInput.trim()">
            {{ isLoading ? '发送中...' : '发送' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { createAssessment} from '@/api/openAi';

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
    const response = await createAssessment({question:userMessage});
    console.log(response);
    messages.value.push({ role: 'assistant', content: response.data });
  } catch (error) {
    messages.value.push({ 
      role: 'assistant', 
      content: '抱歉，我遇到了一些问题，请稍后再试。' 
    });
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};

// 模拟AI响应（实际使用时替换为真实API）
const simulateAIResponse = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        `我理解您说的"${message}"。我是基于人工智能技术的助手，可以回答问题、提供信息和帮助解决问题。请问您具体需要什么帮助？`,
        `感谢您的提问："${message}"。作为AI助手，我可以提供各种信息和帮助。请告诉我更多细节，以便我更好地为您服务。`,
        `关于"${message}"，这是一个很有趣的问题。我可以为您提供相关信息，但需要您提供更多背景或具体需求。`,
        `我已经收到您的消息："${message}"。我会尽力为您提供帮助，请稍等我整理相关信息。`,
        `您好！针对"${message}"这个问题，我可以为您提供以下帮助：作为智能AI客服，我的功能包括回答问题、提供建议、协助处理信息等。`
      ];
      resolve(responses[Math.floor(Math.random() * responses.length)]);
    }, 1000 + Math.random() * 2000);
  });
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
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  line-height: 1.5;
}

.message.user {
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  border-bottom-right-radius: 4px;
}

.message.assistant {
  align-self: flex-start;
  background-color: #e9ecef;
  color: #333;
  border-bottom-left-radius: 4px;
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
    max-width: 90%;
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