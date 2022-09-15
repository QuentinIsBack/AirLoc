import React from 'react';  

import NavBar from '../components/navbar/navbar-home'
import Footer from '../components/footer/footer'

export default function Page() {
    const padding = `px-60`;

    return (
        <>  
            <NavBar />


            <div className={`bg-white px-60 mt-24 mb-20`}>
                <div className='flex justify-center '>
                    <div className='text-9xl font-semibold text-gray-900 text-center'>Un niveau d'étude <br/>inégalé</div>
                </div>
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-3xl font-normal text-gray-800 text-center'>AirStudent est une solution gratuite et complète. Elle vous permet de <br/>planifier vos études et de trouver un logement en toute sérénité. Nous serons là pour vous aider <br/>en cas de problème avec votre logement.</div>
                    <button className='mt-6 py-2 px-4 h-fit w-fit font-medium rounded-md border border-gray-900'>En savoir plus</button>
                </div>
                <div className='mt-20 hero rounded-2xl h-45rem' style={{backgroundImage: `url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}} />
            </div>

            <div className={`bg-white ${padding} pb-20`}>
                <a className='text-5xl font-medium text-black'>Découvrez les expériences AirLoc</a>
                <div className='grid gap-10 pt-14 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
                    <div className='bg-center bg-cover bg-no-repeat rounded-2xl h-55rem bg-[url("https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=1200")]'>
                        <div className='flex flex-col justify-between my-20 text-left space-y-96'>
                        <div className="max-w-2xl">
                            <h1 className="mx-20 pr-10 text-6xl font-medium text-white pb-5">Trouvez des biens insolite pour vivre toute l'année</h1> 
                            <button className='mx-20 py-3 px-7 bg-white hover:bg-gray-100 rounded-lg mt-2'>
                            <div className='text-normaly font-medium text-lg text-black'>
                                Insolite
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='bg-center bg-cover bg-no-repeat rounded-2xl h-55rem bg-[url("https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=1200")]'>
                        <div className='flex flex-col justify-between my-20 text-left space-y-96'>
                        <div className="max-w-2xl">
                            <h1 className="mx-20 pr-10 text-6xl font-medium text-white pb-5">Des logement à vivre <br /> de chez vous</h1> 
                            <button className='mx-20 py-3 px-7 bg-white hover:bg-gray-100 rounded-lg mt-2'>
                            <div className='text-normaly font-medium text-lg text-black'>
                                Logements
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer padding={'px-36'} />
        </>
    )
} 