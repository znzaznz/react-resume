import React from 'react';
import "./index.scss"

export default function IconSvg(props) {
    return (
        <svg className={`IconSvg ${props.className}`}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
}