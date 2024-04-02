import Image from 'next/image'
import React from 'react'
import testImg from '@/app/assets/Images&Icons/ssscales.svg'


const Svgdesign2 = () => {
    return (
        <div className='absolute w-full h-full flex justify-end'>

            <Image src={testImg} alt='' className='object-cover w-full h-[75%]' />
        </div>
    )
}

export default Svgdesign2
