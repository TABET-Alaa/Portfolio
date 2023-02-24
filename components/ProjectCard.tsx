import React, { ReactElement } from 'react'
import { SocialIcon } from 'react-social-icons'
function ProjectCard({data}: any) {
    return (
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-4 xl:max-w-7xl">
            {
                data.map((item: any) => (
                    <div className="flex flex-col space-y-[50px]  md:flex-row md:space-x-5 items-center ">
                        <img src={item.image}
                            alt={item.title}
                            className="mt-[100px] object-cover w-full mx-6 lg:h-40 w-52 rounded-xl"
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
                                    <p className="">{techno}</p>
                                ))
                            }
                            </div>

                        </div>
                    </div>
                ))
            }
            <a href="https://github.com/TABET-Alaa/" className="flex items-center justify-center">Voir Plus {' > '} 
            <SocialIcon url="https://github.com/TABET-Alaa/"
                        fgColor="gray"
                        bgColor="transparent"
            /></a>


        </div>
    )
}

export default ProjectCard
