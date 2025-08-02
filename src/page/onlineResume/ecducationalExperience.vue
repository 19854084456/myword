<template>
    <div class="container">
        <!-- 教育经历 -->
        <section class="section">
            <h2 class="section-title">教育背景</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <span class="time-period">2014.9 - 2016.6</span>
                    <div class="company">武汉软件工程职业学院</div>
                    <div class="position">计算机科学技术</div>
                    <ul>
                        <li>所有专业课程一次性通过</li>
                        <li>获得学院级奖学金、优秀班干部等荣誉</li>
                        <li>获得普通话等级证书、计算机等级证书</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 专业技能 -->
        <section class="section">
            <h2 class="section-title">专业技能</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>前端开发核心技能</h3>
                    <p>掌握前端开发、后端开发、系统编程及高级编程技能</p>
                    <div class="badges">
                        <span class="badge">前端Web开发</span>
                        <span class="badge">Java程序设计</span>
                        <span class="badge">C语言</span>
                        <span class="badge">C++</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>跨平台开发</h3>
                    <p>操作系统原理与图形用户界面开发</p>
                    <div class="badges">
                        <span class="badge">Linux操作系统</span>
                        <span class="badge">QT GUI设计</span>
                        <span class="badge">跨平台应用开发</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 工作经历 -->
        <section class="section">
            <h2 class="section-title">工作经历</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <span class="time-period">2016.10 - 2017.3</span>
                    <div class="company">武汉育知同创科技有限公司</div>
                    <div class="position">前端开发实习生</div>
                    <ul>
                        <li>系统学习Web前端开发技术</li>
                        <li>参与实际项目开发</li>
                    </ul>
                </div>
                
                <div class="timeline-item">
                    <span class="time-period">2017.3 - 2020.11</span>
                    <div class="company">上海铭锐软件有限公司</div>
                    <div class="position">前端负责人</div>
                    <ul>
                        <li>负责钉钉集成项目开发</li>
                        <li>主导H5应用与网站开发</li>
                        <li>荣获最佳员工奖、技术创新奖、杰出贡献奖</li>
                    </ul>
                </div>
                
                <div class="timeline-item">
                    <span class="time-period">2020.11 - 2024.11</span>
                    <div class="company">深圳市科脉技术股份有限公司</div>
                    <div class="position">前端负责人</div>
                    <ul>
                        <li>负责公司核心产品研发与维护</li>
                        <li>技术团队管理与协调</li>
                    </ul>
                </div>
                
                <div class="timeline-item">
                    <span class="time-period">2025.3 - 至今</span>
                    <div class="company">深圳市潮向数字科技有限公司</div>
                    <div class="position">前端开发工程师</div>
                    <ul>
                        <li>负责核心项目前端开发</li>
                        <li>技术体系沉淀与知识管理</li>
                        <li>前端监控系统设计与搭建</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 荣誉奖项 -->
        <section class="section">
            <h2 class="section-title">荣誉与成就</h2>
            <div class="awards">
                <div class="award-card">
                    <h3>🏆 最佳员工奖</h3>
                    <p>上海铭锐软件有限公司</p>
                </div>
                <div class="award-card">
                    <h3>💡 技术创新奖</h3>
                    <p>上海铭锐软件有限公司</p>
                </div>
                <div class="award-card">
                    <h3>⭐ 杰出贡献奖</h3>
                    <p>上海铭锐软件有限公司</p>
                </div>
                <div class="award-card">
                    <h3>🎓 学院奖学金</h3>
                    <p>武汉软件工程职业学院</p>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="css" scoped>
.container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0px;
}
header {
    background: linear-gradient(135deg, var(--primary), var(--dark));
    color: white;
    padding: 2rem 0;
    text-align: center;
    margin-bottom: 2rem;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}
.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}
.section {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;
}
.section:hover {
    transform: translateY(-5px);
}
.section-title {
    color: var(--secondary);
    border-bottom: 2px solid var(--secondary);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}
.timeline {
    position: relative;
    padding-left: 30px;
    border-left: 2px solid var(--secondary);
    margin-left: 15px;
}
.timeline-item {
    margin-bottom: 2rem;
    position: relative;
}
.timeline-item:before {
    content: '';
    position: absolute;
    left: -38px;
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--secondary);
    border: 3px solid white;
    box-shadow: 0 0 0 2px var(--secondary);
}
.time-period {
    background: var(--secondary);
    color: white;
    display: inline-block;
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}
.company {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--dark);
}
.position {
    color: var(--accent);
    margin-bottom: 0.5rem;
}
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}
.skill-category {
    background: var(--light);
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid var(--secondary);
}
.badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}
.badge {
    background: var(--light);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
}
.awards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.award-card {
    flex: 1;
    min-width: 200px;
    background: var(--light);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
}
footer {
    text-align: center;
    padding: 2rem;
    color: var(--dark);
    font-size: 0.9rem;
}
@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
    .award-card {
        min-width: 100%;
    }
}
</style>