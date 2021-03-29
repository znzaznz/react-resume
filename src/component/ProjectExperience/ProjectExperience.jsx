import React from 'react';
import "./index.scss"

export default function ProjectExperience(props) {
    return (
        <div className={"ProjectExperience"}>
            <div className={"linkArea"}>
                <h4>{props.name}</h4>
                <div>
                    <a href={"https://github.com/"}>源码链接</a>
                    <a href={"https://xiaoznz.gitee.io/monery-website/#/money"}>项目预览</a>
                </div>
            </div>
            <ul>
                <li>
                    {props.children}
                </li>
            </ul>
        </div>
    )
}