import { useNavigate, useLocation } from 'react-router-dom';
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
import { BigIncrementor, Incrementor } from '../../components/incrementor/incrementor';
import useDocumentTitle from '../../services/TabTitle';
import { IoRemoveOutline, IoAddOutline } from "react-icons/io5";

export default function Application(){

    useDocumentTitle('Fixez un prix par mois - Airloc')

    const navigate = useNavigate()

    const step = 7
    const maxStep = 7

    const onNext = () => {

    }
    let [price, setPrice] = useState(650)

    const RemovePrice = () => { 
        setPrice(price - 10)
    }


    const AddPrice = () => {
        setPrice(price + 10)
    }

    const todoChange = (e) => {

        if (e.target.value == '') {
            setPrice(0)
        } else {
            const val = parseInt(e.target.value)
            setPrice(val)
        }

    }


    return(
        <>
                <Begin title={"À présent, fixez votre prix"} onNext={onNext} onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                    <div className='flex flex-col justify-center px-44 py-10 animate-showin w-full h-full overflow-y-auto'>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row items-center space-x-8'>

                            <BigIncrementor id={'price'} name={'price'} onChange={(e)=>todoChange(e)} value={price} onAdd={AddPrice} onRemove={RemovePrice} placeholder={'00€'} />

                        </div>
                        <div className="font-base text-center text-md pt-3">par mois</div>

                        
                        <div className="font-base text-xl pt-8 w-96">Pour rappel, le prix de logements comme le vôtre varie généralement de 450€ à 720€.</div>

                        <div className='pt-20 w-10/12'>
                            <div className="p-4 text-center rounded-lg border border-gray-300 ">
                                Offrez une réduction de 20 % à vos 3 premiers voyageurs pour obtenir des réservations plus rapidement. En savoir plus.
                            </div>
                        </div>

                    </div>
                        

                    </div>
                </Begin>
        </>
    )

}