import React, { useContext, useState, useEffect } from 'react';  
import { useParams } from "react-router-dom";

// Components
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

// Firebase
import{ db } from "../firebase.config"
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { UserContext } from '../context/UserContext';


import { FaSwimmingPool, FaShower, FaCarBattery, FaFireExtinguisher } from 'react-icons/fa';
import { MdHotTub, MdKitchen, MdLocalParking, MdSecurity, MdVerifiedUser } from 'react-icons/md';
import { RiBilliardsLine, RiParkingLine, RiWindyFill, RiHome2Fill, RiCheckFill, RiStarLine, RiStarFill, RiShieldCheckLine } from 'react-icons/ri';
import { BsTree, BsFillDoorClosedFill } from 'react-icons/bs';
import { GoClock } from 'react-icons/go';
import { GrWorkshop } from 'react-icons/gr';
import { IoIosFitness, IoIosTv } from 'react-icons/io';
import { AiOutlineWifi, AiFillHeart, AiOutlinePartition } from 'react-icons/ai';
import { WiSmoke } from 'react-icons/wi';
import { GiLightningDissipation, GiBarbecue, GiFlamer, GiChimney, GiWashingMachine } from 'react-icons/gi';
import { Button } from '../components/button/button';

export default function Page() {
    const padding = `px-80`;

    const { id } = useParams();

    const [home, setHome] = useState({})
    
    const { User } = useContext(UserContext)

    useEffect(() => {
        const unsubscribe=onSnapshot(doc(db, "homes", id), (doc) => {
            console.log("Current data: ", doc.data());
            setHome(doc.data())
        });
        return unsubscribe;
    }, [])

    return (
        <>  
            <NavBar />


            <div className={`pt-20 ${padding} flex flex-row space-x-5`}>
                <div className={'w-full'}>
                    <div class="grid grid-rows-2 grid-flow-col gap-4 w-full h-96">
                        <button class="shadow-xl row-span-3 col-span-2 w-full bg-red-500 rounded-l-3xl bg-center bg-cover" style={{backgroundImage: `url(${home.pic1})`}}> </button>
                        <button class="shadow-xl col-span-1 bg-blue-500 rounded-tr-3xl bg-center bg-cover" style={{backgroundImage: `url(${home.pic2})`}}> </button>
                        <button class="shadow-xl row-span-2 col-span-1 bg-purple-500 rounded-br-3xl bg-center bg-cover" style={{backgroundImage: `url(${home.pic3})`}}> </button>
                    </div>
                    <div className='pt-6 w-full'>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <div className='text-3xl font-medium'>{home.name}</div>
                            </div>
                            <div className='flex flex-row justify-center space-x-4 h-full'>
                                <button className='border hover:border-black h-full rounded-xl flex flex-col items-center p-3 space-y-2.5'>
                                    <AiOutlinePartition size={30} />
                                    <div className='text-sm'>
                                        Share
                                    </div>
                                </button>
                                <button className='border hover:border-black h-full rounded-xl flex flex-col items-center p-3 space-y-2.5'>
                                    <AiFillHeart size={30} />
                                    <div className='text-sm'>
                                        J'aime
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='border-t' />

                    {getAvailable(1)}

                    <div className='border-t' />

                    <Contener title={"À propos"}>
                        <div> 
                            <div className='pb-2 font-md leading-snug'>{home.description ? home.description : "Aucunes descriptions n'est renseigné ;("}</div>
                            <div className='pt-1 underline font-base font-semibold leading-snug'>En savoir plus</div>
                        </div>
                    </Contener>

                    <div className='border-t' />


                </div>
                <div className={'w-30rem shadowbox rounded-3xl sticky top-20 overflow-hidden p-6 h-fit'}>
                    <div className={'text-2xl font-medium text-night'}>{home.name}</div>
                    <div className='py-2 pt-3'><div className='border-t'></div></div>
                    <div className='pt-3 pb-3'>
                        <div className='pb-3 text-xl font-medium leading-snug'>{User.firstname} : candidature admissible</div>

                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Salaire minimum</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Loi Pinel</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Numéro de téléphone</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Bulletins de salaire</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Avis d'imposition 2021</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Taux d'accaptation élevé&nbsp;<span className='text-green-700'>98%</span></div>

                        <div className='text-sm font-normal leading-snug'><a href='#' className='font-semibold underline'>En savoir plus</a> sur la manière dont la confirmation des informations des comptes contribues à garantir la securité de la commaunté AirLoc.</div>

                    </div>
                    <Button additionnal={'h-3rem'} theme={'cyan'} size={'full'}>Candidater</Button>
                </div>
            </div>


            <Footer />
        </>
    )
} 

function Contener({title, children}){
    return(
        <>
            <div className='py-6 w-full'>
                <div className='pb-6 text-xl font-semibold'>{title}</div>
                {children}
            </div>
        </>
    )
}

function getAvailable(available){
    if(available == 1){
        return (
            <>
                <div className='py-8'>
                    <div className='flex flex-row space-x-5 items-center '>
                        <div>
                            <BsFillDoorClosedFill size={25}/>
                        </div>
                        <div>
                            <div className='font-medium text-gray-plus text-lg pb-1'>
                            Disponible dès maintenant
                            </div>
                            <div className='text-md font-base text-insane-gray'>
                                Le logement est disponible dès maintenant, postuler rapidement pour enménarer rapidement.
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } 
}