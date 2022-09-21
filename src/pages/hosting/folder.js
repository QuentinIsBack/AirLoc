import React, { useContext } from 'react';  

// Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { FaHouseUser, FaFolder } from 'react-icons/fa';

export default function Page() {
    const padding = `px-80`;

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
                </div>
            </div>

            <Footer />
        </>
    )
} 