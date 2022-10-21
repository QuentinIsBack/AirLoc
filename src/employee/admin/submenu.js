import React,{useState, useEffect, useContext} from 'react';  

import { Disclosure, Menu } from '@headlessui/react'
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/button/button';

export const SubMenu = () => {

    const MenuGestion = [
        {name:"Logements", items: ["Tous", "En location", "Créer un logement"]},
        {name:"Statistiques"},
    ]

    return (
        <>
            <div className='flex-grow flex flex-col h-full'>
                <div className='p-8'>
                    <div className='text-2xl font-semibold text-night'>Gestion</div>
                </div>
                <div className='flex-grow p-4 '>
                    {MenuGestion.map( ({name, items}, index) =>
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className={`animation duration-200 w-full rounded-lg py-2 px-2 text-left font-medium ${open ? 'bg-black/90 hover:bg-black text-white' : 'hover:bg-gray-200 text-gray-700'}`}>
                                    <div className='px-2 text-sm'>{name}</div>
                                </Disclosure.Button>
                                <Disclosure.Panel>                
                                    {items && items.map((o, index) => 
                                        <div key={index}className='w-full flex justify-end'>
                                            <div className='animation duration-200 w-11/12 rounded-lg hover:bg-gray-200 py-2 px-2 text-left'>
                                                <div className='px-2 text-sm font-medium text-gray-700'>{o}</div>
                                            </div>
                                        </div>
                                    )}
                                </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    )}
                    <div className='w-full flex justify-end'>
                        <div className='w-full rounded-lg hover:bg-green-700/10 py-2 px-2 text-left'>
                            <div className='px-2 text-sm font-medium text-cyan-700'>AirStudent</div>
                        </div>
                    </div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className={`animation duration-200 w-full rounded-lg py-2 px-2 text-left font-medium ${open ? 'bg-red-500/10 hover:bg-red-500/30 text-red-700' : 'hover:bg-red-500/30 text-red-700'}`}>
                                <div className='px-2 text-sm'>Administration</div>
                            </Disclosure.Button>
                            <Disclosure.Panel>         
                                <NavLink to="../employee/admin/users">
                                    <div className='w-full flex justify-end'>
                                    <button className='animation duration-200 w-11/12 rounded-lg hover:bg-gray-200 py-2 px-2 text-left'>
                                            <div className='px-2 text-sm font-medium text-gray-700'>Utilisateurs</div>
                                        </button>
                                    </div>
                                </NavLink>     
                                <NavLink to="../employee/admin/ranks">
                                    <div className='w-full flex justify-end'>
                                    <button className='animation duration-200 w-11/12 rounded-lg hover:bg-gray-200 py-2 px-2 text-left'>
                                            <div className='px-2 text-sm font-medium text-gray-700'>Rôles</div>
                                        </button>
                                    </div>
                                </NavLink>    
                            </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div> 
                <div className='p-4 h-fit'>
                    <Button size={'full'}>
                        Paramètres
                    </Button>
                </div>
            </div>
        </>
    )
}