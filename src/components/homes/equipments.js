import React from 'react';  

// Import Icon
import { FaSwimmingPool } from 'react-icons/fa';
import { MdHotTub } from 'react-icons/md';
import { RiBilliardsLine } from 'react-icons/ri';
import { BsTree } from 'react-icons/bs';
import { IoIosFitness } from 'react-icons/io';
import { GiLightningDissipation, GiBarbecue, GiFlamer, GiChimney } from 'react-icons/gi';

export function Equipment(value, size) {
    switch (value) {
        case 1: return (<FaSwimmingPool size={size} />)
        case 2: return (<MdHotTub size={size} />)
        case 3: return (<GiLightningDissipation size={size} />)
        case 4: return (<GiBarbecue size={size} />)
        case 5: return (<GiFlamer size={size} />)
        case 6: return (<RiBilliardsLine size={size} />)
        case 7: return (<GiChimney size={size} />)
        case 8: return (<BsTree size={size} />)
        case 9: return (<IoIosFitness size={size} />)
        default: return ('')
    }
}

export function EquipmentRoom(value, size) {
    switch (value) {
        case 1: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><FaSwimmingPool size={size} /></div>
                <div className='text-left text-md text-gray-800'>Piscine</div>
            </div>
        )
        case 2: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><MdHotTub size={size} /></div>
                <div className='text-left text-md text-gray-800'>Jacuzzi</div>
            </div>
        )        
        case 3: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><GiLightningDissipation size={size} /></div>
                <div className='text-left text-md text-gray-800'>Patio</div>
            </div>
        )
        case 4: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><GiBarbecue size={size} /></div>
                <div className='text-left text-md text-gray-800'>Barbecue</div>
            </div>
        )
        case 5: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><GiFlamer size={size} /></div>
                <div className='text-left text-md text-gray-800'>Brasero</div>
            </div>
        )
        case 6: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><RiBilliardsLine size={size} /></div>
                <div className='text-left text-md text-gray-800'>Billard</div>
            </div>
        )
        case 7: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><GiChimney size={size} /></div>
                <div className='text-left text-md text-gray-800'>Cheminée</div>
            </div>
        )
        case 8: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><BsTree size={size} /></div>
                <div className='text-left text-md text-gray-800'>Espace repas en plain air</div>
            </div>
        )
        case 9: return (
            <div className='flex flex-row justify-left items-center space-x-5'>
                <div><IoIosFitness size={size} /></div>
                <div className='text-left text-md text-gray-800'>Appareils de fitness</div>
            </div>
        )
        default: return ('')
    }
}