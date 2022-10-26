import { useNavigate, useLocation } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FiChevronRight } from 'react-icons/fi'
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import Page from '../../mockup/page';


export default function Application(){

    const navigate = useNavigate()
    const location = useLocation();

    const step = 2
    const maxStep = 7

    console.log(location.state.select)

    const listType = location.state.select.subType


    const [selected, setSelected] = useState(listType[0])

    if (selected <= 1) {
        navigate(-1)
    }

    return(
        <>
            <Page title={'trest'}>
                <Begin title={"Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?"} onNext={()=>navigate('/begin/privacy-type')} onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                    
                    <div className='flex flex-col items-center py-10 px-64 h-full animate-showin'>
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
                                                    <RadioGroup.Description as="span" className={`font-base text-sm text-gray-500`} >
                                                        {plan.description}
                                                    </RadioGroup.Description>
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
            </Page>
        </>
    )

}