import Image from 'next/image'
import React from 'react'

const ExperienceCard = ({item} : {item : {img: string, title: string, description: string}}) => {
    return (
        <div className='w-full flex flex-col gap-6 sm:flex-row sm:items-center lg:items-start'>
            <div className='sm:w-[80%]'>
                <Image src={item.img} alt='' width={1000} height={1000} className='w-full rounded-lg' />
            </div>
            <div className='flex flex-col gap-3 sm:gap-6 lg:p-4 xl:gap-4'>
                <h4 className='text-lg sm:text-2xl lg:text-4xl xl:text-3xl'>{item.title}</h4>
                <p className='text-sm lg:text-base'>{item.description}</p>
                <Image src={"/images/ui/Arrow 7.png"} alt="arrow icon" width={20} height={20} className='hidden w-16 h-full object-cover'/>
            </div>
        </div>
    )
}

export default ExperienceCard