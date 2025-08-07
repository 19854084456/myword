<!-- AgentCreator.vue -->
<template>
  <div class="agent-creator">
    <div class="container">
      <h1 class="welcome-title">欢迎使用智能体创建平台</h1>
      
      <div class="agent-creation-section" v-if="!agentCreated">
        <h2>创建您的智能体</h2>
        <div class="creation-options">
          <div class="option-card" @click="useCustom">
            <h3>自定义创建</h3>
            <p>根据您的需求定制智能体</p>
            <button class="btn primary">开始创建</button>
          </div>
          
          <div class="option-card" @click="useDefault">
            <h3>使用示例</h3>
            <p>快速创建一个示例智能体</p>
            <button class="btn secondary">立即创建</button>
          </div>
        </div>
        
        <div class="custom-form" v-if="showCustomForm">
          <h3>配置您的智能体</h3>
          <form @submit.prevent="createCustomAgent">
            <div class="form-group">
              <label for="agentName">智能体名称</label>
              <input 
                type="text" 
                id="agentName" 
                v-model="agentConfig.name" 
                placeholder="请输入智能体名称"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="agentDescription">描述</label>
              <textarea 
                id="agentDescription" 
                v-model="agentConfig.description" 
                placeholder="描述您的智能体功能"
                rows="3"
                required
              ></textarea>
            </div>
            
            <div class="form-group">
              <label for="agentCapabilities">能力配置</label>
              <CustomSelect 
                id="agentCapabilities"
                v-model="agentConfig.capabilities"
                :options="capabilities"
                placeholder="请选择能力配置"
              />
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn secondary" @click="cancelCustom">取消</button>
              <button type="submit" class="btn primary">创建智能体</button>
            </div>
          </form>
        </div>
      </div>
      
      <div class="agent-created" v-else>
        <h2>智能体创建成功！</h2>
        <div class="agent-card">
          <h3>{{ createdAgent.name }}</h3>
          <p>{{ createdAgent.description }}</p>
          <div class="agent-details">
            <span class="capability">能力: {{ getCapabilityLabel(createdAgent.capabilities) }}</span>
            <span class="status">状态: {{ createdAgent.status }}</span>
          </div>
        </div>
        <div class="action-buttons">
          <button class="btn secondary" @click="resetCreation">创建另一个</button>
          <button class="btn primary" @click="goToChat">开始对话</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '@/component/customSelect.vue';

export default {
  name: 'AgentCreator',
  components: {
    CustomSelect
  },
  data() {
    return {
      showCustomForm: false,
      agentCreated: false,
      agentConfig: {
        name: '',
        description: '',
        capabilities: 'general'
      },
      createdAgent: null,
      capabilities: [
        { value: 'general', label: '通用助手' },
        { value: 'tech', label: '技术支持' },
        { value: 'creative', label: '创意写作' },
        { value: 'analysis', label: '数据分析' }
      ],
      defaultAgent: {
        name: '示例智能助手',
        description: '这是一个通用型智能助手示例，可以帮助您了解智能体的基本功能和交互方式。',
        capabilities: 'general',
        status: '运行中'
      }
    }
  },
  methods: {
    useCustom() {
      this.showCustomForm = true;
    },
    useDefault() {
      this.createdAgent = { ...this.defaultAgent };
      this.agentCreated = true;
    },
    createCustomAgent() {
      if (this.agentConfig.name) {
        this.createdAgent = {
          name: this.agentConfig.name,
          description: this.agentConfig.description || '用户自定义智能体',
          capabilities: this.agentConfig.capabilities,
          status: '运行中'
        };
        this.agentCreated = true;
        this.showCustomForm = false;
      }
    },
    cancelCustom() {
      this.showCustomForm = false;
      this.agentConfig = {
        name: '',
        description: '',
        capabilities: 'general'
      };
    },
    resetCreation() {
      this.agentCreated = false;
      this.createdAgent = null;
      this.cancelCustom();
    },
    getCapabilityLabel(value) {
      const capability = this.capabilities.find(cap => cap.value === value);
      return capability ? capability.label : '';
    },
    goToChat() {
      // this.$emit('agent-created', this.createdAgent);
      // 如果使用 Vue Router，可以使用以下代码替代上面一行
      // params: { agent: this.createdAgent }
      localStorage.setItem('agent', JSON.stringify(this.createdAgent));
      this.$router.push({ name: 'agentChat', });
    }
  }
}
</script>

<style scoped>
.agent-creator {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  box-sizing: border-box;
}

.welcome-title {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.agent-creation-section h2 {
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
}

.creation-options {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.option-card {
  flex: 1;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.option-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.option-card p {
  color: #666;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn.primary {
  background: #667eea;
  color: white;
}

.btn.primary:hover {
  background: #5a6fd8;
}

.btn.secondary {
  background: #f0f0f0;
  color: #333;
}

.btn.secondary:hover {
  background: #e0e0e0;
}

.custom-form {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #444;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.agent-created {
  text-align: center;
}

.agent-card {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: left;
}

.agent-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.agent-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.agent-details {
  display: flex;
  justify-content: space-between;
}

.capability, .status {
  background: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .creation-options {
    flex-direction: column;
  }
  
  .agent-creator {
    padding: 1rem;
  }
  
  .container {
    padding: 1rem;
  }
  
  .agent-details {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .action-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>