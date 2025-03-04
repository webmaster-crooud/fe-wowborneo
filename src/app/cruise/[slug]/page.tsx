"use client";

import Adventure from "@/components/riverCruise/slug/Adventure";
import DaySection from "@/components/riverCruise/slug/DaySection";
import Hero from "@/components/riverCruise/slug/Hero";
import Introduction from "@/components/riverCruise/slug/Introduction";
import Package from "@/components/riverCruise/slug/Package";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { getCruiseBySlug } from "@/utils/CruiseHelper";
import { useParams } from "next/navigation";

export default function DetailCruise() {
	const { slug } = useParams();
	const cruise = getCruiseBySlug(slug as string);
	return (
		<>
			<Navbar />
			<Hero cover={cruise?.cover || ""} duration={cruise?.duration || ""} subHeading={cruise?.subHeading || ""} title={cruise?.title || ""} key={cruise?.slug} />
			<Introduction title={cruise?.introduction?.title || ""} text={cruise?.introduction?.text || ""} destinationText={cruise?.destinationText || ""} />
			<DaySection title={cruise?.title || ""} destinations={cruise?.destination || []} />
			<Adventure title={cruise?.title || ""} highlight={cruise?.highlight || []} />
			<Package included={cruise?.included || []} price={cruise?.price || ""} information={cruise?.information || []} />
			<Footer />
		</>
	);
}
