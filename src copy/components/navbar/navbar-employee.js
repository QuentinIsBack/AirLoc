import React, {useContext, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

import { UserContext } from '../../context/UserContext'
import {ModalTest} from '../modal/ModalTest'

import LOGOWHITE from '../../assets/logo.svg'

import { IoChevronDown } from 'react-icons/io5'
import { db, auth} from "../../firebase.config"
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button';
import { InputFloating } from '../input/inputfloating';
import { GroupInput } from '../input/groupinput'

//
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { SignInMethod } from 'firebase/auth'

  
export default function Component() { 
    const {modalSign, setModalSign} = useContext(UserContext)

    return (
        <> 
            <div className='sticky w-full z-50'>
                <div className={`flex items-center justify-between border-b border-gray-900 h-4rem bg-gray-900`}>
                    <div className={`absolute z-10 inset-y-0 left-8 flex items-center`}>
                        <a href='.'><img width={25} src={LOGOWHITE} /></a>
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
                    <li><Link to={"../hosting/announces"}><a className='font-medium text-sm'>Annonces</a></Link></li>
                    <li><a className='font-medium text-sm'>Réservations</a></li>
                    <div className='py-2'><div className='border-t'></div></div>
                    <li><a className='font-normal text-sm'>Guides</a></li>
                    <li><a className='font-normal text-sm'>Historique des transactions</a></li>
                    <li><a className='font-normal text-sm'>Forum de la communauté</a></li>
                </ul>
            </div>
        </>
    )
}

function GetDropdown() {
    return (
        <>
            <li><a className='font-medium text-sm'>Obtenir de l'aide</a></li> 
                <div className='py-2'><div className='border-t'></div></div>
            <li><a className='font-normal text-sm'>Français (FR)</a></li> 
            <li><a className='font-normal text-sm'>€ EUR</a></li> 
                <div className='py-2'><div className='border-t'></div></div>
            <li><a className='font-normal text-sm'>Parrainer un hôte</a></li>
        </>
    )
}
