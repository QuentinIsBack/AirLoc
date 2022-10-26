import { useState } from 'react'
import {Begin} from '../../components/card/begin'

export default function Page() {

    const maxStep = 7

    const [step, setStep] = useState(1);

    const [ home, sethome ] = useState({
        title: "Logement de Standing T2 dans le centre de Nantes",
        description: "Passez un agréable séjour dans cet hébergement confortable.",
    })

    switch(step) {
        case 1: {
            return ( <>{ TypeHome({step, setStep}, maxStep) }</> )
        }
        case 2: {
            return ( <>{ Title({ step, setStep, home, sethome }, maxStep) }</> )
        }
        case 3: {
            return ( <>{ Description({ step, setStep, home, sethome }, maxStep) }</> )
        }
        default: {
            break;
        }
    }

} 

const TypeHome = ({step, setStep}, maxStep) => {
    const onNext = () => {
        setStep(2)
    }
    const onPrev = () => {
        
    }
    return (
        <>
            <Begin title={"Créer un logement"}  onNext={onNext} onPrev={onPrev} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>

            </Begin>
        </>
    )
}

const Title = ({step, setStep, home, sethome}, maxStep) => {

    const onNext = () => {
        setStep(step+1)
    }
    const onPrev = () => {
        setStep(step-1)
    }

    const handleChange = ({currentTarget}) => {
        if(currentTarget.value.length <= 50){
            sethome({...home, title: currentTarget.value});
            console.log(home)
        }
    };

    return (
        <>
            <Begin title={"Créer un logemfrgsent"}  onNext={onNext} onPrev={onPrev} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                
                    <div className='animate-showin px-48 w-full flex items-center h-full'>
                        <div className='pb-10 w-full'>
                            <div className="font-semibold text-2xl pb-6">Donnez-lui un titre</div>
                            <div>
                                <textarea  id='name' name='name' onChange={handleChange} className="px-5 py-4 focus:outline-none ring-offset-2 ring-2 ring-gray-300 focus:ring-black textarea w-full font-medium text-xl text-gray-800 h-40" defaultValue={home.title}></textarea>
                                <div className="pt-2 text-sm text-gray-500 font-bold">{home.title.length}/50</div>
                            </div>
                        </div>
                    </div>
                
            </Begin>
        </>
    )
}

const Description = ({step, setStep, home, sethome}, maxStep) => {

    const onNext = () => {
        setStep(step+1)
    }
    const onPrev = () => {
        setStep(step-1)
    }

    const handleChange = ({currentTarget}) => {
        if(currentTarget.value.length <= 50){
            sethome({...home, description: currentTarget.value});
            console.log(home)
        }
    };

    return (
        <>
            <Begin title={"Créer un logemfrgsent"}  onNext={onNext} onPrev={onPrev} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                
                    <div className='animate-showin px-48 w-full flex items-center h-full'>
                        <div className='pb-10 w-full'>
                            <div className="font-semibold text-2xl pb-6">Créez votre description</div>
                            <div>
                                <textarea id='description' name='description' onChange={handleChange} className="px-5 py-4 focus:outline-none ring-offset-2 ring-2 ring-gray-300 focus:ring-black textarea w-full font-medium text-xl text-gray-800 h-40" defaultValue={home.description}></textarea>
                                <div className="pt-2 text-sm text-gray-500 font-bold">{home.description.length}/500</div>
                            </div>
                        </div>
                    </div>
                
            </Begin>
        </>
    )
}