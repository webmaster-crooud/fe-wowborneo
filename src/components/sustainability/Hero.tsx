import { cx } from "class-variance-authority";
import Link from "next/link";
import GradientImage from "../ui/GradientImage";

export function Hero() {
	return (
		<header className={cx("w-full relative", "h-screen", "fullscreen")}>
			<div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

			<div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-10">
				<h1 className={cx("text-sm text-center font-semibold md:text-base uppercase lg:text-lg tracking-widest")}>Sustainability Statement</h1>
				<h2 className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>Protecting Borneo, One Journey at a Time</h2>
				<p className={cx("text-center text-description lg:w-[55%]")}>At Wow Borneo, sustainability isn’t just a concept—it’s the foundation of everything we do. As a responsible eco-tourism operator, we are deeply committed to protecting Borneo’s delicate ecosystems, preserving indigenous cultures, and ensuring that our impact on the environment is a positive one.</p>
				<Link href={"/cruise"} className="font-semibold text-sm p-2 px-4 lg:text-base bg-[#CD5A05] rounded-lg text-white hover:bg-[#E67017]">
					Explore Our Cruises
				</Link>
			</div>

			<GradientImage src="/images/boats/exterior/boat3.png" className="" />
		</header>
	);
}
