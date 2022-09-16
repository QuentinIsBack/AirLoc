import React, { useContext } from 'react';  

import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { UserContext } from '../context/UserContext';
import { FaHouseUser } from 'react-icons/fa';

export default function Page() {
    const padding = `px-36`;

    const { User } = useContext(UserContext)


    return (
        <>  
            <NavBar />

            <div className={`bg-gradient-to-r from-indigo-800 to-pink-600 ${padding} py-20`}>
                <div className='text-5xl font-semibold text-white text-left pb-6'>Bonjour,</div>

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