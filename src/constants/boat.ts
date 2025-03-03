import { IBoat } from "@/types/boat";

export const BOAT: IBoat[] = [
	{
		// Rahai’i Pangun
		name: "Rahai’i Pangun",
		slug: "rahai-pangun",
		title: "Tradition Meets Modern Comfort on the Kahayan River",
		description: "Step aboard Rahai’i Pangun, Wow Borneo’s flagship cruiser, where the charm of Kalimantan’s riverboats meets the comforts of modern amenities. This beautifully crafted vessel invites you to glide along the tranquil waters of the jungle, immersing yourself in the captivating scenery and rare wildlife that define Borneo’s magic. Designed with spacious decks and air-conditioned cabins, Rahai’i Pangun provides an intimate, peaceful journey for nature lovers looking to relax in style and connect with the beauty of Kalimantan and meet the indigenous people who have made this watery world their home.",
		cover: "/images/boats/rahai.jpeg",
		abouts: [
			{
				id: 1,
				title: "A Unique Heritage Vessel",
				description: "Formerly known as a bis air by the local Dayak community, the Rahai’i Pangun was a traditional riverboat carrying a cargo of people and goods up and down the river. Today, this 22 x 6 meter vessel has been thoughtfully converted into a comfortable and eco-friendly cruiser, designed by master Indonesian boat builders. Crafted with local expertise and outfitted with modern comforts, Rahai’i Pangun is a one-of-a-kind experience that offers a serene way to explore Borneo’s jungles.",
			},
			{
				id: 2,
				title: "Comfortable and Inviting Cabins",
				description: "Rahai’i Pangun has four air-conditioned cabins, thoughtfully designed to enhance your comfort during the journey. Choose between two Superior Large Cabins and two Double Cabins, each with private ensuite facilities. You’ll find everything you need for a restful stay, from cozy innerspring mattresses and soft linens to basic toiletries and towels. Slide open the windows to let in the fresh jungle air or close them with mosquito netting for a peaceful night’s sleep.",
			},
		],
		experiences: [
			{
				id: 1,
				title: "Relaxation on the Upper Deck",
				description: "The upper deck is where the magic unfolds. Relax on comfortable sofas and deck chairs as you take in the ever-changing views of the rainforest and tiny river villages. This is also where our talented cooks serve meals, each dish a blend of local flavors that reflect the culinary richness of Kalimantan. Whether you’re sipping coffee in the morning mist or enjoying a sunset dinner, the deck offers an uninterrupted view of Borneo’s natural wonders.",
				cover: "/images/boats/exterior/boat2.png",
			},
			{
				id: 2,
				title: "Amenities to Enhance Your Journey",
				description: "Every detail onboard has been crafted to make your journey unforgettable. Charge your camera or phone with ease—each cabin and the viewing deck are equipped with power outlets. In case of rain, the deck has waterproof blinds with clear inserts, so you can enjoy the scenery in all weather. You’ll find everything you need on board, from reading lights in the cabins to essential toiletries, ensuring you have a comfortable and convenient stay.",
				cover: "/images/boats/interior/amenities.png",
			},
		],
		cruise: {
			text: "The Rahai’i Pangun sets sail on scheduled cruises every Saturday and Tuesday from Palangka Raya harbor, beginning at 8:30 AM. The nearest airport is Palangka Raya, making it easy to start your journey into the heart of Borneo.",
			cruises: [
				{
					title: "Orangutan and Dayak Village Cruise",
					days: 3,
					night: 2,
					price: "USD 1,199 – 1,369 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Orangutan and Dayak Village Cruise",
					days: 4,
					night: 3,
					price: "USD 1,524 – 1,789 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Orangutan and Dayak Village Cruise",
					days: 5,
					night: 4,
					price: "USD 1,861 – 2,149 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
			],
		},
		deck: {
			title: "Experience the Rahai’i Pangun Difference",
			image: "/images/boats/boat-deck.png",
			description: "At Wow Borneo, we believe that the journey is just as important as the destination. With the Rahai’i Pangun, you’ll enjoy not only the sights but the sounds and stories of Borneo’s jungle. Our English-speaking guides and dedicated crew are here to make sure that every moment of your adventure is as magical as the surroundings. From jungle sightings to cultural encounters, this journey promises memories that will stay with you long after the cruise ends.",
		},
		facilities: [],
	},
	{
		// Sekonyer
		name: "Sekonyer",
		slug: "sekonyer",
		title: "Sekonyer: An Authentic Jungle Journey Aboard a Traditional Bornean Klotok",
		description: "Welcome aboard Sekonyer, a beautifully crafted traditional klotok boat that captures the spirit of Kalimantan’s rivers. Designed for intimate journeys through Borneo’s hidden waterways, this 18-meter vessel blends local craftsmanship with thoughtful amenities. Whether you’re here to encounter Borneo’s rare wildlife or simply unwind amidst nature, Sekonyer offers an authentic and cozy experience, surrounded by the sights and sounds of the jungle.",
		cover: "/images/boats/sekuyer.jpeg",
		abouts: [
			{
				id: 1,
				title: "A Traditional Vessel with a Modern Touch",
				description: "The Sekonyer’s classic klotok hull embodies the rich heritage of Borneo’s riverboats. At 18 meters long and 3 meters wide, this vessel is thoughtfully outfitted to ensure your comfort on the water. With its open-air design and cozy interiors, Sekonyer invites you to experience the jungles of Kalimantan as they were meant to be explored—up close and immersed in nature.",
			},
			{
				id: 2,
				title: "Comfortable, Air-Conditioned Cabins",
				description: "Onboard Sekonyer, you’ll find three air-conditioned cabins, each equipped with a Double bed and ensuite bathroom featuring western-style toilets. Every cabin includes essentials like innerspring mattresses, soft linens, reading lights, and basic toiletries. The cabin windows are fitted with mosquito netting and sliding shutters for added privacy, giving you a restful retreat to relax after a day’s exploration.",
			},
		],
		experiences: [
			{
				id: 1,
				title: "Uninterrupted Views on the Upper Deck",
				description: "Sekonyer’s open upper deck is the perfect space to take in the natural beauty surrounding you. Furnished with rattan sofas and a dinner table, the deck provides a welcoming spot to dine, unwind, and absorb the jungle atmosphere. Watch the riverbanks for glimpses of local wildlife or savor a delicious meal as the forest scenery drifts by. With every moment, you’ll feel a deeper connection to the wonders of Borneo.",
				cover: "/images/boats/exterior/boat2.png",
			},
			{
				id: 2,
				title: "Convenient Amenities for a Seamless Journey",
				description: "On Sekonyer, every aspect of your comfort has been carefully considered. The deck is fitted with waterproof blinds and clear inserts to keep you connected with the outdoors, even in the rain. Power outlets are available in all cabins and on the viewing deck, so you can keep your devices charged for capturing the experience. From comfortable seating to essential onboard supplies, Sekonyer ensures your journey is as enjoyable as it is authentic.",
				cover: "/images/boats/interior/amenities.png",
			},
		],
		cruise: {
			text: "Embark on a journey into Borneo’s untouched jungles with Sekonyer. Cruises depart from Kumai harbor every Saturday and Tuesday at 10:00 AM, and the nearest airport is in Pangkalan Bun. These departures make it convenient to begin your adventure into Kalimantan’s lush wilderness.",
			cruises: [
				{
					title: "Orangutan Tour in Tanjung Puting National Park",
					days: 3,
					night: 2,
					price: "USD 1,031 – 1,128 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Orangutan Tour in Tanjung Puting National Park",
					days: 4,
					night: 3,
					price: "USD 1,430 – 1,561 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Orangutan Tour in Tanjung Puting National Park",
					days: 5,
					night: 4,
					price: "USD 1,719 – 1,873 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
			],
		},
		deck: {
			title: "Experience Sekonyer’s Unique Charm",
			image: "/images/boats/boat-deck.png",
			description: "Sekonyer offers a rare blend of tradition and comfort, allowing you to explore Borneo’s jungle in a way that feels both immersive and effortless. Led by our friendly crew and knowledgeable, English-speaking guide, you’ll witness the magic of the rainforest and connect with the unique rhythms of river life. Step aboard Sekonyer and let Borneo’s enchanting landscape captivate you.",
		},
		facilities: [],
	},
	{
		// Kumai
		name: "Kumai",
		slug: "kumai",
		title: "Kumai: A New Era of Eco-Conscious Exploration in Borneo’s Heart",
		description: "Step aboard Kumai, a recent addition to Wow Borneo’s fleet and a vessel dedicated to eco-conscious travel. Powered by solar energy, Kumai combines innovative design with the charm of a traditional Kalimantan riverboat, offering an intimate and responsible way to explore Borneo’s majestic landscapes. With comfortable viewing spaces and modern amenities, Kumai invites you to experience Borneo’s wilderness with minimal impact and maximum wonder.",
		cover: "/images/boats/kumai.jpeg",
		abouts: [
			{
				id: 1,
				title: "Eco-Friendly Innovation and Local Craftsmanship",
				description: "Named after the river it calls home, Kumai was once a high-prowed fishing boat. Today, it has been thoughtfully remodeled by skilled Bugis boatbuilders to provide a unique, eco-friendly experience. At 19.5 meters in length and 3.8 meters wide, Kumai accommodates up to six guests, making it the perfect choice for small groups and couples looking for a private adventure. With solar-powered air conditioning and sustainable features, this boat represents a new era of river exploration in Kalimantan.",
			},
			{
				id: 2,
				title: "Comfortable and Private Cabins",
				description: "Kumai’s three air-conditioned cabins are designed to offer comfort and privacy. Choose from a Superior Large Cabin with a private terrace on the bow, plus a Double cabin and a Twin cabin—all with an ensuite bathroom. Every cabin features innerspring mattresses, soft linens, reading lights, and essential toiletries. With mosquito netting and sliding shutters on the windows, your cabin provides a restful retreat for your jungle journey.",
			},
		],
		experiences: [
			{
				id: 1,
				title: "A Cozy Deck for Relaxing and Exploring",
				description: "The deck on Kumai is the heart of your experience, where you can unwind on rattan sofas and sun loungers as the sights and sounds of Borneo unfold around you. The open design allows for panoramic views, whether you’re watching wildlife along the riverbanks or enjoying a meal prepared by our talented onboard cook. With every passing moment, Kumai brings you closer to the essence of Kalimantan’s untamed beauty.",
				cover: "/images/boats/exterior/boat2.png",
			},
			{
				id: 2,
				title: "Thoughtful Amenities for a Seamless Journey",
				description: "Every detail on Kumai is crafted to make your journey effortless. The deck is equipped with waterproof blinds and clear inserts to ensure comfort even during rainy periods, and power outlets are available throughout the boat to keep your devices charged. Whether you’re relaxing in your cabin or soaking in the views from the deck, Kumai provides all the essentials for a comfortable and eco-friendly adventure.",
				cover: "/images/boats/interior/amenities.png",
			},
		],
		cruise: {
			text: "Begin your journey on Kumai with scheduled departures from Kumai harbor every Saturday and Tuesday at 10:00 AM. The nearest airport is in Pangkalan Bun, offering easy access to this starting point for your river adventure.",
			cruises: [
				{
					title: "Orangutan Tour in Tanjung Puting National Park",
					days: 3,
					night: 2,
					price: "USD 1,031 – 1,128 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Orangutan Tour in Tanjung Puting National Park",
					days: 4,
					night: 3,
					price: "USD 1,430 – 1,561 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Orangutan Tour in Tanjung Puting National Park",
					days: 5,
					night: 4,
					price: "USD 1,719 – 1,873 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
			],
		},
		deck: {
			title: "Discover Kumai: Adventure with a Lighter Footprint",
			image: "/images/boats/boat-deck.png",
			description: "Kumai offers more than just an eco-friendly way to travel—it’s an invitation to connect with nature responsibly. Led by experienced English-speaking guides and supported by a dedicated crew, your journey on Kumai is as enriching as it is relaxing. Join us aboard Kumai and let this unique vessel take you deeper into the heart of Borneo, where each day reveals a new story of the jungle.",
		},
		facilities: [],
	},
	{
		// The Spirit of Kalimantan
		name: "The Spirit of Kalimantan",
		slug: "the-spirit-of-kalimantan",
		title: "The Spirit of Kalimantan: A Luxurious Journey through Borneo’s Hidden Rivers",
		description: "Embark on a journey along the remote Katingan River aboard The Spirit of Kalimantan, a vessel that combines elegance, comfort, and adventure. This beautifully crafted boat invites you to experience one of Borneo’s great rivers with unmatched style, offering panoramic views, gourmet meals, and exclusive access to some of Kalimantan’s most stunning natural sites. As you sail through lush jungles and along tranquil riverbanks, every moment becomes part of an unforgettable adventure into Borneo’s heart.",
		cover: "/images/boats/hero-home.jpeg",
		abouts: [
			{
				id: 1,
				title: "A Fusion of Luxury and Local Tradition",
				description: "The Spirit of Kalimantan is a luxurious 4-cabin cruiser that brings together the best of Bornean tradition and modern indulgence. With spacious interiors and a comfortable, fully screened saloon, this boat is designed for those who seek both relaxation and discovery. Onboard, you’ll find thoughtful touches and stylish amenities that make each journey feel like a retreat into nature, without sacrificing the comforts of home.",
			},
			{
				id: 2,
				title: "Elegantly Appointed Cabins",
				description: "Below deck, The Spirit of Kalimantan offers four air-conditioned and ensuite cabins, each fitted with plush bedding, fresh linens, and toiletries. Whether you’re winding down after a day of exploration or waking up to the sounds of the jungle, your cabin provides a tranquil haven. Sliding shutters and mosquito netting on the windows ensure privacy and peace, allowing you to be fully immersed in the serene surroundings.",
			},
		],
		experiences: [
			{
				id: 1,
				title: "Scenic Views from Every Angle",
				description: "Relax in the screened saloon, where comfortable sofas provide an ideal spot to watch the river glide by. For those who prefer open-air vistas, the covered deck and rooftop offer expansive views of Borneo’s landscape, making every moment a chance to connect with nature. Enjoy your meals onboard as you travel, with each dish carefully prepared to reflect Kalimantan’s rich flavors and culinary traditions.",
				cover: "/images/boats/exterior/boat2.png",
			},
			{
				id: 2,
				title: "Conveniences to Enhance Your Adventure",
				description: "Designed with your comfort in mind, The Spirit of Kalimantan includes all the conveniences you need for a seamless journey. The boat is equipped with power outlets in every cabin and the communal area, allowing you to keep your devices charged. With waterproof blinds on the deck for rainy days and easy access to essentials throughout the boat, every detail has been thoughtfully included to make your experience as smooth and enjoyable as possible.",
				cover: "/images/boats/exterior/boat2.png",
			},
		],
		cruise: {
			text: "Join The Spirit of Kalimantan for an intimate journey into Kalimantan’s unspoiled landscapes. Departures are scheduled from Palangka Raya every Saturday and Tuesday, allowing you to begin your adventure with ease. The nearest airport is Palangka Raya, making it convenient to reach this pristine area of Borneo.",
			cruises: [
				{
					title: "Katingan River Cruise",
					days: 3,
					night: 2,
					price: "USD 1,128 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Katingan River Cruise",
					days: 4,
					night: 3,
					price: "USD 1,561 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
				{
					title: "Katingan River Cruise",
					days: 5,
					night: 4,
					price: "USD 1,873 per person",
					cover: "/images/wildlife/orangutan2.png",
				},
			],
		},
		deck: {
			title: "The Spirit of Kalimantan: A Journey Beyond the Ordinary",
			image: "/images/boats/boat-deck.png",
			description: "With The Spirit of Kalimantan, every aspect of your journey is designed to inspire and captivate. From guided walks into Sebangau National Park, bird watching excursions and visits to Dayak villages, to moments of pure tranquility on deck, this experience offers an intimate view of Borneo’s diverse wildlife, landscapes and cultures. Join us for a journey that is as enlightening as it is enchanting, where every day brings a new perspective on the wonders of Kalimantan.",
		},
		facilities: [],
	},
];
