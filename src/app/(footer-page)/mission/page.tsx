import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { cx } from "class-variance-authority";
import { IconCircleFilled } from "@tabler/icons-react";
import { Hero } from "@/components/mission/Hero";

export default function OurMissionStatementPage() {
	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-4 items-end justify-between relative sm:px-8 md:px-16")}>
						<div className="flex flex-col gap-y-10">
							<h3 className={cx("text-subtitle font-prata text-start")}>Our Core Commitments:</h3>
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Sustainable Tourism</h4>
						</div>
						<p className={cx("text-description lg:w-full text-start")}>We design our cruises to minimize environmental impact, using eco-friendly practices such as solar-powered boats, waste reduction initiatives, and responsibly sourced local ingredients in our dining experiences.</p>

						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Conservation & Wildlife Protection</h4>
							<p className={cx("text-description lg:w-full text-start")}>As stewards of Borneo’s incredible biodiversity, we actively support the Borneo Orangutan Survival Foundation and other conservation initiatives that work to protect endangered species and restore rainforest habitats.</p>
						</section>

						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Cultural Respect & Community Empowerment</h4>
							<p className={cx("text-description lg:w-full text-start")}>We collaborate with Dayak and Melayu communities, ensuring that our presence supports local employment, cultural preservation, and fair trade partnerships. Our guides, crew, and artisans are the heart of our operations, and we take pride in promoting their traditions and expertise.</p>
						</section>

						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Authentic & Transformative Experiences</h4>
							<p className={cx("text-description lg:w-full text-start")}>Every Wow Borneo cruise is more than just a journey—it’s a chance to connect deeply with the land, its people, and its wildlife. We craft itineraries that balance adventure, education, and relaxation, ensuring that our guests leave with lasting memories and a newfound appreciation for the wonders of Borneo.</p>
						</section>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>Travel That Makes a Difference</h3>

						<p className={cx("text-description lg:w-full text-start")}>
							Our mission is not only to take travelers on an unforgettable adventure but also to ensure that our impact is positive, meaningful, and long-lasting. Every guest who joins us contributes to our ongoing efforts in conservation, education, and responsible tourism.
							<br />
							<br />
							Together, we explore, protect, and celebrate the magic of Borneo.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
