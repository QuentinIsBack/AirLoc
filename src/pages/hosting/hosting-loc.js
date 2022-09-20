import React, { useContext, useState } from 'react';  

// Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Modal from '../../components/modal/Modal';

// Firebase
import { UserContext } from '../../context/UserContext';

// Icons
import { FaHouseUser, FaFolder } from 'react-icons/fa';
import { Button } from '../../components/button/button';

export default function Page() {
    const padding = `px-80`;

    const { User, setModal } = useContext(UserContext)

    return (
        <>  
            <NavBar />
                <Modal>
                    <div className='h-10rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                        <div className='border-b' />
                    <div className="p-5">
                        <div className='text-3xl font-semibold text-night text-left'>Tableau de bord</div>
                        <div className='pt-2 text-md font-normal text-gray-500 text-left'>Vous voici sur votre espace locataire, vous y trouverez tout ce que vous avez besoins pour trouver le logement de vos rêves.</div>
                        <div className='pt-8 flex justify-start'>
                            <Button onClick={()=>setModal(false)} theme={'black'}>Commencer</Button>
                        </div>
                    </div>
                </Modal>

            <div className={`bg-gradient-to-r from-indigo-800 to-pink-600 ${padding} py-20`}>
                <div className='text-4xl font-semibold text-white text-left pb-6'>Aujourd'hui,</div>

                <div className='flex space-x-5'>
                    <button key={Math.random().toString(36).substr(2, 9)} className=''>
                        <div className='bg-white rounded-xl h-5.5rem w-fit p-4 hover:bg-gray-100 shadow-dropdown'>
                            <div className='flex flex-row justify-center items-center h-full'>
                                <div className='flex flex-row justify-center items-center space-x-6   px-4'>
                                    <div>
                                        <FaHouseUser size={40} />
                                    </div>
                                    <div className="font-medium text-gray-800 text-sm w-64 text-left">
                                        Vous vous êtes engagés à ce que vos informations soit correct et valide avant votre prochaine location.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

            </div>

            <div className={`${padding} py-14 space-y-3`}>
                <div className='text-3xl font-semibold text-night text-left'>Bienvenue !</div>
                <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
                <div className='pt-4 grid grid-cols-4 gap-5'>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-20rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8771fd64507519.5ad4edb4b9968.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Complétez votre dossier locataire</div>
                        </div>
                    </a>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-20rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/63719799566833.5ef568ce83b51.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Candidatez à des logements en 1 clic</div>
                        </div>
                    </a>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-20rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/bf880164507519.5ad4ed2d62190.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Signez votre bail numériqumnt</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className={`${padding} py-14 space-y-3`}>
                <div className='text-3xl font-semibold text-night text-left'>Vos dossiers</div>

            </div>



            <div className={`${padding} py-20`}>
                <div className='text-5xl font-semibold text-night text-left'>Bonjour, {User.email ? User.email : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Nom: {User.lastname ? User.lastname : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Prénom: {User.firstname ? User.firstname : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Inscription: {User.registered ? User.registered : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Sexe: {User.sex ? User.sex : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Bio: {User.bio ? User.bio : undefined}</div>
            </div>


            <Footer />
        </>
    )
} 