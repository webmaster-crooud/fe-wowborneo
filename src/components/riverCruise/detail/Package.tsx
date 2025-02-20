import Container from '@/components/ui/Container'
import GradientImage from '@/components/ui/GradientImage'
import { cx } from 'class-variance-authority'
import React from 'react'
import DetailItem from './DetailItem'
import Button from '@/components/button'

const Package = () => {
    const benefits = [
        {
            title: "Accommodation",
            desc: "Riverboat in Borneo, SeaTrek boat in Komodo, and Bali hotel stay."
        },
        {
            title: "Meals & Refreshments",
            desc: "All meals during the tour, prepared with fresh, local ingredients."
        },
        {
            title: "Guided Activities",
            desc: "Expert guides lead all cultural and nature-focused activities."
        },
        {
            title: "Transfers",
            desc: "Includes all transfers, flights, and local transport."
        },
    ]

    const informations = [
        {
            title: "Duration",
            desc: "14 days, 13 nights"
        },
        {
            title: "Start & End Location",
            desc: "Palangka Raya and Labuan Bajo"
        },
        {
            title: "Best for",
            desc: "Adventurous travelers, marine enthusiasts, and wildlife lovers."
        },
        {
            title: "What to Bring",
            desc: "Comfortable walking shoes, lightweight clothing, sun protection, snorkel gear, and an adventurous spirit."
        },
        {
            title: "Please Note",
            desc: "Itineraries may vary based on seasonal conditions to ensure the best experience."
        },
    ]
    return (
        <div className='space-y-20 mb-20'>
            <Container className='sm:px-0 py-2'>
                <div className={cx("w-full h-full relative space-y-6 sm:space-y-0 sm:px-0")}>
                    <div
                        className={cx(
                            "z-20 flex flex-col w-full gap-10 h-full text-center sm:absolute sm:items-center sm:justify-center sm:text-white sm:px-16"
                        )}
                    >
                        <p className={cx("font-prata text-subtitle")}>
                            Package Inclusions and Price
                        </p>
                    </div>
                    <div
                        className={cx("hidden absolute top-0 z-10 w-full h-full bg-black/50 sm:block")}
                    ></div>
                    <div className="aspect-video w-full">
                        <GradientImage src="/images/nature/river5.png" className="rounded-lg sm:rounded-none" />
                    </div>
                </div>
            </Container>
            <div className='space-y-10'>
                <Container
                    className={cx(
                        "text-left flex flex-col gap-32-d justify-center py-2 items-center lg:text-center"
                    )}
                >
                    <p className={cx("font-prata text-subtitle w-full")}>
                        Starting from US$ 7,990 per person
                    </p>
                    <p className="text-description lg:w-[70%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Container>
                <Container className='flex flex-col gap-6 py-2 xl:px-72'>
                    {benefits.map((benefit, index) => (
                        <DetailItem key={index} desc={benefit.desc} title={benefit.title} />
                    ))}
                </Container>
            </div>
            <div className='space-y-10'>
                <Container className='py-2'>
                    <div
                        className={cx(
                            "text-left flex flex-col gap-32-d justify-center items-center lg:text-center"
                        )}
                    >
                        <p className={cx("uppercase font-semibold w-full lg:text-base")}>
                            Know Before You Go
                        </p>
                        <p className={cx("font-prata text-2xl w-full")}>
                            Ready for the ultimate Indonesian adventure? Book now and embark on an unforgettable journey through Borneo’s jungles and Komodo’s pristine waters.
                        </p>
                    </div>
                </Container>
                <Container className='flex flex-col gap-6 py-2 xl:px-72'>
                    {informations.map((information, index) => (
                        <DetailItem key={index} desc={information.desc} title={information.title} />
                    ))}
                    <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-full mx-auto">
                        Book the Ultimate Adventure
                    </Button>
                </Container>
            </div>
        </div>
    )
}

export default Package