import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext'

import LOGOWHITE from '../../assets/logo.svg'

import { IoChevronDown } from 'react-icons/io5'
import { db, auth} from "../../firebase.config"
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Component(props) { 
    const {modalSign, setModalSign} = useContext(UserContext)

    return (
        <> 
            <div className='sticky w-full'>
                <div className={`flex items-center justify-between border-b h-4rem bg-white`}>
                    <div className="absolute z-10 inset-y-0 left-5 sm:left-36 md:left-36 lg:left-36 xl:left-36 2xl:left-36 flex items-center">
                        <a href='.'><img width={25} src={LOGOWHITE} /></a>
                    </div> 
                    <div className="absolute inset-x-0 inset-y-0 flex justify-center items-center">
                        <div className='hidden lg:block xl:block 2xl:block'>
                            {GetCenter()}
                        </div>
                    </div>
                    <div className="absolute z-10 inset-y-0 right-5 sm:right-36 md:right-36 lg:right-36 xl:right-36 2xl:right-36 flex items-center">
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0">
                                <button className="h-full">
                                    <div className='inline-flex items-center text-night outline outline-1 outline-gray-200 rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
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
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate();

    if (!currentUser) {
        return (
            <>
                 <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Programme
                    </div>
                </button> 
                <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Études
                    </div>
                </button> 
                <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Informations
                    </div>
                </button> 
            </>
        )    
    } else {
        return (
            <>
                <button onClick={() => navigate("../hosting")} className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Aujourd'hui
                    </div>
                </button> 
                <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Messages
                    </div>
                </button> 
                <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Calendrier
                    </div>
                </button> 
                <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Informations
                    </div>
                </button> 
                <button className="h-full">
                    <div className='inline-flex items-center text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Menu <IoChevronDown className='ml-1 mt-0.5' />
                    </div>
                </button> 
            </>
        )
    }

}

function GetDropdown() {
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext)
    const {modalSign, setModalSign} = useContext(UserContext)

    const logout = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch {
            alert("")
        }
    }

    if (!currentUser) {
        return (
            <>
                        <li><a onClick={() => setModalSign(true)} className='font-medium text-sm'>Inscription</a></li>
                        <li><a onClick={() => setModalSign(true)} className='font-medium text-sm'>Connexion</a></li>
                        <div className='py-2'><div className='border-t'></div></div>
                        <li><a className='font-normal text-sm'>Louer mon logement</a></li>
                        <li><a className='font-normal text-sm'>Trouver un logement</a></li>
                        <li><a className='font-normal text-sm'>Aide</a></li>
            </>
        )
    } else {
        return (
            <>
                        <li><a onClick={() => navigate("../account")} className='font-medium text-sm'>Profile</a></li> 
                        <li><a onClick={() => navigate("../account-settings")} className='font-medium text-sm'>Compte</a></li> 
                        <li><a className='font-medium text-sm'>Obtenir de l'aide</a></li> 
                            <div className='py-2'><div className='border-t'></div></div>
                        <li><a className='font-normal text-sm'>Français (FR)</a></li> 
                        <li><a className='font-normal text-sm'>€ EUR</a></li> 
                            <div className='py-2'><div className='border-t'></div></div>
                        <li><a className='font-normal text-sm'>Parrainer un hôte</a></li>
                        <li><a onClick={logout} className='font-normal text-sm'>Déconnexion</a></li>
            </>
        )
    }

}