"use client";

import React, { useEffect } from "react";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Hero from "./Hero"
import Navbar from "@/components/ui/Navbar";
import WhrereIsSebangau from "./WhereIsSebangau";
import Divider from "@/components/ui/Divider";
import TopExperience from "./TopExperience";
import OrangutanConversation from "./OrangutanConversation";
import WhyExplore from "./WhyExplore";
import TravelTips from "./TravelTips";
import Footer from "../../ui/Footer";


export default function DetailExplore() {
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
      <WhrereIsSebangau />
      <Divider />
      <TopExperience />
      <OrangutanConversation />
      <WhyExplore />
      <TravelTips />
      <Footer />
    </>
  );
}
