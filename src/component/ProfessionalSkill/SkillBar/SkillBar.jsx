import React from 'react';
import "./index.scss"
import IconSvg from "../../IconSvg/IconSvg";

export default function SkillBar(props) {

    return (
        <div className={"SkillBar"}>
            <div className={"skillBarSection"}>
                <span>{props.name}</span>
                <div className={"star"}>
                    {
                        [...Array(props.value)].map((e,i)=>{
                            return <IconSvg name={"icon-Star-copy"} aria-hidden="true" key={`i${Math.random()}`}/>
                        })
                    }
                </div>
            </div>
            <section>
                {props.children}
            </section>
        </div>
    )
}