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

    const [users, setUsers] = useState([])
    useEffect(() => {

        let unsubscribed = false;

        getDocs(collection(db, "users"))
          .then((querySnapshot) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
            
            const newUserDataArray = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));
      
            setUsers(newUserDataArray);
          })
          .catch((err) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
      
            // TODO: Handle errors
            console.error("Failed to retrieve data", err);
          });
      
        return () => unsubscribed  = true;

    }, [])

    const [selectUser, setSelectUser] = useState();

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
                            <div className='text-2xl font-semibold text-night'>Liste des utilisateurs</div>
                            <div className='pt-6 flex flex-row space-x-2'>
                                <div className='animation duration-200 border hover:border-black hover:bg-gray-100/90 rounded-full px-3 py-1.5 text-sm'>
                                    Tous les utilisateurs
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
                                        Identité
                                    </td>
                                    <td>
                                        email
                                    </td>
                                    <td>
                                        téléphone
                                    </td>
                                    <td>
                                        Rôles
                                    </td>
                                    <td>
                                        Action
                                    </td>
                                </tr>
                                {users.map(u =>
                                    <tr className='h-16 border-t'>
                                        <td>
                                            <input type="checkbox" className="checkbox checkbox-xs" />
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {u.lastname ? u.lastname : undefined} {u.firstname ? u.firstname : undefined}
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {u.email ? u.email : undefined}
                                        </td>
                                        <td className='text-sm text-night font-semibold'>
                                            {u.phone ? u.phone : undefined}
                                        </td>
                                        <td>
                                            <BadgeRank rank={ GetRankByPower(u) } />
                                        </td>
                                        <td>
                                            <button onClick={()=>setSelectUser(u)} className='w-fit px-4 py-1 rounded-lg border border-black text-black text-sm font-medium hover:bg-gray-100/80'> 
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
                        {selectUser && 
                            <>
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <button className='overflow-hidden'>
                                        <img style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            borderWidth: 3,
                                            }}
                                            src={selectUser.urlprofile ? selectUser.urlprofile : "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0e42df111843393.6009650446d8d.png"} />
                                    </button>
                                    <div className='pt-2 text-xl text-night font-semibold'>{selectUser.firstname && selectUser.firstname+" "}{selectUser.lastname && selectUser.lastname}</div>
                                    <BadgeRank rank={GetRankByPower(selectUser)} />
                                </div>
                                <div className='w-full flex flex-col p-6'>
                                    <div className='text-xl font-semibold text-black'>Informations</div>

                                    <div className='pt-2 flex flex-row items-center justify-between'>
                                        <div className='flex flex-col'>
                                            <div className='text-md text-stone-900 font-semibold'>Nom légal</div>
                                            <div className='text-sm text-stone-700 font-normal'>{(selectUser.firstname ? selectUser.firstname+" " : " ") + (selectUser.lastname ? selectUser.lastname : "")}</div>
                                        </div>
                                        <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                    </div>

                                    <div className='border-b my-3' />

                                    <div className='pt-2 flex flex-row items-center justify-between'>
                                        <div className='flex flex-col'>
                                            <div className='text-md text-stone-900 font-semibold'>Adresse email</div>
                                            <div className='text-sm text-stone-700 font-normal'>{(selectUser.email ? selectUser.email: " ")}</div>
                                        </div>
                                        <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                    </div>

                                    <div className='border-b my-3' />

                                    <div className='pt-2 flex flex-row items-center justify-between'>
                                        <div className='flex flex-col'>
                                            <div className='text-md text-stone-900 font-semibold'>Téléphone</div>
                                            <div className='text-sm text-stone-700 font-normal'>{(selectUser.phone ? selectUser.phone: " ")}</div>
                                        </div>
                                        <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                    </div>

                                    <div className='border-b my-3' />

                                    <div className='pt-2 flex flex-row items-center justify-between'>
                                        <div className='flex flex-col'>
                                            <div className='text-md text-stone-900 font-semibold'>Rôle</div>
                                            <div className='text-sm text-stone-700 font-normal'> {selectUser.power}</div>
                                        </div>
                                        <div className='text-sm text-cyan-600 font-bold hover:underline'>Modifier</div>
                                    </div>

                                    <div className='pt-6 text-xl font-semibold text-black'>Action</div>
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