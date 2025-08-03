<template>
    <!-- 关于我区域 -->
    <section class="about" id="about">
        <div class="container">
            <div class="section-title" style="margin-bottom: 0px;">
                <h2>个人优势</h2>
            </div>
            <div class="about-content">
                <!-- <div class="about-image">
                    <img src="" alt="南方">
                </div> -->
                <div class="about-text">
                    <!-- <h3>web前端开发工程师 & 全栈</h3>
                    <p>我擅长使用现代JavaScript框架如React和Vue.js，对性能优化、可访问性和跨浏览器兼容性有深入研究。同时，我也具备Node.js后端开发经验，能够构建完整的全栈应用。</p>
                     -->
                    <div class="advantages">
                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>全栈技术深度</h4>
                                <p>精通前后端开发，具备完整的全栈项目开发能力</p>
                            </div>
                        </div>

                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-building"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>大型企业工程经验</h4>
                                <p>拥有阿里巴巴、深圳科脉股份有限公司等工作经验，掌握规范化开发流程与技术方案设计，具备全链路风险管控能力</p>
                            </div>
                        </div>

                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>多端交付能力</h4>
                                <p>擅长H5移动、PC中台系统、小程序（微信/钉钉）及公众号项目开发，具备跨端适配能力</p>
                            </div>
                        </div>

                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-industry"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>多行业领域覆盖</h4>
                                <p>拥有金融、电商、教育、医疗等多行业前端项目开发经验，能够针对不同行业定制前端解决方案</p>
                            </div>
                        </div>

                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>工程化实践能力</h4>
                                <p>主导搭建前端监控体系、高复用组件库，设计微前端架构提升工程效率</p>
                            </div>
                        </div>

                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>团队协作与管理</h4>
                                <p>在大型项目团队中担任前端负责人或核心成员，有效协调团队工作，确保项目按时按质完成</p>
                            </div>
                        </div>

                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-rocket"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>从0到1项目经验</h4>
                                <p>主导需求分析→技术选型→排期开发→测试上线全周期，具备项目风险预判与处置能力</p>
                            </div>
                        </div>

                        <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>综合素质</h4>
                                <p>技术驱动业务创新，善于需求深挖与方案沉淀，具备高压环境下高效交付能力</p>
                            </div>
                        </div>
                        <!-- <div class="advantage-item">
                            <div class="advantage-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="advantage-content">
                                <h4>查看项目详情</h4>
                                <p>技术驱动业务创新，善于需求深挖与方案沉淀，具备高压环境下高效交付能力</p>
                            </div>
                        </div> -->
                        <!-- <div class="action-buttons"> -->
                            <router-link to="/projectsPage" class="btn primary-btn" style="border-radius: 8px;">
                                <i class="fas fa-info-circle"></i> 查看更多详情
                            </router-link>
                        <!-- </div> -->
                    </div>

                    <!-- <div class="skills">
                        <div class="skill">HTML5/CSS3</div>
                        <div class="skill">JavaScript</div>
                        <div class="skill">React</div>
                        <div class="skill">Vue.js</div>
                        <div class="skill">Node.js</div>
                        <div class="skill">UI/UX设计</div>
                        <div class="skill">响应式设计</div>
                        <div class="skill">Git</div>
                    </div> -->

                    <!-- <div class="tech-details">
                        <div class="tech-section">
                            <h4><i class="fas fa-laptop-code"></i> 前端技术能力</h4>
                            <ul>
                                <li><strong>框架生态：</strong>掌握Vue2/3、React主流前端框架，精通Element UI、Ant Design、Vant等UI组件库，具备复杂应用架构和ECharts大屏开发能力</li>
                                <li><strong>状态管理：</strong>熟练运用Vuex/Pinia实现集中式状态管理，解决高复杂度应用数据流问题</li>
                                <li><strong>语言规范：</strong>熟练掌握JavaScript、TypeScript、ES6+，能编写清晰、高效、可维护的代码</li>
                                <li><strong>UI工程化：</strong>掌握HTML5、CSS3及预处理器Less/Sass，使用rem技术确保响应式布局</li>
                                <li><strong>构建部署：</strong>熟悉Webpack、Vite等构建工具，掌握Nginx配置部署</li>
                                <li><strong>性能优化：</strong>掌握Web前端性能优化技巧，能制定并实施性能提升方案</li>
                                <li><strong>监控系统：</strong>自主研发前端监控系统，快速定位bug并分析解决</li>
                            </ul>
                        </div>
                        
                        <div class="tech-section">
                            <h4><i class="fas fa-server"></i> 后端技术能力</h4>
                            <ul>
                                <li><strong>框架与库：</strong>掌握基于NestJS的后端架构设计，构建模块化微服务，集成Mongoose实现高效数据访问</li>
                            </ul>
                        </div>
                        
                        <div class="tech-section">
                            <h4><i class="fas fa-tools"></i> 其他技术栈能力</h4>
                            <ul>
                                <li>采用uni-app实现多端复用，代码复用率90%+，支持App、H5、6大主流小程序</li>
                                <li>熟悉HTTP网络协议核心机制</li>
                                <li>运用ECharts开发数据可视化大屏</li>
                                <li>掌握AI工具提升工作效率</li>
                            </ul>
                        </div>
                    </div>
                     -->

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
.about {
    padding: 60px 0;
}

.section-title h2 {
    font-size: 36px;
    color: #333;
    text-align: center;
    margin-bottom: 40px;
}

.about-content {
    display: flex;
    gap: 40px;
    align-items: flex-start;
}

.about-image img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-text {
    flex: 1;
}

.about-text h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

.about-text p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* 优势展示 */
.advantages {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
}

.advantage-item {
    display: flex;
    gap: 15px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.advantage-icon {
    font-size: 24px;
    color: #007bff;
    min-width: 40px;
    text-align: center;
}

.advantage-content h4 {
    margin: 0 0 8px 0;
    color: #333;
    font-size: 18px;
}

.advantage-content p {
    margin: 0;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
}

/* 技能标签 */
.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 30px 0;
}

.skill {
    background: linear-gradient(90deg, #007bff, #00bcd4);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
}

/* 技术详情 */
.tech-details {
    margin: 30px 0;
}

.tech-section {
    margin-bottom: 25px;
}

.tech-section h4 {
    color: #333;
    margin-bottom: 15px;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.tech-section ul {
    padding-left: 20px;
    margin: 0;
}

.tech-section li {
    margin-bottom: 10px;
    color: #666;
    line-height: 1.6;
}

.tech-section li strong {
    color: #333;
}

/* 操作按钮 */
.action-buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.primary-btn {
    background: linear-gradient(90deg, #007bff, #00bcd4);
    color: white;
}

.primary-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
}

.secondary-btn {
    background: transparent;
    color: #007bff;
    border: 2px solid #007bff;
}

.secondary-btn:hover {
    background: #007bff;
    color: white;
    transform: translateY(-3px);
}

/* 响应式调整 */
@media (max-width: 992px) {
    .about-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .about-image {
        display: flex;
        justify-content: center;
    }

    .about-image img {
        max-width: 250px;
    }

    .advantages {
        grid-template-columns: 1fr;
    }

    .action-buttons {
        justify-content: center;
    }
}

@media (max-width: 576px) {
    .advantage-item {
        flex-direction: column;
        text-align: center;
    }

    .advantage-icon {
        margin: 0 auto;
    }

    .action-buttons {
        flex-direction: column;
    }

    .btn {
        justify-content: center;
    }
}
</style>