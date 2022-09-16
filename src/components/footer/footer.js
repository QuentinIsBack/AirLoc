// Import
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

import { IoChevronUp, IoClose } from "react-icons/io5";

import './footer.css'

export default function Component(props) {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();


    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden h-fit">
                        <div className="pointer-events-none fixed inset-y-100 bottom-0 h-fit flex w-full">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-y-full"
                            enterTo="translate-y-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-y-0"
                            leaveTo="translate-y-full"
                        >
                            <Dialog.Panel className="pointer-events-auto relative h-24rem w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                <button
                                    type="button"
                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close panel</span>
                                    <IoClose className="h-6 w-6" aria-hidden="true" />
                                </button>
                                </div>
                            </Transition.Child>
                            <div className="rounded-t-xl flex h-24rem flex-col bg-white py-6 pb-20 shadow-xl">
                                <div className="px-4 sm:px-6">
                                <button onClick={() => setOpen(false)} className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-1 rounded-md"><span><IoClose size={20} /></span></button>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                {/* Replace with your content */}
 
                                 
                                <div className={`snap-y overflow-y-auto py-2 h-17rem grid grid-flow-row gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 px-20 sm:px-20 md:px-20 lg:px-20 xl:px-20 2xl:px-40`}>
                                    <div className='snap-normal snap-center flex flex-col grap-4 mr-5 text-gray-800 space-y-4'>
                                        <a className='footertitle'>Assistance</a>
                                        <button className='footersub'>Centre d'aide</button>
                                        <button className='footersub'>Informations de sécurité</button>
                                        <button className='footersub'>Options d'annulation</button>
                                        <button className='footersub'>Nos mesures face au Covid-19</button>
                                        <button className='footersub'>Soutenir les personnes en situation de handicap</button>
                                        <button className='footersub'>Signaler un problème de voisinage</button>
                                    </div>
                                    <div className='snap-normal snap-center flex flex-col grap-4 mr-5 text-gray-800 space-y-4'>
                                        <a className='footertitle'>Communauté</a>
                                        <button className='footersub'>Airloc.org : réponse aux catastrophes</button>
                                        <button className='footersub'>Soutenir les réfugiés afghans</button>
                                        <button className='footersub'>La diversité et l'intégration</button>
                                        <button className='footersub'>Lutte contre la discrimination</button>
                                    </div>
                                    <div className='snap-normal snap-center flex flex-col grap-4 mr-5 text-gray-800 space-y-4'>
                                        <a className='footertitle'>Accueil de voyageurs</a>
                                        <button className='footersub'>Devenir hôte</button>
                                        <button className='footersub'>AirCover : protection locataire</button>
                                        <button className='footersub'>Ressources pour les hôtes</button>
                                        <button className='footersub'>AirStudent : aide aux étudiants</button>
                                        <button className='footersub'>Forum de la communauté</button>
                                        <button className='footersub'>Accueillir de manière responsable</button>
                                    </div>
                                    <div className='snap-normal snap-center flex flex-col grap-4 mr-5 text-gray-800 space-y-4'>
                                        <a className='footertitle'>À propos</a>
                                        <button className='footersub'>Newsroom</button>
                                        <button className='footersub'>En savoir plus sur les nouveautés</button>
                                        <button className='footersub'>Lettre de nos fondateurs</button>
                                        <button className='footersub'>Carrières</button>
                                        <button className='footersub'>Investisseurs</button>
                                        <button className='footersub'>Airloc Luxe</button>
                                    </div>
                                </div>

                                {/* /End replace */}
                                </div>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className='bottom-0 left-0 right-0 z-40'>
                <div className='border-t'></div>
                <div className={`bg-gray-100 flex justify-between h-3rem items-center px-10 sm:px-10 md:px-36 lg:px-36 xl:px-36 2xl:px-36`}>
                    <div className='hidden lg:block xl:block 2xl:block w-fit sm:w-fit md:w-fit lg:w-full xl:w-fit 2xl:w-fit'>
                        <div className='grid grid-flow-col gap-2'>
                            <button className='text-darkgray font-normal text-sm'>© 2022 Airloc, Inc.</button>
                            <span>·</span>
                            <button className='text-darkgray font-normal text-sm hover:underline'>Confidentialité</button>
                            <span>·</span>
                            <button className='text-darkgray font-normal text-sm hover:underline'>Conditions générales</button>
                            <span>·</span>
                            <button className='text-darkgray font-normal text-sm hover:underline'>Plan du site</button>
                            <span>·</span>
                            <button className='text-darkgray font-normal text-sm hover:underline'>Infos sur l'entreprise</button>
                        </div>
                    </div> 

                    <div className='grid grid-flow-col gap-2 w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit'>
                        <button className='text-darkgray font-semibold text-sm px-1.5 hover:text-black hover:rounded-lg hidden 2xl:block'>Français (FR)</button>
                        <span className='hidden 2xl:block'>·</span>
                        <button className='text-darkgray font-semibold text-sm px-1.5 hover:text-black hover:rounded-lg hidden 2xl:block'>€ EUR</button>
                        <span className='hidden 2xl:block'>·</span>
                        <div className='sm:block md:block lg:hidden xl:block 2xl:block h-full'>
                            <button onClick={() => setOpen(true)} className='text-darkgray font-semibold text-sm px-1.5 hover:text-black hover:rounded-lg h-full flex flex-row justify-center w-full text-center items-center'>
                                <div className='mr-1'>
                                    Assistance et ressources
                                </div>
                                <div className='ml-1'>
                                    <IoChevronUp fill="black" size={20}/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}