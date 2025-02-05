"use client";

import React, { useEffect } from "react";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Hero from "./Hero";
import Navbar from "@/components/ui/Navbar";
import About from "./About";
import OnBoardExperience from "./OnBoardExperience";
import Divider from "@/components/ui/Divider";
import CruiseOption from "./CruiseOption";
import Experience from "./Experience";
import Footer from "@/components/ui/Footer";


export default function DetailBoats() {
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
      <About />
      <OnBoardExperience />
      <Divider />
      <CruiseOption />
      <Experience />
      <Footer />
    </>
  );
}
