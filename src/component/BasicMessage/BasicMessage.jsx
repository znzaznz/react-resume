import React from 'react';
import BasicMessageBar from "./BasicMessageBar/BasicMessageBar";

export default function BasicMessage() {
    return (
        <div className={"BasicMessage"}>
            <BasicMessageBar information={"年龄"} value={"23"}/>
            <div className={"personalKeyValue"}>
                <div className={'personalKey'}>
                    <span>性别</span><span>:</span>
                </div>
                <div>男</div>
            </div>
            <div className={"personalKeyValue"}>
                <div className={'personalKey'}>
                    <span>学历</span><span>:</span>
                </div>
                <div>本科</div>
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