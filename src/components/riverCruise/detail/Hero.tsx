import Button from '@/components/ui/button'
import GradientImage from '@/components/ui/GradientImage'
import { cx } from 'class-variance-authority'
import React from 'react'

const Hero = () => {
    return (
        <div
            className={cx(
                "w-full landscape:min-lg:h-[120vh] relative",
                "h-[75vh]",
                "fullscreen"
            )}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            <div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-10">
                <p className={cx("text-sm text-center font-semibold md:text-base lg:text-lg")}>
                    river cruise - Ultimate Adventure
                </p>
                <p className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>
                    Seatrek Bali & Wow Borneo (14D13N)
                </p>
                <p className={cx("text-description leading-tight text-center lg:w-[80%]")}>
                    A 14-day expedition that combines Borneo’s vibrant jungles and iconic orangutan encounters with Bali and Komodo’s stunning underwater worlds and pristine islands. This is the ultimate journey for explorers seeking the best of Indonesia’s natural and cultural wonders.
                </p>
                <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
                    Explore The Cruise
                </Button>
            </div>

            <GradientImage src="/images/nature/sea.png" className="" />
        </div>
    )
}

export default Hero