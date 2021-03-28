import React from 'react';
import "./index.scss"

export default function MessageBar(props) {
    return (
        <div className={"MessageBar"}>
            <div>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref={`#icon-${props.name}`}/>
                </svg>
            </div>
            <div className={"ways"}><span>{props.contact}</span></div>
        </div>
    )
}