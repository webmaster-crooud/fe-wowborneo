import Image from 'next/image'
import React from 'react'

const DayCard = ({data} : {data: {title: string, desc: string, img: string}}) => {
  return (
    <div className='bg-[#CD5A051A] rounded-xl h-full overflow-hidden'>
        <div className='w-full aspect-video'>
            <Image src={data.img} alt='destination image' height={1000} width={1000} className='w-full h-full object-cover aspect-video'/>
        </div>
        <div className='p-4 space-y-4 w-full h-fit lg:space-y-6 lg:p-8'>
            <p className='text-lg font-semibold lg:text-xl'>{data.title}</p>
            <p className='text-sm lg:text-base'>{data.desc}</p>
        </div>
    </div>
  )
}

export default DayCard