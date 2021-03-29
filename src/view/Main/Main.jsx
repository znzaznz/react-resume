import React from 'react';
import EducationAndAwards from "../../component/EducationAndAwards/EducationAndAwards";
import Section from "../../component/Section/Section";
import ProjectExperience from "../../component/ProjectExperience/ProjectExperience";
import "./index.scss"

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
                <ProjectExperience name={"旺财记账(React/Vue)"}>
                    <p>
                        <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>该项目实现了一个简单的记账功能的网站，这个网站可以拿来每天的记账，计算收支。是由我独立开发的
                        项目,这个项目我分别用<span className={"bolder"}>React/Vue</span>实现了一遍，并且使用了目前流行的<span className={"bolder"}>TypeScript</span>来编写代码,然后分别用
                        <span className={"bolder"}>Redux和Vuex</span>来进行状态的管理,用<span className={"bolder"}>React-Router/Vue-Router</span>来实现数据的跳转，使用<span className={"bolder"}>Sass进行
                        CSS</span>的预处理，用<span className={"bolder"}>Bable进行JSX的代码转译</span>最后用webpack进行打包发布到github上
                    </p>
                    <p className={"skillsP"}>
                        技术栈：React/React-Router/Redux,Vue/Vuex/Vue-Router,Sass,Babel
                    </p>
                </ProjectExperience>
            </Section>
            <Section name={"开源项目"}>
                <ProjectExperience name={"简历模板(React实现)"}>
                    <p>
                        <span style={{color:"black",fontWeight:"bolder"}}>项目介绍:</span>
                        您现在所看到的简历，就是我用<span className={'bolder'}>React和Sass</span>实现的，因为使用了<span className={"bolder"}>svg,所以用svg-loader</span>进行
                        配置和使用
                    </p>
                    <p className={"skillsP"}>
                        技术栈：React,Sass,svg
                    </p>
                </ProjectExperience>
                <ProjectExperience name={"手写一个DOM库(纯js)"}>
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
                本人痴迷技术，喜欢承担有技术难度的工作，爱分享，善于知识的总结梳理
            </Section>
        </main>
    )
}