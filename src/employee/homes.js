import React, { useState, useEffect } from 'react';  
import { useParams } from "react-router-dom";

// Components
import NavBar from '../components/navbar/navbar-employee'
import { Button } from '../components/button/button';

// Firebase
import{ db } from "../firebase.config"
import { doc, getDoc, getDocs, onSnapshot, collection } from "firebase/firestore";
import { UserContext } from '../context/UserContext';
import { InputFloating } from '../components/input/inputfloating';

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

    const { id } = useParams();

    const [home, setHome] = useState({})

    useEffect(() => {
        const unsubscribe=onSnapshot(doc(db, "homes", id), (doc) => {
            console.log("Current data: ", doc.data());
            setHome(doc.data())
        });
        return unsubscribe;
    }, [])

    return (
        <>  
            <div className={`h-full`}>

                <div className='grid grid-cols-16 w-full h-full'>

                    <div className='col-span-2 h-full bg-gray-100 '>
                        <Contener>
                            <div className='h-44 w-full bg-cover' style={{backgroundImage: `url(${home.pic1})`}} />
                            <div className='p-6'>
                                <div className='text-lg text-stone-900 font-semibold'>
                                    À propos du logement
                                </div>
                                <div>
                                    <div className='pt-4 flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-col'>
                                            <div className='text-md text-stone-900 font-semibold'>Nom</div>
                                            <div className='text-sm text-stone-700 font-normal mr-20'>{home.name}</div>
                                        </div>
                                        <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                    </div>
                                    <div className='border-b my-4' />
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-col'>
                                            <div className='text-md text-stone-900 font-semibold'>Description</div>
                                            <div className='text-sm text-stone-700 font-normal mr-20'>{home.description}</div>
                                        </div>
                                        <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                    </div>
                                    <div className='border-b my-4' />
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-col'>
                                            <div className='text-md text-stone-900 font-semibold'>Prix</div>
                                            <div className='text-sm text-stone-700 font-normal mr-20'>{home.price} €</div>
                                        </div>
                                        <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                    </div>
                                </div>
                            </div>
                        </Contener>
                    </div>

                    <div className='col-span-11 h-full'>
                        <Contener zone={'center'}>
                        </Contener>
                    </div>

                    <div className='col-span-3 h-full'>
                        <Contener>
                        </Contener>
                    </div>

                </div>

            </div>
        </>
    )
} 

function Contener({children, zone}){
    return(
        <>
            <div className={`${zone == "center" && 'border-x'} border-t-transparent h-full flex flex-col`}>
                {children}
            </div>
        </>
    )
}