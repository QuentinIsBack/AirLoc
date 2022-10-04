import React, { useContext } from 'react';  

// Components
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

// Firebase
import { UserContext } from '../context/UserContext';

// Icons
import { RiHome2Fill, RiCheckFill, RiStarLine, RiStarFill, RiShieldLine, RiShieldCheckLine, RiCloseFill } from "react-icons/ri";
import { Button } from '../components/button/button';

import Map, { GeolocateControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Page() {
    const padding = `px-10 sm:px-10 md:px-10 lg:px-20 xl:px-80 2x:px-80`;

    const { User } = useContext(UserContext)


    return (
        <>  
            <div className={'flex flex-col h-screen'}>
                <div className={"flex-none"}><NavBar /></div>

                <div className={'flex-grow grid grid-cols-12'}>
                    <div className={'col-span-3'}>
                        {LeftSide()}
                    </div>
                    <div className={'col-span-9'}>
                        {RightSide()}
                    </div>
                </div>

                <div className={"flex-none"}><Footer formatage={"sticky"} /></div>
            </div>

        </>
    )
} 

const homesOFF = [
    {
        name: "Appartement T3 avec parking",
        description: "Pièces 5, Chambres 2, 89m2, balcon, place de parking",
        localisation: [-1.546979, 47.220220],
        price: 1200,
    }
];

function LeftSide(){
    return (
        <>
            <div className={'border-r w-full h-full overflow-y-auto p-6'}>
                <div className={'flex flex-col items-center'}>            
                    <div className='text-lg font-semibold text-night text-center'>Vous n'avez pas de messages non lus</div>
                    <div className='text-md font-normal text-gray-500 text-center leading-tight w-96'>Lorsque vous réservez un voyage ou une expérience, les messages de votre hôte s'affichent ici.</div>
                    <Button theme={'white-outline'} additionnal={'mt-4'}>Explorez Airloc</Button>
                </div>
                <div className={'pt-5 flex flex-col'}>
                    {homesOFF.map(o => 
                        <div className='border-2 border-transparent hover:border-black mt-20 rounded-2xl bg-gray-50 w-full h-44 grid grid-cols-2 gap-10 overflow-hidden p-4'>
                            <div>
                                <div className='rounded-xl h-full w-full bg-cover' style={{backgroundImage: `url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}} />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div className={`text-black text-md font-semibold truncate`}>
                                    {o.name}
                                    <div>
                                        <ul class="flex items-center text-sm">
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-night mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-night mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-night mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-night mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-night" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                </svg>
                                            </li>
                                            <li className='text-night pl-1'>
                                            / 26
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className={`text-night text-sm font-semibold leading-snug`}>{o.description}</div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='text-night font-medium text-xs w-20 leading-snug'>Loyer pour ce logement</div>
                                    <div className='text-black font-bold text-lg'>{o.price}€</div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

function RightSide(){

    const defaultProps = {
        longitude: -1.546979,
        latitude: 47.220220,
        zoom: 12,
    };


    return (
        <>
            <div className={'border-r w-full h-full overflow-y-auto'}>
                <div className={'h-full w-full'}>
                    <div className='h-fit rounded-xl border-4 border-black flex flex-col p-3 space-y-2'>
                        <div className='underline text-red-500 font-bold'>Mode développeur Activé</div>
                        <div className='flex flex-col'>
                            <div className='underline'>Localisation GPS</div>
                            <div>Longitude: {defaultProps.longitude} | Latitude: {defaultProps.latitude} | Zoom: {defaultProps.zoom}</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='underline'>Localisation Géographique</div>
                            <div>Pays: {defaultProps.longitude} | Département: {defaultProps.latitude} | Ville: {defaultProps.zoom}</div>
                        </div>
                    </div>
                    <Map mapboxAccessToken="pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg" initialViewState={defaultProps} mapStyle="mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q">
                        {homesOFF.map(o => 
                            <Marker longitude={o.localisation[0]} latitude={o.localisation[1]} anchor="bottom">
                                <div className='p-4 bg-white rounded-xl h-fit w-44'>
                                    <div className='rounded-xl h-20 w-full bg-cover' style={{backgroundImage: `url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}} />
                                    <div className='py-2 font-medium text-base leading-snug' href='&'>{o.name}</div>
                                    <Button theme={'white-outline'} size={'full'}><div className='text-base'>Voir le bien</div></Button>
                                </div>
                            </Marker>
                        )}                      
                    </Map>
                </div>
            </div>
        </>
    )
}
