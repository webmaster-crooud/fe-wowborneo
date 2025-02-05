import React from 'react'
import Button from '../ui/button'
import Container from '../ui/Container'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    const data = [
        {
            img: "/images/homepage/experience/experience-2.png",
            title: "Central Borneo",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..."
        },
        {
            img: "/images/homepage/experience/experience-1.png",
            title: "Pangkalan Bun",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..."
        },
        {
            img: "/images/explore/nature/dayak-culture.jpeg",
            title: "Dayak Culture",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..."
        }
    ]

    return (
        <Container className='w-full py-2 grid grid-cols-1 gap-12 xl:grid-cols-3'>
            <div className="flex flex-col gap-4 justify-center items-center text-center sm:text-left sm:items-start xl:h-full xl:gap-10">
                <span className="text-sm font-bold tracking-wider w-full">
                    EXPLORE
                </span>
                <h2 className="font-prata w-full font-normal leading-[3rem] text-4xl">
                    Experiences Borneo
                </h2>
                <p className="text-xs sm:text-sm text-[#372817] md:text-base">
                    From close encounters with orangutans to exploring the cultural heritage of the Dayak people, our experiences are crafted to inspire, educate, and connect you to the heart of Borneo.
                </p>
                <Button className="text-16-d hover:shadow-lg hover:scale-105 transition w-fit">
                    See All Experiences
                </Button>
            </div>
            <div className='flex flex-col gap-8 xl:col-span-2'>
                {data.map((item) => (
                    <ExperienceCard item={item}/>
                ))}
            </div>
        </Container>
    )
}

export default Experience