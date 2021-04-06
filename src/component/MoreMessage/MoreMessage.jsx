import React from 'react';
import github from "../../assets/connect-icon/github.svg"
import jianshu from "../../assets/connect-icon/简书.svg"
import juejin from "../../assets/connect-icon/掘金.svg"
import "./index.scss"

export default function MoreMessage() {
    return (
        <ul className={"MoreMessage"}>
            <li>
                <a href="https://www.jianshu.com/u/133a211e8d38">
                    <img src={jianshu} alt="简书"/>
                </a>
            </li>
            <li>
                <a href="https://juejin.cn/user/2911162523455240">
                    <img src={juejin} alt={"掘金"}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/znzaznz">
                    <img src={github} alt={"github"}/>
                </a>
            </li>
        </ul>
    )
}