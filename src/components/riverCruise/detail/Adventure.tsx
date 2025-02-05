import Container from '@/components/ui/Container'
import { cx } from 'class-variance-authority'
import React from 'react'
import AdventureCard from './AdventureCard'

const Adventure = () => {
    const datas = [
        {
            title: "Orangutan Encounters",
            desc: "Observe orangutans at Pulau Kaja, Tanjung Harapan, and Camp Leakey in their natural habitats.",
            img: "/images/wildlife/orangutan5.png"
        },
        {
            title: "Marine Life Up Close",
            desc: "Swim with manta rays, whale sharks, sea turtles, and explore Komodo’s vibrant coral reefs.",
            img: "/images/nature/sea2.png"
        },
        {
            title: "Cultural Immersion",
            desc: "Participate in Dayak traditions in Borneo and witness a Caci dance performance on Flores Island.",
            img: "/images/people/woman5.png"
        },
    ]
    return (
        <Container className='space-y-20 pt-2'>
            <div className="space-y-4 lg:flex lg:items-end lg:gap-14">
                <p className={cx("font-prata text-subtitle")}>
                    What Awaits You on the Ultimate Adventure
                </p>
                <p className="text-description lg:w-[100%]">
                    Copy here vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.                </p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {datas.map((data, index) => (
                    <AdventureCard data={data} key={index}/>
                ))}
            </div>
        </Container>
    )
}

export default Adventure