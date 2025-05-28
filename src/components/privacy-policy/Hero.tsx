import { cx } from "class-variance-authority";
import Link from "next/link";
import GradientImage from "../ui/GradientImage";

export function Hero() {
	return (
		<header className={cx("w-full relative", "h-screen", "fullscreen")}>
			<div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

			<div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-10">
				{/* <h1 className={cx("text-sm text-center font-semibold md:text-base uppercase lg:text-lg tracking-widest")}></h1> */}
				<h1 className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>Privacy Policy</h1>
				<p className={cx("text-center text-description lg:w-[55%]")}>Wow Borneo our respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.wowborneo.com and use our online booking system and related services. By accessing our website or making a booking, you agree to the terms of this Privacy Policy.</p>
				<Link href={"/cruise"} className="font-semibold text-sm p-2 px-4 lg:text-base bg-[#CD5A05] rounded-lg text-white hover:bg-[#E67017]">
					Explore Our Cruises
				</Link>
			</div>

			<GradientImage src="/images/boats/exterior/boat4.png" className="" />
		</header>
	);
}
