<template>
    <div class="resume-container">
        <!-- 头部区域 -->
        <div class="header">
            <div class="header-content">
                <div class="avatar-container">
                    <img src="https://www.chennanfang.fun/assets/WechatIMG23.jpg" alt="陈南方" class="avatar">
                </div>
                <div class="header-info">
                    <h1 class="name">陈南方</h1>
                    <div class="title">Web前端开发工程师 & 全栈 | 7年开发经验</div>

                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:19854084456" style="text-decoration: none;color: #fff;">19854084456</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>19854084456@163.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>期望城市：深圳</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-user-check"></i>
                            <span>离职-立即到岗</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 个人优势 -->
        <div class="section">
            <h2 class="section-title"><i class="fas fa-star"></i> 个人优势</h2>

            <div class="strengths-container">
                <!-- 全栈技术深度 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <h3 class="strength-title">全栈技术深度</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>
                                <strong>前端技术体系：</strong>
                                <ul class="sub-list">
                                    <li><strong>框架生态：</strong>掌握Vue2/3、React主流前端框架、精通其生态内的UI组件库如Element UI、Ant
                                        Design，vant等具备复杂应用架构能力</li>
                                    <li><strong>状态管理：</strong>熟练运用 Vuex/Pinia 实现集中式状态管理，解决高复杂度应用数据流问题</li>
                                    <li><strong>语言规范：</strong>熟练掌握JavaScript、TypeScript、ES6+等，了解语言特性与编程范式，能够编写清晰、高效、可维护的代码
                                    </li>
                                    <li><strong>UI工程化：</strong>掌握HTML5、CSS3及预处理器Less/Sass，能够设计并实现符合W3C标准的网页结构与样式，使用rem技术确保页面在不同设备上的响应式布局与良好兼容性
                                    </li>
                                    <li><strong>构建部署：</strong>熟悉Webpack、Vite等前端构建工具，了解模块打包、资源优化等原理，能根据项目需求配置构建流程，同时掌握Nginx等服务器软件的安装、配置部署前端应用
                                    </li>
                                    <li><strong>性能优化：</strong>掌握Web前端性能优化的多种技巧，如图片懒加载、CSS动画优化、HTTP请求合并等，能够针对具体项目需求制定并实施性能提升方案，显著提升应用性能指标
                                    </li>
                                    <li><strong>监控系统：</strong>自主研发前端监控系统，快速定位bug分析和解决能力，分析优化页面性能，跟踪用户行为，提升体验性</li>
                                </ul>
                            </li>
                            <li>
                                <strong>后端技术能力：</strong>
                                <ul class="sub-list">
                                    <li>掌握基于 NestJS 的后端架构设计与核心模块开发，构建模块化、高内聚的微服务，集成Mongoose实现高效、类型安全的数据访问层与存储</li>
                                </ul>
                            </li>
                            <li>
                                <strong>其他技术栈：</strong>
                                <ul class="sub-list">
                                    <li>采用 uni-app 整合 Vue 生态多端复用，实现代码复用率 90%+，输出 App、H5、6大主流小程序</li>
                                    <li>熟悉 http 网络协议核心机制</li>
                                    <li>运用 ECharts 开发数据可视化大屏</li>
                                    <li>掌握ai运用工具 提升工作效率</li>
                                </ul>
                            </li>
                        </ul>

                        <div class="tech-tags">
                            <span class="tech-tag">Vue2/3</span>
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Element UI</span>
                            <span class="tech-tag">Ant Design</span>
                            <span class="tech-tag">Vuex/Pinia</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Webpack/Vite</span>
                            <span class="tech-tag">NestJS</span>
                            <span class="tech-tag">Mongoose</span>
                            <span class="tech-tag">Uni-app</span>
                            <span class="tech-tag">ECharts</span>
                        </div>
                    </div>
                </div>
                <!-- 大型企业工程经验 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <h3 class="strength-title">大型企业工程经验</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>拥有如阿里巴巴、深圳科脉股份有限公司工作经验，掌握规范化开发流程与技术方案设计，具备全链路风险管控能力</li>
                        </ul>
                    </div>
                </div>
                <!-- 多端交付能力 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h3 class="strength-title">多端交付能力</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>擅长H5移动、PC中台系统、小程序（微信/钉钉）及公众号项目开发</li>
                        </ul>
                    </div>
                </div>

                <!-- 多行业领域覆盖 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-industry"></i>
                        </div>
                        <h3 class="strength-title">多行业领域覆盖</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>拥有覆盖金融、电商、教育、医疗等多行业的前端项目开发经验，熟悉各行业业务特点与需求，能够针对不同行业定制前端解决方案，实现高效对接与交付</li>
                        </ul>
                    </div>
                </div>

                <!-- 工程化实践能力 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h3 class="strength-title">工程化实践能力</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>主导搭建前端监控体系、高复用组件库，设计微前端架构提升工程效率</li>
                        </ul>
                    </div>
                </div>

                <!-- 团队协作与管理 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 class="strength-title">团队协作与管理</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>在大型项目团队中担任前端负责人或核心成员，有效协调团队成员间的工作分配与进度同步，通过清晰的技术指导与积极的沟通，确保项目按时按质完成</li>
                        </ul>
                    </div>
                </div>

                <!-- 项目全周期管理 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <h3 class="strength-title">项目全周期管理</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>从0到1：主导需求分析→技术选型→排期开发→测试上线全周期，具备项目风险预判与处置能力，项目流程开发到最终上线的全流程参与</li>
                        </ul>
                    </div>
                </div>

                <!-- 综合素质 -->
                <div class="strength-card">
                    <div class="strength-header">
                        <div class="strength-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3 class="strength-title">综合素质</h3>
                    </div>
                    <div class="strength-content">
                        <ul>
                            <li>技术驱动业务创新，善于需求深挖与方案沉淀，具备高压环境下高效交付能力</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- 工作经历和项目经历切换卡片 -->
        <div class="section">
            <h2 class="section-title"><i class="fas fa-history"></i> 工作与项目经历</h2>
            
            <!-- 切换按钮 -->
            <div class="tabs">
                <button 
                    class="tab-button" 
                    :class="{ active: activeTab === 'workExperience' }"
                    @click="activeTab = 'workExperience'"
                >
                    工作经历
                </button>
                <button 
                    class="tab-button" 
                    :class="{ active: activeTab === 'projects' }"
                    @click="activeTab = 'projects'"
                >
                    重大项目
                </button>
                <button 
                    class="tab-button" 
                    :class="{ active: activeTab === 'ecducationalExperience' }"
                    @click="activeTab = 'ecducationalExperience'"
                >
                    教育经历
                </button>
                
            </div>
            
            <!-- 工作经历内容 -->
            <div v-show="activeTab === 'workExperience'" class="tab-content">
                <WorkExperience></WorkExperience>
            </div>
            
            <!-- 重大项目内容 -->
            <div v-show="activeTab === 'projects'" class="tab-content">
                <MajorProjects></MajorProjects>
            </div>
            <!-- 教育经历内容 -->
            <div v-show="activeTab === 'ecducationalExperience'" class="tab-content">
                <EcducationalExperience></EcducationalExperience>
            </div>
        </div>

        <!-- 页脚 -->
        <div class="footer">
            <p>© 2025 陈南方 - 个人简历 | 期望职位: Web前端开发工程师 & 全栈 | 期望城市: 深圳</p>
            <p>电话: 19854084456 | 邮箱: 19854084456@163.com</p>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import WorkExperience from './workExperience.vue'
