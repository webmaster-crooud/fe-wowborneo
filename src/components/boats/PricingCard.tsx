import { cx } from 'class-variance-authority'
import Image from 'next/image'
import React from 'react'
import Button from '../ui/button'

const PricingCard = ({ name, price, img }: { name: string, price: string, img: string }) => {
    return (
        <div className="relative w-full rounded-xl overflow-hidden bg-white shadow-lg">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image src={img} alt="picture of orang utan" className="w-full object-cover h-full aspect-square" height={1000} width={1000} />
            <div className="absolute bottom-0 p-4 text-white z-20 space-y-3">
                <Image src={"/images/icons/white-stars.png"} alt="star image" width={1000} height={1000} className="h-full object-cover w-[70%]" />
                <p className="uppercase text-xs font-medium">{name}</p>
                <p className="text-2xl font-prata">$ {price}</p>
            </div>
        </div>

    )
}

export default PricingCard