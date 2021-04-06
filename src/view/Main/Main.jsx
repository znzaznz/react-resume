import React from 'react';
import EducationAndAwards from "./EducationAndAwards/EducationAndAwards";
import OpenSourceSection from "./OpenSourceSection/OpenSourceSection";
import ProjectExperienceSection from "./ProjectExperienceSection/ProjectExperienceSection";
import "./index.scss"

export default function Main() {
    return (
        <main className={"Main"}>
            <EducationAndAwards/>
            <ProjectExperienceSection/>
            <OpenSourceSection/>
        </main>
    )
}