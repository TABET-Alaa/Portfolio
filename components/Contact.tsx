import React, { ReactElement, useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    nom: string,
    email: string,
    sujet: string,
    message: string
};

function Contact(): ReactElement {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [sujet, setSujet] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (e: any) => {
        e.preventDefault();
        let data = {
            nom,
            email,
            sujet,
            message
        }
        console.log(data)
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
            }
        })


    }
    return (
        <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row w-[390px] md:max-w-7xl md:px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contacter Moi
            </h3>

            <div className="flex flex-col space-y-10 ">
                <div className="hidden">
                    <h4 className="text-2xl font-light text-center mt-16">
                        Vous méritez plus qu'une simple application Web . Vous méritez une application Web <span className="decoration-[#F7AB0A]/50 underline">rapide </span> et
                    <span className="decoration-[#F7AB0A]/50 underline"> fiable</span> . Vous méritez un <span className="decoration-[#F7AB0A]/50 underline">développeur</span> qui peut fournir exactement ce que vous méritez.{" "}
                    </h4>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-5 items-center pt-12 space-y-7">

                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div className="flex items-center  space-x-5 justify-center ">
                            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">+212 679516776</p>
                        </div>
                        <div className="flex items-center space-x-5 ">
                            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">alae.tabet02@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-5 ">
                            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">Mers Sultan , Casablanca</p>
                        </div>
                    </div>



                    {/* formulaire  */}

                    <form className="flex flex-col space-y-2 ">
                        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2">
                            <input
                                onChange={(e) => { setNom(e.target.value) }}
                                placeholder="Nom/Prenom "
                                className="contactInput"
                                type="text"
                                name="nom"
                            />
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                placeholder="Email"
                                className="contactInput"
                                type="text"
                                name="email"
                            />
                        </div>
                        <input
                            onChange={(e) => { setSujet(e.target.value) }}
                            placeholder="Sujet"
                            className="contactInput"
                            type="text"
                            name="sujet"
                        />
                        <textarea
                            onChange={(e) => { setMessage(e.target.value) }}
                            placeholder="Message"
                            className="contactInput"
                            name="message"
                        />
                        <button type="submit"
                            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
                            onClick={(e) => { onSubmit(e) }}
                        >Envoyer </button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact
