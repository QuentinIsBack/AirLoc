import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FiChevronRight } from 'react-icons/fi'
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import Page from '../../mockup/page';
import HostDataServices from '../../services/HostData.services';


export default function Application(){

    const navigate = useNavigate()
    const location = useLocation();
    const { id } = useParams();

    const step = 2
    const maxStep = location.state.maxStep

    const host = location.state.host
    const listType = location.state.select.subType

    var found = listType.find(e => e.name === host.type);
    console.log(found);


    const [selected, setSelected] = useState(host.type ? found !== 'undefined' && found : listType[0])

    if (selected <= 1) {
        navigate(-1)
    }

    const onNext = () => {
        HostDataServices.update(id, {'type': selected.name});
        navigate(`/begin/${id}/privacy-type`, {state:{select: selected, maxStep: maxStep}})    
    }

    return(
        <>
            <Page title={'trest'}>
                <Begin title={"Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?"} onNext={onNext} onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                    
                    <div className='flex flex-col items-center justify-start py-10 px-64 animate-showin h-full overflow-y-auto'>
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