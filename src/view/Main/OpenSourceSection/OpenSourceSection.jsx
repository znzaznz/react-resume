import React from 'react';
import Section from "../../../component/Section/Section";
import ProjectExperience from "../../../component/ProjectExperience/ProjectExperience";

export default function OpenSourceSection() {
    return (
        <Section name={"开源项目"} svg={'icon-kaiyuan'}>
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
    )
}