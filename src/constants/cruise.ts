import { ICruise } from "@/types/cruise";

export const cruiseData: ICruise[] = [
	{
		title: "Tanjung Puting Orangutan Explorer",
		slug: "tanjung-puting-orangutan-explorer",
		subHeading: "A 3-day, 2-night adventure into the heart of Tanjung Puting National Park, perfect for those looking to connect with nature and encounter orangutans in a compact yet enriching journey.",
		duration: "3D2N",
		price: "1,031",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "An Unforgettable Short Escape",
			text: "Short on time but big on adventure, the Tanjung Puting Orangutan Explorer is designed to give you a taste of Borneo’s wild beauty and unique wildlife. In just three days, explore the iconic Tanjung Puting National Park, home to one of the world’s largest populations of wild orangutans. Witness these incredible animals up close, explore lush rainforests, and unwind on peaceful river cruises.",
		},
		destinationText: "Each day of this itinerary offers a blend of discovery and relaxation, providing an authentic taste of Tanjung Puting’s incredible biodiversity.",
		destination: [
			{ id: 1, days: "1", description: "Begin your adventure with a morning pick-up and transfer to Kumai, where you’ll board your riverboat and begin cruising into Tanjung Puting National Park. As you glide along the river, keep an eye out for proboscis monkeys, macaques, and exotic birds. In the afternoon, visit the Tanjung Harapan rehabilitation center for your first encounter with the park’s beloved orangutans. Return to the boat for dinner and a peaceful night surrounded by jungle sounds.", title: "Arrival and First Encounters", cover: "/images/people/man4.png" },
			{ id: 2, days: "2", description: "Your second day begins with a scenic cruise to the famous Camp Leakey, a renowned orangutan research and rehabilitation center. Spend the day observing orangutans in their natural habitat and learning about ongoing conservation efforts. Enjoy a guided trek through the jungle, spotting diverse wildlife and absorbing the sights and sounds of the rainforest. End the day with a relaxing dinner on the boat.", title: "Camp Leakey and Jungle Exploration", cover: "/images/people/man3.png" },
			{ id: 3, days: "3", description: "On your final day, enjoy a leisurely morning cruise through the park, savoring your last moments in this incredible landscape. After breakfast, return to Kumai and transfer back to your hotel or onward travel arrangements, carrying with you unforgettable memories of Tanjung Puting.", title: "Morning Wildlife Cruise & Farewell", cover: "/images/people/man2.png" },
		],
		highlight: [
			{
				id: 1,
				title: "Orangutan Encounters at Tanjung Harapan and Camp Leakey",
				description: "Get close to these incredible creatures in their natural habitat, guided by experts passionate about their protection.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 2,
				title: "Scenic River Cruises",
				description: "Experience Borneo’s serene rivers as you journey through the rainforest, spotting proboscis monkeys, gibbons, and exotic bird species.",
				cover: "/images/pasar-apung.png",
			},
			{
				id: 3,
				title: "Short Yet Immersive Experience",
				description: "This 3-day tour is crafted for travelers seeking a fulfilling adventure in a short timeframe, balancing wildlife encounters with time to relax and reflect on board.",
				cover: "/images/people/woman3.png",
			},
		],
		included: [
			{
				title: "Accommodation",
				description: "Comfortable cabin accommodation on a traditional riverboat, designed for a relaxing, immersive experience.",
			},
			{
				title: "Meals & Refreshments",
				description: "All meals and refreshments are provided during the cruise, featuring local flavors and fresh ingredients.",
			},
			{
				title: "Guided Activities",
				description: "Tours, treks, and wildlife observation are led by knowledgeable guides committed to sharing Borneo’s wonders with you.",
			},
			{
				title: "Transfers",
				description: "Convenient transfers from your hotel or airport to the riverboat in Kumai.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "3 days, 2 nights",
			},
			{
				title: "Start & End Location",
				text: "Kumai",
			},
			{
				title: "Best for",
				text: "Nature lovers, wildlife enthusiasts, and travelers seeking a short but immersive experience.",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent, and a sense of adventure.",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary slightly based on seasonal river conditions, allowing for flexibility and the best possible experience.",
			},
		],
		cta: "Ready to embark on an unforgettable escape to Tanjung Puting? Reserve your spot on the Tanjung Puting Orangutan Explorer today and prepare to witness Borneo’s wonders up close.",
		description: "",
	},
	{
		title: "Orangutan Wilderness Safari",
		slug: "orangutan-wilderness-safari",
		subHeading: "A 4-day, 3-night safari into the heart of Tanjung Puting, where unforgettable orangutan encounters and breathtaking jungle landscapes await.",
		duration: "4D3N",
		price: "1,430",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "An Immersive Journey into the Wild",
			text: "For those who want to delve deeper into the wonders of Tanjung Puting, our Orangutan Wilderness Safari provides an immersive 4-day, 3-night experience. Discover the natural beauty of Borneo as you journey through one of its most iconic national parks, home to incredible biodiversity and wild orangutans. This safari combines river cruises, rainforest treks, and cultural encounters, offering a unique perspective on the magic of Tanjung Puting.",
		},
		destinationText: "With more time to explore, this 4-day adventure is designed to bring you closer to Borneo's wildlife and landscapes. Each day balances thrilling encounters with tranquil moments, creating an enriching experience.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Arrival and Scenic River Cruise",
				description: "Arrive in Kumai, where you'll board your traditional riverboat to begin your cruise into Tanjung Puting National Park. Relax and enjoy the passing scenery as you glide along the Sekonyer River, spotting wildlife such as proboscis monkeys, long-tailed macaques, and vibrant bird species. As dusk settles, anchor for the night amidst the jungle sounds, dining and sleeping comfortably on board.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 2,
				days: "2",
				title: "Camp Leakey and Surrounding Forest Exploration",
				description: "Begin the day with a cruise further into the park, arriving at the famous Camp Leakey, a pioneering orangutan research and rehabilitation center. Spend the afternoon observing orangutans during feeding times and taking a guided trek through the surrounding forest. Learn about the history of Camp Leakey and its role in orangutan conservation before returning to your boat for an evening surrounded by the sounds of the jungle.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 3,
				days: "3",
				title: "Pondok Tanggui and Jungle Trek",
				description: "Visit Pondok Tanggui, another rehabilitation center, to observe orangutans at a morning feeding. Then, explore deeper into the rainforest on a guided trek, where you'll have opportunities to spot other wildlife, including gibbons, hornbills, and other rare species. In the evening, relax with dinner on board and enjoy the tranquil river setting.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 4,
				days: "4",
				title: "Morning Cruise & Farewell",
				description: "Enjoy a final morning cruising through the park's scenic waterways. After breakfast, return to Kumai and transfer to your next destination, concluding your wilderness safari with unforgettable memories of Tanjung Puting.",
				cover: "/images/palangkaraya.png",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Multiple Orangutan Encounters",
				description: "Visit Tanjung Harapan, Camp Leakey, and Pondok Tanggui for unique opportunities to observe and learn about orangutans.",
				cover: "/",
			},
			{
				id: 2,
				title: "Guided Jungle Treks",
				description: "Venture into the rainforest with knowledgeable guides, discovering the intricate ecosystems of Tanjung Puting.",
				cover: "/",
			},
			{
				id: 3,
				title: "Serene River Cruises",
				description: "Spend extended time on Borneo's tranquil rivers, soaking in the beauty of the jungle from the comfort of your riverboat.",
				cover: "/",
			},
		],
		included: [
			{
				title: "Accommodation",
				description: "Comfortable cabin accommodation on a traditional riverboat, blending convenience with the unique atmosphere of the jungle.",
			},
			{
				title: "Meals & Refreshments",
				description: "All meals and refreshments provided during the safari, featuring local flavors and freshly prepared dishes.",
			},
			{
				title: "Guided Activities",
				description: "All excursions, treks, and wildlife observations led by experienced guides who bring Tanjung Puting's wonders to life.",
			},
			{
				title: "Transfers",
				description: "Convenient transfers to and from the boat at Kumai for a seamless travel experience.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "4 days, 3 nights",
			},
			{
				title: "Start & End Location",
				text: "Kumai",
			},
			{
				title: "Best for",
				text: "Adventurers, wildlife enthusiasts, and travelers seeking a comprehensive exploration of Tanjung Puting.",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent, and a curiosity for Borneo's wildlife.",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary slightly based on seasonal river conditions, allowing flexibility for the best possible experience.",
			},
		],
		cta: "Ready to immerse yourself in the wonders of Tanjung Puting? Reserve your spot on the Orangutan Wilderness Safari today and experience the wild heart of Borneo.",
		description: "",
	},
	{
		title: "Borneo's Wild Heart: Tanjung Puting Orangutan Adventure",
		slug: "borneos-wild-heart-tanjung-puting",
		subHeading: "A 5-day, 4-night adventure through the untouched rainforests of Tanjung Puting, offering a complete experience with Borneo's wildlife, waterways, and rich biodiversity.",
		duration: "5D4N",
		price: "1,799",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "Discover Borneo's Hidden Wilderness",
			text: "For those who wish to experience the true essence of Tanjung Puting, the Borneo's Wild Heart Adventure is a comprehensive journey that spans five days and four nights in one of Borneo's most remarkable national parks. Designed for travelers seeking a deeper connection with nature, this adventure combines intimate wildlife encounters, tranquil river cruises, and immersive jungle treks. Embark on an unforgettable exploration of Borneo's lush landscapes, where every moment reveals the beauty of Tanjung Puting's wilderness.",
		},
		destinationText: "Over five incredible days, this adventure provides the perfect blend of exploration and relaxation, offering ample time to connect with Borneo's vibrant ecosystems and fascinating wildlife.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Arrival and River Journey",
				description: "Begin your journey in Kumai, where you'll be welcomed aboard a traditional riverboat and introduced to the enchanting scenery of the Sekonyer River. As you cruise deeper into Tanjung Puting National Park, keep an eye out for proboscis monkeys, macaques, and hornbills. Enjoy a peaceful night anchored in the jungle, surrounded by the natural sounds of Borneo.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 2,
				days: "2",
				title: "Tanjung Harapan and Camp Leakey",
				description: "Spend the morning at Tanjung Harapan, where you'll witness orangutans in a natural feeding area and learn about local conservation efforts. Later, venture to Camp Leakey, a world-renowned orangutan research center, to observe orangutans and gain insights into ongoing conservation work. Return to your boat for an evening of relaxation on the river.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 3,
				days: "3",
				title: "Pondok Tanggui and Jungle Trekking",
				description: "Observe morning feedings at Pondok Tanggui rehabilitation center, followed by a guided jungle trek to discover Borneo's diverse flora and fauna. Spot gibbons, hornbills, and other unique wildlife before unwinding on the boat as the jungle comes alive around you.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 4,
				days: "4",
				title: "Deeper Into the Jungle",
				description: "Explore secluded parts of the park through cruising and jungle walks. Capture the serenity of Borneo's rivers and forests with a full day dedicated to wildlife observation and nature connection.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 5,
				days: "5",
				title: "Farewell to Tanjung Puting",
				description: "Savor a leisurely breakfast while returning along the river. Reflect on unforgettable experiences before disembarking in Kumai with lasting memories of Borneo's wild heart.",
				cover: "/images/palangkaraya.png",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Extended Orangutan Encounters",
				description: "Multiple stops at key conservation sites for rare, intimate interactions with orangutans.",
				cover: "/",
			},
			{
				id: 2,
				title: "Full Jungle Immersion",
				description: "Guided treks and river cruising through Tanjung Puting's pristine wilderness.",
				cover: "/",
			},
			{
				id: 3,
				title: "Deep Nature Connection",
				description: "Extended time to uncover Borneo's biodiversity with expert ecosystem insights.",
				cover: "/",
			},
		],
		included: [
			{
				title: "Accommodation",
				description: "Traditional riverboat cabin accommodation for immersive rainforest living.",
			},
			{
				title: "Meals & Refreshments",
				description: "Freshly prepared meals with local ingredients served throughout the journey.",
			},
			{
				title: "Guided Activities",
				description: "Orangutan observations and jungle treks led by knowledgeable guides.",
			},
			{
				title: "Transfers",
				description: "Seamless transfers from arrival in Kumai to the riverboat.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "5 days, 4 nights",
			},
			{
				title: "Start & End Location",
				text: "Kumai",
			},
			{
				title: "Best for",
				text: "Nature enthusiasts and travelers seeking in-depth exploration",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary based on seasonal river conditions",
			},
		],
		cta: "Ready to experience the wild heart of Borneo? Reserve your place on the Tanjung Puting Orangutan Adventure and prepare for five days of unforgettable exploration.",
		description: "",
	},
	{
		title: "Wild Borneo: Orangutans & Dayak Heritage Expedition",
		slug: "wild-borneo",
		subHeading: "A 3-day, 2-night adventure to experience the wonders of Borneo’s orangutans and Dayak culture – perfect for those seeking a short but memorable escape.",
		duration: "3D2N",
		price: "1,799",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "A Quick, Immersive Getaway",
			text: "In just three days, experience the highlights of Borneo’s pristine rainforests and the rich traditions of the Dayak people. The Wild Borneo Expedition is ideal for travelers with limited time who want to witness the magic of orangutans up close and immerse themselves in the warmth and heritage of the local community.",
		},
		destinationText: "Each day of this expedition is thoughtfully crafted to bring you closer to the heart of Borneo. From exhilarating wildlife encounters to peaceful cultural exchanges, here’s what awaits you on this 3-day journey.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Palangka Raya – Pulau Kaja – Rahai’i Pangun – Tanjung Pusaka",
				description: "Your journey begins in Palangka Raya, where you’ll meet at your hotel or the airport for an 8:30 am transfer to the village of Sei Gohong. Board a local canoe to observe orangutans on the forested island of Pulau Kaja, managed by the Borneo Orangutan Survival Foundation. Afterward, return to Palangka Raya harbor and board the Rahai’i Pangun to start your cruise. In the evening, visit Tanjung Pusaka village to witness traditional fishing and a martial arts demonstration by local schoolchildren before returning to the boat for an overnight stay.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 2,
				days: "2",
				title: "Tumbang Nusa – Purun Weaving & Village Visit",
				description: "Begin your day with a motorized canoe excursion to the blackwater Lake Bagantung, a unique peatland ecosystem where you’ll spot birds, wildlife, and observe traditional fishing. Continue your journey downstream to Tumbang Nusa village, where you’ll explore traditional livelihoods like purun (sedge) weaving and visit straw cooperatives. The boat will anchor overnight near forested islands, offering the chance for orangutan sightings.",
				cover: "/images/palangkaraya.png",
			},
			{
				id: 3,
				days: "3",
				title: "Pilang – Rattan Weaving – Departure",
				description: "Cruise to Pilang village, where a short forest walk will introduce you to rubber tapping, rattan harvesting, and local medicinal plants with a knowledgeable guide. Experience the art of rattan weaving and enjoy a traditional snack with a Kacapi performance before returning to the boat for lunch. Disembark at 2 pm and transfer back to your hotel or the airport.",
				cover: "/images/palangkaraya.png",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Close-Up Orangutan Encounters",
				description: "Observe these incredible creatures in their natural environment on Pulau Kaja, guided by experts dedicated to their preservation.",
				cover: "/",
			},
			{
				id: 2,
				title: "Authentic Dayak Cultural Experience",
				description: "Engage with Dayak villagers, witnessing traditional martial arts, weaving, and music, offering a rare window into their rich heritage.",
				cover: "/",
			},
			{
				id: 3,
				title: "Immersive, Short Getaway",
				description: "This 3-day journey is designed to provide a rich experience in a short timeframe – perfect for travelers who want a taste of Borneo without a long commitment.",
				cover: "/",
			},
		],

		included: [
			{
				title: "Comfortable Accommodation",
				description: "Cabin accommodation on the Rahai’i Pangun, blending comfort with a close-to-nature experience.",
			},
			{
				title: "Meals & Refreshments",
				description: "Enjoy a selection of delicious meals inspired by local flavors, prepared fresh on board.",
			},
			{
				title: "Guided Activities",
				description: "All tours, treks, and village visits are led by experienced, English-speaking guides dedicated to sharing the wonders of Borneo with you.",
			},
			{
				title: "Transfers",
				description: "Includes all airport and other transfers as indicated.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "3 days, 2 nights",
			},
			{
				title: "Start & End Location",
				text: "Palangka Raya",
			},
			{
				title: "Best for",
				text: "Nature lovers, cultural explorers, and travelers seeking a short, enriching experience.",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, and a sense of adventure.",
			},
			{
				title: "Please Note",
				text: "Itineraries are subject to seasonal river conditions. Dry season conditions may cause alterations, and private charter itineraries may be tailor-made to your interests.",
			},
		],
		cta: "Ready to embark on this wild and wonderful journey through Borneo’s rainforests and rivers? Reserve your spot on the Wild Borneo Expedition today and prepare to make unforgettable memories.",
		description: "",
	},
	{
		title: "Orangutan Odyssey & Dayak Traditions",
		slug: "orangutan-odyssey-dayak-traditions",
		subHeading: "A 5-day, 4-night odyssey into the heart of Borneo, combining breathtaking wildlife encounters with a deep dive into the cultural heritage of the Dayak people.",
		duration: "5D4N",
		price: "2,199",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "The Ultimate Borneo Adventure",
			text: "For those who wish to fully experience the wonders of Borneo, our Orangutan Odyssey & Dayak Traditions cruise offers a comprehensive journey. This 5-day, 4-night expedition provides extended opportunities for wildlife observation, cultural immersion, and peaceful exploration along Borneo’s iconic rivers. It’s an ideal choice for travelers who want to connect deeply with the land, the people, and the spirit of Kalimantan.",
		},
		destinationText: "Over five days, this adventure invites you to witness the beauty of Borneo's waterways and forests, offering unique wildlife encounters and authentic cultural interactions.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Palangka Raya – Orangutan Islands – Bukit Rawi",
				description: "Meet our team either at your hotel or upon arrival at the airport for an 8:30 am transfer to Sei Gohong. Board a canoe to observe orangutans on Pulau Kaja, managed by the Borneo Orangutan Survival Foundation (BOSF). After observing the orangutans, return to Palangka Raya and board the Rahai’i Pangun for a relaxing lunch cruise through the city. In the afternoon, take a short trip to the historic Dayak town of Sigi, where you’ll learn about Dayak religion, rituals, and admire painted totem poles marking the ossuaries. Return to the boat for dinner, and cruise upstream to moor overnight in a peaceful location.",
				cover: "/images/destinations/pulau-kaja.jpg",
			},
			{
				id: 2,
				days: "2",
				title: "Lake Begantung – Tumbang Nusa – Sedge Weaving",
				description: "Start the morning with a motorized canoe ride on Lake Bagantung, a blackwater lake surrounded by peatland swamp. Spot various birds and observe local villagers’ fishing activities. Return to the boat and continue downstream to Tumbang Nusa village, where you’ll witness traditional livelihoods, including grey sedge or ‘purun’ weaving. Later, visit the local honey farm before continuing downstream past Selat and Badak Islands, with a chance to spot orangutans. Tie up for the night in a secluded area.",
				cover: "/images/destinations/lake-begantung.jpg",
			},
			{
				id: 3,
				days: "3",
				title: "Pilang – Rattan Weaving",
				description: "Continue downstream to Pilang village early in the morning. Take a guided forest walk to observe traditional rubber tapping (Mamantat) and rattan harvesting (Manetes). Learn about the medicinal plants growing in the forest, followed by a visit to the village to witness rattan weaving and meet locals. Enjoy tea and Dayak cakes while listening to Kacapi music, a traditional two-stringed instrument. Return to the boat for lunch, then cruise upstream, passing the orangutan island once more. Tie up along the Nusa canal for an overnight stay.",
				cover: "/images/destinations/pilang-village.jpg",
			},
			{
				id: 4,
				days: "4",
				title: "Purun Island – Tanjung Pusaka – Cruising",
				description: "Set off upstream early to visit Purun Island. Take canoes from the nearest village to observe the water plant harvest used for weaving. Continue upstream to the village of Pusaka, where you can join a traditional self-defense exercise called shadow boxing. After saying farewell to the villagers, return to the boat and enjoy a tranquil overnight cruise.",
				cover: "/images/destinations/purun-island.jpg",
			},
			{
				id: 5,
				days: "5",
				title: "Sebangau National Park – Departure",
				description: "After breakfast, pack your bags and prepare for the final adventure in Sebangau National Park. Travel by car to Kereng Bangkirai village, then take a half-hour canoe ride across Lake Sebangau to the Koran River. Explore the National Park’s boardwalks, which allow close encounters with native flora and fauna, possibly including wild orangutans. After a picnic snack, return to Palangka Raya, where you’ll be transferred to your hotel or the airport, marking the end of your journey.",
				cover: "/images/destinations/sebangau-boardwalk.jpg",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Intimate Orangutan Encounters",
				description: "Spend ample time observing orangutans in their natural habitat, learning from conservationists about efforts to protect these incredible animals.",
				cover: "/",
			},
			{
				id: 2,
				title: "In-Depth Cultural Immersion",
				description: "Enjoy extended visits to Dayak villages, engaging in traditional martial arts, weaving, music, and more, offering a deeper connection to Borneo’s indigenous culture.",
				cover: "/",
			},
			{
				id: 3,
				title: "Serene Blackwater Lakes",
				description: "Explore Lake Bagantung and other tranquil spots, perfect for wildlife watching, photography, and quiet reflection.",
				cover: "/",
			},
		],
		included: [
			{
				title: "Accommodation",
				description: "Stay aboard the Rahai’i Pangun in comfortable cabins designed for a restful and immersive experience.",
			},
			{
				title: "Meals & Refreshments",
				description: "Savor meals and drinks prepared on board, featuring local flavors and fresh ingredients.",
			},
			{
				title: "Guided Activities",
				description: "All excursions and village visits are led by knowledgeable guides, providing insight into Borneo’s wildlife and culture.",
			},
			{
				title: "Transfers",
				description: "Convenient transfers from Palangka Raya’s airport or your hotel are included.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "5 days, 4 nights",
			},
			{
				title: "Start & End Location",
				text: "Palangka Raya",
			},
			{
				title: "Best for",
				text: "Adventurers, nature enthusiasts, and travelers seeking a deep cultural experience.",
			},
			{
				title: "What to Bring",
				text: "Comfortable footwear, lightweight clothing, sun protection, insect repellent, and a curiosity for Borneo’s wonders.",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary based on seasonal river conditions, allowing flexibility for the best possible experience.",
			},
		],
		cta: "Ready to embark on the ultimate Bornean journey? Reserve your spot on the Orangutan Odyssey & Dayak Traditions expedition and prepare to experience the heart of Borneo.",
		description: "",
	},
	{
		title: "Journey of the Jungle: Orangutans & Dayak Villages",
		slug: "journey-of-the-jungle-orangutans-dayak-villages",
		subHeading: "A 4-day, 3-night adventure through Borneo’s jungles, combining unforgettable wildlife encounters with an immersive cultural experience in Dayak villages.",
		duration: "4D3N",
		price: "1,524",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "A Deeper Exploration of Borneo",
			text: "If you’re looking for a deeper connection to Borneo, our Journey of the Jungle cruise is for you. Over four days, explore the rivers and rainforests of Kalimantan, observing orangutans in their natural habitat and engaging with the Dayak people, whose traditions and lifestyles are as vibrant as the jungle itself.",
		},
		destinationText: "Over four days, this journey will take you through the breathtaking landscapes of Borneo’s rivers and forests, offering unparalleled wildlife encounters and rich cultural experiences.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Palangka Raya – Pulau Kaja – Bukit Rawi",
				description: "Your journey begins with a transfer at 8:30 am from your hotel or the airport to the village of Sei Gohong. Board a canoe to visit Pulau Kaja, an island sanctuary managed by the Borneo Orangutan Survival Foundation, where you can observe orangutans in a natural setting. Return to Palangka Raya for lunch on the Rahai’i Pangun and a short cruise upstream. Next, travel to Bukit Rawi and Sigi to see the beautifully painted sandungs and receive a traditional Dayak welcome. Afterward, return to the boat and cruise downstream, mooring overnight in a peaceful location.",
				cover: "/",
			},
			{
				id: 2,
				days: "2",
				title: "Lake Begantung – Tumbang Nusa – Sedge Weaving",
				description: "Early in the morning, explore the blackwater Lake Bagantung by motorized canoe, observing the unique peatland swamp ecosystem and local fishing activities. Continue to Tumbang Nusa village, where you’ll see the traditional livelihoods of the Dayak people, including purun weaving and a local honey farm. The boat will continue downstream, passing forested Selat and Badak Islands, with a chance to spot orangutans. Moor overnight in a secluded area.",
				cover: "/",
			},
			{
				id: 3,
				days: "3",
				title: "Pilang – Rattan Weaving",
				description: "After breakfast, cruise to Pilang village for a short forest walk. Learn about rubber tapping and rattan harvesting from your guide, who will also introduce you to native medicinal plants. In the village, observe rattan weaving and enjoy traditional tea, coffee, and Dayak cakes while listening to Kacapi music. Return to the boat to escape the midday heat and cruise upstream, passing the orangutan island for a last glimpse, before mooring in a quiet area.",
				cover: "/",
			},
			{
				id: 4,
				days: "4",
				title: "Tanjung Pusaka – Cruise to Palangka Raya – Departure",
				description: "In the early morning, visit Tanjung Pusaka village for a demonstration of the traditional self-defense exercise, shadow boxing. Afterward, return to the boat for a final cruise back to Palangka Raya. Lunch is served on board, and the tour concludes with arrival at the port around 3 pm, where you’ll be transferred to the airport or your hotel.",
				cover: "/",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Orangutan Sightings",
				description: "Get close to Borneo’s iconic orangutans in a sanctuary environment, guided by experts in conservation.",
				cover: "/",
			},
			{
				id: 2,
				title: "Engaging Cultural Encounters",
				description: "Spend time in Dayak villages, where you’ll witness traditional martial arts, weaving, and music – offering a rare look into the Dayak way of life.",
				cover: "/",
			},
			{
				id: 3,
				title: "Scenic Lake Exploration",
				description: "Explore the peaceful blackwater lakes and peat swamp ecosystems unique to this region, brimming with diverse flora and fauna.",
				cover: "/",
			},
		],

		included: [
			{
				title: "Accommodation",
				description: "Comfortable cabin stays on the Rahai’i Pangun riverboat.",
			},
			{
				title: "Meals & Refreshments",
				description: "All meals and refreshments, featuring fresh local ingredients.",
			},
			{
				title: "Guided Activities",
				description: "Off-boat tours, cultural experiences, and wildlife observations led by knowledgeable guides.",
			},
			{
				title: "Transfers",
				description: "Convenient transfers from the airport or your hotel in Palangka Raya.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "4 days, 3 nights",
			},
			{
				title: "Start & End Location",
				text: "Palangka Raya",
			},
			{
				title: "Best for",
				text: "Adventurous travelers, nature lovers, and those seeking a cultural immersion experience.",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent, and a sense of curiosity.",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary slightly based on seasonal river conditions, ensuring a unique and adaptable adventure.",
			},
		],
		cta: "Ready to embark on this immersive jungle journey? Reserve your spot on the Journey of the Jungle expedition today and prepare for an unforgettable blend of adventure and culture.",
		description: "",
	},
	{
		title: "Sebangau Safari: Into the Heart of Borneo’s Wild Rivers",
		slug: "sebangau-safari-borneo",
		subHeading: "A 5-day, 4-night safari that brings you deep into Borneo’s pristine rivers and forests, from the Rungan River to the untouched landscapes of Sebangau National Park.",
		duration: "5D4N",
		price: "1,873",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "Journey into the Heart of Borneo’s Wilderness",
			text: "Embark on the Sebangau Safari, a five-day expedition into the wild heart of Borneo. From cruising along the Rungan and Klaru Rivers to exploring Sebangau’s dense peat-swamp forests, this safari offers the ultimate experience for travelers seeking deep immersion in Borneo’s rich ecosystems and local cultures.",
		},
		destinationText: "Over five days, this adventure invites you to witness the beauty of Borneo’s waterways and forests, offering unique wildlife encounters and authentic cultural interactions.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Orangutans on the Rungan River – Baun Bango",
				description: "Start your journey on the Rungan River, where you’ll visit a special area known for wild orangutans. Here, observe these remarkable animals in their natural habitat, guided by experts dedicated to their conservation. Later, cruise toward Baun Bango and enjoy a peaceful evening onboard your riverboat, surrounded by the serene sounds of the rainforest.",
				cover: "/images/destinations/rungan-river.jpg",
			},
			{
				id: 2,
				days: "2",
				title: "Lake Jelampangen – Jahanjang Village",
				description: "In the morning, visit the tranquil Lake Jelampangen, a beautiful spot for birdwatching and wildlife observation. After lunch, continue your journey to Jahanjang Village, where the Dayak community will welcome you with traditional hospitality. Stroll through the village, learning about their customs and lifestyle, before returning to the boat for a riverside dinner and overnight stay.",
				cover: "/images/destinations/lake-jelampangen.jpg",
			},
			{
				id: 3,
				days: "3",
				title: "Sebangau National Park Exploration",
				description: "Today, explore Sebangau National Park, known for its vast peat-swamp forest and incredible biodiversity. Set out on a guided trek through the park’s unique ecosystems, spotting a variety of flora and fauna, including wild orangutans, proboscis monkeys, and hornbills. Your expert guides will share insights into the conservation efforts that help protect this critical habitat.",
				cover: "/images/destinations/sebangau-park.jpg",
			},
			{
				id: 4,
				days: "4",
				title: "Telaga Village and Cultural Immersion",
				description: "Continue your adventure to Telaga Village, where you’ll have the opportunity to meet the local community and experience authentic Dayak culture. Enjoy a tour of the village, interact with residents, and witness traditional crafts and practices. Return to the riverboat for a memorable evening immersed in the natural surroundings.",
				cover: "/images/destinations/telaga-village.jpg",
			},
			{
				id: 5,
				days: "5",
				title: "Klaru River – Jahanjang Village – Return to Palangka Raya",
				description: "On your final day, begin with a morning cruise along the scenic Klaru River, enjoying the peaceful views and rich biodiversity of Borneo’s waterways. After a farewell visit to Jahanjang Village, return to Palangka Raya, taking with you memories of Borneo’s wild rivers and warm communities.",
				cover: "/images/destinations/klaru-river.jpg",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Wildlife Encounters",
				description: "Observe wild orangutans, proboscis monkeys, and rare bird species along the Rungan and Klaru Rivers, as well as within Sebangau National Park.",
				cover: "/",
			},
			{
				id: 2,
				title: "Cultural Experiences",
				description: "Engage with Dayak communities in Jahanjang and Telaga Villages, experiencing traditional hospitality and learning about their way of life.",
				cover: "/",
			},
			{
				id: 3,
				title: "Eco Exploration",
				description: "Discover the beauty and significance of Sebangau’s peat-swamp forest, guided by experts who bring Borneo’s ecosystems to life.",
				cover: "/",
			},
		],

		included: [
			{
				title: "Accommodation",
				description: "Comfortable cabin accommodation on a traditional riverboat, designed to enhance your connection to nature.",
			},
			{
				title: "Meals & Refreshments",
				description: "All meals and refreshments provided on board, with freshly prepared local ingredients.",
			},
			{
				title: "Guided Activities",
				description: "All guided treks, wildlife observation, and cultural visits led by knowledgeable local guides.",
			},
			{
				title: "Transfers",
				description: "Convenient transfers to and from the riverboat, ensuring a smooth journey.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "5 days, 4 nights",
			},
			{
				title: "Start & End Location",
				text: "Palangka Raya",
			},
			{
				title: "Best for",
				text: "Nature enthusiasts, eco-conscious travelers, and cultural explorers.",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent, and a sense of adventure.",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary slightly based on seasonal river conditions to ensure an optimal experience.",
			},
		],
		cta: "Ready to uncover Borneo’s hidden rivers? Book the Sebangau Safari today and embark on an unforgettable journey through Sebangau’s wild forests and Katingan’s serene waterways.",
		description: "",
	},
	{
		title: "Katingan River & Sebangau Wilderness Journey",
		slug: "katingan-river-sebangau-wilderness-journey",
		subHeading: "A 3-day, 2-night adventure exploring Borneo’s hidden rivers, orangutan habitats, and the unique ecosystems of Sebangau National Park.",
		duration: "3D2N",
		price: "1,128",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "A Compact Escape into Borneo’s Wilderness",
			text: "The Katingan River & Sebangau Wilderness Journey offers a short but meaningful escape into one of Borneo’s most diverse and pristine landscapes. Over three days, you’ll travel along the tranquil Katingan River, experience local culture, observe orangutans up close, and delve into the untouched forests of Sebangau National Park.",
		},
		destinationText: "This thoughtfully crafted itinerary provides a unique blend of wildlife encounters, cultural immersion, and serene river cruises, allowing you to experience the heart of Borneo in just three days.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Orangutan Island – BOS Foundation – Jahanjang Village",
				description: "Begin your journey with a morning visit to Orangutan Island, managed by the Borneo Orangutan Survival (BOS) Foundation. Witness orangutans living in a semi-wild habitat, part of a rehabilitation program. Continue to BOS’s Education Centre in Nyaru Menteng for deeper insights into orangutan conservation. Enjoy lunch in a sustainable permaculture garden cafe, then cruise towards Jahanjang Village. Experience a warm Dayak welcome, explore the village, and visit Danau Bulat for a breathtaking sunset before an overnight stay on the riverboat.",
				cover: "/images/destinations/orangutan-island.jpg",
			},
			{
				id: 2,
				days: "2",
				title: "Sebangau National Park Exploration – Telaga Village",
				description: "Cruise deeper into Sebangau National Park, known for its vast peat-swamp forest and diverse wildlife. Embark on a guided trek to discover the rich biodiversity and conservation efforts. Continue to Telaga Village to interact with the local community before enjoying a riverside dinner on board, spending another night anchored amidst the quiet rainforest.",
				cover: "/images/destinations/sebangau-park.jpg",
			},
			{
				id: 3,
				days: "3",
				title: "Sungai Klaru – Return to Palangka Raya",
				description: "Start your final day with a peaceful morning cruise along Sungai Klaru, surrounded by lush forest landscapes and vibrant birdlife. Enjoy breakfast on board before disembarking and transferring back to Palangka Raya, concluding your wilderness journey.",
				cover: "/images/destinations/sungai-klaru.jpg",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Orangutan Encounters",
				description: "Visit BOS-managed Orangutan Island to observe rehabilitating orangutans and learn about conservation efforts at BOS’s Education Centre in Nyaru Menteng.",
				cover: "/",
			},
			{
				id: 2,
				title: "Cultural Immersion",
				description: "Experience a warm Dayak welcome at Jahanjang Village, explore Telaga Village, and enjoy lunch in a sustainable permaculture garden cafe.",
				cover: "/",
			},
			{
				id: 3,
				title: "Guided Jungle Treks",
				description: "Explore Sebangau National Park’s unique peat-swamp forest, discovering the rich diversity of Borneo’s flora and fauna with experienced guides.",
				cover: "/",
			},
		],

		included: [
			{
				title: "Accommodation",
				description: "Stay aboard a traditional riverboat in comfortable cabins designed for a restful and immersive experience.",
			},
			{
				title: "Meals & Refreshments",
				description: "Enjoy all meals and refreshments prepared with fresh, locally sourced ingredients.",
			},
			{
				title: "Guided Activities",
				description: "All excursions, park entry fees, and village visits are led by knowledgeable local guides.",
			},
			{
				title: "Transfers",
				description: "Convenient transfers from Palangka Raya’s airport or your hotel are included.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "3 days, 2 nights",
			},
			{
				title: "Start & End Location",
				text: "Palangka Raya",
			},
			{
				title: "Best for",
				text: "Nature enthusiasts, cultural explorers, and travelers seeking a short yet immersive experience.",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent, and a sense of adventure.",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary slightly based on seasonal river conditions, ensuring flexibility for the best possible experience.",
			},
		],
		cta: "Ready to experience the heart of Borneo? Book the Katingan River & Sebangau Wilderness Journey today and uncover the rich biodiversity, culture, and landscapes of Sebangau and the Katingan River.",
		description: "",
	},
	{
		title: "Hidden Rivers: Sebangau & Katingan Eco Adventure",
		slug: "hidden-rivers-sebangau-katingan",
		subHeading: "A 4-day, 3-night eco-adventure through the untouched rivers and forests of Sebangau and Katingan, perfect for travelers seeking deeper exploration and connection with Borneo’s wild landscapes.",
		duration: "4D3N",
		price: "1,561",
		cover: "/images/wildlife/orangutan6.png",
		introduction: {
			title: "Discover the Hidden Rivers of Borneo",
			text: "The Hidden Rivers Eco Adventure offers a four-day journey into the secluded waterways and lush forests of Sebangau National Park and the Katingan River. For those with a passion for nature and a love of authentic cultural experiences, this eco-tour provides an unforgettable immersion in the beauty of Borneo.",
		},
		destinationText: "Each day of this adventure is crafted to reveal the layers of Borneo’s landscapes and cultures, from orangutan encounters to peaceful lake views and vibrant village traditions.",
		destination: [
			{
				id: 1,
				days: "1",
				title: "Orangutans on the Rungan River – Baun Bango",
				description: "Begin your journey on the Rungan River, where you’ll visit an area known for wild orangutans. Observe these fascinating animals in their natural habitat with guidance from experts dedicated to their conservation. Afterward, cruise toward Baun Bango, where you’ll spend the night on board, surrounded by the tranquil sounds of the river and jungle.",
				cover: "/images/destinations/rungan-river.jpg",
			},
			{
				id: 2,
				days: "2",
				title: "Lake Jelampangen – Jahanjang Village",
				description: "Cruise to Lake Jelampangen in the morning, a pristine lake that offers a serene setting to observe local birdlife and other wildlife. After lunch, continue your journey to Jahanjang Village, where you’ll be welcomed by the local Dayak community. Experience traditional hospitality and learn about Dayak customs during a guided village tour. In the evening, relax with dinner on board and enjoy the peaceful atmosphere of the river.",
				cover: "/images/destinations/lake-jelampangen.jpg",
			},
			{
				id: 3,
				days: "3",
				title: "Sebangau National Park – Telaga Village",
				description: "On your third day, venture into Sebangau National Park, renowned for its vast peat-swamp forests and diverse wildlife. Guided by knowledgeable experts, explore the park’s unique ecosystems and have the opportunity to spot orangutans, proboscis monkeys, and other rare species. Later, cruise to Telaga Village, where you’ll meet the welcoming locals and enjoy a riverside dinner under the stars.",
				cover: "/images/destinations/sebangau-park.jpg",
			},
			{
				id: 4,
				days: "4",
				title: "Klaru River – Jahanjang Village – Return to Palangka Raya",
				description: "On your final day, embark on a morning cruise along the Klaru River, taking in the last views of Borneo’s lush landscapes. Return to Jahanjang Village, where you’ll have time for a final stroll and to say farewell to the community. After lunch on board, return to Palangka Raya with memories of the hidden rivers, unique wildlife, and cultural connections experienced along the way.",
				cover: "/images/destinations/klaru-river.jpg",
			},
		],
		highlight: [
			{
				id: 1,
				title: "Wildlife Encounters",
				description: "Observe wild orangutans, proboscis monkeys, and rare bird species in their natural habitats along the Rungan and Klaru Rivers, as well as within Sebangau National Park.",
				cover: "/",
			},
			{
				id: 2,
				title: "Cultural Experiences",
				description: "Engage with Dayak communities in Jahanjang and Telaga Villages, experiencing traditional hospitality and learning about their way of life.",
				cover: "/",
			},
			{
				id: 3,
				title: "Eco Exploration",
				description: "Discover the beauty and significance of Sebangau’s peat-swamp forest, guided by experts who bring Borneo’s ecosystems to life.",
				cover: "/",
			},
		],

		included: [
			{
				title: "Accommodation",
				description: "Comfortable cabin accommodation on a traditional riverboat, designed to enhance your connection to nature.",
			},
			{
				title: "Meals & Refreshments",
				description: "All meals and refreshments provided on board, with freshly prepared local ingredients.",
			},
			{
				title: "Guided Activities",
				description: "All guided treks, wildlife observation, and cultural visits led by knowledgeable local guides.",
			},
			{
				title: "Transfers",
				description: "Convenient transfers to and from the riverboat, ensuring a smooth journey.",
			},
		],
		information: [
			{
				title: "Duration",
				text: "4 days, 3 nights",
			},
			{
				title: "Start & End Location",
				text: "Palangka Raya",
			},
			{
				title: "Best for",
				text: "Nature enthusiasts, eco-conscious travelers, and cultural explorers.",
			},
			{
				title: "What to Bring",
				text: "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent, and a sense of adventure.",
			},
			{
				title: "Please Note",
				text: "Itineraries may vary slightly based on seasonal river conditions to ensure an optimal experience.",
			},
		],
		cta: "Ready to uncover Borneo’s hidden rivers? Book the Hidden Rivers Eco Adventure today and embark on an unforgettable journey through Sebangau’s wild forests and Katingan’s serene waterways.",
		description: "",
	},
];
