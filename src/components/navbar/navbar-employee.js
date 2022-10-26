import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import LOGOWHITE from '../../assets/logo.svg'

import { IoChevronDown } from 'react-icons/io5'
  
export default function Component() { 
    const navigate = useNavigate()
    return (
        <> 
            <div className='sticky w-full z-50'>
                <div className={`flex items-center justify-between border-b border-gray-900 h-4rem bg-gray-900`}>
                    <div className={`absolute z-10 inset-y-0 left-8 flex items-center`}>
                        <button onClick={()=>navigate('/employee')} href='/employee'><img width={25} alt={'logo'} src={LOGOWHITE} /></button>
                        <div className='ml-4 text-white font-semibold'>Employés</div>
                    </div> 
                    <div className="absolute inset-x-0 inset-y-0 flex justify-center items-center">
                        <div className='hidden lg:block xl:block 2xl:block'>
                            {GetCenter()}
                        </div>
                    </div>
                    <div className="absolute z-10 inset-y-0 right-8 flex items-center">
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0">
                                <button className="h-full">
                                    <div className='inline-flex items-center text-white outline outline-1 outline-gray-200 rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100/10'>
                                        Mon compte <IoChevronDown className='ml-1 mt-0.5' />
                                    </div>
                                </button>   
                            </div> 
                            <ul tabIndex="0" className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                                {GetDropdown()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function GetCenter(){
    return (
        <>
            <NavLink to="../employee/today" className={({ isActive }) => (isActive ? "text-gray-300" : "text-white ")}>
                <button className="h-full">
                    <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100/10`}>
                        Aujourd'hui
                    </div>
                </button> 
            </NavLink>
            <NavLink to="../employee/housing" className={({ isActive }) => (isActive ? "text-gray-300" : "text-white ")}>
                <button className="h-full">
                    <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100/10`}>
                        Logements
                    </div>
                </button> 
            </NavLink>
            <NavLink to=" " className={({ isActive }) => (isActive ? "text-gray-300" : "text-white ")}>
                <button className="h-full">
                    <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100/10`}>
                        Agences
                    </div>
                </button> 
            </NavLink>
            <NavLink to=" " className={({ isActive }) => (isActive ? "text-gray-300" : "text-white ")}>
                <button className="h-full">
                    <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100/10`}>
                        Logements
                    </div>
                </button> 
            </NavLink>
            <div className="dropdown dropdown-end">
                <div tabIndex="0">
                    <button className="h-full">
                        <div className='inline-flex items-center text-white rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100/10'>
                            Menu <IoChevronDown className='ml-1 mt-0.5' />
                        </div>
                    </button> 
                </div> 
                <ul tabIndex="0" className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                    <li><div className='font-medium text-sm'>Annonces</div></li>
                    <li><div className='font-medium text-sm'>Réservations</div></li>
                    <div className='py-2'><div className='border-t'></div></div>
                    <li><div className='font-normal text-sm'>Guides</div></li>
                    <li><div className='font-normal text-sm'>Historique des transactions</div></li>
                    <li><div className='font-normal text-sm'>Forum de la communauté</div></li>
                </ul>
            </div>
        </>
    )
}

function GetDropdown() {
    return (
        <>
            <li><div className='font-medium text-sm'>Obtenir de l'aide</div></li> 
                <div className='py-2'><div className='border-t'></div></div>
            <li><div className='font-normal text-sm'>Français (FR)</div></li> 
            <li><div className='font-normal text-sm'>€ EUR</div></li> 
                <div className='py-2'><div className='border-t'></div></div>
            <li><div className='font-normal text-sm'>Déconnexion</div></li>
        </>
    )
}
