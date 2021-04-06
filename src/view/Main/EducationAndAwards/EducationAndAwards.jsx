import React from 'react';
import Section from "../../../component/Section/Section";
import EducationAndAwardsItem from "../../../component/EducationAndAwardsItem/EducationAndAwardsItem";

export default function EducationAndAwards() {
    return (
        <Section name={"教育及获奖"} svg={"icon-x"}>
            <EducationAndAwardsItem information={"山西大学："} value={"专业排名前20%"}/>
            <EducationAndAwardsItem information={"科研训练（校园快递点优化）："} value={"二等奖"}/>
            <EducationAndAwardsItem information={"山西省高校新闻奖："} value={"第三名"}/>
            <EducationAndAwardsItem information={"山西省高校话剧："} value={"第三名"}/>
        </Section>
    )
}