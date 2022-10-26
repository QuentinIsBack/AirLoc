import React from "react";

import { IoRemove, IoAdd } from 'react-icons/io5'

export const Incrementor = ({  
    name = 'Undefined',
    value = 0,
    minValue = 1,
    maxValue = 100,
    onAdd,
    onRemove
}) => {

    const remove = () => {
        if (value > minValue){
            onRemove()
        }
    }

    const add = () => {
        if (value < maxValue){
            onAdd()
        }
    }

    return (
        <>
            <div className='flex flex-row justify-between items-center font-medium text-3xl'>
                <div>{name}</div> 
                <div className='flex flex-row items-center space-x-5'>
                    <button onClick={remove} className={`flex items-center outline outline-1 ${value <= minValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'} rounded-full p-2`}><IoRemove color={`${value <= minValue ? '#e5e7eb' : '#9ca3af'}`} size={20} /></button>
                    <div className='font-medium text-xl'>{value}</div>
                    <button onClick={add} className={`flex items-center outline outline-1 ${value >= maxValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'}  rounded-full p-2`}><IoAdd  color={`${value >= maxValue ? '#e5e7eb' : '#9ca3af'}`}  size={20} /></button>
                </div>
            </div>
        </>
    )
}

export const BigIncrementor = ({  
    id,
    name,
    value = 0,
    minValue = 1,
    maxValue = 10000000,
    onAdd,
    onRemove,
    onChange,
    placeholder
}) => {

    const remove = () => {
        if (value > minValue){
            onRemove()
        }
    }

    const add = () => {
        if (value < maxValue){
            onAdd()
        }
    }

    return (
        <>
                <div className='flex flex-row items-center font-medium text-3xl space-x-5'>
                    <button onClick={remove} className={`flex items-center outline outline-1 ${value <= minValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'} rounded-full p-2`}><IoRemove color={`${value <= minValue ? '#e5e7eb' : '#9ca3af'}`} size={20} /></button>
                    <input onChange={onChange} type='text' value={value} id={id} name={name} className='w-80 h-24  focus:outline-none animation duration-200 ring-gray-400 ring-1 focus:ring-2 focus:ring-black rounded-lg text-center text-gray-700 font-semibold text-5xl placeholder:text-gray-500' placeholder={placeholder} />
                    <button onClick={add} className={`flex items-center outline outline-1 ${value >= maxValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'}  rounded-full p-2`}><IoAdd  color={`${value >= maxValue ? '#e5e7eb' : '#9ca3af'}`}  size={20} /></button>
                </div>
        </>
    )
}