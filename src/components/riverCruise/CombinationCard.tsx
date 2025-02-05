"use client"

import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Image from "next/image";
import Button from "../ui/button";

export default function CombinationCard({ item, height = "h-[25vw]", isOpen, onClick, colSpan }: { item: { head: string, desc: string, img: string, type: string }, height: string, isOpen: boolean, onClick: () => void, colSpan: string }) {
  return (
         <div className={cx(
             `w-full transition-all rounded-2xl flex duration-500 sm:relative ${colSpan} ${isOpen ? "flex-col lg:flex-row bg-[#CD5A051A]" : "flex-col"}`,
             height
         )}>
             <div className={cx(`relative z-0 ${isOpen ? "w-full lg:w-[50%]" : "w-full"}`)}>
                 <div className="absolute top-0 right-0 p-4 z-30 ">
                     <div className={`bg-white rounded-full cursor-pointer h-10 w-10 z-30 flex items-center justify-center transition-all duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`} onClick={onClick}>
                         <Image src={"/images/icons/arrow.png"} alt="arrow icon" width={20} height={20} />
                     </div>
                 </div>
 
                 <div className={`relative h-full w-full overflow-hidden rounded-2xl ${isOpen ? "aspect-square lg:rounded-r-none" : ""}`}>
                     <div className={cx("hidden w-full h-full bg-black/30 absolute top-0 z-10 sm:block")} />
                     <Image src={item.img} alt="arrow icon" width={1000} height={1000} className={`w-full h-full object-cover ${isOpen ? "aspect-square" : "aspect-[5/4]"}`} />
                 </div>
             </div>
 
             {isOpen && (
                 <div className="h-full flex flex-col justify-evenly gap-4 py-4 lg:px-6">
                     <div className='space-y-4'>
                         <p className='text-sm font-semibold'>{item.type}</p>
                         <p className="text-xl font-semibold">{item.head}</p>
                         <p className="text-sm">{item.desc}</p>
                     </div>
                     <Button>
                         Cek Our Availibility Schedule
                     </Button>
                 </div>
             )}
 
             {!isOpen && (
                 <div className="p-2">
                     <p className="font-semibold text-sm">{item.head}</p>
                 </div>
             )}
         </div>
     );
}
