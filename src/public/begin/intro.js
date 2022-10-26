import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FiChevronRight } from 'react-icons/fi'
import HostDataServices from '../../services/HostData.services';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext'

export default function Page() {
    const navigate = useNavigate()
    const { currentUser } = useContext(UserContext)

    const [ test, setTest ]= useState({owner: currentUser.uid, ending: false})

    const createHost = () => {
        HostDataServices.add(test).then((e) => navigate(`/begin/${e.id}/property-type-group`))
    }


    const [ hosts, setHosts ] = useState()
    useEffect(()=> {
        HostDataServices.getsWhere({setHosts}, "owner", currentUser.uid)
    }, [])

    return (
        <>
            <Begin title={"Créer un logement"} topBar={true} bottomBar={false}>
                

                <div className='flex flex-col justify-between pt-10 pb-20 px-44 animate-showin h-full overflow-y-auto'>
                    <div>
                        <div>
                            <div className="text-gray-gray-plus text-normaly font-medium text-2xl pb-4">Créez une nouvelle annonce</div>
                        </div>
                        <div className="grid grid-flow-row gap-3">
                            <button onClick={createHost} className='px-8 py-6 border-gray bg-white hover:bg-gray-100/50 rounded-xl border hover:border-black flex items-center'>
                                <div className='grow flex'>
                                    <div className="justify-self-start text-gray-gray-plus text-normaly font-medium text-lg">
                                            Créez une nouvelle annonce
                                    </div>
                                </div>
                                <div>
                                    <FiChevronRight size={30} />
                                </div>
                            </button>
                        </div>

                        <div className='pt-6'>
                            <div className="text-gray-gray-plus text-normaly font-medium text-2xl pb-4">Annonce pas terminé</div>
                        </div>
                        <div className="grid grid-flow-row gap-3">
                            {hosts && hosts.map((loc) => 
                                <button onClick={()=>navigate(`/begin/${loc.id}/property-type-group`, {state:{host: loc}})} className='px-8 py-6 border-gray bg-white hover:bg-gray-100/50 rounded-xl border hover:border-black flex items-center justify-between'>
                                    <div className='flex flex-col items-start'>
                                        <div className="font-medium text-lg">
                                            <div className='flex dot-separator-6'>
                                                {loc.group ? <span>{loc.group}</span> : <span>Sans informations</span>} 
                                                {loc.type && <span>{loc.type}</span>}
                                            </div>     
                                        </div>
                                                {loc.rooms || loc.chambers || loc.sdb ? 
                                                    <div className='flex dot-separator-6 text-sm font-medium text-gray-500'>
                                                        {loc.rooms ? <span>Pièces {loc.rooms}</span> : undefined}
                                                        {loc.chambers ? <span>Chambres {loc.chambers}</span> : undefined}
                                                        {loc.sdb ? <span>Salles de bain {loc.sdb}</span> : undefined}
                                                    </div>
                                                : undefined}

                                    </div>
                                    <div>
                                        <FiChevronRight size={30} />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className='card lg:card-side card-bordered bg-gray-100'>
                            <div className='card card-body items-stretch'>
                                <div className="flex-none text-black font-medium text-3xl leading-8">
                                Vous avez besoin d'aide pour votre annonce ?
                                </div>
                                <div className="grow text-normaly font-normal text-sm pt-3">
                                Bénéficiez gratuitement de conseils personnalisés et de l'aide d'hôtes expérimentés.
                                </div>
                                <button className="flex-none self-start rounded-md bg-gray-plus bg-black text-white font-semibold text-sm py-2 px-4">
                                    Discutez avec un Superhôte
                                </button>
                            </div>
                            <div className="w-72">
                                <img src="https://a0.muscache.com/im/pictures/d5033e5a-d457-4dd6-aa41-2d588bea7657.jpg"></img>
                            </div> 
                        </div>
                    </div>

                </div>

            </Begin>
        </>
    )
} 


const GetWhere = ({loc}) => {

}
