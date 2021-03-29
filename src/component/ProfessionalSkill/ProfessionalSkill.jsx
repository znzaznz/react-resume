import SkillBar from "./SkillBar/SkillBar";

export default function ProfessionalSkill() {
    return (
        <div className={"ProfessionalSkill"}>
            <SkillBar name={"HTML5,CSS3"} value={4}>
                能独立制作网页，掌握常见的页面布局，垂直居中，CSS3动画，过渡效果，响应式等技能
            </SkillBar>
            <SkillBar name={"JavaScript/ES6"} value={3}>
                熟悉JS的各种特性，包括Promise,async/await,闭包,回调,this,原型链等概念
            </SkillBar>
            <SkillBar name={"React"} value={4}>
                熟悉React的常用api,如props,memo,React-Router,Redux,hooks等
            </SkillBar>
            <SkillBar name={"Vue"} value={4}>
                熟悉Vue常用功能，如组件，Vue-Router,双向绑定等
            </SkillBar>
            <SkillBar name={"Linux"} value={2}>
                熟悉linux的常用命令，会使用vim编辑文件，能独立安装各种linux系统并搭建环境
            </SkillBar>
        </div>
    )
}