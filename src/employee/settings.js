import React, { useContext } from 'react';  
import { useNavigate } from 'react-router-dom';

// Components
import NavBar from '../components/navbar/navbar-employee'
import Footer from '../components/footer/footer'

// Firebase
import { UserContext } from '../context/UserContext';

// Icons
import { FaRegAddressCard, FaShieldAlt, FaEuroSign, FaRegBell, FaUnlock, FaGlobeEurope } from "react-icons/fa";

export default function Page() {
    const { User } = useContext(UserContext)
    const navigate = useNavigate();

    const settings = [
        {
          icon: <FaRegAddressCard size={30}/>,
          name: "Tableau de bord",
          description: "Fournissez des renseignements personnels et indiquez comment nous pouvons vous joindre",
          url: "./employee"
        },
        {
          icon: <FaShieldAlt size={30}/>,
          name: "Connexion et sécurité",
          description: "Mettez à jour votre mot de passe et sécurisez votre compte",
          url: "/"
        },
        {
          icon: <FaEuroSign size={30}/>,
          name: "Paiements et versements",
          description: "Consultez les paiements, les versements, les coupons, les cartes cadeaux et les taxes",
          url: "/"
        },
        {
          icon: <FaRegAddressCard size={30}/>,
          name: "Informations personnelles",
          description: "Fournissez des renseignements personnels et indiquez comment nous pouvons vous joindre",
          url: "/"
        },
        {
          icon: <FaShieldAlt size={30}/>,
          name: "Connexion et sécurité",
          description: "Mettez à jour votre mot de passe et sécurisez votre compte",
          url: "/"
        },
        {
          icon: <FaEuroSign size={30}/>,
          name: "Paiements et versements",
          description: "Consultez les paiements, les versements, les coupons, les cartes cadeaux et les taxes",
          url: "/"
        }
    ]

    const settingsAdmin = [
      {
        icon: <FaRegBell fill='#ffffff' size={30}/>,
        name: "Utilisateurs et Rôles",
        description: "Choisissez vos préférences de notification et la façon dont vous souhaitez être contacté",
        url: "/"
      },
      {
        icon: <FaUnlock fill='#ffffff' size={30}/>,
        name: "Base de données",
        description: "Contrôlez les applications connectées, ce que vous partagez et qui y a accès",
        url: "/"
      },
      {
        icon: <FaGlobeEurope fill='#ffffff' size={30}/>,
        name: "Autres",
        description: "Définissez votre langue, votre devise et votre fuseau horaire par défaut",
        url: "/"
      }
  ]
    return (
        <>  
            <NavBar />

            <div className={`px-20 sm:px-40 md:px-40 lg:px-40 xl:px-60 2xl:px-96 mx-20 mt-20 my-10`}>
                <div className='text-3xl font-semibold'>Compte,</div>
                <div className='pt-2 text-lg font-normal'><span className='font-semibold'>{User.firstname ? User.firstname : undefined} {User.lastname ? User.lastname : undefined},</span> {User.email ? User.email : undefined} <span>·</span> <span><button onClick={() => navigate('../account')} className='font-semibold underline'>Aller au profil</button></span></div>
            </div>

            <div className={`px-20 sm:px-40 md:px-40 lg:px-40 xl:px-60 2xl:px-96 mx-20 mb-20`}>
                <div class="grid grid-cols-3 gap-4">
                {settings.map((o) => (
                    <button onClick={() => navigate('.'+o.url)} className='shadow-lg rounded-xl h-40 w-full p-4 flex flex-col justify-between hover:bg-stone-100/50'>
                    <div>
                        {o.icon}
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-night text-base font-semibold text-left'>{o.name}</div>
                        <div className='text-night/75 pt-1 text-left font-normal text-sm leading-snug'>{o.description}</div>
                    </div>
                    </button>
                ))}
                {settingsAdmin.map((o) => (
                    <button onClick={() => navigate('.'+o.url)} className='shadow-lg bg-night rounded-xl h-40 w-full p-4 flex flex-col justify-between hover:bg-night/90'>
                    <div>
                        {o.icon}
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-white text-base font-semibold text-left'>{o.name}</div>
                        <div className='text-white pt-1 text-left font-normal text-sm leading-snug'>{o.description}</div>
                    </div>
                    </button>
                ))}
                </div>
            </div>

            <div className={`px-20 sm:px-40 md:px-40 lg:px-40 xl:px-20 2xl:px-96 mx-20 mt-20 my-10 flex flex-col items-center`}>
                <div className='text-sm font-normal'>Besoin de désactiver votre compte ?</div>
                <button className='pt-2 text-xs font-semibold underline'>M'en occuper maintenant</button>
            </div>

            <Footer />
        </>
    )
} 