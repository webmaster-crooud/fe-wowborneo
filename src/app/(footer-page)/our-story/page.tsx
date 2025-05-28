import { Hero } from "@/components/story/Hero";
import Container from "@/components/ui/Container";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { cx } from "class-variance-authority";
import { IconCircleFilled } from "@tabler/icons-react";

export default function OurStoryPage() {
	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>A Journey Inspired by Nature and Culture</h3>

						<p className={cx("text-description lg:w-full text-start")}>
							Nestled deep within the lush rainforests of Kalimantan, the rivers of Borneo have long served as lifelines for its people, wildlife, and culture. At Wow Borneo, we are more than just a river cruise company—we are storytellers, conservationists, and passionate travelers who believe in the power of responsible tourism to inspire, educate, and protect. Founded in 2008, Wow Borneo was born from a simple yet powerful idea: to share the wonders of Borneo with the world while ensuring its preservation for generations to come. Our founders, two visionary women deeply moved by the beauty of Kalimantan’s mighty rivers and its rich cultural heritage, saw an opportunity to create something extraordinary—a way for travelers to experience Borneo’s untamed wilderness without
							harming the delicate ecosystems that make it so unique.
						</p>
					</div>
				</section>
				<section className={cx("w-full h-full space-y-0 md:px-0 py-5")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>Pioneering Eco-Tourism in Borneo</h3>

						<p className={cx("text-description lg:w-full text-start")}>
							From our first cruise along the Rungan River to our expanded fleet navigating the Sekonyer and Katingan Rivers, Wow Borneo has remained dedicated to sustainable tourism. Our cruises are designed to immerse guests in the untouched beauty of Borneo, from the towering canopies of ancient rainforests to the serene waters that weave through orangutan habitats. Each of our traditional Kalimantan riverboats, carefully restored and modernized, offers guests a comfortable yet authentic journey. But our commitment goes beyond just providing an incredible travel experience—we work hand in hand with local communities, employ and train local Dayak and Melayu guides, and support wildlife conservation efforts that protect endangered species, including the iconic Bornean
							orangutan.
						</p>
					</div>
				</section>
				<section className={cx("w-full h-full space-y-0 md:px-0 py-5")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>A Commitment to Responsible Travel</h3>

						<p className={cx("text-description lg:w-full text-start")}>At the heart of Wow Borneo is our dedication to leaving a positive impact. Through every cruise, we actively contribute to:</p>
						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Orangutan Conservation: Partnering with the Borneo Orangutan Survival Foundation, we support the rescue, rehabilitation, and protection of orangutans affected by deforestation.</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Local Community Empowerment: We recruit, train, and employ local residents, ensuring fair wages, career development, and economic sustainability.</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Eco-Friendly Practices: From solar-powered boats to locally sourced, organic food, we take meaningful steps to minimize our environmental footprint.</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Cultural Preservation: We work closely with Dayak communities, ensuring their traditions, music, and art are honored and shared with the world.</p>
							</div>
						</div>
					</div>
				</section>
				<section className={cx("w-full h-full space-y-0 md:px-0 py-5")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>Your Adventure Begins Here</h3>

						<p className={cx("text-description lg:w-full text-start")}>With Wow Borneo, you’re not just taking a cruise—you’re embarking on a journey through one of the world’s last great wildernesses. Whether you seek wildlife encounters, cultural immersion, or the simple tranquility of floating through nature, our river expeditions offer a once-in-a-lifetime experience that goes beyond the ordinary. Come explore the untamed beauty of Borneo. Step aboard, and let the river lead you to the adventure of a lifetime.</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
