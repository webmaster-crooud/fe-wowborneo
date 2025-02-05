import React from 'react'
import Container from '../ui/Container'
import { cx } from 'class-variance-authority'
import PricingCard from './PricingCard'

const BookYourAdventure = () => {
    const datas = [
        {
            name: "Orangutan Tour and Dayak Village",
            price: "2,000",
            img: "/images/people/family5.png"
        },
        {
            name: "Trip name goes here",
            price: "3,000",
            img: "/images/wildlife/orangutan6.png"

        },
        {
            name: "Long House and Dayak Village Trip",
            price: "1,250",
            img: "/images/people/woman4.png"

        },
    ]

    return (
        <Container>
            <div className='flex flex-col gap-6'>
                <div className={cx("flex gap-6 flex-col md:text-center lg:flex-row lg:text-left lg:items-end")}>
                    <div className={cx("w-full space-y-8")}>
                        <p>JOURNEY WITH US</p>
                        <p className={cx("font-prata text-subtitle")}>
                            Book Your Adventure
                        </p>
                    </div>
                    <p className="text-description">
                        Ready to experience the magic of Borneo? Book your journey today and step into an unforgettable adventure along Kalimantan’s rivers.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {datas.map((data) => (
                        <PricingCard name={data.name} price={data.price} img={data.img}/>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default BookYourAdventure