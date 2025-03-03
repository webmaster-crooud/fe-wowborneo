import Container from "@/components/ui/Container";
import GradientImage from "@/components/ui/GradientImage";
import { IExperience } from "@/types/boat";
import { cx } from "class-variance-authority";
import React from "react";

type prospExperience = {
	data: IExperience[];
};

export default function Experience({ data }: prospExperience) {
	return (
		<Container>
			<div className="w-full text-center pb-20">
				<p className={cx("uppercase w-full font-bold")}>Onboard Experience</p>
			</div>
			<div className="space-y-24">
				<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-y-20">
					{data.map(({ cover, title, description }, i) =>
						i % 2 === 0 ? (
							<React.Fragment key={i}>
								<div className="w-full h-full rounded aspect-video">
									<GradientImage fitVariant="cover" className="rounded-lg" src={cover || "/"} />
								</div>
								<div className="space-y-3 lg:space-y-10">
									<p className={cx("font-prata text-subtitle")}>{title}</p>
									<p className={cx("font-open-sans text-description font-normal leading-[28px]")}>{description}</p>
								</div>
							</React.Fragment>
						) : (
							<React.Fragment key={i}>
								<div className="space-y-3 lg:space-y-10">
									<p className={cx("font-prata text-subtitle")}>{title}</p>
									<p className={cx("font-open-sans text-description font-normal leading-[28px]")}>{description}</p>
								</div>
								<div className="w-full h-full rounded aspect-video">
									<GradientImage fitVariant="cover" className="rounded-lg" src={cover || "/"} />
								</div>
							</React.Fragment>
						)
					)}
				</div>
			</div>
		</Container>
	);
}
