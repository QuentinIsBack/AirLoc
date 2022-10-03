import React, { useState, useContext } from 'react';  
import { RadioGroup } from '@headlessui/react'

// Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { FaHouseUser, FaFolder } from 'react-icons/fa';
import {FiBook} from 'react-icons/fi'
import {IoBriefcaseOutline, IoEyeOffOutline, IoBusinessOutline, IoPersonOutline, IoFootstepsOutline, IoAdd,IoPerson} from 'react-icons/io5'
import { RiBilliardsLine, RiParkingLine, RiWindyFill, RiHome2Fill, RiCheckFill, RiStarLine, RiStarFill, RiShieldCheckLine } from 'react-icons/ri';
import { ModalTest } from '../../components/modal/ModalTest';
import { Button } from '../../components/button/button';

// Firebase
import{ db } from "../../firebase.config"
import { doc, getDoc, onSnapshot, deleteDoc, collection, updateDoc, deleteField} from "firebase/firestore";
import { UserContext } from '../../context/UserContext';
import { InputFloating } from '../../components/input/inputfloating';



const situationList = [
    {
        name: "Étudiant",
        icon: <FiBook strokeWidth={1.5} size={30}  />,
    },
    {
        name: "Salarié",
        icon: <IoBriefcaseOutline strokeWidth={1.5} size={30}  />
    },
    {
        name: "Fonctionnaire",
        icon: <IoBusinessOutline strokeWidth={1.5} size={30}  />
    },
    {
        name: "Indépendant",
        icon: <IoPersonOutline strokeWidth={1.5} size={30}  />
    },
    {
        name: "Retraité",
        icon: <IoFootstepsOutline strokeWidth={1.5} size={30}  />
    },
    {
        name: "Sans emploi",
        icon: <IoEyeOffOutline strokeWidth={1.5} size={30}  />
    }
]
const contratList = [
    {
        name: "CDI",
        icon: <FiBook strokeWidth={1.5} size={30}  />,
    },
    {
        name: "CDD",
        icon: <IoBriefcaseOutline strokeWidth={1.5} size={30}  />
    },
    {
        name: "Stagiaire",
        icon: <IoBusinessOutline strokeWidth={1.5} size={30}  />
    },
    {
        name: "Alternant",
        icon: <IoPersonOutline strokeWidth={1.5} size={30}  />
    },
    {
        name: "Interimaire",
        icon: <IoPersonOutline strokeWidth={1.5} size={30}  />
    }
]

const typeContratList = ["Temps pleins", "Temps partiel"]
const trainingList = ["Oui", "Non"]

