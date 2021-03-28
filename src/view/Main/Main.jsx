import React from 'react';
import Section from "../../component/Section/Section";
import ProjectExperience from "../../component/ProjectExperience/ProjectExperience";

export default function Main() {
    return (
        <main className={"Main"}>
            <Section name={"教育经历"}>
                <span style={{fontWeight:"bolder",marginRight:"20px",color:"black"}}>山西大学:</span>
                <span>专业排名前20%</span>
            </Section>
            <Section name={"项目经历"}>
                <ProjectExperience/>
                <ProjectExperience/>
                <ProjectExperience/>
            </Section>
            <Section name={"开源项目"}>
                <ProjectExperience/>
                <ProjectExperience/>
            </Section>
            <Section name={"个人评价"}>
                痴迷技术，喜欢承担有技术难度的工作，爱分享，善于知识的总结梳理
            </Section>
        </main>
    )
}