import React from 'react';
import MessageBar from "./MessageBar/MessageBar";

export default function ContactWays() {
    return (
        <div className={"ContactWays"}>
            <MessageBar name={"weixin"} contact={"znz7797"}/>
            <MessageBar name={"weizhi"} contact={"浙江 绍兴"}/>
            <MessageBar name={"xin"} contact={"779740337@qq.com"}/>
            <MessageBar name={"dianhua"} contact={"13777332025"}/>
        </div>
    )
}