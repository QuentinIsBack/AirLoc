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

                <div className={'flex-grow grid grid-cols-10'}>
                    <div className={'col-span-3'}>
                        {LeftSide()}
                    </div>
                    <div className={'col-span-7'}>
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
        description: "Pièces 5 · Chambres 2 · 89m2",
        localisation: [-1.546979, 47.220220],
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
                        <div className={'relative rounded-2xl bg-gray-100/80 h-56 w-full grid grid-cols-2 overflow-hidden'}>
                            <div className='p-6'>
                                <div className='rounded-xl h-full w-full bg-cover' style={{backgroundImage: `url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}} />
                            </div>
                            <div className='flex flex-col justify-between py-6 pr-6'>
                                <div>
                                    <div className='text-3xl font-medium'>{o.name}</div>
                                    <div>{o.description}</div>
                                </div>
                                <Button additionnal={'h-3rem'} theme={'cyan'} size={'full'}>Candidater</Button>
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
    const onMoov = (e) => {
        console.log('e:'+e.longitude)
    }

    return (
        <>
            <div className={'border-r w-full h-full overflow-y-auto'}>
                <div className={'h-full w-full'}>
                    <div className='h-10 bg-red-100'>
                        Longitude: {defaultProps.longitude} | Latitude: {defaultProps.latitude} | Zoom: {defaultProps.zoom}
                    </div>
                    <Map onMoveEnd={(e)=>onMoov(e)} mapboxAccessToken="pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg" initialViewState={defaultProps} mapStyle="mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q">
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
