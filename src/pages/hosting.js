import React, { useContext } from 'react';  

import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { UserContext } from '../context/UserContext';

export default function Page() {
    const padding = `px-36`;

    const { User } = useContext(UserContext)


    return (
        <>  
            <NavBar />

            <div className={`bg-gradient-to-r from-indigo-500 to-pink-500 ${padding} py-20`}>
                <div className='text-5xl font-semibold text-white text-left'>Bonjour,</div>
            </div>

            <div className={`${padding} py-20`}>
                <div className='text-5xl font-semibold text-night text-left'>Bonjour, {User.email ? User.email : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Nom: {User.lastname ? User.lastname : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Prénom: {User.firstname ? User.firstname : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Inscription: {User.registered ? User.registered : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Sexe: {User.sex ? User.sex : undefined}</div>
                <div className='text-2xl font-semibold text-night text-left'>Bio: {User.bio ? User.bio : undefined}</div>
            </div>


            <Footer padding={'px-36'} />
        </>
    )
} 