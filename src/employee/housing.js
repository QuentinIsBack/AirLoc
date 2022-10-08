import React,{useState, useEffect} from 'react';  

// Components
import NavBar from '../components/navbar/navbar-employee'
import Footer from '../components/footer/footer'

// Firebase
import{ db } from "../firebase.config"
import { doc, getDoc, getDocs, onSnapshot, collection } from "firebase/firestore";
import { UserContext } from '../context/UserContext';

import { IoSettingsSharp } from 'react-icons/io5';
import { Button } from '../components/button/button';

import { Disclosure, Menu } from '@headlessui/react'

export default function Page() {
    const padding = `px-36`;

    const [home, setHome] = useState([])
    useEffect(() => {

        let unsubscribed = false;

        getDocs(collection(db, "homes"))
          .then((querySnapshot) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
            
            const newUserDataArray = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));
      
            setHome(newUserDataArray);
          })
          .catch((err) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
      
            // TODO: Handle errors
            console.error("Failed to retrieve data", err);
          });
      
        return () => unsubscribed  = true;

    }, [])

    const MenuGestion = [
        { name: "Gestion", items: ["ee", "fd"] },
        { name: "Logements" },
        { name: "Agences" },
    ]

    const MenuGestion2 = [
        {name:"aaa", items: ["ff", "aa"]},
        {name:"fdsg"}
    ]

    return (
        <>  
            <div className='h-screen flex flex-col'>
                <NavBar />

                {/* Mon Espace Locataire */}
                <div className='flex-grow grid grid-cols-16'>
                    <div className='col-span-2 bg-gray-100 border-r flex flex-col h-full'>
                        <div className='flex-grow'>
                           <div className='p-8'>
                                <div className='text-2xl font-semibold text-night'>Performances</div>
                            </div>
                            <div className='p-4'>
                                {MenuGestion.map(m => 
                                    <div className='w-full rounded-full hover:bg-gray-200 py-2 px-2'>
                                        <div className='px-4 text-sm text-gray-700'>{m.name}</div>
                                    </div>
                                )}
                                ----
                                {MenuGestion2.map( ({name, items}) =>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="w-full rounded-full hover:bg-gray-200 py-2 px-2 text-left">
                                                <div className='px-4 text-sm text-gray-700'>{name}</div>
                                            </Disclosure.Button>
                                            <Disclosure.Panel>                
                                                {items.map(o => 
                                                    <div className='w-full rounded-full hover:bg-gray-200 py-2 px-2 text-left'>
                                                        <div className='px-4 text-sm text-gray-700'>{o}</div>
                                                    </div>
                                                )}
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                )}
                            </div> 
                        </div>
                        <div className='flex justify-center'>
                            <div className='p-4 h-full w-full'>
                                <Button theme={'night'} size={'full'} additionnal={'h-fit flex flex-row items-center'} ><IoSettingsSharp className='mr-2' fill='white' size={20} /> Paramètres</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-11 bg-white h-full'>
    
                    </div>
                    <div className='col-span-3 bg-white border-l h-full'>

                    </div>
                </div>

                <Footer formatage={'sticky'} />
            </div>
        </>
    )
} 