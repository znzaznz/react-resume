import React from 'react';
import "./index.scss"

export default function SkillBar(props) {

    return (
        <div className={"SkillBar"}>
            <div className={"skillBarSection"}>
                <span>{props.name}</span>
                <div className={"star"}>
                    {
                        [...Array(props.value)].map((e,i)=>{
                            return <svg className="icon" aria-hidden="true" key={`i${Math.random()}`}>
                                <use xlinkHref="#icon-Star-copy"/>
                            </svg>
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