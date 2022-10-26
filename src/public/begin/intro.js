import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FiChevronRight } from 'react-icons/fi'

export default function Page() {
    const navigate = useNavigate()

    const step = 1
    const maxStep = 7


    const onNext = () => {

    }

    const onPrev = () => {
        
    }

    return (
        <>
            <Begin title={"Créer un logemfrgsent"} onPrev={onPrev} topBar={true} bottomBar={false} progressPercentage={(step / maxStep)*100}>
                

                <div className='flex flex-col justify-between pt-10 pb-20 px-44 h-full animate-showin'>
                    <div>
                        <div>
                            <div className="text-gray-gray-plus text-normaly font-medium text-2xl pb-4">Créez une nouvelle annonce</div>
                        </div>
                        <div className="grid grid-flow-row gap-3">
                            <div onClick={()=>navigate('/begin/property-type-group')} className='px-8 py-6 border-gray bg-white hover:bg-gray-100/50 rounded-xl border hover:border-black flex items-center'>
                                <div className='grow flex'>
                                    <a className="justify-self-start text-gray-gray-plus text-normaly font-medium text-lg">
                                            Créez une nouvelle annonce
                                    </a>
                                </div>
                                <div>
                                    <FiChevronRight size={30} />
                                </div>
                            </div>
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
