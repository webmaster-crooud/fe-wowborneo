import Button from '@/components/ui/button'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
    return (
        <Container className='space-y-6 pt-1'>
            <div>
                <Image src={"/images/boats/detail/Fleet Img.png"} alt='ship image' width={1000} height={1000} className='w-full h-full' />
            </div>
            <div className='flex w-full flex-col gap-6 sm:text-center lg:items-center'>
                <h6 className='text-xl font-semibold sm:text-3xl'>Experience the Rahai’i Pangun Difference</h6>
                <p className='sm:text-base lg:w-[70%]'>At Wow Borneo, we believe that the journey is just as important as the destination. With Rahai’i Pangun, you’ll enjoy not only the sights but the sounds and stories of Borneo’s jungle. Our English-speaking guides and dedicated crew are here to make sure every moment of your adventure is as magical as the surroundings. From jungle sightings to cultural encounters, this journey promises memories that will stay with you long after the cruise ends.</p>
                <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
                    Start Your Journey with Rahai’i Pangun
                </Button>
            </div>
        </Container>
    )
}

export default Experience