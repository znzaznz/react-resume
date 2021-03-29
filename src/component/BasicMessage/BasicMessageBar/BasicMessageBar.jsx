import React from 'react';
import "./index.scss"

export default function BasicMessageBar(props) {
    return (
        <div className={"personalKeyValue"}>
            <div className={'personalKey'}>
                <span>{props.information}</span><span>:</span>
            </div>
            <div>{props.value}</div>
        </div>
    )
}