import React from 'react';
import "./index.scss"

export default function ProjectExperience(props) {
    return (
        <div className={"ProjectExperience"}>
            <div className={"liStyle"}>
                <div className={"linkArea"}>
                    <h4>{props.name}</h4>
                    <div>
                        {props.codeUrl ? <a href={props.codeUrl}>源码链接</a> : ''}
                        {props.previewUrl ?  <a href={props.previewUrl}>项目预览</a> : ''}
                    </div>
                </div>
                <div>
                    {props.children}
                </div>
                {props.img ? <div className={"preview"}>
                    <h3>预览图:</h3>
                    <img src={props.img} alt="项目预览" />
                </div> : ""}
            </div>
        </div>
    )
}