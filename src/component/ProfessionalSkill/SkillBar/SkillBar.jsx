import React from 'react';
import "./index.scss"

export default function SkillBar(props) {
    return (
        <div className={"SkillBar"}>
            <span>{props.name}</span>
            <div className={"showSkill"}>
                <div style={{width:props.value}}/>
            </div>
        </div>
    )
}