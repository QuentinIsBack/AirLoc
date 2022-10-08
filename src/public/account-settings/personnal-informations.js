import React, { useContext } from 'react';  
import { useNavigate } from 'react-router-dom';

// Componeents
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { EditSettings } from '../../components/modal/EditSetting';
import { InputFloating } from '../../components/input/inputfloating';

// Firebase
import { UserContext } from '../../context/UserContext';

// Icons
import { FaRegAddressCard, FaShieldAlt, FaEuroSign, FaRegBell, FaUnlock, FaGlobeEurope, FaPlane, FaTools, FaRegCreditCard } from "react-icons/fa";
import { FaLock, FaShoppingBag, FaEye } from "react-icons/fa";

export default function Page() {

    const { User } = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <>  
            <NavBar />

            <div className={`px-20 2xl:px-96 mx-10 mt-20 my-10`}>
                <div className='text-3xl font-semibold'>Informations Personnelles</div>
            </div>

            <div className={`px-20 2xl:px-96 mx-10 mb-20`}>
              <div class="grid grid-flow-row-dense grid-cols-3 gap-5">
                <div class="col-span-2 pr-20">

                  <EditSettings
                    name={"Nom légal"} 
                    message={(User.firstname ? User.firstname+" " : " ") + (User.lastname ? User.lastname : "")}
                    description={"C'est le nom qui figure sur votre document d'identité, à savoir votre permis ou votre passeport, par exemple."}
                    theme={'cyan'}
                  >
                    <div className='flex space-x-5'>
                      <InputFloating id={'firstname'} type={'text'} name={'Nom'} placeholder={'Nom'} />
                      <InputFloating id={'lastname'} type={'text'} name={'Prénom'} placeholder={'Prénom'} />
                    </div>
                  </EditSettings>

                  <div className='border-b my-5' />

                  <EditSettings
                    name={"Addresse email"} 
                    message={User.email ? User.email+" " : " "}
                    description={"C'est le nom qui figure sur votre document d'identité, à savoir votre permis ou votre passeport, par exemple."}
                    theme={'cyan'}
                  >
                    <div className='flex space-x-5'>
                      <InputFloating id={'email'} type={'email'} name={'Adresse email'} placeholder={'Adresse email'} />
                    </div>
                  </EditSettings>

                  <div className='border-b my-5' />

                  <EditSettings
                    name={"Date de naissance"} 
                    message={(User.firstname ? User.firstname+" " : " ") + (User.lastname ? User.lastname : "")}
                    description={"C'est la date qui figure sur votre document d'identité, à savoir votre carte d'identité ou votre passeport, par exemple."}
                    theme={'cyan'}
                    >
                    <div className='flex space-x-5'>
                      <InputFloating id={'day'} type={'text'} name={'Jour'} placeholder={'Jour'} />
                      <InputFloating id={'month'} type={'text'} name={'Mois'} placeholder={'Mois'} />
                      <InputFloating id={'year'} type={'text'} name={'Année'} placeholder={'Année'} />
                    </div>
                  </EditSettings>

                </div>
                <div class="col-span-1">
                  <div className='h-fit border rounded-xl p-5'>
                    <div>
                      <FaLock className='fill-cyan-600' size={25}/>
                      <div className='pt-3 text-xl text-stone-700 font-semibold'>Pourquoi mes informations se sont-elles pas affichées ici ?</div>
                      <div className='pt-3 text-sm text-stone-500 font-normal'>Nous masquons certains détails de votre compte afin de protéger votre identité.</div>
                    </div>
                    <div className='border-b my-7' />
                    <div>
                      <FaShoppingBag className='fill-cyan-600' size={25}/>
                      <div className='pt-3 text-xl text-stone-700 font-semibold'>Quelles informations peuvent être modifiées ?</div>
                      <div className='pt-3 text-sm text-stone-500 font-normal'>Les informations utilisées par AirLoc pour vérifier votre identité ne peuvent être modifiées. Les coordonnées et certaines données personnelles peuvent être modifiées, mais nous pourrions vous demander de vérifier votre identité la prochaine fois que vous réservez un logement ou créez une annonce.</div>
                    </div>
                    <div className='border-b my-7' />
                    <div>
                      <FaEye className='fill-cyan-600' size={25}/>
                      <div className='pt-3 text-xl text-stone-700 font-semibold'>Lesquelles de mes informations sont communiquées à des tiers ?</div>
                      <div className='pt-3 text-sm text-stone-500 font-normal'>AirLoc ne communique les coordonnées aux propriétaires et aux locataires qu'après la confirmation d'un dossier.</div>
                    </div>
                  </div>
                </div>
              </div>


            </div>


            <Footer />
        </>
    )
} 