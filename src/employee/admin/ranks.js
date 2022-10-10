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
import { BadgeRank } from '../../components/badge/Badge';
import { GetRankByPower, RankContext, DeleteRank, CreateRank } from '../../context/RankContext';
import { SubMenu } from './submenu';
import { ModalTest } from '../../components/modal/ModalTest';
import { InputFloating } from '../../components/input/inputfloating';

export default function Page() {
    const { Rank, setRank } = useContext(RankContext)

    const [selectRank, setSelectRank] = useState();
    const [modalCreate, setModalCreate] = useState(false);


    return (
        <>  
            <ModalRank show={modalCreate} close={()=>setModalCreate(false)} Rank={Rank} setRank={setRank} />
            
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
                            <div className='flex flex-row justify-between'>
                                <div className='text-2xl font-semibold text-night'>Liste des rôles</div>
                                <a onClick={()=>setModalCreate(true)} className='cursor-pointer text-md hover:bg-gray-100/80 rounded-lg px-4 py-2 font-semibold text-night text-left underline'>Ajouter un rôle</a>
                            </div>
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
                                {Rank && Rank.map(u =>
                                    <tr className='h-16 border-t'>
                                        <td>
                                            <input type="checkbox" className="checkbox checkbox-xs" />
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {u.name ? u.name : ""}
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            <BadgeRank rank={u} />
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {u.power ? u.power : ""}
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
                            <div className='p-4 flex flex-row space-x-4'>
                                <Button onClick={()=>DeleteRank({Rank, setRank}, selectRank)} theme={'red'} size='full'>Supprimer</Button>
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

 
const ModalRank = ({show, close, Rank, setRank}) => {

    const [name, setName] = useState('Sans-Titre')
    const [deletable, setDeletable] = useState(true)
    const [color, setColor] = useState('#6b72800')
    const [power, setPower] = useState(1)

    const createRank = () => {
        CreateRank({Rank, setRank}, name, deletable, color, power);
        close()
    }

    return (
        <>
            <ModalTest show={show} close={close}>
                <div className='h-10rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                    <div className='border-b' />
                <div className="p-5">
                    <div className='text-3xl font-semibold text-night text-left'>Créer un rôle</div>
                    <div className='pt-2 pb-6 text-md font-normal text-gray-500 text-left'>Communiquez avec vos correspondants via la plateforme afin de sécuriser et de protéger vos messages.</div>

                    <InputFloating onChange={(e)=>setName(e.target.value)} name={'Nom du rôle'} placeholder={'Nom du rôle'} />
                    <input checked={deletable} type={'checkbox'} onChange={()=>setDeletable(!deletable)} className='checkbox checkbox-sm' />
                    <input type={'color'} onChange={(e)=>setColor(e.target.value)} className='border px-2 py-1 border-black' placeholder='Color' />
                    <InputFloating onChange={(e)=>setPower(e.target.value)} name={'Puissance du rôle'} placeholder={'Puissance du rôle'} />

                    <div className='pt-8 flex justify-end'>
                        <Button onClick={createRank} theme={'green'}>Continuer</Button>
                    </div>
                </div>
            </ModalTest>
        </>
    )
}