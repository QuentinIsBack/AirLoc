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
import HostDataServices from '../../services/HostData.services';

export default function Application(){

    useDocumentTitle('Donnez un titre à votre logement - Airloc')

    const navigate = useNavigate()
    const location = useLocation();
    const { id } = useParams();

    const step = 6
    const maxStep = location.state.maxStep

    const onNext = () => {
        HostDataServices.update(id, {title: title});
        navigate(`/begin/${id}/description`, {state:{maxStep: maxStep}})    
    }

    let [title, setTitle] = useState('Logement de Standing T2 dans le centre de Nantes')

    const handleChange = ({currentTarget}) => {
        if(currentTarget.value.length <= 50){
            setTitle(currentTarget.value);
        }
    };


    return(
        <>
                <Begin title={"Donnez un nom à votre logement"} onNext={onNext}  onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                    <div className='flex flex-col justify-center px-44 py-10 animate-showin w-full h-full overflow-y-auto'>

                        <div className="font-semibold text-2xl pb-1">Donnez-lui un titre</div>
                        <div className="text-base font-light text-gray-600 pb-6">Le titre de votre annonce doit mettre en valeur ce qui fait la particularité de votre logement. <span className='font-medium text-black underline'>Consulter les consignes relatives au titre de l'annonce.</span></div>
                        <div>
                            <textarea onChange={handleChange} className="animation duration-200 p-4 border-none rounded-xl focus:outline-none ring-gray-400 ring-1 focus:ring-2 focus:ring-black focus:outline-transparent w-full font-medium text-3xl text-gray-800 h-40" value={title}></textarea>
                            <div className="pt-2 text-sm text-gray-500 font-bold">{title.length}/50</div>
                        </div>

                    </div>
                </Begin>
        </>
    )

}