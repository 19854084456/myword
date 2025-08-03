<template>
  <!-- 工作经历区域 -->
  <section class="projects" id="projects">
    <div class="container">
      <div class="section-title">
        <h2>工作经历</h2>
        <!-- <p>点击项目查看详情与演示</p> -->
      </div>
      <div class="projects-grid">
        <!-- 项目1 - 轮播图展示 -->
        <div class="project-card">
          <div class="carousel-container" ref="carousel1">
            <div class="carousel-slides" :style="{ transform: `translateX(-${carousel1CurrentIndex * 100}%)` }">
              <div class="carousel-slide" v-for="(slide, index) in carousel1Slides" :key="index">
                <img :src="slide.src" :alt="slide.alt">
              </div>
            </div>
            <div class="carousel-nav">
              <div class="carousel-btn prev-btn" @click="prevSlide(0)"><i class="fas fa-chevron-left"></i></div>
              <div class="carousel-btn next-btn" @click="nextSlide(0)"><i class="fas fa-chevron-right"></i></div>
            </div>
            <div class="carousel-controls">
              <div v-for="(control, index) in carousel1Slides" :key="index" class="carousel-control"
                :class="{ active: index === carousel1CurrentIndex }" @click="goToSlide(0, index)"></div>
            </div>
          </div>
          <div class="project-content">
            <h3>深圳市潮向数字科技有限公司</h3>
            <div class="work-period">2025.03 - 至今</div>
            <p>数字孪生企业大屏，聚焦元宇宙、AI设计等领域</p>
            <div class="project-tech">
              <span class="tag">防城港智慧港口系统</span>
              <span class="tag">自研前端组件库与技术规范</span>
              <span class="tag">前端监控系统设计与搭建</span>
            </div>
            <div class="project-links">
              <router-link to="/projectsPage?projectsType=1">
                <a href="#"><i class="fas fa-info-circle"></i> 查看详情</a>
              </router-link>
            </div>
          </div>
        </div>

        <!-- 项目2 - 视频展示 -->
        <div class="project-card">
          <div class="carousel-container" ref="carousel1">
            <div class="carousel-slides">
              <div class="carousel-slide">
                <img src="./../../../public//imgage//keimai1.png">
              </div>
            </div>
              <!-- <div class="carousel-nav">
              <div class="carousel-btn prev-btn" @click="prevSlide(0)"><i class="fas fa-chevron-left"></i></div>
              <div class="carousel-btn next-btn" @click="nextSlide(0)"><i class="fas fa-chevron-right"></i></div>
            </div> -->
            <!-- <div class="carousel-controls">
              <div v-for="(control, index) in carousel1Slides" :key="index" class="carousel-control"
                :class="{ active: index === carousel1CurrentIndex }" @click="goToSlide(0, index)"></div>
            </div> -->
          </div>
          <div class="project-content">
            <h3>深圳市科脉技术股份有限公司</h3>
            <div class="work-period">2020.11 - 2024.11</div>
            <p>零售、餐饮业、电商等管理软件的开发商，互联网O2O技术平台及运营服务提供商</p>
            <div class="project-tech">
              <span class="tag">BOSS数字化运营平台（中台管理系统）</span>
              <span class="tag">科小脉 （微信小程序）</span>
              <span class="tag">企业钱包（移动端）</span>
            </div>
            <div class="project-links">
              <router-link to="/projectsPage?projectsType=2">
                <a href="#"><i class="fas fa-info-circle"></i> 查看详情</a>
              </router-link>
            </div>
          </div>
        </div>

        <!-- 项目3 - 轮播图展示 -->
        <div class="project-card">
          <div class="carousel-container" ref="carousel2">
            <div class="carousel-slides" :style="{ transform: `translateX(-${carousel2CurrentIndex * 100}%)` }">
              <div class="carousel-slide" v-for="(slide, index) in carousel2Slides" :key="index">
                <img :src="slide.src" :alt="slide.alt">
              </div>
            </div>
            <div class="carousel-nav">
              <div class="carousel-btn prev-btn" @click="prevSlide(1)"><i class="fas fa-chevron-left"></i></div>
              <div class="carousel-btn next-btn" @click="nextSlide(1)"><i class="fas fa-chevron-right"></i></div>
            </div>
            <div class="carousel-controls">
              <div v-for="(control, index) in carousel2Slides" :key="index" class="carousel-control"
                :class="{ active: index === carousel2CurrentIndex }" @click="goToSlide(1, index)"></div>
            </div>
          </div>
          <div class="project-content">
            <h3>上海市铭悦软件有限公司</h3>
            <div class="work-period">2017.03 - 2020.11</div>
            <p>钉钉集成商、阿里巴巴会务系统合作商</p>
            <div class="project-tech">
              <span class="tag">悦门户，悦平台（钉钉企业零代码建站平台）</span>
              <span class="tag">UCAN2019全球设计论坛 & 云栖大会 </span>
              <span class="tag">参与独立完成大量不同行业的系统</span>
            </div>
            <div class="project-links">
              <router-link to="/projectsPage?projectsType=3">
                <a href="#"><i class="fas fa-info-circle"></i> 查看详情</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 轮播图数据
