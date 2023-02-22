import React, { ReactElement, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import data from '../public/data.json'


function Projects(): ReactElement {
    console.log(data)
    return (
        <div className="relative flex flex-col px-10 justify-evenly mr-[10px] items-center">
            <h1 className="top-24 text-2xl text-gray-500 uppercase tracking-[20px] m-[60px]"> Projets</h1>
            <ProjectCard data={data}/>

        </div>
    )
}

export default Projects
