import React, { useContext } from 'react';  

// Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { FaHouseUser, FaFolder } from 'react-icons/fa';
import {FiBook} from 'react-icons/fi'
import {IoBriefcaseOutline, IoEyeOffOutline, IoBusinessOutline, IoPersonOutline, IoFootstepsOutline} from 'react-icons/io5'

export default function Page() {
    const padding = `px-80`;

    const situation = [
        {
            name: "Étudiant",
            icon: <FiBook strokeWidth={1.5} size={30}  />,
        },
        {
            name: "Salarié",
            icon: <IoBriefcaseOutline strokeWidth={1.5} size={30}  />
        },
        {
            name: "Fonctionnaire",
            icon: <IoBusinessOutline strokeWidth={1.5} size={30}  />
        },
        {
            name: "Indépendant",
            icon: <IoPersonOutline strokeWidth={1.5} size={30}  />
        },
        {
            name: "Retraité",
            icon: <IoFootstepsOutline strokeWidth={1.5} size={30}  />
        },
        {
            name: "Sans emploi",
            icon: <IoEyeOffOutline strokeWidth={1.5} size={30}  />
        }
    ]

    return (
        <>  
            <NavBar />

            <div className={`bg-gradient-to-r from-indigo-800 to-pink-600 ${padding} py-20`}>
                <div className='text-4xl font-semibold text-white text-left'>Aujourd'hui,</div>
                <div className='pt-2 text-md font-normal text-white text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
            </div>

            <div className={`${padding} py-14 space-y-3`}>
                <div className='text-3xl font-semibold text-night text-left'>Crée un dossier locataire</div>
                <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
                <div className='pt-4 grid grid-cols-4 gap-5'>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8771fd64507519.5ad4edb4b9968.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Complétez votre dossier locataire</div>
                        </div>
                    </a> 
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/63719799566833.5ef568ce83b51.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Candidatez à des logements en 1 clic</div>
                        </div>
                    </a>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/bf880164507519.5ad4ed2d62190.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Signez votre bail numériqumnt</div>
                        </div>
                    </a>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8771fd64507519.5ad4edb4b9968.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Complétez votre dossier locataire</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className={`${padding} py-14 space-y-3`}>
                <div className='text-3xl font-semibold text-night text-left'>Ma situation</div>
                <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
                <div className='pt-4 grid grid-cols-4 grid-cols- gap-5'>
                    {situation.map((sit) => (
                        <>
                            <div className="flex flex-col justify-center items-center w-full py-2 font-medium text-lg rounded-lg border-gray bg-white cursor-pointer border-gray border focus:outline-none hover:bg-gray-100/50 hover:border-black">
                                <div>
                                    {sit.icon}
                                </div>
                                <div className='pt-2'>
                                    {sit.name}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <Footer formatage={'sticky'} />
        </>
    )
} 