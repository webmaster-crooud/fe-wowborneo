import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { cx } from "class-variance-authority";
import { IconCircleFilled } from "@tabler/icons-react";
import { Hero } from "@/components/sustainability/Hero";

export default function OurSustainabilityPage() {
	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<div className="flex flex-col gap-y-3">
							<h3 className={cx("text-subtitle font-prata text-start")}>Our Sustainability Principles</h3>
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Eco-Friendly Tourism Practices</h4>
						</div>
						<p className={cx("text-description lg:w-full text-start")}>We are dedicated to minimizing our ecological footprint by:</p>
						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Using solar-powered boats to reduce carbon emissions.</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Implementing waste reduction and recycling programs onboard our vessels.</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Sourcing local, organic ingredients to support small-scale farmers and minimize food miles.</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Avoiding single-use plastics and promoting sustainable alternatives.</p>
							</div>
						</div>

						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Wildlife Conservation & Habitat Protection</h4>
							<p className={cx("text-description lg:w-full text-start")}>Borneo is home to some of the world’s most incredible wildlife, including the critically endangered orangutan. To safeguard their future, we:</p>

							<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Actively support the Borneo Orangutan Survival Foundation, contributing to orangutan rescue, rehabilitation, and habitat restoration.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Operate with strict wildlife observation ethics, ensuring that all encounters are non-intrusive and respectful.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Educate travelers about conservation efforts and how they can contribute to protecting Borneo’s biodiversity.</p>
								</div>
							</div>
						</section>

						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Empowering Local Communities</h4>
							<p className={cx("text-description lg:w-full text-start")}>Sustainability is also about people. We are committed to:</p>

							<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Employing and training local Dayak and Melayu communities, providing fair wages and career opportunities.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Partnering with local artisans, guides, musicians, and homestay providers to ensure economic benefits remain within the community.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Supporting educational programs, including Ransel Buku, a local initiative providing library services to riverside villages.</p>
								</div>
							</div>
						</section>

						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Sustainable Growth for Future Generations</h4>
							<p className={cx("text-description lg:w-full text-start")}>We believe that tourism should be a force for good. That’s why we continuously seek new ways to:</p>

							<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Reduce our environmental impact through green technology and energy-efficient solutions.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Raise awareness about climate change, deforestation, and the importance of conservation.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Encourage guests to travel responsibly, with respect for local cultures and ecosystems.</p>
								</div>
							</div>
						</section>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>Join Us in Making a Difference</h3>
						<p className={cx("text-description lg:w-full text-start")}>By choosing Wow Borneo, you’re not just embarking on a breathtaking adventure—you’re actively participating in the preservation of one of the world’s last great rainforests. Together, we can ensure that future generations can continue to experience the wonders of Borneo.</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
