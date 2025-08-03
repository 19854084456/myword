<template>
    <div class="container">
        <div class="experience-container" id="projectsType1">
             <!-- 深圳市潮向数字科技有限公司 -->
             <div class="company-card animate-in delay-2">
                <div class="company-header">
                    <div class="company-name">
                        <span>深圳市潮向数字科技有限公司</span>
                        <span>2015 - 2016</span>
                    </div>
                    <div class="company-position">前端开发工程师</div>
                </div>
                <div class="company-info">
                    <p><strong>公司简介：</strong>专注数字孪生企业大屏，聚焦元宇宙、AI设计等前沿领域。</p>
                    
                    <h3 class="section-title"><i class="fas fa-laptop-code"></i> 核心技术</h3>
                    <div class="tech-stack">
                        <div class="tech-item">Vue3</div>
                        <div class="tech-item">React</div>
                        <div class="tech-item">WebSocket</div>
                        <div class="tech-item">NestJS</div>
                    </div>
                    
                    <h3 class="section-title"><i class="fas fa-project-diagram"></i> 核心项目</h3>
                    
                    <div class="project">
                        <div class="project-title">
                            <span>防城港智慧港口系统</span>
                            <button class="demo-btn" @click="openModal('modal5')">
                                <i class="fas fa-eye"></i> 查看演示
                            </button>
                        </div>
                        <div class="project-details">
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tools"></i> 涉及技术</div>
                                <p>ECharts, WebGL, WebSocket, 大数据可视化</p>
                            </div>
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tasks"></i> 功能描述</div>
                                <p>智慧港口大屏可视化系统，实现车辆、人员、场地数据的实时监控与可视化分析。</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project">
                        <div class="project-title">
                            <span>前端监控系统搭建</span>
                            <button class="demo-btn" @click="openModal('modal6')">
                                <i class="fas fa-eye"></i> 查看演示
                            </button>
                        </div>
                        <div class="project-details">
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tools"></i> 涉及技术</div>
                                <p>NestJS, MongoDB, Nginx, Sentry</p>
                            </div>
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tasks"></i> 功能描述</div>
                                <p>
                                    - 前端异常监控与报错定位<br>
                                    - 用户行为录屏与分析<br>
                                    - 自定义监控数据看板
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <!-- 深圳市科脉技术股份有限公司 -->
             <div class="company-card animate-in delay-1" id="projectsType2">
                <div class="company-header">
                    <div class="company-name">
                        <span>深圳市科脉技术股份有限公司</span>
                        <span>2016 - 2018</span>
                    </div>
                    <div class="company-position">前端小组长</div>
                </div>
                <div class="company-info">
                    <p><strong>公司简介：</strong>零售、餐饮、电商管理软件开发商，互联网O2O技术平台及运营服务提供商。</p>
                    
                    <h3 class="section-title"><i class="fas fa-laptop-code"></i> 核心技术</h3>
                    <div class="tech-stack">
                        <div class="tech-item">Vue.js</div>
                        <div class="tech-item">微信小程序</div>
                        <div class="tech-item">UniApp</div>
                        <div class="tech-item">Element UI</div>
                    </div>
                    
                    <h3 class="section-title"><i class="fas fa-project-diagram"></i> 核心项目</h3>
                    
                    <div class="project">
                        <div class="project-title">
                            <span>BOSS数字化运营平台</span>
                            <button class="demo-btn" @click="openModal('modal3')">
                                <i class="fas fa-eye"></i> 查看演示
                            </button>
                        </div>
                        <div class="project-details">
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tools"></i> 涉及技术</div>
                                <p>Element UI, ECharts, Vue Router, Vuex</p>
                            </div>
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tasks"></i> 功能描述</div>
                                <p>面向公司管理人员的数据分析和管理中台，涵盖全国商户、门店、经销商管理。</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project">
                        <div class="project-title">
                            <span>科小脉（微信小程序）</span>
                            <button class="demo-btn" @click="openModal('modal4')">
                                <i class="fas fa-eye"></i> 查看演示
                            </button>
                        </div>
                        <div class="project-details">
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tools"></i> 涉及技术</div>
                                <p>微信小程序框架, WePY, Vant Weapp</p>
                            </div>
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tasks"></i> 功能描述</div>
                                <p>为经销商和门店提供交易数据分析、数据上报和业务管理的移动端解决方案。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 上海市铭悦软件有限公司 -->
            <div class="company-card animate-in" id="projectsType3">
                <div class="company-header">
                    <div class="company-name">
                        <span>上海市铭悦软件有限公司</span>
                        <span>2018 - 2021</span>
                    </div>
                    <div class="company-position">前端负责人</div>
                </div>
                <div class="company-info">
                    <p><strong>公司简介：</strong>钉钉集成商、阿里巴巴会务系统合作商，为各行业提供SaaS解决方案。</p>
                    
                    <h3 class="section-title"><i class="fas fa-laptop-code"></i> 核心技术</h3>
                    <div class="tech-stack">
                        <div class="tech-item">React</div>
                        <div class="tech-item">Ant Design</div>
                        <div class="tech-item">TypeScript</div>
                        <div class="tech-item">钉钉API</div>
                        <div class="tech-item">ECharts</div>
                    </div>
                    
                    <h3 class="section-title"><i class="fas fa-project-diagram"></i> 核心项目</h3>
                    
                    <div class="project">
                        <div class="project-title">
                            <span>悦门户 & 悦平台</span>
                            <button class="demo-btn" @click="openModal('modal1')">
                                <i class="fas fa-eye"></i> 查看演示
                            </button>
                        </div>
                        <div class="project-details">
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tools"></i> 涉及技术</div>
                                <p>Element UI, Vant, Rem适配, 钉钉开放平台</p>
                            </div>
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tasks"></i> 功能描述</div>
                                <p>零代码开发平台，通过拖拽组件快速搭建企业网站和工作台，支持样式自定义。</p>
                            </div>
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-user-tie"></i> 角色成果</div>
                                <p>独立开发两款核心产品，支撑美年健康/海尔等企业高并发使用。</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project">
                        <div class="project-title">
                            <span>会务系统</span>
                            <button class="demo-btn" @click="openModal('modal2')">
                                <i class="fas fa-eye"></i> 查看演示
                            </button>
                        </div>
                        <div class="project-details">
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tools"></i> 涉及技术</div>
                                <p>React, TypeScript, ECharts, 阿里云服务</p>
                            </div>
                            <div class="project-detail">
                                <div class="detail-title"><i class="fas fa-tasks"></i> 功能描述</div>
                                <p>为UCAN全球设计论坛、云栖大会等提供全流程解决方案。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <!-- 项目演示模态框 -->
      <div v-for="n in 6" :id="'modal' + n" :key="n" class="modal" :style="{ display: activeModal === 'modal' + n ? 'flex' : 'none' }" @click.self="closeModal">
        <div class="modal-content">
            <button class="close-btn" @click="closeModal">&times;</button>
            <div class="carousel">
                <div class="carousel-inner" :style="{ transform: `translateX(-${carouselData['modal' + n].currentIndex * 100}%)` }">
                    <div class="carousel-item" v-for="(item, index) in carouselData['modal' + n].items" :key="index" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${item.image}')` }">
                        <div class="carousel-caption">
                            <h3 class="carousel-title">{{ item.title }}</h3>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
                <!-- <div class="carousel-controls">
                    <button class="carousel-btn prev" @click="prevSlide('modal' + n)"><i class="fas fa-chevron-left"></i></button>
                    <button class="carousel-btn next" @click="nextSlide('modal' + n)"><i class="fas fa-chevron-right"></i></button>
                </div> -->
                <div class="carousel-indicators">
                    <div 
                        v-for="(item, index) in carouselData['modal' + n].items" 
                        :key="index" 
                        class="indicator" 
                        :class="{ active: index === carouselData['modal' + n].currentIndex }"
                        @click="goToSlide('modal' + n, index)"
                    ></div>
                </div>
            </div>
            <div class="modal-body">
                <h2 class="modal-title">{{ carouselData['modal' + n].title }}</h2>
                <p>{{ carouselData['modal' + n].description }}</p>
                <!-- <div class="modal-actions">
                    <button class="modal-btn live-demo"><i class="fas fa-external-link-alt"></i> 查看在线演示</button>
                    <button class="modal-btn source-code"><i class="fab fa-github"></i> 查看源代码</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, reactive, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'WorkExperience',
  setup() {
    const activeModal = ref(null)
    const route = useRoute()
    const router = useRouter()
    
    const carouselData = reactive({
      modal1: {
        currentIndex: 0,
        title: '悦门户 & 悦平台',
        description: '钉钉企业零代码建站平台，为美年健康、海尔等大型企业提供定制化门户解决方案。该平台支持通过拖拽组件快速完成企业首页网站的配置搭建与展示，打造专属企业工作台。',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '零代码建站平台',
            description: '拖拽式界面设计器'
          },
          {
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '组件库',
            description: '丰富的可配置组件'
          },
          {
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '数据看板',
            description: '实时展示业务指标'
          }
        ]
      },
      modal2: {
        currentIndex: 0,
        title: '会务系统',
        description: '为UCAN全球设计论坛、云栖大会等提供全流程解决方案，包括票务系统、订餐系统、门禁闸机识别、会场预订等功能。',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '票务系统',
            description: '在线购票与票务管理'
          },
          {
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '会场预订',
            description: '智能会场选择与管理'
          },
          {
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '数据分析',
            description: '参会者行为与数据统计'
          }
        ]
      },
      modal3: {
        currentIndex: 0,
        title: 'BOSS数字化运营平台',
        description: '面向公司管理人员的数据分析和管理中台，涵盖全国商户、门店、经销商管理。',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '数据看板',
            description: '实时展示业务指标'
          },
          {
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '商户管理',
            description: '全国商户统一管理平台'
          },
          {
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '数据分析',
            description: '多维度数据可视化分析'
          }
        ]
      },
      modal4: {
        currentIndex: 0,
        title: '科小脉（微信小程序）',
        description: '为经销商和门店提供交易数据分析、数据上报和业务管理的移动端解决方案。',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '交易分析',
            description: '实时交易数据可视化'
          },
          {
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '数据上报',
            description: '便捷的数据录入与上报'
          },
          {
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            title: '业务管理',
            description: '移动端业务处理平台'
          }
        ]
      },
      modal5: {
        currentIndex: 0,
        title: '防城港智慧港口系统',
        description: '智慧港口大屏可视化系统，实现车辆、人员、场地数据的实时监控与可视化分析。',
        items: [
          {
            image:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/2.jpg',
            title: '实时监控',
            description: '港口运营状态实时监控'
          },
          {
            image:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/5.png',
            title: '数据分析',
            description: '港口运营数据深度分析'
          },
          {
            image:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/10.png',
            title: '可视化展示',
            description: '3D港口可视化展示'
          }
        ]
      },
      modal6: {
        currentIndex: 0,
        title: '前端监控系统搭建',
        description: '- 前端异常监控与报错定位\n- 用户行为录屏与分析\n- 自定义监控数据看板',
        items: [
          {
            image:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/cx1.png',
            title: '异常监控',
            description: '前端异常实时监控'
          },
          {
            image: "./../../../public/imgage/",
            image:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/webSee.jpg',
            title: '行为分析',
            description: '用户行为录屏分析'
          },
          {
            image:'https://nanfangchen.oss-cn-shenzhen.aliyuncs.com/dist/imgage/webseeMan.jpg',
            title: '数据看板',
            description: '自定义监控数据看板'
          }
        ]
      }
    })

    // 打开模态框
    const openModal = (modalId) => {
      activeModal.value = modalId
      document.body.style.overflow = 'hidden'
    }

    // 关闭模态框
    const closeModal = () => {
      activeModal.value = null
      document.body.style.overflow = 'auto'
    }

    // 轮播图功能
    const nextSlide = (modalId) => {
      const items = carouselData[modalId].items
      carouselData[modalId].currentIndex = (carouselData[modalId].currentIndex + 1) % items.length
    }

    const prevSlide = (modalId) => {
      const items = carouselData[modalId].items
      carouselData[modalId].currentIndex = (carouselData[modalId].currentIndex - 1 + items.length) % items.length
    }

    const goToSlide = (modalId, index) => {
      carouselData[modalId].currentIndex = index
    }

    // 滚动到指定项目类型
    const scrollToProjectType = () => {
      const projectsType = route.query.projectsType
      
      if (projectsType) {
        // 使用 setTimeout 确保 DOM 已更新
        setTimeout(() => {
          let targetElement = null
          
          switch (projectsType) {
            case '1':
              targetElement = document.getElementById('projectsType1')
              break
            case '2':
              targetElement = document.getElementById('projectsType2')
              break
            case '3':
              targetElement = document.getElementById('projectsType3')
              break
            default:
              // 如果参数无效，滚动到顶部
              window.scrollTo({ top: 0, behavior: 'smooth' })
              return
          }
          
          if (targetElement) {
            // 滚动到目标元素
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100)
      } else {
        // 如果没有参数，滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    // 自动轮播
    onMounted(() => {
      const intervals = []
      
      // 检查URL参数并滚动到指定位置
      scrollToProjectType()
      
      // 为每个模态框设置自动轮播
      Object.keys(carouselData).forEach(modalId => {
        const interval = setInterval(() => {
          if (activeModal.value === modalId) {
            nextSlide(modalId)
          }
        }, 5000)
        intervals.push(interval)
      })
      
      // 清理定时器
      onUnmounted(() => {
        intervals.forEach(interval => clearInterval(interval))
      })
    })
    
    // 监听路由变化
    watch(
      () => route.query,
      (newQuery, oldQuery) => {
        // 只有当 projectsType 参数发生变化时才执行滚动
        if (newQuery.projectsType !== oldQuery.projectsType) {
          scrollToProjectType()
        }
      }
    )

    return {
      activeModal,
      carouselData,
      openModal,
      closeModal,
      nextSlide,
      prevSlide,
      goToSlide
    }
  }
}
</script>

<style scoped>
/* 保留原有的样式代码 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

/* 头部样式 */
header {
    text-align: center;
    padding: 40px 20px 30px;
    background: linear-gradient(120deg, var(--primary), var(--secondary));
    color: white;
    border-radius: 0 0 30px 30px;
    margin-bottom: 30px;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
}

header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 20%),
        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 20%);
}

