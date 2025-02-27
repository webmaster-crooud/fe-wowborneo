import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import CardTestimonial from "./CardTestimonial";

export default function Testimonial() {
	const data = [
		{
			head: "Jonathan A",
			role: "Kahayan River cruise",
			desc: "Pre and post we stayed Bukit-Raya Guesthouse in Palangkaraya, fabulous, especially the TREE HOUSE. The cruise was exceptional with full service including exemplary pick up & drop off.",
			img: "/images/people/sample-photo.png",
		},
		{
			head: "Jonathan A",
			role: "Kahayan River cruise",
			desc: "Pre and post we stayed Bukit-Raya Guesthouse in Palangkaraya, fabulous, especially the TREE HOUSE. The cruise was exceptional with full service including exemplary pick up & drop off.",
			img: "/images/people/sample-photo.png",
		},
		{
			head: "Jonathan A",
			role: "Kahayan River cruise",
			desc: "Pre and post we stayed Bukit-Raya Guesthouse in Palangkaraya, fabulous, especially the TREE HOUSE. The cruise was exceptional with full service including exemplary pick up & drop off.",
			img: "/images/people/sample-photo.png",
		},
	];
	return (
		<Container>
			<div className={cx("flex gap-6 flex-col md:text-center lg:flex-row lg:text-left lg:items-end")}>
				<div className={cx("w-10/12 space-y-8")}>
					<p>TESTIMONIALS</p>
					<p className={cx("font-prata text-subtitle")}>What they said about us</p>
				</div>
				<p className="text-description">Hear from our guests who have embarked on unforgettable journeys with Wow Borneo. Their stories capture the magic of Kalimantan's rivers, the thrill of wildlife encounters, and the warmth of local communities.</p>
			</div>
			<div className={cx("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40-d mt-80-d")}>
				{data.map((item, key) => (
					<CardTestimonial item={item} key={key} />
				))}
			</div>
		</Container>
	);
}
