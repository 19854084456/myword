<!-- AgentChat.vue -->
<template>
  <div class="agent-chat-container">
    <div class="chat-header">
      <div class="agent-info">
        <div class="agent-avatar">
          <span>{{ agent.name.charAt(0) }}</span>
        </div>
        <div class="agent-details">
          <h2>{{ agent.name }}</h2>
          <p>{{ agent.description }}</p>
        </div>
      </div>
      <button class="back-button" @click="goBack">
        返回创建页面
      </button>
    </div>

    <div class="chat-messages" ref="messagesContainer">
      <div v-for="message in messages" :key="message.id" :class="['message', message.sender]">
        <div class="message-content">
          <div class="message-sender">
            {{ message.sender === 'user' ? '您' : agent.name }}
          </div>
          <div class="message-text">
            {{ message.text }}
          </div>
          <div class="message-time">
            {{ formatTime(message.timestamp) }}
          </div>
        </div>
      </div>
      <div v-if="isTyping" class="message agent typing-indicator">
        <div class="message-content">
          <div class="message-sender">{{ agent.name }}</div>
          <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-input-area">
      <textarea v-model="userInput" placeholder="输入消息..." @keydown.enter="sendMessage" :disabled="isTyping"></textarea>
      <button @click="sendMessage" :disabled="!userInput.trim() || isTyping" class="send-button">
        发送
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgentChat',
  props: {
    agent: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      agent: JSON.parse(localStorage.getItem('agent')) || this.agent,
      messages: [],
      userInput: '',
      isTyping: false,
      messageCounter: 2
    }
  },
  methods: {
    sendMessage(event) {
      // 防止换行
      if (event.shiftKey) return;

      event.preventDefault();

      if (!this.userInput.trim() || this.isTyping) return;

      // 添加用户消息
      const userMessage = {
        id: this.messageCounter++,
        sender: 'user',
        text: this.userInput,
        timestamp: new Date()
      };

      this.messages.push(userMessage);
      this.userInput = '';
      this.isTyping = true;

      // 滚动到底部
      this.$nextTick(() => {
        this.scrollToBottom();
      });

      // 模拟智能体回复
      this.simulateAgentResponse();
    },

    simulateAgentResponse() {
      // 模拟智能体思考时间
      const delay = 1000 + Math.random() * 2000;

      setTimeout(() => {
        let responseText = '';

        // 根据智能体能力生成不同回复
        switch (this.agent.capabilities) {
          case 'tech':
            responseText = '根据您的技术问题，我建议您检查相关配置并查看日志文件以获取更多信息。如果您需要具体代码示例，我可以为您提供。';
            break;
          case 'creative':
            responseText = '这是一个很有趣的创意需求！让我帮您构思一些创新的想法。首先，我们可以从用户需求出发，结合当前趋势来设计解决方案。';
            break;
          case 'analysis':
            responseText = '基于您提供的数据，我已经进行了初步分析。数据显示主要趋势是... 我可以为您生成详细的分析报告。';
            break;
          default:
            responseText = '感谢您的消息！作为您的智能助手，我会尽力帮助您解决问题。请问您还有其他需要咨询的吗？';
        }

        const agentMessage = {
          id: this.messageCounter++,
          sender: 'agent',
          text: responseText,
          timestamp: new Date()
        };

        this.isTyping = false;
        this.messages.push(agentMessage);

        // 滚动到底部
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }, delay);
    },

    formatTime(timestamp) {
      return timestamp.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
      });
    },

    scrollToBottom() {
      const container = this.$refs.messagesContainer;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    },

    goBack() {
      this.$emit('back');
    }
  },

  mounted() {
    this.scrollToBottom();
    this.messages[0] = {
      id: 1,
      sender: 'agent',
      text: `您好！我是${this.agent.name}，很高兴为您服务。有什么我可以帮助您的吗？`,
      timestamp: new Date()
    };
  },

  watch: {
    messages() {
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    }
  }
}
</script>

<style scoped>
.agent-chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf9 100%);
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.agent-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.agent-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.agent-details h2 {
  margin: 0;
  color: #333;
  font-size: 1.3rem;
}

.agent-details p {
  margin: 0.2rem 0 0 0;
  color: #666;
  font-size: 0.9rem;
}

.back-button {
  padding: 0.5rem 1rem;
  background: #f0f0f0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.back-button:hover {
  background: #e0e0e0;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
  max-width: 80%;
  animation: fadeIn 0.3s ease;
}

.message.user {
  align-self: flex-end;
}

.message.agent {
  align-self: flex-start;
}

.message-content {
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.message.user .message-content {
  background: #667eea;
  color: white;
  border-bottom-right-radius: 4px;
}

.message.agent .message-content {
  background: white;
  border-bottom-left-radius: 4px;
}

.message-sender {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
}

.message-text {
  line-height: 1.5;
}

.message-time {
  text-align: right;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  opacity: 0.7;
}

.typing-indicator .message-content {
  background: white;
}

.typing-dots {
  display: flex;
  align-items: center;
  height: 20px;
}

.typing-dots span {
  width: 8px;
  height: 8px;
  background: #999;
  border-radius: 50%;
  margin-right: 5px;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-dots span:nth-child(2) {
  animation-delay: -0.16s;
}

.chat-input-area {
  display: flex;
  padding: 1rem;
  background: white;
  border-top: 1px solid #eee;
  gap: 0.5rem;
}

.chat-input-area textarea {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  font-family: inherit;
  font-size: 1rem;
  min-height: 60px;
  max-height: 150px;
}

.chat-input-area textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.send-button {
  padding: 0.8rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.send-button:hover:not(:disabled) {
  background: #5a6fd8;
}

.send-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing {

  0%,
  80%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }

  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .chat-header {
    padding: 1rem;
  }

  .agent-details h2 {
    font-size: 1.1rem;
  }

  .agent-details p {
    font-size: 0.8rem;
  }

  .chat-messages {
    padding: 1rem;
  }

  .message {
    max-width: 90%;
  }

  .chat-input-area {
    padding: 0.8rem;
  }
}
</style>