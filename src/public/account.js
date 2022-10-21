import React, { useContext } from 'react';  

// Components
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

// Firebase
import { UserContext } from '../context/UserContext';

// Icons
import { RiHome2Fill, RiStarLine, RiShieldLine, RiCloseFill } from "react-icons/ri";

export default function Page() {
    const padding = `px-10 sm:px-10 md:px-10 lg:px-20 xl:px-80 2x:px-80`;

    const { User } = useContext(UserContext)


    return (
        <>  
            <NavBar />

            <div className={`${padding}`}>
                <div className='grid grid-cols-3 gap-5 pt-20'>
                    {/* Left Side */}
                    <div className='h-fit pr-20'>
                        <div className='h-fit border border-gray-200 rounded-2xl'>
                            <div className='p-5 flex flex-col w-full'>
                                
                                {/* Profil */}
                                <div className='self-center'>
                                    <button className='overflow-hidden'>
                                        <img alt='profile' style={{
                                            width: 150,
                                            height: 150,
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            borderWidth: 3,
                                            }}
                                            src={User.urlprofile ? User.urlprofile : "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0e42df111843393.6009650446d8d.png"} />
                                    </button>
                                </div>

                                {/* Informations */}
                                <div className='pt-4 flex flex-col text-sm font-medium space-y-4'>
                                    <div className='flex items-center'>
                                        <RiStarLine className='mr-2' size={20}/>
                                        <div href='#' className='hover:underline'>0 commentaires</div>
                                    </div>
                                    <div className='flex items-center'>
                                        <RiShieldLine className='mr-2' size={20}/>
                                        <div href='#' className='hover:underline'>Identité non vérifiée</div>
                                    </div>
                                </div>

                                <div className='border-t my-6' />

                                {/* Utilisateur */}
                                <div className='font-medium text-xl'>
                                    {User.firstname ? User.firstname : undefined} : identification non vérifiée
                                </div>

                                {/* Analyse de l'identité */}
                                <div className='pt-4 flex flex-col text-sm font-medium space-y-4'>
                                    <div className='flex items-center'><span className='mr-2'><RiCloseFill fill='red' size={20}/></span> Carte d'Identité</div>
                                    <div className='flex items-center'><span className='mr-2'><RiCloseFill fill='red' size={20}/></span> Adresse e-mail</div>     
                                    <div className='flex items-center'><span className='mr-2'><RiCloseFill fill='red' size={20}/></span> Numéro de téléphone</div>     
                                </div>

                                {/* A savoir */}
                                <div className='pt-4 text-xs font-normal'>
                                        <div href='#' className='font-semibold underline'>En savoir plus</div> sur la manière dont la confirmation des informations des comptes contribues à garantir la securité de la commaunté AirLoc.
                                    </div>

                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className='col-span-2 h-fit'>
                        {/* Profil */}
                        <div className='space-y-2'>
                            <div className='font-medium text-4xl flex items-center'>Bonjour, je m'appelle {User.firstname ? User.firstname : undefined}</div>
                            <div className='font-light text-sm'>Membre depuis <span className='capitalize'></span></div>
                        </div>

                        {/* Biographie */}
                        <div className='pt-10 space-y-2'>
                            <div className='font-medium text-xl pb-2'>À propos de</div>
                            <div className='font-normal text-sm'>
                                {User.bio ? User.bio : undefined}
                            </div>
                        </div>

                        {/* Habitation */}
                        <div className='pt-10 flex flex-row items-center'>
                            <RiHome2Fill className='mr-2' size={18}/>
                            <div href='#' className='font-normal text-sm'>Habite à </div> 
                        </div>

                        <div className='border-t my-6' />

                        {/* Annonces */}
                        <div className=''>
                            <div className='font-medium text-xl pb-3'>Annonces de Quentin</div>
                        </div>
                        
                        <div className='border-t' />

                        {/* Signaler */}
                        <div className='pt-6'>
                            <div className='font-semibold text-xs underline' href='#'>Signaler ce profil</div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
} 