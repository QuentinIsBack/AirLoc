import React, { useContext, useState, useEffect } from 'react';  
import { useParams } from "react-router-dom";

import './homes.css'

// Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

// Firebase
import{ db } from "../../firebase.config"
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { UserContext } from '../../context/UserContext';


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
import { Button } from '../../components/button/button';
import { EquipmentRoom } from '../../components/homes/equipments';
import { ModalTest } from '../../components/modal/ModalTest';

export default function Page() {
    const padding = `px-80`;

    const { id } = useParams();

    const [home, setHome] = useState({})
    const [modalCandidate, setModalCandidate] = useState(false);

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
            <CandidateModal show={modalCandidate} close={()=>setModalCandidate(false)} />


            <div className={`pt-20 ${padding} flex flex-row space-x-5`}>

                {/* Right Side */}
                <div className={'w-full'}>
                    <div class="grid grid-rows-2 grid-flow-col gap-4 w-full h-96">
                        <button class="shadow-xl row-span-3 col-span-2 w-full bg-gray-100 rounded-l-3xl bg-center bg-cover" style={{backgroundImage: `url(${home.pic1})`}}> </button>
                        <button class="shadow-xl col-span-1 bg-gray-100 rounded-tr-3xl bg-center bg-cover" style={{backgroundImage: `url(${home.pic2})`}}> </button>
                        <button class="shadow-xl row-span-2 col-span-1 bg-gray-100 rounded-br-3xl bg-center bg-cover" style={{backgroundImage: `url(${home.pic3})`}}> </button>
                    </div>

                    <div className='home-separator'>
                        {/* Nom de l'annonce */}
                        <span>
                            <div className='py-6 flex flex-row justify-between items-center'>
                                <div>
                                    <div className='text-3xl font-medium'>{home.name}</div>
                                    {home.rooms || home.chambers || home.spaces ?
                                        <div className='flex dot-separator-6 text-lg font-medium text-gray-700'>
                                            {home.rooms ? <span>Pièces {home.rooms}</span> : undefined}
                                            {home.chambers ? <span>Chambres {home.chambers}</span> : undefined}
                                            {home.spaces ? <span>{home.spaces}m<sup>2</sup></span> : undefined}
                                        </div>
                                    : undefined}
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
                        </span>
                        {/* Disponibilité */}
                        <span>
                            {getAvailable(1)}
                        </span>
                        {/* À propos */}
                        {home.description ? 
                            <span>
                                <Contener title={"À propos"}>
                                    <div> 
                                        <div className='pb-2 font-md leading-snug'>{home.description ? home.description : "Aucunes descriptions n'est renseigné ;("}</div>
                                        <div className='pt-1 underline font-base font-semibold leading-snug'>En savoir plus</div>
                                    </div>
                                </Contener>
                            </span>
                        : undefined}
                        {/* Equipments */}
                        {(home.equipments && home.equipments.size > 0) ?
                            <span>
                                <Contener title={"Ce que propose ce logement"}>
                                    <div> 
                                        <div className='grid grid-cols-2 w-1/2 gap-5'>
                                            {home.equipments ? home.equipments.map(k => 
                                                EquipmentRoom(k, 30)
                                            ) : undefined}   
                                        </div>
                                    </div>
                                </Contener>
                            </span>
                        : undefined}

                        {/* Lieux */}
                        {home.city ? 
                        <span>
                            <Contener title={"Où se situe le logement"}>
                                <div>
                                    <div className='font-medium text-lg'>{home.city}{home.region ? ", "+home.region : undefined}{home.country ? ", "+home.country : undefined}</div>
                                    <div className='pb-2 font-md'> Facile d'accès au centre ville et proche du périphériques </div>
                                    <div className='pt-1 underline font-base font-semibold leading-snug'>En savoir plus</div>
                                </div>
                            </Contener>
                        </span>
                        : undefined}
                        {/* Réglement */}
                        <span>
                            <Contener title={"À savoir"}>
                                <div>
                                    <div className='grid grid-cols-3 gap-5'>
                                        <div>
                                            <div className='font-medium text-lg pb-2'>
                                                Règlement intérieur
                                            </div>
                                            <div className='flex flex-col space-y-1'>
                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <GoClock size={18} />
                                                    </div>
                                                    <div>
                                                        Pas d'animaux
                                                    </div>
                                                </div>

                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <GoClock size={18} />
                                                    </div>
                                                    <div>
                                                        Non fumeur
                                                    </div>
                                                </div>

                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <BsFillDoorClosedFill size={18} />
                                                    </div>
                                                    <div>
                                                        Pas de fête ni de soirée
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-medium text-lg pb-2'>
                                                Santé et sécurité
                                            </div>
                                            <div className='flex flex-col space-y-1'>
                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <GoClock size={18} />
                                                    </div>
                                                    <div className='break-words'>
                                                        Les consignes d'AirLoc en matière de distanciation physique et d'autres consignes liées au Covid-19 s'appliquent.
                                                    </div>
                                                </div>

                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <GoClock size={18} />
                                                    </div>
                                                    <div>
                                                        Détecteur de fumée
                                                    </div>
                                                </div>

                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <GoClock size={18} />
                                                    </div>
                                                    <div>
                                                        Aucun détecteur de monoxyde de carbone
                                                    </div>
                                                </div>

                                                <div className='flex flex-row space-x-3 items-center pt-3'>
                                                    <button className='font-semibold underline'>
                                                        En savoir plus
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-medium text-gray-plus text-lg pb-2'>
                                                Conditions du bien
                                            </div>
                                            <div className='flex flex-col space-y-1'>
                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <GoClock size={18} />
                                                    </div>
                                                    <div>
                                                        Gagner plus de 3x le loyer
                                                    </div>
                                                </div>
                                                <div className='flex flex-row space-x-3 items-center'>
                                                    <div className='self-start pt-1'>
                                                        <GoClock size={18} />
                                                    </div>
                                                    <div>
                                                        Être salarié (CDI)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Contener>
                        </span>
                    </div>


                </div>

                {/* Left Side */}
                <div className={'w-28rem shadowbox rounded-3xl sticky top-20 overflow-hidden p-6 h-fit'}> 
                    <div className={'text-2xl font-semibold text-night'}>{home.name}</div>
                    <div className='flex dot-separator-3 text-sm font-medium text-gray-700'>
                        {home.rooms ? <span>Pièces {home.rooms}</span> : undefined}
                        {home.chambers ? <span>Chambres {home.chambers}</span> : undefined}
                        {home.spaces ? <span>{home.spaces}m<sup>2</sup></span> : undefined}
                    </div>
                    <div className='border-t my-4' />
                    <div>
                        <div className='pb-3 text-xl font-medium leading-snug'>{User.firstname} : candidature admissible</div>

                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Salaire minimum</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Loi Pinel</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Numéro de téléphone</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Bulletins de salaire</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Avis d'imposition 2021</div>
                        <div className='flex items-center pb-3 text-base font-medium leading-snug'><span className='mr-2'><RiCheckFill fill='green' size={20}/></span> Taux d'accaptation élevé&nbsp;<span className='text-green-700'>98%</span></div>

                        <div className='pt-2 text-sm font-normal leading-snug'><a href='#' className='font-semibold underline'>En savoir plus</a> sur la manière dont la confirmation des informations des comptes contribues à garantir la securité de la commaunté AirLoc.</div>
                    </div>
                    <div className='border-t my-4' />
                    <div className='pb-4'>
                        <div className='flex flex-col space-y-1'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='text-sm font-base text-night'>Loyer HC</div>
                                <div className='text-sm font-base text-night'>{home.price}€</div>
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='text-sm font-base text-night'>Charges</div>
                                <div className='text-sm font-base text-night'>{home.taxes}€</div>
                            </div>
                            <div className='flex flex-row justify-between items-center py-2'>
                                <div className='text-sm font-medium text-night'>Loyer TCC</div>
                                <div className='text-2xl font-semibold text-night'>{home.price + home.taxes}€</div>
                            </div>
                        </div>
                    </div>
                    <Button onClick={()=>setModalCandidate(true)} additionnal={'h-3rem'} theme={'cyan'} size={'full'}>Candidater</Button>
                </div>
                
            </div>


            <Footer formatage={'sticky'} />
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

const CandidateModal = ({show, close}) => {

    return (
        <>
            <ModalTest show={show} close={close}>
                <div className='h-10rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                    <div className='border-b' />
                <div className="p-5">
                    <div className='text-3xl font-semibold text-night text-left'>Envoyer mon dossier</div>
                    <div className='pt-2 text-md font-normal text-gray-500 text-left'>Communiquez avec vos correspondants via la plateforme afin de sécuriser et de protéger vos messages.</div>

                    <div className='pt-8 flex justify-start'>
                        <Button onClick={close} theme={'black'}>Candidater</Button>
                    </div>
                </div>
            </ModalTest>
        </>
    )
}