const carousel1Slides = ref([
  {
    src:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/2.jpg',
    alt: "防城港智慧港口系统"
  },
  {
    src:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/1.png',
    alt: "自研前端组件库"
  },
  {
    src:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/webseeMan.jpg',
    alt: "前端监控系统搭建"
  }
])

const carousel2Slides = ref([
  {
    src:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/ucan2.jpg',
    alt: "ucan"
  },
  {
    src:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/yunxi.jpg',
    alt: "yunxi"
  },
  {
    src:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/ucan.jpg',
    alt: "ucan"
  }
])

// 轮播图状态
const carousel1CurrentIndex = ref(0)
const carousel2CurrentIndex = ref(0)

// 视频播放状态
const isPlaying = ref(false)
const videoPlayer = ref(null)

// 自动轮播定时器
let carouselIntervals = []

// 轮播图方法
const nextSlide = (carouselIndex) => {
  if (carouselIndex === 0) {
    carousel1CurrentIndex.value = (carousel1CurrentIndex.value < carousel1Slides.value.length - 1)
      ? carousel1CurrentIndex.value + 1
      : 0
  } else {
    carousel2CurrentIndex.value = (carousel2CurrentIndex.value < carousel2Slides.value.length - 1)
      ? carousel2CurrentIndex.value + 1
      : 0
  }
}

const prevSlide = (carouselIndex) => {
  if (carouselIndex === 0) {
    carousel1CurrentIndex.value = (carousel1CurrentIndex.value > 0)
      ? carousel1CurrentIndex.value - 1
      : carousel1Slides.value.length - 1
  } else {
    carousel2CurrentIndex.value = (carousel2CurrentIndex.value > 0)
      ? carousel2CurrentIndex.value - 1
      : carousel2Slides.value.length - 1
  }
}

const goToSlide = (carouselIndex, index) => {
  if (carouselIndex === 0) {
    carousel1CurrentIndex.value = index
  } else {
    carousel2CurrentIndex.value = index
  }
}

// 视频播放控制方法
const toggleVideo = () => {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play()
    isPlaying.value = true
  } else {
    videoPlayer.value.pause()
    isPlaying.value = false
  }
}

const updatePlayButton = () => {
  isPlaying.value = !videoPlayer.value.paused
}

// 设置自动轮播
const startAutoCarousel = () => {
  carouselIntervals[0] = setInterval(() => {
    nextSlide(0)
  }, 5000)

  carouselIntervals[1] = setInterval(() => {
    nextSlide(1)
  }, 5000)
}

// 清除定时器
const clearAutoCarousel = () => {
  carouselIntervals.forEach(interval => clearInterval(interval))
}

// 生命周期钩子
onMounted(() => {
  startAutoCarousel()
})

onBeforeUnmount(() => {
  clearAutoCarousel()
})
</script>

<style scoped>
/* 轮播图样式 */
.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 10px;
  box-sizing: border-box;
}

.carousel-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-controls {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carousel-control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.carousel-control.active {
  background: white;
}

/* 视频容器样式 */
.video-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.video-container video {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
}

.play-btn:hover {
  background: rgba(0, 0, 0, 0.9);
}

/* 其他样式保持不变 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.project-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-content {
  padding: 20px;
}

.project-content h3 {
  margin: 0 0 10px;
  color: #333;
  font-size: 1.5rem;
}

.project-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.project-tech {
  margin-bottom: 20px;
}

.tech-tag {
  display: inline-block;
  background: #e9ecef;
  color: #495057;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 5px;
  margin-bottom: 5px;
}

.project-links {
  display: flex;
  gap: 15px;
}

.project-links a {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  transition: color 0.3s;
}

.project-links a:hover {
  color: #0056b3;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.section-title p {
  color: #666;
  font-size: 1.1rem;
}
.work-period {
  color: #007bff;
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 1rem;
}
</style>