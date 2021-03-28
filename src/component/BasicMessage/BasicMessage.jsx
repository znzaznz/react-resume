import React from 'react';
import "./index.scss"

export default function BasicMessage() {
    return (
        <div className={"BasicMessage"}>
            <div className={"personalKeyValue"}>
                <div className={'personalKey'}>
                    <span>学历</span><span>:</span>
                </div>
                <div>本科</div>
            </div>
            <div className={"personalKeyValue"}>
                <div className={'personalKey'}>
                    <span>工作经验</span><span>:</span>
                </div>
                <div>一年</div>
            </div>
            <div className={"personalKeyValue"}>
                <div className={'personalKey'}>
                    <span>意向薪资</span><span>:</span>
                </div>
                <div>6-8k</div>
            </div>
        </div>
    )
}