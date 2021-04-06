import React from 'react';
import Section from "../../../component/Section/Section";
import ProjectExperience from "../../../component/ProjectExperience/ProjectExperience";
import monery from "../../../assets/project Preview/~WJKMJ4{)(((0$]OTNASKLO.png";
import fronted from "../../../assets/project Preview/Y{K}652GRJ4Z0_M7$$~DH@Q.png";
import "./index.scss"

export default function ProjectExperienceSection() {
    return (
        <Section name={"项目经历"} svg={"icon-xiangmu"} >
            <ProjectExperience name={"旺财记账(React/Vue)"} codeUrl={"https://github.com/znzaznz/monery-website"} previewUrl={"https://xiaoznz.gitee.io/monery-website/#/money"} img={monery}>
                <p>
                    <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>该项目实现了一个简单的记账功能的网站，这个网站可以拿来每天的记账，计算收支。是由我独立开发的
                    项目,这个项目我分别用<i>React/Vue</i>实现了一遍，并且使用了目前流行的<i>TypeScript</i>来编写代码,然后分别用
                    <i>Redux和Vuex</i>来进行状态的管理,用<i>React-Router/Vue-Router</i>来实现数据的跳转，使用<i>Sass进行
                    CSS</i>的预处理，用<i>Bable进行JSX的代码转译</i>最后用webpack进行打包发布到github上
                </p>
                <p className={"skillsP"}>
                    技术栈：React/React-Router/Redux,Vue/Vuex/Vue-Router,Sass,Babel
                </p>
            </ProjectExperience>
            <ProjectExperience name={"导航网站"} codeUrl={"https://github.com/znzaznz/frontedNav"} previewUrl={"http://xiaoznz.gitee.io/frontednav/"} img={fronted}>
                <p>
                    <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>这是我用<i>jQuery</i>做的一个前端的导航网站，用<i>Less</i>做其中的样式处理
                    内部的逻辑代码用<i>原生JavaScript</i>做了一个封装,最后应用<i>响应式布局技术</i>,在手机端和pc端都有很好的显示效果
                </p>
                <p className={"skillsP"}>
                    技术栈：jQuery,Less,JavaScript
                </p>
            </ProjectExperience>
        </Section>
    )
}