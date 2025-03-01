import Container from "@/components/ui/Container";
import { cx } from "class-variance-authority";
import React from "react";
import DayCard from "./DayCard";
import { ICruise } from "@/types/cruise";

type propsDaySection = {
	title: string;
	destinations: ICruise["destination"];
};

const DaySection: React.FC<propsDaySection> = ({ title, destinations }) => {
	// const destinations = [
	// 	{
	// 		title: "Day 1: Palangka Raya – Pulau Kaja – Bukit Rawi (L/D)",
	// 		desc: "Begin your adventure in Palangka Raya with a visit to Pulau Kaja, where rehabilitating orangutans live in a protected island habitat. Then visit BOS’s Education Centre to learn about ongoing conservation efforts. After a short cruise through Palangka Raya and a cultural visit to Bukit Rawi, settle in for the night on board the Rahai’i Pangun.",
	// 		img: "/images/palangkaraya.png",
	// 	},
	// 	{
	// 		title: "Day 2: Begantung Lake – Tumbang Nusa Village (B/L/D)",
	// 		desc: "Explore the unique blackwater Lake Bagantung in a motorized canoe, observing birdlife and local fishing activities. Then cruise downstream to Tumbang Nusa village to learn about traditional crafts like rush weaving. Spend the night in a quiet mooring spot.",
	// 		img: "/images/pasar-apung.png",
	// 	},
	// 	{
	// 		title: "Day 3: Pilang Village – Cultural Experiences (B/L/D)",
	// 		desc: "At Pilang village, discover traditional livelihoods like rubber tapping, rattan harvesting, and rattan weaving. Enjoy tea and traditional cakes while listening to Kacapi music performed by local musicians. Cruise upstream and moor overnight.",
	// 		img: "/images/people/woman3.png",
	// 	},
	// 	{
	// 		title: "Day 4: Sebangau National Park – Departure to Bali (B/L)",
	// 		desc: "After breakfast, explore Sebangau National Park’s lush peat swamp forest, guided by a National Park Ranger. In the afternoon, transfer back to Palangka Raya for your flight to Bali, where you’ll check into your hotel for the night.",
	// 		img: "/images/nature/swamp.png",
	// 	},
	// ];

	return (
		<Container className="space-y-12 lg:space-y-28">
			<div className={cx("text-center flex flex-col justify-center items-center gap-8")}>
				<p className={cx("font-semibold w-full lg:text-base")}>Days 1 - {destinations?.length}</p>
				<p className={cx("font-prata w-full text-subtitle")}>{title}</p>
			</div>
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
				{destinations?.map((data, index) => (
					<DayCard data={data} key={index} />
				))}
			</div>
		</Container>
	);
};

export default DaySection;
