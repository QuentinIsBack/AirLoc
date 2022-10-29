import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../context/UserContext'
import {ModalTest} from '../modal/ModalTest'

import LOGOWHITE from '../../assets/logo.svg'

import { IoChevronDown } from 'react-icons/io5'
import { db, auth} from "../../firebase.config"
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button';
import { GroupInput } from '../input/groupinput'

//
import { doc, setDoc } from "firebase/firestore";
import { InputFloating } from '../input/InputFloating';

  
export default function Component() { 

    return (
        <> 
            <div className='sticky w-full z-50'>
                <div className={`flex items-center justify-between border-b h-4rem bg-white`}>
                    <div className={`absolute z-10 inset-y-0 left-36 sm:left-36 md:left-36 lg:left-36 xl:left-36 2xl:left-36 flex items-center`}>
                        <div href='.'><img width={25} alt={'logo'} src={LOGOWHITE} /></div>
                    </div> 
                    <div className="absolute inset-x-0 inset-y-0 flex justify-center items-center">
                        <div className='hidden lg:block xl:block 2xl:block'>
                            {GetCenter()}
                        </div>
                    </div>
                    <div className="absolute z-10 inset-y-0 right-5 sm:right-36 md:right-36 lg:right-36 xl:right-36 2xl:right-36 flex items-center">
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0">
                                <button className="h-full">
                                    <div className='inline-flex items-center text-night/80 outline outline-1 outline-gray-200 rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                                        Mon compte <IoChevronDown className='ml-1 mt-0.5' />
                                    </div>
                                </button>   
                            </div> 
                            <ul tabIndex="0" className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                                {GetDropdown()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function GetCenter(){
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate();

    if (!currentUser) {
        return (
            <>
                 <button className="h-full">
                    <div className={`text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100`}>
                        Programme
                    </div>
                </button> 
                <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Études
                    </div>
                </button> 
                <button className="h-full">
                    <div className='text-night rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                        Informations
                    </div>
                </button> 
            </>
        )    
    } else {
        return (
            <>
                <NavLink to="../hosting/" className={({ isActive }) => (isActive ? "text-black" : "text-night/80 ")}>
                    <button className="h-full">
                        <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100`}>
                            Aujourd'hui
                        </div>
                    </button> 
                </NavLink>
                <NavLink to="../hosting/messages" className={({ isActive }) => (isActive ? "text-black" : "text-night/80 ")}>
                    <button className="h-full">
                        <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100`}>
                            Messages
                        </div>
                    </button> 
                </NavLink>
                <NavLink to="../hosting/calendar/" className={({ isActive }) => (isActive ? "text-black" : "text-night/80 ")}>
                    <button className="h-full">
                        <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100`}>
                            Calendrier
                        </div>
                    </button> 
                </NavLink>
                <NavLink to="../hosting/informations/" className={({ isActive }) => (isActive ? "text-black" : "text-night/80 ")}>
                    <button className="h-full">
                        <div className={`rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100`}>
                            Informations  <span><div className="ml-1 badge badge-error">Nouveauté</div></span>
                        </div>
                    </button> 
                </NavLink>
                <div className="dropdown dropdown-end">
                    <div tabIndex="0">
                        <button className="h-full">
                            <div className='inline-flex items-center text-night/80 rounded-2xl py-2 px-4 text-sm font-semibold hover:bg-gray-100'>
                                Menu <IoChevronDown className='ml-1 mt-0.5' />
                            </div>
                        </button> 
                    </div> 
                    <ul tabIndex="0" className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                        <li><div className='font-medium text-sm'>Annonces</div></li>
                        <li><div className='font-medium text-sm'>Réservations</div></li>
                        <li><div onClick={() => navigate('../begin/intro')} className='font-medium text-sm'>Créer une annonces</div></li>
                        <li><div onClick={() => navigate('../hosting/folder')} className='font-medium text-sm'>Mon dossier locataire</div></li>
                        <div className='py-2'><div className='border-t'></div></div>
                        <li><div className='font-normal text-sm'>Guides</div></li>
                        <li><div className='font-normal text-sm'>Historique des transactions</div></li>
                        <li><div className='font-normal text-sm'>Forum de la communauté</div></li>
                    </ul>
                </div>
            </>
        )
    }

}

function GetDropdown() {

    const [modalSignIn, setModalSignIn] = useState(false);
    const [modalSignUp, setModalSignUp] = useState(false);

    const navigate = useNavigate();
    const {currentUser, User} = useContext(UserContext)
    
    const logout = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch {
            alert("")
        }
    }

    if (!currentUser) {
        return(
            <>
                <ModalSignUp show={modalSignUp} close={() => setModalSignUp(false)} />
                <ModalSignIn show={modalSignIn} close={() => setModalSignIn(false)} />
                <li><div onClick={() => setModalSignUp(true)} className='font-medium text-sm'>Inscription</div></li>
                <li><div onClick={() => setModalSignIn(true)} className='font-medium text-sm'>Connexion</div></li>
                <div className='py-2'><div className='border-t'></div></div>
                <li><div className='font-normal text-sm'>Louer mon logement</div></li>
                <li><div className='font-normal text-sm'>Trouver un logement</div></li>
                <li><div className='font-normal text-sm'>Aide</div></li>
            </>
        )
    } else {
        return (
            <>
                <li><div onClick={() => navigate("../account")} className='font-medium text-sm'>Profile</div></li> 
                <li><div onClick={() => navigate("../account-settings")} className='font-medium text-sm'>Compte</div></li> 
                <li><div className='font-medium text-sm'>Obtenir de l'aide</div></li> 
                {User.power >= 1000 && <li><div  onClick={() => navigate("../employee")} className='bg-slate-800 font-medium text-sm hover:bg-indigo-800'><span className='text-white'>Espace employé</span></div></li>}
                    <div className='py-2'><div className='border-t'></div></div>
                <li><div className='font-normal text-sm'>Français (FR)</div></li> 
                <li><div className='font-normal text-sm'>€ EUR</div></li> 
                    <div className='py-2'><div className='border-t'></div></div>
                <li><div className='font-normal text-sm'>Parrainer un hôte</div></li>
                <li><div onClick={logout} className='font-normal text-sm'>Déconnexion</div></li>
            </>
        )
    }
}

const ModalSignUp = ({show, close}) => {

    const [emailValid, setEmailValid] = useState('');
    const [passwordValid, setPasswordValid] = useState('');
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const {signUp} = useContext(UserContext)

    const navigate = useNavigate();

    const confirmForm = async () => {

        if(data.password === data.confirmPassword){
            if(data.password.length < 6){
                setPasswordValid('Le mot de passe indiqué dois faire plus de 6 characters.')
            } else {

                try {
                    const cred = await signUp(
                      data.email,
                      data.password,
                    )
      
                    await setDoc(doc(db, "users", cred.user.uid), {
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email,
                        id: cred.user.uid
                    });
      
                    navigate('../hosting')
                } catch (err) { 
                  if(err.code === "auth/email-already-in-use"){
                    setEmailValid("L'adresse email renseigné est déjà uttilisé.")
                  }
                  if(err.code === "auth/invalid-email"){
                    setEmailValid("L'adresse email renseigné est invalid.")
                  }
                }
                
            }
        } else{
            setPasswordValid('Les mots de passes doivent être identique.')
        }
    }

    return (
        <>
            <ModalTest show={show} close={close}>
                <div className='h-5rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                    <div className='border-b' />
                <div className="p-5">
                    <div className='text-3xl font-semibold text-night text-left'>Création d'un profil</div>
                    <div className='pt-2 text-md font-normal text-gray-500 text-left'>Pour commencer à rechercher et candidater à des logements, dites nous en plus sur vous.</div>
                    
                    <div className='pt-6 flex flex-row space-x-5 pb-5'>
                        <InputFloating id={'lastname'} type={'text'} placeholder={'Entrez votre nom'} onChange={(e) => setData( {...data, lastname: e.target.value } )} />  
                        <InputFloating id={'firstname'} type={'text'} placeholder={'Entrez votre prénom'} onChange={(e) => setData( {...data, firstname: e.target.value } )} />  
                    </div>

                    <div className='pb-5'>
                        <InputFloating id={'email'} type={'email'} placeholder={'Entrez votre adresse email'} onChange={(e) => setData( {...data, email: e.target.value } )}/>  
                        <div className={`${emailValid.length === 0 ? 'hidden' : 'visible'} pt-1.5 text-sm font-normal text-red-500 text-left`}>{emailValid}</div>
                    </div>

                    <GroupInput color={passwordValid.length === 0 ? "black" : "red"}>
                        <InputFloating id={'password'} type={'password'} placeholder={'Entrez votre adresse email'}  onChange={(e) => setData( {...data, password: e.target.value } )} />  
                            <div className={`border-b ${passwordValid.length === 0 ? "border-black" : "border-red-500"} w-full`} />
                        <InputFloating id={'confirmPassword'} type={'password'} placeholder={'Entrez votre adresse email'} onChange={(e) => setData( {...data, confirmPassword: e.target.value } )} />  
                    </GroupInput>
                    <div className={`${passwordValid.length === 0 ? 'hidden' : 'visible'} pt-1.5 text-sm font-normal text-red-500 text-left`}>{passwordValid}</div>

                    <div className='pt-8 flex justify-start'>
                        <Button onClick={confirmForm} theme={'black'}>Continuer</Button>
                    </div>
                </div>
            </ModalTest>
        </>
    )
}

const ModalSignIn = ({show, close}) => {

    const [emailValid, setEmailValid] = useState('');
    const [passwordValid, setPasswordValid] = useState('');
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const {signIn} = useContext(UserContext)

    const navigate = useNavigate();

    const confirmForm = async () => {

            if(data.password.length < 6){
                setPasswordValid('Le mot de passe indiqué dois faire plus de 6 characters.')
            } else {

                try {
                    await signIn(
                      data.email,
                      data.password,
                    )
                    navigate('../hosting')
                  } catch (err) { 
                    setEmailValid("Le mot de passe ou l'adresse email n'est pas valide.")
                }
                
            }

    }

    return (
        <>
            <ModalTest show={show} close={close}>
                <div className='h-5rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                    <div className='border-b' />
                <div className="p-5">
                    <div className='text-3xl font-semibold text-night text-left'>Connexion au profil</div>
                    <div className='pt-2 text-md font-normal text-gray-500 text-left'>Pour commencer à rechercher et candidater à des logements, connectez-vous.</div>

                    <div className='pt-6 pb-5'>
                        <InputFloating id={'email'} type={'email'} placeholder={'Adresse email'}  onChange={(e) => setData( {...data, email: e.target.value } )} />  
                        <div className={`${emailValid.length === 0 ? 'hidden' : 'visible'} pt-1.5 text-sm font-normal text-red-500 text-left`}>{emailValid}</div>
                    </div>

                    <InputFloating id={'password'} type={'password'} placeholder={'Mot de passe'} onChange={e => setData( {...data, password: e.target.value } )}/>  
                    <div className={`${passwordValid.length === 0 ? 'hidden' : 'visible'} pt-1.5 text-sm font-normal text-red-500 text-left`}>{passwordValid}</div>

                    <div className='pt-8 flex justify-start'>
                        <Button onClick={confirmForm} theme={'black'}>Continuer</Button>
                    </div>
                </div>
            </ModalTest>
        </>
    )
}
