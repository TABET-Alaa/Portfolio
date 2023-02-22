import React, { ReactElement } from 'react'
import { SocialIcon } from 'react-social-icons'

function ProjectCard({data}: any) {
    return (
        <div className="flex flex-col ">
            {
                data.map((item: any) => (
                    <div className="flex flex-col space-y-[50px]  md:flex-row md:space-x-5 items-center ">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
                            alt=""
                            className="object-cover w-full mx-6 lg:h-72 w-1/2 rounded-xl"
                        />
                        <div className="">
                            <p className="text-sm uppercase">{item.title}</p>

                            <a href={item.link_github} className="inline-block hover:underline lg:mt-8">Voir Projet {' > '} </a>

                            <SocialIcon url={item.link_github}
                                fgColor="gray"
                                bgColor="transparent"
                            />
                            <div className="mt-3 border border-blue-100 rounded-2xl h-[120px] w-[350px] p-4 bg-[#F7AB0A] ">
                                <p className="text-sm text-black font-bold">
                                {item.description}
                </p>
                            </div>

                            <div className="flex justify-center flex-row items-center space-x-4 mt-4 ">
                                {item.technologies.map((techno: String) => (
                                    <p>{techno}</p>
                                ))
                            }
                            </div>

                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ProjectCard