.header-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    font-size: 2.2rem;
    margin-bottom: 12px;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.subtitle {
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 20px;
    opacity: 0.9;
}

.tagline {
    font-size: 1rem;
    max-width: 700px;
    margin: 0 auto 25px;
    background: rgba(255,255,255,0.15);
    padding: 12px 20px;
    border-radius: 30px;
    backdrop-filter: blur(5px);
    display: inline-block;
}

/* 主内容区 */
.experience-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
}

/* 公司卡片样式 */
.company-card {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition);
}

.company-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.1);
}

.company-header {
    padding: 20px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    color: white;
    position: relative;
}

.company-name {
    font-size: 1.5rem;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.company-position {
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.9;
}

.company-info {
    padding: 20px;
}

.section-title {
    font-size: 1.3rem;
    color: var(--primary-dark);
    margin: 20px 0 12px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--light-gray);
    display: flex;
    align-items: center;
}

.section-title i {
    margin-right: 8px;
    color: var(--accent);
}

/* 技术栈样式 */
.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 12px 0;
}

.tech-item {
    background: var(--light);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--primary-dark);
    border: 1px solid var(--light-gray);
    transition: var(--transition);
    display: flex;
    align-items: center;
}

.tech-item:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.05);
}

/* 项目样式 */
.project {
    margin: 20px 0;
    padding: 15px;
    border-radius: var(--border-radius);
    background: linear-gradient(to right, #f9fafb, #f3f4f6);
    border-left: 4px solid var(--accent);
    position: relative;
}

.project-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.project-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.project-detail {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.detail-title {
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--primary);
    display: flex;
    align-items: center;
    font-size: 1rem;
}

.detail-title i {
    margin-right: 8px;
    font-size: 0.9rem;
    color: var(--accent);
}

/* 演示按钮 */
.demo-btn {
    background: linear-gradient(90deg, var(--accent), var(--secondary));
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 3px 8px rgba(139, 92, 246, 0.3);
    font-size: 0.9rem;
    margin-top: 10px;
}

.demo-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(139, 92, 246, 0.4);
}

