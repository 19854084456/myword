<template>
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <h1>你好，我是<span>南方</span><br>web前端开发工程师</h1>
          <p>我专注于创建美观、高效、用户友好的网站与应用。拥有7年开发经验，擅长将复杂需求转化为优雅的解决方案。</p>
          <div class="btn-container">
            <router-link to="/projectsPage" class=" btn">在线简历查看</router-link>
            <a href="#about" class="btn btn-outline">个人简历下载</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="./../../../public/imgage/nanfang.jpg" alt="南方">
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* 默认桌面端样式 */
  .hero {
    padding: 100px 0;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .hero-content {
    flex: 1;
    padding-right: 40px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    line-height: 1.3;
  }
  
  .hero-content p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }
  
  .hero-image {
    flex: 1;
    text-align: center;
  }
  
  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .btn-container {
    display: flex;
    gap: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .btn-outline {
    background: transparent;
    border: 2px solid #007bff;
    color: #007bff;
  }
  
  /* 移动端优化样式 */
  @media (max-width: 768px) {
    .hero {
      padding: 60px 0;
    }
  
    .container {
      flex-direction: column-reverse;
      text-align: center;
      padding: 0 15px;
    }
  
    .hero-content {
      padding-right: 0;
      padding-top: 30px;
    }
  
    .hero-content h1 {
      font-size: 2rem;
      margin-bottom: 15px;
    }
  
    .hero-content p {
      font-size: 1rem;
      margin-bottom: 25px;
      padding: 0 10px;
    }
  
    .btn-container {
      justify-content: center;
      flex-direction: column;
      gap: 15px;
    }
  
    .btn {
      padding: 12px 25px;
      width: 80%;
      max-width: 250px;
      margin: 0 auto;
    }
  
    .hero-image img {
      /* margin-top: 106px; */
      /* max-width: 80%; */
      /* border-radius: 50%; */
    }
  }
  
  @media (max-width: 480px) {
    .hero {
      padding: 40px 0;
    }
  
    .hero-content h1 {
      font-size: 1.7rem;
    }
  
    .hero-content p {
      font-size: 0.9rem;
      padding: 0;
    }
  
    .btn {
      padding: 10px 20px;
      width: 90%;
      font-size: 0.9rem;
    }
  }
  </style>