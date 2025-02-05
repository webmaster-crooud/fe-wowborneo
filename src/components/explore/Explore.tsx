"use client";

import React, { useEffect } from "react";
import Hero from "./Hero";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Overview from "./Overview";
import Divider from "../ui/Divider";
import FeaturedCruises from "./NatureAndWildlife";
import WhyExplore from "./WhyExplore";
import TravelerStories from "./TravelerStories"
import BookYourBorneo from "./BookYourBorneo";

export default function Explore() {
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
      <Overview />
      <Divider />
      <FeaturedCruises />
      <WhyExplore />
      <TravelerStories />
      <Divider />
      <BookYourBorneo />
      <Footer />
    </>
  );
}
