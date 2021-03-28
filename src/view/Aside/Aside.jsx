import React from 'react';
import Section from "../../component/Section/Section";
import picture from "../../assets/xiaoznz.jpg"
import "./index.scss"

export default function Aside() {
    return (
        <aside className={"aside"}>
            <img src={picture} alt="Background" className={'picture'}/>
            <Section name={"基础信息"}>
            </Section>
            <Section name={"专业技能"}>
                <div>学历:本科</div>
                <div>工作经验：1年</div>
                <div>意向薪资：6-8k</div>
            </Section>
            <Section name={"联系方式"} className={"contact"}>
                <div>学历:本科</div>
                <div>工作经验：1年</div>
                <div>意向薪资：6-8k</div>
            </Section>
        </aside>
    )
}