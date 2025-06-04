"use client";

import { cx } from "class-variance-authority";
import React, { useState } from "react";
import Image from "next/image";

export default function CardWhyChoose({ item, height = "h-[25vw]", isOpen, onClick, colSpan }: { item: { title: string; description: string; cover: string }; height: string; isOpen: boolean; onClick: () => void; colSpan: string }) {
	return (
		<div className={cx(`w-full transition-all rounded-2xl flex duration-500 sm:relative ${colSpan} ${isOpen ? "flex-col lg:flex-row bg-[#CD5A051A]" : "flex-col"}`, height)}>
			<div className={cx(`relative z-0 ${isOpen ? "w-full lg:w-[50%]" : "w-full"}`)}>
				<div className="absolute top-0 right-0 p-4 z-30 ">
					<div className={`bg-white rounded-full cursor-pointer h-10 w-10 z-30 flex items-center justify-center transition-all duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`} onClick={onClick}>
						<Image src={"/images/icons/arrow.png"} alt="arrow icon" width={20} height={20} />
					</div>
				</div>

				<div className={`relative h-full w-full overflow-hidden rounded-2xl ${isOpen ? "aspect-square lg:rounded-r-none" : ""}`}>
					<div className={cx("hidden w-full h-full bg-black/30 absolute top-0 z-10 sm:block")} />
					<Image src={item.cover} alt="arrow icon" width={1000} height={1000} className={`w-full h-full object-cover ${isOpen ? "aspect-square" : "aspect-[5/4]"}`} />
				</div>
			</div>

			{isOpen && (
				<div className="h-full flex flex-col justify-center gap-4 p-4 lg:px-3">
					<p className="font-prata text-xl font-medium">{item.title}</p>
					<p className="text-sm">{item.description}</p>
				</div>
			)}

			{!isOpen && (
				<div className="p-2">
					<p className="font-semibold text-sm">{item.title}</p>
				</div>
			)}
		</div>
	);
}