import MajorProjects from './majorProjects.vue'
import EcducationalExperience from './ecducationalExperience.vue'
const activeTab = ref('workExperience')
</script>

<style lang="css" scoped>
:root {
    --primary: #2563eb;
    --primary-light: #3b82f6;
    --primary-dark: #1d4ed8;
    --secondary: #10b981;
    --dark: #1e293b;
    --light: #f8fafc;
    --gray: #64748b;
    --light-gray: #e2e8f0;
    --border: #cbd5e1;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --radius: 8px;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans SC', 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--dark);
    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
    overflow-x: hidden;
}

.resume-container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 30px;
    background: white;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    position: relative;
    overflow: hidden;
}

/* 头部区域 */
.header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white;
    padding: 40px;
    border-radius: var(--radius);
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
}

.header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: cover;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    z-index: 2;
}

.avatar-container {
    flex-shrink: 0;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.3);
    object-fit: cover;
    box-shadow: var(--shadow);
}

.header-info {
    flex: 1;
}

.name {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.title {
    font-size: 1.7rem;
    font-weight: 500;
    opacity: 0.9;
    margin-bottom: 25px;
}

.contact-info {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 20px;
    background-color: initial;
    box-shadow: 0px 0px 0px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 15px;
    border-radius: 30px;
}

.contact-item i {
    font-size: 1.2rem;
    width: 24px;
    text-align: center;
}

.job-status {
    background: rgba(255, 255, 255, 0.3);
    padding: 10px 20px;
    border-radius: 30px;
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
}

/* 主要内容区域 */
.section {
    margin-bottom: 40px;
    padding: 30px;
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border-left: 4px solid var(--primary);
}

.section-title {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--light-gray);
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-title i {
    font-size: 1.5rem;
}

/* 个人优势样式 */
.strengths-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 25px;
}

.strength-card {
    background: var(--light);
    padding: 25px;
    border-radius: var(--radius);
    border: 1px solid var(--light-gray);
    transition: var(--transition);
}

.strength-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    border-color: var(--primary);
}

