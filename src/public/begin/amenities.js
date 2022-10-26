import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FaSwimmingPool } from 'react-icons/fa'
import { MdOutlineHotTub, MdOutlineKitchen, MdBalcony } from 'react-icons/md'
import { GiBarbecue, GiBrasero, GiChimney, GiWifiRouter } from 'react-icons/gi'
import { CgSmartHomeWashMachine } from 'react-icons/cg'
import { IoWifi, IoTvOutline } from 'react-icons/io5'
import { TbSportBillard, TbParking, TbParkingOff, TbWorldUpload } from 'react-icons/tb'
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import Page from '../../mockup/page';
import { Incrementor } from '../../components/incrementor/incrementor';
import useDocumentTitle from '../../services/TabTitle';

export default function Application(){

    useDocumentTitle('Séléctionnez les équipements - Airloc')

    const navigate = useNavigate()
    const location = useLocation();
    const { id } = useParams();

    const step = 5
    const maxStep = location.state.maxStep

    const onNext = () => {
        //HostDataServices.update(id, floor);
        navigate(`/begin/${id}/title`, {state:{maxStep: maxStep}})
    }

    const [extra, setExtra] = useState({});
    const extraordinary = [
        {name: 'Piscine', icon: <FaSwimmingPool size={30} />}, 
        {name: 'Jacuzzi', icon: <MdOutlineHotTub size={30} />}, 
        {name: 'Barbecue', icon: <GiBarbecue size={30} />}, 
        {name: 'Brasero', icon: <GiBrasero size={30} />}, 
        {name: 'Billard', icon: <TbSportBillard size={30} />}, 
        {name: 'Cheminé', icon: <GiChimney size={30} />}, 
    ]

    const favorite = [
        {name: 'Wifi', icon: <IoWifi size={30} />}, 
        {name: 'Télévision', icon: <IoTvOutline size={30} />}, 
        {name: 'Cuisine', icon: <MdOutlineKitchen size={30} />}, 
        {name: 'Lave-Linge', icon: <CgSmartHomeWashMachine size={30} />}, 
        {name: 'Place de parking privé', icon: <TbParkingOff size={30} />}, 
        {name: 'Place de parking public', icon: <TbParking size={30} />}, 
        {name: 'Fibre', icon: <TbWorldUpload size={30} />}, 
        {name: 'Balcon', icon: <MdBalcony size={30} />}, 
    ]

    const security = [
        {name: 'Détecteur de fumée', icon: <IoWifi size={30} />}, 
        {name: 'Kit de premier secours', icon: <IoTvOutline size={30} />}, 
        {name: 'Détecteur de monoxyde de carbone', icon: <MdOutlineKitchen size={30} />}, 
        {name: 'Extincteur', icon: <CgSmartHomeWashMachine size={30} />}, 
    ]

    return(
        <>
                <Begin title={"Indiquez aux voyageurs quels sont les équipements de votre logement"} onNext={onNext} onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                    <div className='flex flex-col items-center justify-start px-40 py-10 animate-showin h-full overflow-y-auto'>

                        <div className='w-full flex flex-col space-y-10'>

                            <div>
                                <div className='font-semibold text-2xl'>Possédez-vous des équipements hors du commun ?</div>
                                <div className='pt-6 grid grid-cols-3 gap-4 w-full'>
                                    {extraordinary.map((ls) => (
                                        <>
                                            <div className='p-4 text-center flex flex-col space-y-2 h-10rem items-center justify-center rounded-xl outline outline-gray-200 hover:outline-2 hover:outline-black'>
                                                <div>
                                                    {ls.icon}
                                                </div>
                                                <div className='font-medium text-lg'>
                                                    {ls.name}
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className='font-semibold text-2xl'>Qu'en est-il de ces équipements préférés des voyageurs ?</div>
                                <div className='pt-6 grid grid-cols-3 gap-4 w-full'>
                                    {favorite.map((ls) => (
                                        <>
                                            <div className='overflow-hidden p-4 text-center flex flex-col space-y-2 h-10rem items-center justify-center rounded-xl outline outline-gray-200 hover:outline-2 hover:outline-black'>
                                                <div>
                                                    {ls.icon}
                                                </div>
                                                <div className='font-medium text-lg'>
                                                    {ls.name}
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className='font-semibold text-2xl'>Possédez-vous ces équipements de sécurité ?</div>
                                <div className='pt-6 grid grid-cols-3 gap-4 w-full'>
                                    {security.map((ls) => (
                                        <>
                                            <div className={`cursor-pointer overflow-hidden p-4 text-center flex flex-col space-y-2 h-10rem items-center justify-center rounded-xl outline outline-gray-200 hover:outline-2 hover:outline-black`}>
                                                <div>
                                                    {ls.icon}
                                                </div>
                                                <div className='font-medium text-lg'>
                                                    {ls.name}
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </Begin>
        </>
    )

}