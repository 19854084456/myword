// src/utils/message.ts
type MessageType = 'info' | 'success' | 'warning' | 'error';

interface MessageOptions {
  content: string;
  duration?: number;
  onClose?: () => void;
}

class MessageManager {
  private container: HTMLElement | null = null;

  constructor() {
    this.initContainer();
  }

  private initContainer() {
    // 创建消息容器
    this.container = document.createElement('div');
    this.container.className = 'message-container';
    document.body.appendChild(this.container);

    // 添加基础样式
    this.addStyles();
  }

  private addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .message-container {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        pointer-events: none;
      }

      .message-item {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        font-size: 14px;
        color: rgba(0, 0, 0, 0.85);
        background: #fff;
        pointer-events: auto;
        animation: messageFadeIn 0.3s ease-in-out, messageFadeOut 0.3s ease-in-out 2.7s forwards;
        min-width: 300px;
        max-width: 500px;
      }

      @keyframes messageFadeIn {
        from {
          opacity: 0;
          transform: translate(0, -100%);
        }
        to {
          opacity: 1;
          transform: translate(0, 0);
        }
      }

      @keyframes messageFadeOut {
        from {
          opacity: 1;
          transform: translate(0, 0);
        }
        to {
          opacity: 0;
          transform: translate(0, -100%);
        }
      }

      .message-info {
        border: 1px solid #91d5ff;
        background-color: #e6f7ff;
      }

      .message-success {
        border: 1px solid #b7eb8f;
        background-color: #f6ffed;
      }

      .message-warning {
        border: 1px solid #ffe58f;
        background-color: #fffbe6;
      }

      .message-error {
        border: 1px solid #ffa39e;
        background-color: #fff2f0;
      }

      .message-content {
        flex: 1;
        padding: 0 10px;
      }

      .message-close {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.45);
        font-size: 12px;
      }

      .message-close:hover {
        color: rgba(0, 0, 0, 0.85);
      }

      @media (max-width: 768px) {
        .message-item {
          min-width: 250px;
          max-width: calc(100vw - 40px);
          margin: 0 20px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private showMessage(options: MessageOptions, type: MessageType) {
    if (!this.container) return;

    const { content, duration = 3000, onClose } = options;

    // 创建消息元素
    const messageElement = document.createElement('div');
    messageElement.className = `message-item message-${type}`;
    
    const contentElement = document.createElement('div');
    contentElement.className = 'message-content';
    contentElement.textContent = content;
    
    const closeElement = document.createElement('span');
    closeElement.className = 'message-close';
    closeElement.innerHTML = '&times;';
    closeElement.onclick = () => {
      this.removeMessage(messageElement);
      if (onClose) onClose();
    };

    messageElement.appendChild(contentElement);
    messageElement.appendChild(closeElement);

    // 添加到容器
    this.container.appendChild(messageElement);

    // 设置自动关闭
    const timer = setTimeout(() => {
      this.removeMessage(messageElement);
      if (onClose) onClose();
    }, duration);

    // 防止动画冲突
    setTimeout(() => {
      messageElement.style.animation = `messageFadeIn 0.3s ease-in-out, messageFadeOut 0.3s ease-in-out ${duration/1000 - 0.3}s forwards`;
    }, 10);

    // 点击消息本身也可以关闭
    messageElement.onclick = (e) => {
      if (e.target !== closeElement) {
        clearTimeout(timer);
        this.removeMessage(messageElement);
        if (onClose) onClose();
      }
    };
  }

  private removeMessage(element: HTMLElement) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  info(content: string | MessageOptions, duration?: number) {
    const options = typeof content === 'string' 
      ? { content, duration } 
      : content;
    this.showMessage(options, 'info');
  }

  success(content: string | MessageOptions, duration?: number) {
    const options = typeof content === 'string' 
      ? { content, duration } 
      : content;
    this.showMessage(options, 'success');
  }

  warning(content: string | MessageOptions, duration?: number) {
    const options = typeof content === 'string' 
      ? { content, duration } 
      : content;
    this.showMessage(options, 'warning');
  }

  error(content: string | MessageOptions, duration?: number) {
    const options = typeof content === 'string' 
      ? { content, duration } 
      : content;
    this.showMessage(options, 'error');
  }
}

// 创建单例实例
const messageInstance = new MessageManager();

// 导出方法
export const message = {
  info: messageInstance.info.bind(messageInstance),
  success: messageInstance.success.bind(messageInstance),
  warning: messageInstance.warning.bind(messageInstance),
  error: messageInstance.error.bind(messageInstance)
};

export default message;