/* 轮播图模态框 - 移动端优化 */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: white;
    border-radius: 15px;
    width: 95%;
    max-width: 500px;
    max-height: 90vh;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0,0,0,0.5);
    position: relative;
}

.close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255,255,255,0.2);
    color: white;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 1.3rem;
    cursor: pointer;
    z-index: 10;
    transition: var(--transition);
}

.close-btn:hover {
    background: var(--primary);
    transform: rotate(90deg);
}

.carousel {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
}

.carousel-item {
    min-width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
}

.carousel-item::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}

.carousel-caption {
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    padding: 0 20px;
    color: white;
    z-index: 2;
}

.carousel-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    transform: translateY(-50%);
    z-index: 5;
}

.carousel-btn {
    background: rgba(255,255,255,0.3);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition);
    backdrop-filter: blur(5px);
}

.carousel-btn:hover {
    background: var(--primary);
    transform: scale(1.1);
}

.carousel-indicators {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 5;
}

.indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: var(--transition);
}

.indicator.active {
    background: var(--primary);
    transform: scale(1.2);
}

.modal-body {
    padding: 20px;
}

.modal-title {
    font-size: 1.4rem;
    margin-bottom: 12px;
    color: var(--dark);
}

.modal-actions {
    display: flex;
    gap: 12px;
    margin-top: 20px;
}

