import React,{useState, useEffect, useContext} from 'react';  

// Components
import NavBar from '../../components/navbar/navbar-employee'
import Footer from '../../components/footer/footer'

// Firebase
import{ db } from "../../firebase.config"
import { doc, getDoc, getDocs, onSnapshot, collection } from "firebase/firestore";
import { UserContext } from '../../context/UserContext';

import { IoSettingsSharp } from 'react-icons/io5';
import { Button } from '../../components/button/button';

import { Disclosure, Menu } from '@headlessui/react'
import { Badge, BadgeRank } from '../../components/badge/Badge';
import { GetRankByPower, RankContext } from '../../context/RankContext';
import { SubMenu } from './submenu';

export default function Page() {
    const { Rank } = useContext(RankContext)

    const [selectRank, setSelectRank] = useState();

    return (
        <>  
            <div className='h-screen flex flex-col'>
                <NavBar />

                {/* Mon Espace Locataire */}
                <div className='flex-grow grid grid-cols-16'>
                    <div className={`col-span-2 bg-gray-100 border-r flex flex-col h-full`}>
                        <SubMenu />
                        <div className='flex justify-center'>
                            <div className='p-4 h-full w-full'>
                                <Button theme={'night'} size={'full'} additionnal={'h-fit flex flex-row items-center'} ><IoSettingsSharp className='mr-2' fill='white' size={20} /> Paramètres</Button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-11 bg-white h-full`}>
                        <div className='p-8'>
                            <div className='text-2xl font-semibold text-night'>Liste des rôles</div>
                            <div className='pt-6 flex flex-row space-x-2'>
                                <div className='animation duration-200 border hover:border-black hover:bg-gray-100/90 rounded-full px-3 py-1.5 text-sm'>
                                    Tous les rôles
                                </div>      
                            </div>
                        </div>
                        <div className='px-8 w-full'>
                            <table className='w-full'>
                                <tr className='h-8 uppercase text-xs font-bold text-gray-500'>
                                    <td>
                                        <input type="checkbox" className="checkbox checkbox-xs" />
                                    </td>
                                    <td>
                                        Nom
                                    </td>
                                    <td>
                                        Badge
                                    </td>
                                    <td>
                                        Power
                                    </td>
                                    <td>
                                        Supprimable
                                    </td>
                                    <td>
                                        Action
                                    </td>
                                </tr>
                                {Rank.map(u =>
                                    <tr className='h-16 border-t'>
                                        <td>
                                            <input type="checkbox" className="checkbox checkbox-xs" />
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {u.name}
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            <Badge color={u.color ? u.color : 'bg-gray-500'}>{u.name}</Badge>
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {u.power}
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {!u.deletable ? u.deletable+"" : "true"}
                                        </td>
                                        <td>
                                            <button onClick={()=>setSelectRank(u)} className='w-fit px-4 py-1 rounded-lg border border-black text-black text-sm font-medium hover:bg-gray-100/80'> 
                                                Modifier
                                            </button>
                                        </td>
                                    </tr>
                                )}
                                
                            </table>
                        </div>
                    </div>
                    <div className='col-span-3 bg-white border-l h-full'>
                        <div className='flex flex-col h-full'>
                    <div className='border-b h-5rem flex items-center justify-start'>
                        <div className='px-5 text-xl font-bold text-night'>Détails</div>
                    </div>
                    <div className='pt-6 flex-grow'>
                        {selectRank && 
                            <>
                            <div className='w-full flex flex-col p-6'>
                                <div className='text-xl font-semibold text-black'>Informations</div>

                                <div className='pt-2 flex flex-row items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='text-md text-stone-900 font-semibold'>Nom</div>
                                        <div className='text-sm text-stone-700 font-normal'>{(selectRank.name)}</div>
                                    </div>
                                    <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                </div>

                                <div className='border-b my-3' />

                                <div className='pt-2 flex flex-row items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='text-md text-stone-900 font-semibold'>Badge</div>
                                        <BadgeRank rank={selectRank} />
                                    </div>
                                    <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                </div>

                                <div className='border-b my-3' />

                                <div className='pt-2 flex flex-row items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='text-md text-stone-900 font-semibold'>Puissance</div>
                                        <div className='text-sm text-stone-700 font-normal'>{(selectRank.power)}</div>
                                    </div>
                                    <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                </div>

                            </div>
                        </>
                        }
                    </div>
                    <div className='p-4'>
                        <Button theme={'cyan'} size='full'>Sauvegarder</Button>
                    </div>
                        </div>
                    </div>
                </div>

                <Footer formatage={'sticky'} />
            </div>
        </>
    )
} 