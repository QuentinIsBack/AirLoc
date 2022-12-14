import React, { useState } from 'react';  

import {IoFilter} from 'react-icons/io5'

// Components
import NavBar from '../../components/navbar/navbar'
import { Button } from '../../components/button/button';
import { ModalTest } from '../../components/modal/ModalTest';

export default function Page() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <div>  
                    <NavBar />
                </div>
                <div className="flex-grow">
                    {Body()}
                </div>
            </div>
        </>
    )
}

function Body() {
    const [modalDiscover, setModalDiscover] = useState(true);

    return (
        <>  

            <DiscoverMessages show={modalDiscover} close={()=>setModalDiscover(false)} />

            <div className={`h-full`}>

                <div className='w-full h-full'>

                    <div className='p-20'>
                        <div className='text-3xl font-semibold text-night text-left'>Mes annonces</div>
                        <div className='text-md font-normal text-gray-500 text-left'>Afin que votre future baileur puisse mieux vous connaitre et sélectionné votre profil, vous devez ajouter votre situation.</div>
                        
                        <div className='pt-2 w-full flex space-x-2'>
                            <button className='px-4 py-2 rounded-full border text-sm hover:border-black hover:bg-gray-100/80 text-night font-medium hover:text-black'>
                                Filtres
                            </button>
                            <button className='flex items-center px-4 py-2 rounded-full border text-sm hover:border-black hover:bg-gray-100/80 text-night font-medium hover:text-black'>
                                Filtres
                                <IoFilter className='ml-1 mt-0.5' />
                            </button>
                            <button className='px-4 py-2 rounded-full border text-sm hover:border-black hover:bg-gray-100/80 text-night font-medium hover:text-black'>
                                Dossier en cours (0)
                            </button>
                        </div>
                        
                        <input className='mt-4 border hover:border-black text-sm px-4 py-2 text-night rounded-full w-full outline-none focus:border-black' placeholder={"Entrez l'identifiant ou le nom du logement"} />
                    </div>

                </div>

            </div>
        </>
    )
} 
 
const DiscoverMessages = ({show, close}) => {

    return (
        <>
            <ModalTest show={show} close={close}>
                <div className='h-10rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                    <div className='border-b' />
                <div className="p-5">
                    <div className='text-3xl font-semibold text-night text-left'>Mes annonces</div>
                    <div className='pt-2 text-md font-normal text-gray-500 text-left'>Communiquez avec vos correspondants via la plateforme afin de sécuriser et de protéger vos messages.</div>

                    <div className='pt-8 flex justify-start'>
                        <Button onClick={close} theme={'black'}>Continuer</Button>
                    </div>
                </div>
            </ModalTest>
        </>
    )
}