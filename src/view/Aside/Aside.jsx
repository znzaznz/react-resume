import React from 'react';
import Section from "../../component/Section/Section";
import picture from "../../assets/xiaoznz.jpg"
import BasicMessage from "../../component/BasicMessage/BasicMessage";
import ProfessionalSkill from "../../component/ProfessionalSkill/ProfessionalSkill";
import ContactWays from "../../component/ContactWays/ContactWays";
import "./index.scss"

export default function Aside() {
    return (
        <aside className={"aside"}>
            <img src={picture} alt="Background" className={'picture'}/>
            <Section name={"基础信息"}>
                <BasicMessage/>
            </Section>
            <Section name={"专业技能"}>
                <ProfessionalSkill/>
            </Section>
            <Section name={"联系方式"} className={"contact"}>
                <ContactWays/>
            </Section>
        </aside>
    )
}