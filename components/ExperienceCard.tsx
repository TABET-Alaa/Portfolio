import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'

interface Props {

}

export default function ExperienceCard({ }: Props): ReactElement {
    return (

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
            {/*<span
                className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-red-600 md:block"
            ></span>
            */}
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">

                <div className="md:w-2/5">
                    <div className="md:-mt-1 md:pl-8">
                        <span
                            className="block pt-2 font-header text-xl font-bold uppercase text-gray-500 text-primary"
                        >Frontend développeur
                                </span>
                        <span
                            className="block pt-2 font-header text-xl font-bold  bg-[rgb(36,36,36)] text-primary"
                        >Greenaftech - <span className="text-lg"> Bouskoura, Casablanca </span> 
                                </span>
                        <span className="block font-body font-bold text-gray-500"
                        >Avril 2022 - Juin 2022
                        </span>
                    </div>
                </div>

                <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                        {/*
                        <span
                            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                        ></span>
*/}
                        <div className="mt-1 flex">
                            <div className="md:-mt-1 md:pl-8 pt-2">

                                <span className="block font-body text-white"
                                >J'ai travaillé en équipe sur la partie front-end d'une application web 
                                de gestion d'énergie en conformité avec les principes de l'Industrie 4.0,
                                en utilisant la technologie React et Tailwind CSS. Cette expérience m'a 
                                permis de développer mes compétences en matière de développement d'application
                                web, en particulier en travaillant avec ces technologies, ainsi que de 
                                comprendre les enjeux de la transformation digitale dans un environnement 
                                industriel.
                        </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">

                <div className="md:w-2/5">
                    <div className="md:-mt-1 md:pl-8">
                        <span
                            className="block pt-2 font-header text-xl font-bold uppercase text-gray-500 text-primary"
                        >Développeur web
                </span>
                        <span
                            className="block pt-2 font-header text-xl font-bold  bg-[rgb(36,36,36)] text-primary"
                        >ESOFT  <span className="text-lg font-bold"> - Lille, France </span>  
                </span>
                        <span className="block font-body font-bold text-gray-500"
                        >Juillet 2021 - aout 2022
        </span>
                    </div>
                </div>

                <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                        {/*
        <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
        ></span>
*/}
                        <div className="mt-1 flex">
                            <div className="md:-mt-1 md:pl-8 pt-2">

                                <span className="block font-body text-white"
                                > J'ai participé à la réalisation d'une application web en tant que stagiaire,
                                en utilisant la technologie Angular pour le frontend et Firebase comme Backend 
                                as a Service (BaaS). Cette expérience a été très enrichissante pour moi, 
                                car elle m'a aidé à entrer dans le monde de l'entreprise et à acquérir des 
                                compétences techniques précieuses. Grâce à cette expérience, 
                                j'ai appris comment travailler en équipe, gérer des projets de développement
                                logiciel, concevoir une architecture applicative et utiliser des technologies 
                                de pointe telles que Angular et Firebase.</span
                                >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
