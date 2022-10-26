import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Begin } from '../../components/card/begin'
import { FiChevronRight } from 'react-icons/fi'
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import HostDataServices from '../../services/HostData.services';

const listType = [
    {name: 'Appartement', 
        subType: [
            {name: 'Logement meublé', description: 'Un logement loué dans un immeuble résidentiel comprenant plusieurs logements, ou dans un complexe.'},
            {name: 'Logement non meublé', description: 'Un logement loué dans un immeuble résidentiel comprenant plusieurs logements, ou dans un complexe.'},
            {name: 'Colocation', description: 'Un logement dans un immeuble comprenant plusieurs logements ou dans un complexe appartenant aux résidents.'},
            {name: 'Logement en résidence', description: 'Un logement dans un immeuble comprenant plusieurs logements ou dans un complexe appartenant aux résidents.'},
            {name: 'Loft', description: 'Un appartement à aménagement ouvert ou en résidence, qui peut comporter des murets intérieurs.'},
        ]}, 
    {name: 'Maison', 
        subType: [
            {name: 'Logement', description: 'Un logement qui peut être indépendant ou avoir des murs mitoyens.'},
            {name: 'Cabane', description: 'Une maison construite avec des matériaux naturels comme le bois et située dans un cadre naturel.'},
            {name: 'Villa', description: 'Un logement de luxe qui peut avoir des espaces intérieurs et extérieurs, des jardins et des piscines.'},
            {name: 'Maison de ville', description: 'Une maison en rangée ou en terrasse sur plusieurs niveaux avec des murs mitoyens et éventuellement des espaces extérieurs.'},
            {name: 'Cottage', description: "Une maison chaleureuse construite en région rurale, ou près d'un lac ou d'une plage."},
            {name: 'Bungalow', description: 'Une maison de plain-pied avec un grand porche et un toit en pente.'},
            {name: 'Maison en terre', description: 'Un logement construit dans la terre ou fabriqué à partir de matériaux comme le pisé.'},
            {name: 'Péniche', description: "Une maison flottante construite à partir de matériaux similaires à ceux d'une maison sur la terre ferme."},
            {name: 'Hutte', description: 'Une maison faite de bois ou de boue qui peut avoir un toit de chaume.'},
            {name: 'Gîte à la ferme', description: 'Un logement à la campagne où les voyageurs peuvent côtoyer des animaux et la vie agricole.'},
            {name: 'Dôme', description: "Une maison avec un toit en dôme ou de forme sphérique, telle qu'une maison-bulle."},
            {name: 'Chalet', description: 'Une maison en bois avec un toit en pente, populaire pour le ski ou les séjours estivaux.'},
            {name: 'Phare', description: "Une tour près de l'eau qui projette une lumière puissante visible de toute part pour guider les bateaux."},
            {name: 'Cabane de berger', description: "Un tout petit abri équipé de roues qui servait à l'origine à suivre les troupeaux de moutons."},
            {name: 'Tiny house', description: "Une maison individuelle d'une superficie généralement inférieure à 37 mètres carrés."},
            {name: 'Pension', description: 'Une maison avec barbecue et espace commun dans la campagne coréenne.'},
        ]}, 
    {name: 'Garage', 
        subType: [
            {name: 'Appartement', description: 'Un logement loué dans un immeuble résidentiel comprenant plusieurs logements, ou dans un complexe.'},
            {name: 'Appartement en résidence', description: 'Un logement dans un immeuble comprenant plusieurs logements ou dans un complexe appartenant aux résidents.'},
        ]}, 
    {name: 'Logmeent Unique', 
        subType: [
            {name: 'Appartement', description: 'Un logement loué dans un immeuble résidentiel comprenant plusieurs logements, ou dans un complexe.'},
            {name: 'Appartement en résidence', description: 'Un logement dans un immeuble comprenant plusieurs logements ou dans un complexe appartenant aux résidents.'},
        ]}, 
    {name: 'Annexe', 
        subType: [
            {name: 'Appartement', description: 'Un logement loué dans un immeuble résidentiel comprenant plusieurs logements, ou dans un complexe.'},
            {name: 'Appartement en résidence', description: 'Un logement dans un immeuble comprenant plusieurs logements ou dans un complexe appartenant aux résidents.'},
        ]},  
    {name: 'Autre (Bureau, Magasin .. )', 
        subType: [
            {name: 'Appartement', description: 'Un logement loué dans un immeuble résidentiel comprenant plusieurs logements, ou dans un complexe.'},
            {name: 'Appartement en résidence', description: 'Un logement dans un immeuble comprenant plusieurs logements ou dans un complexe appartenant aux résidents.'},
        ]} 
]

export default function Page() {
    const navigate = useNavigate()
    const location = useLocation();
    const { id } = useParams();
    const [ host, setHost ] = useState()
    const [selected, setSelected] = useState()

    const step = 1
    const maxStep = 10


    useEffect(()=> {
        HostDataServices.get(id, {setHost})
    }, [])


    const onNext = () => {
        HostDataServices.update(id, {'group': selected.name});
        navigate(`/begin/${id}/property-type`, {state:{select: selected, maxStep: maxStep}})
    }

    const onPrev = () => {
        
    }




    return (
        <>
            <Begin title={"Quel type de logement allez-vous proposer ?"} onNext={onNext} onPrev={()=>navigate(-1)} topBar={true} bottomBar={true} progressPercentage={(step / maxStep)*100}>
                

                <div className='flex flex-col items-center justify-center py-10 px-64 animate-showin h-full overflow-y-auto'>
                    <div className="grid grid-flow-row gap-3 w-full">

                    <RadioGroup value={selected} onChange={setSelected}>
                        <div className="space-y-4">
                            {listType.map((plan) => (
                            <RadioGroup.Option key={plan.name} value={plan} className={({ active, checked }) =>
                                `${ active ? 'outline-2 outline-black bg-gray-100/50 ' : '' }
                                ${ checked ? 'outline-2 outline-black bg-gray-100/50 ' : '' }
                                    px-8 py-8 cursor-pointer border-gray bg-white rounded-xl outline outline-gray-200 hover:outline-2 hover:outline-black flex items-center w-full duration-100 animation`
                                } >
                                {({ active, checked }) => (
                                <>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center w-full">
                                            <RadioGroup.Label as="p" className={`w-full font-semibold text-lg flex flex-row justify-between`} >
                                                <div>{plan.name}</div>
                                                <div><FiChevronRight size={30} /></div>
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
