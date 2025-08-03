<template>
    <!-- 联系区域 -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-title">
          <h2>联系我</h2>
        </div>
        <div class="contact-container">
          <div class="contact-info">
            <h3>联系信息</h3>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-details">
                <h4>电话</h4>
                <a href="tel:+19854084456">+86 19854084456</a>
              </div>
            </div>
  
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>电子邮箱</h4>
                <a href="19854084456@163.com">19854084456@163.com</a>
              </div>
            </div>
            
            <div class="wechat-container">
              <h4>微信联系</h4>
              <div class="wechat-qrcode">
                <img src="./../../../public/imgage/WechatIMG129.jpg" alt="微信二维码" class="qrcode-img">
                <p class="wechat-text">扫码添加微信</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* 保留原有样式，并添加以下新样式 */
  
  .wechat-container {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  
  .wechat-container h4 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .wechat-qrcode {
    text-align: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  
  .wechat-qrcode:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .qrcode-img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
  
  .wechat-text {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .qrcode-img {
      width: 120px;
      height: 120px;
    }
    
    .wechat-container {
      margin-top: 20px;
      padding-top: 15px;
    }
  }
  </style>