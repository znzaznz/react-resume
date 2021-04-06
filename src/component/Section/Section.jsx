import React from 'react';
import "./index.scss"

export default function Section(props) {
    return (
        <div className={"section"}>
            <header>
                <div>
                    <svg className="icon">
                        <use xlinkHref={`#${props.svg}`} />
                    </svg>
                </div>
                <h1>{props.name}</h1>
            </header>
            <section>
                {props.children}
            </section>
        </div>
    )
}