import React from 'react';  

// Components
import NavBar from '../components/navbar/navbar-employee'
import Footer from '../components/footer/footer'

import { FaHouseUser, FaFolder } from 'react-icons/fa';
import { InputFloatin } from '../components/input/InputFloatin';

export default function Page() {
    const padding = `px-80`;

    return (
        <>  
            <NavBar />

            <div className={`bg-gradient-to-r from-indigo-800 to-pink-600 ${padding} py-20`}>
                <div className='text-4xl font-semibold text-white text-left pb-6'>Aujourd'hui,</div>
                <div className='flex space-x-5'>
                    <button key={Math.random().toString(36).substr(2, 9)} className=''>
                        <div className='bg-white rounded-xl h-5.5rem w-fit p-4 hover:bg-gray-100 shadow-dropdown'>
                            <div className='flex flex-row justify-center items-center h-full'>
                                <div className='flex flex-row justify-center items-center space-x-6   px-4'>
                                    <div>
                                        <FaFolder size={40} />
                                    </div>
                                    <div className="font-medium text-gray-800 text-sm w-64 text-left">
                                        <span className='text-red-500 font-semibold'>À faire: </span>
                                        Avant de candidater à des logements, pensez à complété votre dossier locataire.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
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

            <div className='mt-40 flex flex-row space-x-6 p-6 bg-gray-100'>
                <InputFloatin id={'normal'} placeholder={'Adresse email'} />  
                <InputFloatin id={'erroh'} statut={'error'} placeholder={'Nom du rôle'} />  
                <InputFloatin id={'valdie'} statut={'valid'} placeholder={'Nom du rôle'} />  
            </div>

            <Footer />
        </>
    )
} 