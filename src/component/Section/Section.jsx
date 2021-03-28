import React from 'react';
import "./index.scss"

export default function Section(props) {
    return (
        <div className={"section"}>
            <h1>{props.name}</h1>
            <section>
                {props.children}
            </section>
        </div>
    )
}