import React, { useContext } from 'react';  
import { useNavigate } from 'react-router-dom';

// Components
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { Button } from '../../components/button/button';
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

                  <div>
                    <div className='pt-2 text-2xl text-gray-700 font-semibold'>Vos paiements</div>
                    <div className='pt-2 text-md text-gray-500 font-normal'>Faites le suivi de tous vos paiements et remboursements.</div>
                    <Button additionnal={"mt-5"} theme={"black"}>Gérez les paiements</Button>
                  </div>

                  <div className='pt-16'>
                    <div className='pt-2 text-2xl text-gray-700 font-semibold'>Modes de paiement</div>
                    <div className='pt-2 text-md text-gray-500 font-normal'>Ajoutez un mode de paiement à l'aide d enotre système de paiement sécurisé, puis commencez à organiser votre prochaine location.</div>
                    <Button additionnal={"mt-5"} theme={"black"}>Ajouter un mode de paiement</Button>
                  </div>

                  <div className='pt-16'>
                    <div className='pt-2 text-2xl text-gray-700 font-semibold'>Crédit cadeau AirLoc</div>
                    <div className='pt-2 text-md text-gray-500 font-normal'>Utilisez une carte cadeau et consultez le montant de votre solde. <span className='text-gray-700 font-semibold underline'>Voir contitions</span></div>
                    <div className='border-b my-5' />
                    <div className='flex flex-row justify-between items-center'>
                      <div className='text-md text-gray-900 font-normal'>Solde actuel</div>
                      <div className='text-md text-gray-900 font-semibold'>0€</div>
                    </div>
                    <div className='border-b my-5' />
                    <Button theme={"black"} >Ajouter une carte cadeau</Button>
                  </div>

                  <div className='pt-16'>
                    <div className='pt-2 text-2xl text-gray-700 font-semibold'>Coupons</div>
                    <div className='pt-2 text-md text-gray-500 font-normal'>Ajoutez un coupon et faites des économies sur votre prochaine location.</div>
                    <div className='border-b my-5' />
                    <div className='flex flex-row justify-between items-center'>
                      <div className='text-md text-gray-900 font-normal'>Vos coupons</div>
                      <div className='text-md text-gray-900 font-semibold'>0</div>
                    </div>
                    <div className='border-b my-5' />
                    <Button theme={"black"} >Ajouter une coupon</Button>
                  </div>

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