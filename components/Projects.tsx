import React, { ReactElement } from 'react'
import ProjectCard from './ProjectCard'

interface Props {

}

function Projects({ }: Props): ReactElement {
    return (
        <div className="flex flex-col px-10 justify-evenly mr-[10px] items-center">
            <h1 className="top-24 text-2xl text-gray-500 uppercase tracking-[20px] m-[60px]"> Projets</h1>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

        </div>
    )
}



export default Projects
