import React from 'react';
import "./index.scss"

export default function EducationAndAwards(props) {
    return (
        <div className={"EducationAndAwards"}>
            <span className={"span"}>{props.information}</span>
            <span>{props.value}</span>
        </div>
    )
}