.strength-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
}

.strength-icon {
    width: 50px;
    height: 50px;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.3rem;
    flex-shrink: 0;
}

.strength-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--primary-dark);
}

.strength-content {
    padding-left: 10px;
    border-left: 3px solid var(--secondary);
}

.strength-content ul {
    padding-left: 25px;
}

.strength-content li {
    margin-bottom: 12px;
    position: relative;
    font-size: 1.05rem;
    line-height: 1.7;
}

.strength-content li::before {
    content: "•";
    color: var(--primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    position: absolute;
    left: -15px;
}

.sub-list {
    padding-left: 20px;
    margin-top: 5px;
}

.sub-list li {
    font-size: 0.98rem;
    color: var(--gray);
    margin-bottom: 8px;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px dashed var(--border);
}

.tech-tag {
    background: var(--primary);
    color: white;
    padding: 6px 15px;
    border-radius: 30px;
    font-size: 0.9rem;
}

.tech-tag.light {
    background: var(--light-gray);
    color: var(--dark);
}

/* 选项卡样式 */
.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
    border-bottom: 2px solid var(--light-gray);
    padding-bottom: 10px;
}

.tab-button {
    padding: 10px 20px;
    background: var(--light);
    border: 1px solid var(--light-gray);
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: var(--transition);
}

.tab-button:hover {
    background: var(--primary-light);
    color: white;
    border-color: var(--primary-light);
}

.tab-button.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.tab-content {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* 工作经历样式 */
.experience-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.experience-item {
    padding: 20px;
    border-left: 3px solid var(--secondary);
    padding-left: 20px;
    background: var(--light);
    border-radius: var(--radius);
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.company-name {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--primary-dark);
    margin: 0;
}

.experience-date {
    font-size: 0.9rem;
    color: var(--gray);
    background: rgba(37, 99, 235, 0.1);
    padding: 4px 10px;
    border-radius: 20px;
}

.experience-position {
    font-size: 1.1rem;
    color: var(--primary);
    font-weight: 500;
    margin-bottom: 15px;
}

.experience-content ul {
    padding-left: 20px;
}

.experience-content li {
    margin-bottom: 8px;
    position: relative;
    font-size: 1rem;
    line-height: 1.6;
}

.experience-content li::before {
    content: "•";
    color: var(--primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    position: absolute;
    left: -15px;
}

/* 重大项目经历样式 */
.projects-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.project-item {
    padding: 20px;
    border-left: 3px solid var(--secondary);
    padding-left: 20px;
    background: var(--light);
    border-radius: var(--radius);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.project-name {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--primary-dark);
    margin: 0;
}

.project-date {
    font-size: 0.9rem;
    color: var(--gray);
    background: rgba(37, 99, 235, 0.1);
    padding: 4px 10px;
    border-radius: 20px;
}

.project-role {
    font-size: 1.1rem;
    color: var(--primary);
    font-weight: 500;
    margin-bottom: 15px;
}

.project-desc {
    margin-bottom: 15px;
}

.project-desc p {
    margin: 0;
    color: var(--gray);
    font-style: italic;
}

.project-details ul {
    padding-left: 20px;
}

.project-details li {
    margin-bottom: 8px;
    position: relative;
    font-size: 1rem;
    line-height: 1.6;
}

.project-details li::before {
    content: "•";
    color: var(--primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    position: absolute;
    left: -15px;
}

/* 页脚 */
.footer {
    text-align: center;
    padding: 30px;
    color: var(--gray);
    border-top: 1px solid var(--light-gray);
    margin-top: 20px;
    font-size: 0.95rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .strengths-container {
        grid-template-columns: 1fr;
    }

    .header-content {
        flex-direction: column;
        text-align: center;
    }

    .contact-info {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .resume-container {
        padding: 15px;
        margin: 20px;
    }

    .header {
        padding: 25px;
    }

    .header-content {
        gap: 20px;
    }

    .avatar {
        width: 100px;
        height: 100px;
    }

    .name {
        font-size: 2.2rem;
    }

    .title {
        font-size: 1.3rem;
    }

    .contact-info {
        flex-direction: column;
        gap: 15px;
    }

    .strength-card {
        padding: 20px;
    }
    
    .experience-header,
    .project-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    
    .experience-date,
    .project-date {
        align-self: flex-start;
    }
    
    .tabs {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 20px;
    }

    .avatar {
        width: 90px;
        height: 90px;
    }

    .name {
        font-size: 1.9rem;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .strength-title {
        font-size: 1.2rem;
    }
    
    .company-name,
    .project-name {
        font-size: 1.2rem;
    }
    
    .tab-button {
        padding: 8px 15px;
        font-size: 0.9rem;
    }
}
.strength-content li::before {
    content: none;
}

.sub-list li::before {
    content: none;
}
</style>