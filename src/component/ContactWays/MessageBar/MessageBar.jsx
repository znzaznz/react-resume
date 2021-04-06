import React from 'react';
import "./index.scss"
import IconSvg from "../../IconSvg/IconSvg";

export default function MessageBar(props) {
    return (
        <div className={"MessageBar"}>
            <div>
                <IconSvg name={`icon-${props.name}`}/>
            </div>
            <div className={"ways"}><span>{props.contact}</span></div>
        </div>
    )
}