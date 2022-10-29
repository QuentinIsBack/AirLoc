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
import { BigIncrementor, Incrementor } from '../../components/incrementor/incrementor';
import useDocumentTitle from '../../services/TabTitle';
import { IoRemoveOutline, IoAddOutline } from "react-icons/io5";
import HostDataServices from '../../services/HostData.services';
import Map from 'react-map-gl';
import { Button } from '../../components/button/button';

export default function Application(){

    useDocumentTitle('Fixez un prix par mois - Airloc')

    const navigate = useNavigate()
    const location = useLocation();
    const { id } = useParams();

    const step = 9
    const maxStep = location.state.maxStep

    const onNext = () => {
  
    }

    const defaultProps = {
        longitude: -1.546979,
        latitude: 47.220220,
        zoom: 15,
    };


    return(
        <>
                <Begin title={"À présent, fixez votre prix"} onNext={onNext} onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                    <div className='animate-showin w-full h-full'>
                        <Map mapboxAccessToken="pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg" initialViewState={defaultProps} mapStyle="mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q">
                            <div className='absolute bg-black/10 h-full w-full z-10 flex justify-center'>
                                <div className='bg-white rounded-2xl h-20rem w-20rem mt-20 p-4'>
                                    <div className='font-medium text-2xl'>
                                        <Button>C'est exact</Button>
                                    </div>
                                </div>
                            </div>
                        </Map>
                    </div>
                </Begin>
        </>
    )

}