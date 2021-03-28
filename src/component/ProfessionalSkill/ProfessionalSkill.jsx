import SkillBar from "./SkillBar/SkillBar";
import "./index.scss"

export default function ProfessionalSkill() {
    return (
        <div className={"ProfessionalSkill"}>
            <SkillBar name={"HTML5"} value={"50%"}/>
            <SkillBar name={"CSS3"} value={"80%"}/>
            <SkillBar name={"JavaScript"} value={"80%"}/>
            <SkillBar name={"React"} value={"60%"}/>
        </div>
    )
}