.modal-btn {
    flex: 1;
    padding: 12px;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.9rem;
}

.live-demo {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    color: white;
}

.source-code {
    background: var(--light);
    color: var(--dark);
    border: 1px solid var(--light-gray);
}

.modal-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

/* 页脚样式 */
footer {
    text-align: center;
    padding: 30px 20px;
    background: var(--dark);
    color: white;
    margin-top: 40px;
    border-radius: 30px 30px 0 0;
}

.contact-info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
}

/* 响应式调整 - 平板和桌面 */
@media (min-width: 768px) {
    h1 {
        font-size: 3rem;
    }
    .subtitle {
        font-size: 1.6rem;
    }
    .tagline {
        font-size: 1.1rem;
        padding: 15px 25px;
    }
    .company-header {
        padding: 25px 30px;
    }
    .company-name {
        font-size: 1.7rem;
    }
    .company-position {
        font-size: 1.1rem;
    }
    .company-info {
        padding: 25px;
    }
    .section-title {
        font-size: 1.4rem;
    }
    .tech-item {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
    .project {
        padding: 20px;
    }
    .project-title {
        font-size: 1.3rem;
    }
    .project-details {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .demo-btn {
        margin-top: 0;
        font-size: 1rem;
        padding: 10px 18px;
    }
    .carousel {
        height: 300px;
    }
    .modal-content {
        max-width: 700px;
    }
    .carousel-title {
        font-size: 1.5rem;
    }
    .modal-title {
        font-size: 1.6rem;
    }
}

/* 动画效果 */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-in {
    animation: fadeIn 0.6s ease-out forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }

/* 高亮文本 */
.highlight {
    background: linear-gradient(120deg, rgba(37, 99, 235, 0.1), transparent);
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 500;
}
</style>