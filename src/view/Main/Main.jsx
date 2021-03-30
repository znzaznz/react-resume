import React from 'react';
import EducationAndAwards from "../../component/EducationAndAwards/EducationAndAwards";
import Section from "../../component/Section/Section";
import ProjectExperience from "../../component/ProjectExperience/ProjectExperience";
import "./index.scss"
import monery from "../../assets/project Preview/~WJKMJ4{)(((0$]OTNASKLO.png"
import fronted from "../../assets/project Preview/Y{K}652GRJ4Z0_M7$$~DH@Q.png"

export default function Main() {
    return (
        <main className={"Main"}>
            <Section name={"教育及获奖"}>
                <EducationAndAwards information={"山西大学："} value={"专业排名前20%"}/>
                <EducationAndAwards information={"科研训练（校园快递点优化）："} value={"二等奖"}/>
                <EducationAndAwards information={"山西省高校新闻奖："} value={"第三名"}/>
                <EducationAndAwards information={"山西省高校话剧："} value={"第三名"}/>
            </Section>
            <Section name={"项目经历"}>
                <ProjectExperience name={"旺财记账(React/Vue)"} codeUrl={"https://github.com/znzaznz/monery-website"} previewUrl={"https://xiaoznz.gitee.io/monery-website/#/money"}>
                    <p>
                        <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>该项目实现了一个简单的记账功能的网站，这个网站可以拿来每天的记账，计算收支。是由我独立开发的
                        项目,这个项目我分别用<i>React/Vue</i>实现了一遍，并且使用了目前流行的<i>TypeScript</i>来编写代码,然后分别用
                        <i>Redux和Vuex</i>来进行状态的管理,用<i>React-Router/Vue-Router</i>来实现数据的跳转，使用<i>Sass进行
                        CSS</i>的预处理，用<i>Bable进行JSX的代码转译</i>最后用webpack进行打包发布到github上
                    </p>
                    <p className={"skillsP"}>
                        技术栈：React/React-Router/Redux,Vue/Vuex/Vue-Router,Sass,Babel
                    </p>
                    <p className={"skillsP"}>
                        项目效果图：<img src={monery} alt={"记账"}/>
                    </p>
                </ProjectExperience>
                <ProjectExperience name={"导航网站"} codeUrl={"https://github.com/znzaznz/frontedNav"} previewUrl={"http://xiaoznz.gitee.io/frontednav/"}>
                    <p>
                        <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>这是我用<i>jQuery</i>做的一个前端的导航网站，用<i>Less</i>做其中的样式处理
                        内部的逻辑代码用<i>原生JavaScript</i>做了一个封装,最后应用<i>响应式布局技术</i>,在手机端和pc端都有很好的显示效果
                    </p>
                    <p className={"skillsP"}>
                        技术栈：jQuery,Less,JavaScript
                    </p>
                    <p className={"skillsP"}>
                        项目效果图：<img src={fronted} alt={"记账"}/>
                    </p>
                </ProjectExperience>
            </Section>
            <Section name={"开源项目"}>
                <ProjectExperience name={"简历模板(React实现)"} codeUrl={"https://github.com/znzaznz/react-resume"}>
                    <p>
                        <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>
                        您现在所看到的简历，就是我用<span className={'bolder'}>React和Sass</span>实现的，因为使用了<span className={"bolder"}>svg,所以用svg-loader</span>进行
                        配置和使用
                    </p>
                    <p className={"skillsP"}>
                        技术栈：React,Sass,svg
                    </p>
                </ProjectExperience>
                <ProjectExperience name={"手写一个DOM库(纯js)"} codeUrl={"https://github.com/znzaznz/hand-writingDOM"}>
                    <p>
                        <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>
                        这个项目我用<span className={"bolder"}>原生JS</span>实现了一个DOM库，里面有各种我自己<span className={"bolder"}>手写并封装的api</span>方法
                        ，并且尽量做到了<span className={"bolder"}>兼容IE</span>
                    </p>
                    <p className={"skillsP"}>
                        技术栈：JavaScript,ES6,AJAX
                    </p>
                </ProjectExperience>
            </Section>
            <Section name={"个人评价"}>
                本人痴迷技术，喜欢承担有技术难度的工作，爱分享，善于知识的总结梳理。
                <br/>
                这是我的<i style={{color:"red"}}><a href={"https://juejin.cn/user/2911162523455240"}>博客地址</a></i>,
                这是我的<i style={{color:"red"}}><a href={"https://github.com/znzaznz"}>github地址</a></i>
            </Section>
        </main>
    )
}