import React, { useContext, useState, useEffect } from 'react';  

// Components
import NavBar from '../components/navbar/navbar-employee'
import { Button } from '../components/button/button';

// Firebase
import{ db } from "../firebase.config"
import { doc, getDoc, getDocs, onSnapshot, collection } from "firebase/firestore";
import { UserContext } from '../context/UserContext';

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

    const [home, setHome] = useState([])
    useEffect(() => {

        let unsubscribed = false;

        getDocs(collection(db, "homes"))
          .then((querySnapshot) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
            
            const newUserDataArray = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));
      
            //setHome(newUserDataArray);
          })
          .catch((err) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
      
            // TODO: Handle errors
            console.error("Failed to retrieve data", err);
          });
      
        return () => unsubscribed  = true;

    }, [])

    const [selectHome, setSelectHome] = useState();

    return (
        <>  
            <div className={`h-full`}>

                <div className='grid grid-cols-5 w-full h-full'>

                    <div className=' col-span-1 h-full'>
                        <div className='border border-t-transparent group-hover:border-black group-hover:border-t h-full'>
                            <div className='border-b group-hover:border-black h-4.5rem flex items-center justify-between px-5 '>
                                <div className='text-xl font-bold text-night text-left'>Logements</div>
                                <a href='#' className='text-sm hover:bg-gray-100/80 rounded-lg px-4 py-2 font-semibold text-night text-left underline'>Ajouter un logement</a>
                            </div>
                            <div className='flex flex-col items-center justify-center p-5 overflow-auto'>
                                <div className='text-lg font-semibold text-night text-center'>Vous n'avez pas de logements disponibles</div>
                                <div className='text-md font-normal text-gray-500 text-center leading-tight'>Lorsque qu'un logement est créé sur la plateforme, il apparaitra dans cette liste</div>
                                <Button additionnal={'mt-4'}>Créer un logement</Button>
                            
                                <div className='pt-4 grid grid-cols-1 gap-5'>
                                    {home.map(o => 
                                        <>
                                            <div className='h-fit'>
                                                
                                                <a onClick={() => setSelectHome(o)} className={'cursor-pointer z-50 bg-white overflow-hidden w-full'}>
                                                    <div className='h-56 w-full bg-cover rounded-xl' style={{backgroundImage: `url(${o.pic1})`}} />
                                                    <div className='py-4 w-full flex flex-col space-y-0.25'>
                                                        <div className='flex flex-row items-center justify-between antialiased truncate'>
                                                            <div className='text-sm font-medium text-black antialiased truncate mr-2'>
                                                                {o.name}
                                                            </div>
                                                            <div className='text-sm font-normal text-black antialiased'>
                                                                4,25 (65)
                                                            </div>
                                                        </div>
                                                        <div className='text-sm font-normal text-stone-500 antialiased truncate'>
                                                            {o.rooms || o.chambers || o.spaces ?
                                                                <div className='flex dot-separator-6'>
                                                                    {o.rooms ? <span>Pièces {o.rooms}</span> : undefined}
                                                                    {o.chambers ? <span>Chambres {o.chambers}</span> : undefined}
                                                                    {o.spaces ? <span>{o.spaces}m<sup>2</sup></span> : undefined}
                                                                </div>
                                                            : undefined} 
                                                        </div>
                                                        <div className='flex flex-row items-center antialiased space-x-1'>
                                                            <div className='text-sm font-medium text-black '>{o.price} €</div>
                                                            <div className='text-sm font-normal text-night'>par mois</div>
                                                            <div className='text-sm font-normal text-stone-500'> · Dès maintenant</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' col-span-3 h-full'>
                        <div className='border border-t-transparent group-hover:border-black group-hover:border-t h-full'>
                            <div className='border-b group-hover:border-black h-4.5rem flex items-center justify-between px-5'>
                                <div className='text-xl font-bold text-night text-left'>{selectHome ? selectHome.name : ""}</div>
                            </div>
                            <div className='flex flex-col p-5'>
                                <div className='pt-16'>
                                    <div className='pt-2 text-2xl text-gray-700 font-semibold'>Modes de paiement</div>
                                    <div className='pt-1 text-md text-gray-500 font-normal'>Ajoutez un mode de paiement à l'aide d enotre système de paiement sécurisé, puis commencez à organiser votre prochaine location.</div>
                                    <Button additionnal={"mt-5"} theme={"black"}>Modifier le mode de paiement</Button>
                                </div>                         
                            </div>
                        </div>
                    </div>

                    <div className=' col-span-1 h-full'>
                        <div className='border border-t-transparent group-hover:border-black group-hover:border-t h-full flex flex-col'>
                            <div className='border-b group-hover:border-black h-5.5rem flex items-center justify-start'>
                                <div className='px-5 text-xl font-bold text-night text-left'>Détails</div>
                            </div>
                            <div className='flex flex-col flex-grow h-full'>
                                <div className='h-56 w-full bg-cover' style={{backgroundImage: `url(${selectHome && selectHome.pic1})`}} />
                                <div className='p-5 home-separator'>
                                   
                                   {selectHome &&
                                   <>
                                        <div className='text-2xl font-semibold'>{selectHome.name}</div>
                                        {selectHome.rooms || selectHome.chambers || selectHome.spaces ?
                                            <div className='pb-2  flex dot-separator-6 text-base font-medium text-gray-700'>
                                                {selectHome.rooms ? <span>Pièces {selectHome.rooms}</span> : undefined}
                                                {selectHome.chambers ? <span>Chambres {selectHome.chambers}</span> : undefined}
                                                {selectHome.spaces ? <span>{selectHome.spaces}m<sup>2</sup></span> : undefined}
                                            </div>
                                        : undefined}
                                   
                                        {/* À propos */}
                                        {selectHome.description ? 
                                            <span className='pt-6'>
                                                <Contener title={"À propos"}>
                                                    <div> 
                                                        <div className='pb-2 font-md leading-snug'>{selectHome.description ? selectHome.description : "Aucunes descriptions n'est renseigné ;("}</div>
                                                    </div>
                                                </Contener>
                                            </span>
                                        : undefined}
                                    
                                        {/* À propos */}
                                        {selectHome.description ? 
                                            <span className='pt-4'>
                                                <Contener title={"À propos"}>
                                                    <div> 
                                                        <div className='pb-2 font-md leading-snug'>{selectHome.description ? selectHome.description : "Aucunes descriptions n'est renseigné ;("}</div>
                                                    </div>
                                                </Contener>
                                            </span>
                                        : undefined}
                                 </>
                                    }



                                </div>
                                <div className='p-5'>
                                    <div className='pt-2 text-2xl text-gray-700 font-semibold'>Informations</div>
                                    <div className='pt-1 text-sm text-gray-500 font-normal'>Pièces: {selectHome && selectHome.rooms}</div>
                                    <div className='pt-1 text-sm text-gray-500 font-normal'>Chambres: {selectHome && selectHome.chambers}</div>
                                    <div className='pt-1 text-sm text-gray-500 font-normal'>Espaces: {selectHome && selectHome.spaces}</div>
                                </div>
                                <div className='p-5'>
                                    <div className='pt-2 text-2xl text-gray-700 font-semibold'>Loyer</div>
                                    <div className='pt-1 text-sm text-gray-500 font-normal'>Loyer: {selectHome && selectHome.price}€</div>
                                    <div className='pt-1 text-sm text-gray-500 font-normal'>Charges: {selectHome && selectHome.taxes}€</div>
                                </div>
                                
                            </div>
                            <div className='border-t group-hover:border-black h-5.5rem flex items-center justify-start'>
                                <div className='px-5 text-xl font-bold text-night text-left'>Détails</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
} 

function Contener({title, children}){
    return(
        <>
            <div className='w-full'>
                <div className='pb-1 text-xl font-semibold'>{title}</div>
                {children}
            </div>
        </>
    )
}