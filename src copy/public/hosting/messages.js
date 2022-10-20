import React, { useContext, useState } from 'react';  

// Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Modal from '../../components/modal/Modal';
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

                <div className='grid grid-cols-5 w-full h-full'>

                    <div className='group col-span-1 h-full'>
                        <div className='border border-t-transparent group-hover:border-black group-hover:border-t h-full'>
                            <div className='border-b group-hover:border-black h-4.5rem flex items-center justify-start'>
                                <div className='px-5 text-xl font-bold text-night text-left'>Messages</div>
                            </div>
                            <div className='flex flex-col items-center justify-center p-5'>
                                <div className='text-lg font-semibold text-night text-center'>Vous n'avez pas de messages non lus</div>
                                <div className='text-md font-normal text-gray-500 text-center leading-tight'>Lorsque vous réservez un voyage ou une expérience, les messages de votre hôte s'affichent ici.</div>
                                <Button additionnal={'mt-4'}>Explorez Airloc</Button>
                            </div>
                        </div>
                    </div>

                    <div className='group col-span-3 h-full'>
                        <div className='border border-t-transparent group-hover:border-black group-hover:border-t h-full'>
                            <div className='border-b group-hover:border-black h-4.5rem flex items-center justify-start'>
                                
                            </div>
                            <div className='flex flex-col items-center justify-center p-5'>
                                
                            </div>
                        </div>
                    </div>

                    <div className='group col-span-1 h-full'>
                        <div className='border border-t-transparent group-hover:border-black group-hover:border-t h-full'>
                            <div className='border-b group-hover:border-black h-4.5rem flex items-center justify-start'>
                                <div className='px-5 text-xl font-bold text-night text-left'>Détails</div>
                            </div>
                            <div className='flex flex-col items-center justify-center p-5'>

                            </div>
                        </div>
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
                    <div className='text-3xl font-semibold text-night text-left'>Messagerie Sécurisé</div>
                    <div className='pt-2 text-md font-normal text-gray-500 text-left'>Communiquez avec vos correspondants via la plateforme afin de sécuriser et de protéger vos messages.</div>

                    <div className='pt-8 flex justify-start'>
                        <Button onClick={close} theme={'black'}>Continuer</Button>
                    </div>
                </div>
            </ModalTest>
        </>
    )
}