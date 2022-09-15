import React from 'react';  

import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

export default function Page() {
    const padding = `px-36`;

    return (
        <>  
            <NavBar />

            <div className={`bg-gradient-to-r from-indigo-500 to-pink-500 ${padding} py-20`}>
                <div className='text-5xl font-semibold text-white text-left'>Bonjour,</div>
            </div>

            <div className={`${padding} py-20`}>
                <div className='text-5xl font-semibold text-night text-left'>Bonjour,</div>
            </div>


            <Footer padding={'px-36'} />
        </>
    )
} 