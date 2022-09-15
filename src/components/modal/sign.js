import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

import { IoPhonePortraitOutline, IoLogoGoogle } from 'react-icons/io5'

import {InputFloating} from '../../components/input/inputfloating'
export default function SignModal() {
    const {modalSign, setModalSign} = useContext(UserContext)

    function closeModal() {
      setModalSign(false)
    }

    function openModal() {
      setModalSign(true)
    }

    const [data, setData] = useState({
      email: "",
      password: "",
    });

    const confirm = () => {
      console.log(data.email)
      console.log(data.password)
    }

  return (
    <>

      <Transition appear show={modalSign} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  

                <div className="flex justify-center px-6 py-4 text-md font-semibold leading-6 text-darkgray" >
                    Connexion ou inscription
                  </div>
                  <div className='border-b' />

                  <div className='pb-6 pr-6 pl-6'>
                    
                    <div className='mt-6 mb-6 text-left text-2xl font-medium'>
                      Bienvenue sur Airloc
                    </div>


                    <div className='space-y-2'>
                      <InputFloating id={'email'} type={'email'} name={'Adresse e-mail'} onChange={(e) => setData( {...data, email: e.target.value } )} placeholder={'Adresse e-mail'} />
                      <InputFloating id={'password'} type={'password'} name={'Mot de passe'} onChange={(e) => setData( {...data, password: e.target.value } )} placeholder={'Mot de passe'} />
                    
                    <div>
                    <button onClick={confirm} className='mt-6 relative flex items-center rounded-md outline outline-1 hover:outline-2 w-full h-3rem text-white text-sm font-semibold bg-pink-600'>
                        <div className='absolute inset-x-0'>Continuer</div>
                      </button>
                    </div>

                    </div>

                    <div className='my-6'>
                      <div className='relative w-full h-fit flex justify-center items-center'>
                        <div className='absolute w-full border b' />
                        <div className='absolute bg-white px-3 text-xs font-semibold'>OU</div>
                      </div>
                    </div>

                    {/* Change Mode Connexion */}
                    <div className="flex flex-col space-y-4">
                      <button className='relative flex items-center rounded-md outline outline-1 hover:outline-2 w-full h-3rem text-night text-sm font-semibold'>
                        <div className='absolute left-5'><IoLogoGoogle size={25} /></div>
                        <div className='absolute inset-x-0'>Continuer avec Google</div>
                      </button>

                      <button className='relative flex items-center rounded-md outline outline-1 hover:outline-2 w-full h-3rem text-night text-sm font-semibold'>
                        <div className='absolute left-5'><IoPhonePortraitOutline size={25} /></div>
                        <div className='absolute inset-x-0'>Continuer avec un numéro de téléphone</div>
                      </button>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
