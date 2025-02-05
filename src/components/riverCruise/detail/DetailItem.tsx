import React from 'react'

const DetailItem = ({title, desc} : {title: string, desc: string}) => {
    return (
        <div className='border border-black flex rounded-lg flex-col sm:flex-row'>
            <div className='bg-[#CD5A051A] p-2 border-b border-black sm:w-[40%] sm:border-r sm:border-b-0 sm:flex sm:items-center md:w-[30%] lg:px-6'>
                <p className='w-full text-center font-semibold text-base sm:text-left'>{title}</p>
            </div>
            <div className='p-4 text-sm text-center sm:text-start sm:w-[60%] md:w-[70%]'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default DetailItem