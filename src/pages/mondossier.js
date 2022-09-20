import React, {useState} from 'react';  
import { RadioGroup } from '@headlessui/react'

// Icon
import {FiBook} from 'react-icons/fi'
import {IoBriefcaseOutline, IoEyeOffOutline, IoBusinessOutline, IoPersonOutline, IoFootstepsOutline} from 'react-icons/io5'

const status = [
  {
      name: "Étudiant",
      icon: <FiBook strokeWidth={1.5} size={45}  />,
  },
  {
      name: "Salarié",
      icon: <IoBriefcaseOutline strokeWidth={1.5} size={45}  />,
  },
  {
      name: "Fonctionnaire",
      icon: <IoBusinessOutline strokeWidth={1.5} size={45}  />
  },
  {
      name: "Indépendant",
      icon: <IoPersonOutline strokeWidth={1.5} size={45}  />
  },
  {
      name: "Retraité",
      icon: <IoFootstepsOutline strokeWidth={1.5} size={45}  />
  },
  {
      name: "Sans emploi",
      icon: <IoEyeOffOutline strokeWidth={1.5} size={45}  />
  }
]

const garants = ["oui", "non"]

const contrats = ["CDI", "CDD", "Interim"]

export default function Page() {
  const [selected, setSelected] = useState()

    return (
        <>  
          <div className='grid grid-cols-2 h-screen'>
            <div className='relative bg-color-gradient-bnb'>
              <div className='absolute inset-y-0 flex items-center'>
                <div className='text-white font-medium px-10 text-6xl'>
                  Plus que quelques questions…
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='px-48 pt-10'>

                {/* Définir le statut du locataire */}
                <section className='animate-showin'>
                  <div className="font-semibold text-2xl pb-6">Que profil vous correspond ?</div>
                    <RadioGroup value={selected} onChange={setSelected}>
                      <div className="grid grid-cols-3 gap-5">
                          {status.map((plan) => (
                              <RadioGroup.Option key={plan.name} value={plan} 
                                  className={({ active, checked }) =>
                                      `${
                                          active
                                          ? ''
                                          : ''
                                      }
                                      ${
                                          checked ? 'bg-gray-100/50 border-black border' : 'border-gray border'
                                      }
                                      transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white px-5 py-4 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black`
                                      }
                                  >

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
                </section>

                {/* Définir le(s) garant(s) du locataire */}
                <section className={`pt-10 animate-showin ${ 
                (selected==status[0]) 
                ? 'block animate-showin'
                : 'hidden'
                }`}>
                  <div className="font-semibold text-2xl pb-6">Quel est votre type de contrat ?</div>
                    <RadioGroup value={selected} onChange={setSelected}>
                      <div className="grid grid-cols-3 gap-5">
                          {contrats.map((plan) => (
                              <RadioGroup.Option key={plan} value={plan} 
                                  className={({ active, checked }) =>
                                      `${
                                          checked ? 'bg-gray-100/50 border-black border' : 'border-gray border'
                                      }
                                      transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white px-5 py-4 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black`
                                      }
                                  >

                                  {({ active, checked }) => (
                                      <>
                                          <RadioGroup.Label className={`font-medium`} >
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
                </section>

                {/* Définir le(s) garant(s) du locataire */}
                <section className={`pt-10 animate-showin ${ 
                (selected==status[0]) 
                ? 'block animate-showin'
                : 'hidden'
                }`}>
                  <div className="font-semibold text-2xl pb-6">Avez-vous un ou plusieurs garants ?</div>
                    <RadioGroup value={selected} onChange={setSelected}>
                      <div className="grid grid-cols-3 gap-5">
                          {garants.map((plan) => (
                              <RadioGroup.Option key={plan} value={plan} 
                                  className={({ active, checked }) =>
                                      `${
                                          checked ? 'bg-gray-100/50 border-black border' : 'border-gray border'
                                      }
                                      transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none relative rounded-lg border-gray bg-white px-5 py-4 cursor-pointer flex items-center justify-center focus:outline-none hover:bg-gray-100/50 hover:border-black`
                                      }
                                  >

                                  {({ active, checked }) => (
                                      <>
                                          <RadioGroup.Label className={`font-medium`} >
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
                </section>



              </div>
            </div>
          </div>
        </>
    )
} 