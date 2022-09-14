import React from 'react';

import LOGOWHITE from '../../assets/logo.svg'

import { IoChevronDown } from 'react-icons/io5'

export default function Component(props) { 
    return (
        <> 
            <div className='sticky w-full'>
                <div className={`flex items-center justify-between border-b h-4rem bg-white`}>
                    <div className="absolute z-10 inset-y-0 left-36 flex items-center">
                        <a href='#'><img width={25} src={LOGOWHITE} /></a>
                    </div> 
                    <div className="absolute inset-x-0 inset-y-0 flex justify-center items-center">
                        <div className='hidden lg:block xl:block 2xl:block'>
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
                        </div>

                    </div>
                    <div className="absolute z-10 inset-y-0 right-36 flex items-center">
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0">
                                <button className="h-full">
                                    <div className='inline-flex items-center text-night outline outline-1 outline-gray-200 rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                                        Mon compte <IoChevronDown className='ml-1 mt-0.5' />
                                    </div>
                                </button>   
                            </div> 
                            <ul tabIndex="0" className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                                <li><a className='font-medium'>Inscription</a></li>
                                <li><a className='font-medium'>Connexion</a></li>
                                <div className='py-2'><div className='border-t'></div></div>
                                <li><a className='font-normal'>Louer mon logement</a></li>
                                <li><a className='font-normal'>Trouver un logement</a></li>
                                <li><a className='font-normal'>Aide</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}