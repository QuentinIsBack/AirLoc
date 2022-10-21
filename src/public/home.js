import React from 'react';  

// Components
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

export default function Page() {

    return (
        <>  
            <NavBar />


            <div className={`bg-white px-10 sm:px-10 md:px-20 lg:px-20 xl:px-40 2xl:px-60 mt-14 mb-20`}>
                <div className='flex justify-center '>
                    <div className='text-6xl font-semibold text-gray-900 text-center sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-9xl'>Un niveau d'étude inégalé</div>
                </div>
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-xl font-normal text-gray-800 text-center px-0 sm:text-2xl sm:px-10 md:text-3xl md:px-10 lg:text-3xl lg:px-0 xl:text-3xl xl:px-20 2xl:text-3xl 2xl:px-40'>AirStudent est une solution gratuite et complète. Elle vous permet de planifier vos études et de trouver un logement en toute sérénité. Nous serons là pour vous aider en cas de problème avec votre logement.</div>
                    <button className='mt-6 py-2 px-4 h-fit w-fit font-medium rounded-md border border-gray-900'>En savoir plus</button>
                </div>
                <div className='mt-20 hero rounded-2xl h-20rem sm:h-30rem md:h-45rem lg:h-45rem xl:h-45rem 2xl:h-45rem' style={{backgroundImage: `url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}} />
            </div>

            <div className={`bg-white px-10 sm:px-10 md:px-20 lg:px-20 xl:px-40 2xl:px-60`}>
                <div className='text-5xl font-medium text-black'>Découvrez les expériences AirLoc</div>
                <div className='pt-14 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10 h-fit'>
                    <div className='bg-cover bg-center rounded-2xl h-full sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-55rem p-20' style={{backgroundImage: `url("https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=1200")`}}>
                        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-medium text-white pb-5">Trouvez des biens insolite pour vivre toute l'année</h1> 
                        <button className='py-3 px-7 bg-white hover:bg-gray-100 rounded-lg mt-2'>
                            <div className='font-medium text-lg text-night'>
                                Insolite
                            </div>
                        </button>
                    </div>
                    <div className='bg-cover bg-center rounded-2xl h-full sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-55rem p-20' style={{backgroundImage: `url("https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=1200")`}}>
                        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xlfont-medium text-white pb-5">Des logement à vivre de chez vous</h1> 
                        <button className='py-3 px-7 bg-white hover:bg-gray-100 rounded-lg mt-2'>
                            <div className='font-medium text-lg text-night'>
                                Logements
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-20' />

            <Footer />
        </>
    )
} 