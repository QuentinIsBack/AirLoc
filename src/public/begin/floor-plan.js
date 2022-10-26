import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FiChevronRight } from 'react-icons/fi'
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import Page from '../../mockup/page';
import { Incrementor } from '../../components/incrementor/incrementor';
import useDocumentTitle from '../../services/TabTitle';
import HostDataServices from '../../services/HostData.services';

export default function Application(){

    useDocumentTitle('Saissisez des informations sur le logement - Airloc')

    const navigate = useNavigate()
    const location = useLocation();
    const { id } = useParams();

    const step = 4
    const maxStep = location.state.maxStep

    const [ rooms, setRooms ] = useState(1)
    const [ chambers, setChambers ] = useState(1)
    const [ sdb, setSdb ] = useState(1)
    
    const [ floor, setFloor ] = useState({rooms, chambers, sdb})

    const onNext = () => {
        HostDataServices.update(id, floor);
        navigate(`/begin/${id}/amenities`, {state:{maxStep: maxStep}})
    }




    return(
        <>
                <Begin title={"Quelques détails essentiel sur votre logement ?"} onNext={onNext} onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                    
                    <div className='flex flex-col items-center justify-center py-10 px-64 animate-showin h-full overflow-y-auto'>

                        <div className='w-full space-y-10'>

                            <Incrementor name={"Pièces"} onAdd={()=>setRooms(rooms+1)} onRemove={()=>setRooms(rooms-1)} value={rooms}/>
                            <Incrementor name={"Chambres"} onAdd={()=>setChambers(chambers+1)} onRemove={()=>setChambers(chambers-1)} value={chambers} />
                            <Incrementor name={"Salle de bain"} onAdd={()=>setSdb(sdb+1)} onRemove={()=>setSdb(sdb-1)} value={sdb}/>

                        </div>

                    </div>

                </Begin>
        </>
    )

}