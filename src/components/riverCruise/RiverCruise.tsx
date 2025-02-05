"use client";

import React, { useEffect } from "react";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Hero from "./Hero";
import WelcomeToBorneo from "./WelcomeToBorneo";
import Explore from "./Explore";
import Divider from "../ui/Divider";
import Combination from "./Combination";
import MoreThan from "./MoreThan";
import WhyChoose from "./WhyChoose";

export default function Home() {
  const state = toggleNavbar();

  const navbarColors = [0, 1];

  const updateNavbarColor = (color: number) => {
    state.updateNavbarColorNew(color);
  };

  useVariantsOnScroll(navbarColors, ".fullscreen", updateNavbarColor);

  useEffect(() => {
    state.updateNavbarColorNew(0);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeToBorneo />
      <Explore />
      <Divider />
      <Combination />
      <Divider />
      <MoreThan />
      <WhyChoose />
      <Footer />
    </>
  );
}
