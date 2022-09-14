import React from 'react';
import LOGOWHITE from '../../assets/logo.svg'

import { IoChevronDownOutline, IoMenu } from 'react-icons/io5'

export default function Component44(props) { 
    return (
        <> 
            <div className='sticky w-full'>
                <div className={`flex items-center justify-between h-4rem bg-black`}>
                    <div className="absolute z-10 inset-y-0 left-36 flex items-center">
                        <img src={LOGOWHITE} width={80} alt="Logo" />
                    </div> 
                    <div className="absolute inset-x-0 inset-y-0 flex justify-center items-center">

                    </div>
                    <div className="absolute z-10 inset-y-0 right-36 flex items-center">
                        <button>
                            <IoMenu stroke='#ffffff' size={20} />
                        </button>
                        <div className="dropdown dropdown-end">
                            <button tabIndex={0} className='inline-flex items-center h-2.5rem px-5 rounded-full hover:bg-white/10 text-base font-semibold text-white'>
                                Compte <IoChevronDownOutline className='ml-1' size={20} />
                            </button>
                            <ul tabIndex={0} className="mt-4 dropdown-content menu p-2 shadow-dropdown bg-base-100 rounded-box w-52">
                                <li><a className='font-semibold text-sm'>Profile</a></li> 
                                <li><a className='font-semibold text-sm'>Compte</a></li> 
                                <li><a className='font-semibold text-sm'>Obtenir de l'aide</a></li> 
                                    <div className='py-2'><div className='border-t'></div></div>
                                <li><a className='font-medium text-sm'>Français (FR)</a></li> 
                                <li><a className='font-medium text-sm'>€ EUR</a></li> 
                                    <div className='py-2'><div className='border-t'></div></div>
                                <li><a className='font-medium text-sm'>Parrainer un hôte</a></li>
                                <li><a className='font-medium text-sm'>Déconnexion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}