import Container from '@/components/ui/Container'
import { cx } from 'class-variance-authority'
import React from 'react'
import DayCard from './DayCard'

const DaySection = () => {
    const tripFirstFourDays = [
        {
            title: "Day 1: Palangka Raya – Pulau Kaja – Bukit Rawi (L/D)",
            desc: "Begin your adventure in Palangka Raya with a visit to Pulau Kaja, where rehabilitating orangutans live in a protected island habitat. Then visit BOS’s Education Centre to learn about ongoing conservation efforts. After a short cruise through Palangka Raya and a cultural visit to Bukit Rawi, settle in for the night on board the Rahai’i Pangun.",
            img: "/images/palangkaraya.png"
        },
        {
            title: "Day 2: Begantung Lake – Tumbang Nusa Village (B/L/D)",
            desc: "Explore the unique blackwater Lake Bagantung in a motorized canoe, observing birdlife and local fishing activities. Then cruise downstream to Tumbang Nusa village to learn about traditional crafts like rush weaving. Spend the night in a quiet mooring spot.",
            img: "/images/pasar-apung.png"
        },
        {
            title: "Day 3: Pilang Village – Cultural Experiences (B/L/D)",
            desc: "At Pilang village, discover traditional livelihoods like rubber tapping, rattan harvesting, and rattan weaving. Enjoy tea and traditional cakes while listening to Kacapi music performed by local musicians. Cruise upstream and moor overnight.",
            img: "/images/people/woman3.png"
        },
        {
            title: "Day 4: Sebangau National Park – Departure to Bali (B/L)",
            desc: "After breakfast, explore Sebangau National Park’s lush peat swamp forest, guided by a National Park Ranger. In the afternoon, transfer back to Palangka Raya for your flight to Bali, where you’ll check into your hotel for the night.",
            img: "/images/nature/swamp.png"
        },
    ]

    const tripRemainingDays = [
        {
            title: "Days 5-6: Bali to Komodo – Manta Rays, Turtles & Komodo Dragons (B/L/D)",
            desc: "Fly to Komodo and board the SeaTrek boat, where you’ll explore Komodo Island, swim with manta rays and turtles, and enjoy vibrant coral reefs. Go ashore to observe the famous Komodo dragons in their natural habitat.",
            img: "/images/wildlife/komodo.png"
        },
        {
            title: "Days 7-8: Pink Beach & Volcanic Islands (B/L/D)",
            desc: "Spend the morning at a beautiful pink beach with sparkling coral sands, followed by a visit to a traditional village on a volcanic island. Swim, snorkel, and enjoy a beach BBQ under the stars, with entertainment provided by the talented crew.",
            img: "/images/wildlife/deer.png"
        },
        {
            title: "Days 9-10: Whale Sharks & Limestone Islands (B/L/D)",
            desc: "Swim with whale sharks in a remote bay before spending the day on a secluded limestone island, kayaking, snorkeling, and exploring karst formations. End the day with a visit to Labuan Aji village and a refreshing waterfall swim.",
            img: "/images/nature/sea.png"
        },
        {
            title: "Days 11-12: Snorkeling & Sunset Hikes (B/L/D)",
            desc: "Experience a unique snorkel in volcanic sands and explore Komodo’s coral reefs. Enjoy a sunset hike with views over the islands or explore Rinca Island to spot Komodo dragons and diverse wildlife.",
            img: "/images/people/man2.png"
        },
        {
            title: "Days 13-14: Farewell to Komodo (B/L)",
            desc: "On the final day, watch a traditional Caci whip dance in Melo Village before saying goodbye to the crew. Disembark and continue to your next destination.",
            img: "/images/people/family4.png"
        },
    ]

    return (
        <Container className='space-y-12 lg:space-y-28'>
            <div
                className={cx(
                    "text-center flex flex-col justify-center items-center gap-8"
                )}
            >
                <p className={cx("font-semibold w-full lg:text-base")}>Days 1-4</p>
                <p className={cx("font-prata w-full text-subtitle")}>
                    Borneo’s Rainforests and Rivers
                </p>
            </div>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                {tripFirstFourDays.map((data, index) => (
                    <DayCard data={data} key={index} />
                ))}
            </div>
            <div
                className={cx(
                    "text-center flex flex-col justify-center items-center gap-8"
                )}
            >
                <p className={cx("font-semibold w-full lg:text-base")}>Days 5-14</p>
                <p className={cx("font-prata w-full text-2xl sm:text-3xl lg:text-4xl")}>
                    Komodo and the Islands of Bali
                </p>
            </div>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                {tripRemainingDays.map((data, index) => (
                    <DayCard data={data} key={index} />
                ))}
            </div>
        </Container>
    )
}

export default DaySection