export default function Page() {
    const padding = `px-80`;

    const [selectedSituation, setSelectedSituation] = useState(situationList[0])
    const [selectedContrat, setSelectedContrat] = useState(contratList)
    const [selectedType, setSelectedType] = useState()
    const [selectedTraining, setSelectedTraining] = useState()
    
    const [modalSituation, setModalSituation] = useState(false);
    const [modalGarant, setModalGarant] = useState(false);

    function openModalGarant(){
        setModalGarant(true)
    }
    function closeModalGarant(){
        setModalGarant(false)
    }

    const { User } = useContext(UserContext)

    const [garant, setGarant] = useState([]);

    return (
        <>  
            <NavBar />
            <SituationModal show={modalSituation} close={()=>setModalSituation(false)} />
            <GarantModal show={modalGarant} close={()=>closeModalGarant()} garant={garant} />


            <div className={`bg-gradient-to-r from-indigo-800 to-pink-600 ${padding} py-20`}>
                <div className='text-4xl font-semibold text-white text-left'>Aujourd'hui,</div>
                <div className='pt-2 text-md font-normal text-white text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
            </div>

            {/* Mon Espace Locataire */}
            <div className={`${padding} py-14 space-y-3`}>
                <div className='text-4xl font-semibold text-night text-left'>Mon espace locataire</div>
                <div className='text-md font-normal text-gray-500 text-left'>Avant de pouvoir commencer à candidater, vous devez vous créer un dossier locataire.</div>
                <div className='pt-4 grid grid-cols-4 gap-5'>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8771fd64507519.5ad4edb4b9968.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Complétez votre dossier locataire</div>
                        </div>
                    </a> 
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/63719799566833.5ef568ce83b51.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Candidatez à des logements en 1 clic</div>
                        </div>
                    </a>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/bf880164507519.5ad4ed2d62190.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Signez votre bail numériqumnt</div>
                        </div>
                    </a>
                    <a href='#' className='shadow-dropdown rounded-xl bg-black overflow-hidden'>
                        <img className='h-10rem w-full object-cover object-center' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8771fd64507519.5ad4edb4b9968.jpg" alt="blog" />
                        <div className='p-6'>
                            <div className='text-lg font-semibold text-white'>Complétez votre dossier locataire</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Mon status */}
            <div className={`${padding} pt-14 pb-6 space-y-3`}>
                <div className='text-3xl font-semibold text-night text-left'>Ma situation</div>
                <div className='text-md font-normal text-gray-500 text-left'>Afin que votre future baileur puisse mieux vous connaitre et sélectionné votre profil, vous devez ajouter votre situation.</div>

                        <RadioGroup value={selectedSituation} onChange={setSelectedSituation}>
                            <div className="pt-4 grid grid-cols-3 gap-5 w-3/4">
                                {situationList.map((plan) => (
                                    <RadioGroup.Option key={plan.name} value={plan} className={({ active, checked }) => `${ checked ? 'bg-gray-100/50 border-black border' : 'border-gray border' } transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white py-3 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black` } >
                                        {({ active, checked }) => (
                                            <>
                                                <RadioGroup.Label as="p" className={`font-medium`} >
                                                    <div className="flex flex-col justify-center items-center w-full font-medium text-lg">
                                                        <div>
                                                            {plan.icon}
                                                        </div>
                                                        <div className='pt-2'>
                                                            {plan.name}
                                                        </div>
                                                    </div>
                                                </RadioGroup.Label>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>

            </div>

            {/* Mon emploi */}
            {selectedSituation.name !=  "Sans emploi" ?
                <div className={`${padding} pt-14 pb-6 space-y-3`}>
                    <div className='text-3xl font-semibold text-night text-left'>Mon emploi</div>
                    <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>

                    <RadioGroup value={selectedContrat} onChange={setSelectedContrat}>
                        <div className="pt-4 grid grid-cols-3 gap-5 w-3/4">
                            {contratList.map((plan) => (
                                <RadioGroup.Option key={plan.name} value={plan} className={({ active, checked }) => `${ checked ? 'bg-gray-100/50 border-black border' : 'border-gray border' } transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white py-3 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black` } >
                                    {({ active, checked }) => (
                                        <>
                                            <RadioGroup.Label as="p" className={`font-medium`} >
                                                <div className="flex flex-col justify-center items-center w-full font-medium text-lg">
                                                    <div>
                                                        {plan.name}
                                                    </div>
                                                </div>
                                            </RadioGroup.Label> 
                                        </>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>

                    <div className={`${selectedContrat == contratList[0] ? "visible animate-showin" : "hidden"}`}>
                        <div className='pt-6 text-xl font-semibold text-night text-left'>Type de contrat ?</div>
                        <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
                        <RadioGroup value={selectedType} onChange={setSelectedType}>
                            <div className="pt-4 grid grid-cols-3 gap-5 w-3/4">
                                {typeContratList.map((plan) => (
                                    <RadioGroup.Option key={plan} value={plan} className={({ active, checked }) => `${ checked ? 'bg-gray-100/50 border-black border' : 'border-gray border' } transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white py-3 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black` } >
                                        {({ active, checked }) => (
                                            <>
                                                <RadioGroup.Label as="p" className={`font-medium`} >
                                                    <div className="flex flex-col justify-center items-center w-full font-medium text-lg">
                                                        <div>
                                                            {plan}
                                                        </div>
                                                    </div>
                                                </RadioGroup.Label>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>

                        <div className={`${selectedType == typeContratList[0] ? "visible animate-showin" : "hidden"}`}>
                            <div className='pt-6 text-xl font-semibold text-night text-left'>Êtes-vous en période d'essaie ?</div>
                            <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
                            <RadioGroup value={selectedTraining} onChange={setSelectedTraining}>
                                <div className="pt-4 grid grid-cols-3 gap-5 w-3/4">
                                    {trainingList.map((plan) => (
                                        <RadioGroup.Option key={plan} value={plan} className={({ active, checked }) => `${ checked ? 'bg-gray-100/50 border-black border' : 'border-gray border' } transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white py-3 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black` } >
                                            {({ active, checked }) => (
                                                <>
                                                    <RadioGroup.Label as="p" className={`font-medium`} >
                                                        <div className="flex flex-col justify-center items-center w-full font-medium text-lg">
                                                            <div>
                                                                {plan}
                                                            </div>
                                                        </div>
                                                    </RadioGroup.Label>
                                                </>
                                            )}
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>

                            <div className={`${selectedTraining == trainingList[0] || selectedTraining == trainingList[1] ? "visible animate-showin" : "hidden"}`}>
                                <div className='pt-6 text-xl font-semibold text-night text-left'>Date de début ?</div>
                                <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
                                <div className='pt-4 w-1/4'>
                                    <InputFloating name={"Date de début"} placeholder={"__ /__ /____"} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            : undefined}

            {/* Mes garants */}
            <div className={`${padding} pt-14 pb-6 space-y-3`}>
                <div className='text-3xl font-semibold text-night text-left'>Mes Garants</div>
                <div className='text-md font-normal text-gray-500 text-left'>Augmentez-vos chance qu'un propriétaire accepte votre dossier en ajoutant un ou des garants.</div>





                <div className="pt-4 grid grid-cols-4 gap-5 w-3/4">




                    {Object.keys(User.folder.cautions).map(function(key, index) {
                        return (
                            <>
                                <button onClick={()=>{setModalGarant(true); setGarant(key)}} className='relative focus:outline-none border border-gray h-full rounded-lg transition transform hover:-translate-y-1 hover:bg-gray-100/50 hover:border-black'>
                                    <div className='flex flex-col justify-center items-center p-2'>
                                        <div>
                                            <IoPerson strokeWidth={1.5} size={30}  />
                                        </div>
                                        <div className='pt-3 space-y-1'>
                                            <div className={`flex items-center justify-center w-full`}> 
                                                <div className='rounded-full bg-green-200 text-xs w-fit px-2 py-0.5'>
                                                    Validé
                                                </div>
                                            </div>
                                            <div className='font-medium text-md'> 
                                                {User.folder.cautions[key].firstname} {User.folder.cautions[key].lastname}
                                            </div>
                                            <div className='text-sm'>
                                                {User.folder.cautions[key].salary}€ /mois
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </>

                        )
                    })}

                    <button onClick={()=> setModalSituation(true)} className='relative focus:outline-none border border-gray h-full rounded-lg transition transform hover:-translate-y-1 hover:bg-gray-100/50 hover:border-black'>
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <IoAdd strokeWidth={1.5} size={30}  />
                            </div>
                            <div className='pt-2'>
                                Ajouter un garant
                            </div>
                        </div>
                    </button>
                </div>

            </div>

            <Footer formatage={'sticky'} />
        </>
    )
} 

const SituationModal = ({show, close}) => {
    const [selected, setSelected] = useState(situationList[0])
    return (
        <>
            <ModalTest show={show} close={close} size={'max-w-2xl'}>
                
                        <RadioGroup value={selected} onChange={setSelected}>
                            <div className='h-10rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                            <div className='p-5 space-y-3'>
                                <div className='text-3xl font-semibold text-night text-left'>Ajouter une situation</div>
                                <div className='text-md font-normal text-gray-500 text-left'>Augmentez-vos chance qu'un propriétaire accepte votre dossier en ajoutant un ou des garants.</div>

                                <div className="pt-4 grid grid-cols-3 gap-5">
                                    {situationList.map((plan) => (
                                        <RadioGroup.Option key={plan.name} value={plan} className={({ active, checked }) => `${ checked ? 'bg-gray-100/50 border-black border' : 'border-gray border' } transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white py-3 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black` } >
                                            {({ active, checked }) => (
                                                <>
                                                    <RadioGroup.Label as="p" className={`font-medium`} >
                                                        <div className="flex flex-col justify-center items-center w-full font-medium text-lg">
                                                            <div>
                                                                {plan.icon}
                                                            </div>
                                                            <div className='pt-2'>
                                                                {plan.name}
                                                            </div>
                                                        </div>
                                                    </RadioGroup.Label>
                                                </>
                                            )}
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </div>
                        </RadioGroup>

            </ModalTest>
        </>
    )
}

const GarantModal = ({show, close, garant}) => {
    const { User, currentUser } = useContext(UserContext)
    console.log(`users/`+currentUser.uid+'/folder/cautions/'+garant)

    const delDoc = async () => {

        const userRef = doc(db, `users/+${currentUser.uid}/folder/cautions/userid`);

        await updateDoc(userRef, {
            userid: deleteField()
        });

          close()
    }

    return (
        <>
            <ModalTest show={show} close={close}>
                
                <div className='h-10rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                <div className='p-5 space-y-3'>
                    <div className='text-3xl font-semibold text-night text-left'>Ajouter une situation {garant.firstname ? garant.firstname : undefined}</div>
                    <div className='text-md font-normal text-gray-500 text-left'>Augmentez-vos chance qu'un propriétaire accepte votre dossier en ajoutant un ou des garants.</div>
                    
                    <div className='pt-8 flex justify-between'>
                        <Button onClick={delDoc} theme={'red'}>Supprimer</Button>
                        <Button onClick={close} theme={'green'}>Enregistrer</Button>
                    </div>
                </div>
                
            </ModalTest>
        </>
    )
}