import React from 'react';
import "./index.scss"
import IconSvg from "../IconSvg/IconSvg";

export default function Section(props) {
    return (
        <div className={"section"}>
            <header>
                <div>
                    <IconSvg name={props.svg} className={"icon"}/>
                </div>
                <h1>{props.name}</h1>
            </header>
            <section>
                {props.children}
            </section>
        </div>
    )
}