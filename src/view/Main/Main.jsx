import React from 'react';
import EducationAndAwards from "../../component/EducationAndAwards/EducationAndAwards";
import Section from "../../component/Section/Section";
import ProjectExperience from "../../component/ProjectExperience/ProjectExperience";

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
                    <b>项目介绍</b>该项目实现了一个简单的记账功能的网站，这个网站可以拿来每天的记账，计算收支。是由我独立开发的
                    项目,这个项目我分别用React/Vue实现了一遍，并且使用了目前流行的TypeScript来编写代码,然后分别用Redux和Vuex来进行状态的管理，
                    用React-Router/Vue-Router来实现数据的跳转
                </ProjectExperience>
            </Section>
            <Section name={"开源项目"}>
            </Section>
            <Section name={"个人评价"}>
                痴迷技术，喜欢承担有技术难度的工作，爱分享，善于知识的总结梳理
            </Section>
        </main>
    )
}