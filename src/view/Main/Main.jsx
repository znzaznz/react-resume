import React from 'react';
import Section from "../../component/Section/Section";
import "./index.scss"

export default function Main() {
    return (
        <main className={"Main"}>
            <Section name={"关于我"}>
                一年写前端开发经验，熟悉react技术栈，熟悉模块化，工程化开发流程，webpack的配置小能手，熟练使用es6写代码，有小程序，移动端开发经验
            </Section>
            <Section name={"教育经历"}>
                山西大学
                专业排名前20%
            </Section>
            <Section name={"项目经历"}>
                项目经历
            </Section>
            <Section name={"个人评价"}>
                痴迷技术，喜欢承担有技术难度的工作，爱分享，善于知识的总结梳理
            </Section>
        </main>
    )
}