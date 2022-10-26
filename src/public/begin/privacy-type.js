import { useNavigate, useLocation } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FiChevronRight } from 'react-icons/fi'
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import { TabTitle } from '../../services/TabTitle';

export default function Page() {
    const navigate = useNavigate()


    const step = 3
    const maxStep = 7

    const onNext = () => {

    }

    const onPrev = () => {
        
    }

    const listType = [
        {name: 'Un logement entier'}, 
        {name: 'Une chambre privé'}, 
        {name: 'Une chambre partagé'}, 
    ]

    const [selected, setSelected] = useState(listType[0])


    return (
        <>
            <Begin title={"Quel type de logement sera à la disposition des locataires ?"} onNext={()=>navigate('/begin/floor-plan', {state:{select: selected}})}  onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                

                <div className='flex flex-col justify-center items-center py-10 px-64 animate-showin h-full overflow-y-auto'>
                    <div className="grid grid-flow-row gap-3 w-full">

                        <RadioGroup value={selected} onChange={setSelected}>
                            <div className="space-y-4">
                                {listType.map((plan) => (
                                <RadioGroup.Option key={plan.name} value={plan} className={({ active, checked }) =>
                                    `${ active ? 'outline-2 outline-black bg-gray-100/50' : '' }
                                    ${ checked ? 'outline-2 outline-black bg-gray-100/50 ' : '' }
                                        px-8 py-6 cursor-pointer border-gray bg-white rounded-xl outline outline-gray-200 hover:outline-2 hover:outline-black flex items-center w-full duration-100 animation`
                                    } >
                                    {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="w-full">
                                                <RadioGroup.Label as="p" className={`w-full font-semibold text-lg`} >
                                                    <div>{plan.name}</div>
                                                </RadioGroup.Label>
                                            </div>
                                        </div>
                                    </>
                                    )}
                                </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>

                    </div>
                </div>

            </Begin>
        </>
    )

} 
