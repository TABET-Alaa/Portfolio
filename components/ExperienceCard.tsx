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
                                >J'ai participé à la réalisation d'un système de management d'énergie
                                    en conformité avec les principes de l'Industrie 4.0. J'ai travaillé en équipe
                                    pour intégrer des technologies telles que l'Internet des objets (IoT) et l'analyse de données pour optimiser l'utilisation de l'énergie et améliorer la production de l'entreprise.
                                    Cette expérience m'a permis de développer mes compétences en matière de développement
                                    de systèmes intelligents et de comprendre les enjeux de la transformation digitale en milieu industriel.
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
                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
        venenatis enim.</span
                                >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
