import Container from '@/components/ui/Container'
import { cx } from 'class-variance-authority'
import React from 'react'
import CruiseOptionCard from './CruiseOptionCard'

const CruiseOption = () => {
    const datas = [
        {
            name: "City Tour and Dayak Village",
            tripDuration: "5 Days/ 4 Nights",
            price: "899",
            img: "/images/people/man4.png"
        },
        {
            name: "Orangutan and Dayak Village Cruise",
            tripDuration: "5 Days/ 4 Nights",
            price: "2,199",
            img: "/images/wildlife/orangutan2.png"
            
        },
        {
            name: "Dayak Village and Camp Lakey",
            tripDuration: "5 Days/ 4 Nights",
            price: "1,199",
            img: "/images/people/family5.png"

        },
    ]

    return (
        <Container>
            <div className='flex flex-col gap-6'>
                <div className={cx("flex gap-6 flex-col md:text-center lg:flex-row lg:text-left lg:items-end lg:gap-20")}>
                    <div className={cx("w-full space-y-8")}>
                        <p>Cruise OPTION</p>
                        <p className={cx("font-prata text-subtitle")}>
                            Scheduled Departures From Palangka Raya
                        </p>
                    </div>
                    <p className="text-description">
                        The Rahai’i Pangun sets sail on scheduled cruises every Saturday and Tuesday from Palangka Raya harbor, beginning at 8:30 AM. The nearest airport is Palangka Raya, making it easy to start your journey into the heart of Borneo.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {datas.map((data) => (
                        <CruiseOptionCard key={data.img} name={data.name} tripDuration={data.tripDuration} price={data.price} img={data.img} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default CruiseOption