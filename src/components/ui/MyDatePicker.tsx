import { useState, useRef } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cx } from "class-variance-authority";
import Container from "./Container";
import ContainerModal from "./ContainerModal";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import AvailableAppointments from "../reservation/AvailableAppointments";
import RequestAppointment from "../reservation/RequestAppointment";
import DoneAppointments from "../reservation/DoneAppointments";
import { reservationData } from "@/stores/reservation";

export function MyDatePicker() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const lenis = useLenis();
  const state = reservationData();
  const defaultClassNames = getDefaultClassNames();

  // Function to handle "Next" button click
  const handleNext = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useGSAP(() => {
    if (state.selectedDate) {
      gsap.to(".modal-reservation", {
        display: state.selectedDate ? "flex" : "none",
        duration: 0.4,
        ease: "power1.inOut",
        opacity: state.selectedDate ? 1 : 0,
      });
    }
  }, [state.selectedDate]);

  const handleClose = () => {
    // Animate and hide the modal
    gsap.to(".modal-reservation", {
      display: "none",
      duration: 0.4,
      ease: "power1.inOut",
      opacity: 0,
      onComplete: () => {
        state.updateReservation({
          name: "",
          email: "",
          treatmentType: "",
          numberOfPerson: "",
          timeTreatment: "",
          phoneNumber: "",
          services: "",
          serviceTime: "",
          servicePrice: 0,
          priceDiscount: 0,
        });
        state.updateSelectedDate(undefined);
      },
    });

    if (lenis) {
      lenis.start();
    }
  };

  // Function to handle DayPicker selection and reset swiper to index 0
  const handleDateSelect = (date: Date) => {
    state.updateSelectedDate(date);
    if (swiperRef.current) {
      if (lenis) {
        lenis.stop();
      }
      swiperRef.current.slideTo(0); // Reset swiper to the first slide
    }
  };

  return (
    <div>
      <div className="z-50 w-full h-screen bg-black/10 fixed top-0 left-0 flex-col justify-center items-center modal-reservation opacity-0 hidden">
        <div className="landscape:min-lg:w-[39.688vw] w-[80%] h-[90vh] bg-white landscape:min-lg:rounded-3xl rounded-xl relative">
          <div
            onClick={handleClose}
            className="absolute cursor-pointer landscape:min-lg:top-32-d top-[4.651vw] landscape:min-lg:right-32-d right-[5.581vw] bg-gray-200 w-10 h-10 rounded-full flex flex-col justify-center items-center z-50"
          >
            X
          </div>
          <Swiper
            centeredSlides={true}
            spaceBetween={0}
            draggable={false}
            speed={800}
            className="w-full h-full"
            allowTouchMove={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {/* <SwiperSlide>
              <AvailableAppointments handleNext={handleNext} />
            </SwiperSlide> */}
            <SwiperSlide>
              <RequestAppointment handleNext={handleNext} />
            </SwiperSlide>
            <SwiperSlide>
              <DoneAppointments />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <DayPicker
        mode="single"
        selected={state.selectedDate}
        onSelect={handleDateSelect} // Use the new function to reset swiper
        disabled={{
          before: new Date(), // Disable dates before today
        }}
        classNames={{
          today: `text-red-500`, // Add a border to today's date
          selected: `bg-black border-black text-white rounded-full`, // Highlight the selected day
          root: `${defaultClassNames.root} min-sm:shadow-lg min-xs:p-[1.042vw] landscape:min-3xl:rounded-3xl rounded-xl`, // Add a shadow to the root element
          chevron: `fill-black`, // Change the color of the chevron
          day: "landscape:min-lg:text-[1.25vw] landscape:min-3xl:p-[1.042vw] min-lg:p-[0.625vw] min-xs:p-[2.143vw]", // Increase the size of each day
          month:
            "landscape:min-lg:text-[1.25vw] font-semibold landscape:min-lg:p-[1.042vw] p-[3.721vw]", // Increase the size of the month text
          month_caption:
            "landscape:min-lg:text-[1.25vw] landscape:min-lg:mb-[2.083vw] mb-[9.302vw]",
          nav: "absolute right-[2.083vw] top-[0.625vw]",
        }}
        required={true} // Add the required property
      />
    </div>
  );
}
