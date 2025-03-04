"use client";

import Adventure from "@/components/riverCruise/slug/Adventure";
import DaySection from "@/components/riverCruise/slug/DaySection";
import Hero from "@/components/riverCruise/slug/Hero";
import Introduction from "@/components/riverCruise/slug/Introduction";
import Package from "@/components/riverCruise/slug/Package";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { getTourBySlug } from "@/utils/TourHelper";
import { useParams } from "next/navigation";

export default function DetailTour() {
	const { slug } = useParams();
	const tour = getTourBySlug(slug as string);
	return (
		<>
			<Navbar />
			<Hero cover={tour?.cover || ""} duration={tour?.duration || ""} subHeading={tour?.subHeading || ""} title={tour?.title || ""} key={tour?.slug} />
			<Introduction title={tour?.introduction.title || ""} text={tour?.introduction.text || ""} destinationText={tour?.destinationText || ""} />
			<DaySection title={tour?.title || ""} destinations={tour?.destination || []} />
			<Adventure title={tour?.title || ""} highlight={tour?.highlight || []} />
			<Package included={tour?.included || []} price={tour?.price || ""} information={tour?.information || []} />
			<Footer />
		</>
	);
}
