import React from 'react';  
import { Text } from '../components/text/text';

export default function Page() {
    const padding = `px-36`;

    return (
        <>  
            <div className='h-20 bg-red-400'>
                rrdfg
            </div>
            <div className={`bg-black h-fit ${padding}`}>
                <div className='bg-pinky w-full h-25rem rounded-2xl flex items-center justify-center'>
                    <Text align={'center'} weight={'medium'} size={'5xl'} color={'white'}>Aidez à loger 100,000 réfugiés fuyant l'Ukraine</Text>
                </div>
            </div> 
        </>
    )
} 