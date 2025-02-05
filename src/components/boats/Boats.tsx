"use client";

import React, { useEffect } from "react";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Hero from "./Hero";
import RangaiPangun from "./RahaiPangun";
import Kumai from "./Kumai";
import Sekonyer from "./Sekonyer";
import Divider from "../ui/Divider";
import TheSpiritOfKalimantan from "./TheSpiritOfKalimantan";
import ExploreBoats from "./ExploreBoats";
import OurBenefit from "./OurBenefit";
import BookYourAdventure from "./BookYourAdventure";

export default function Boats() {
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
      <RangaiPangun />
      <Kumai />
      <Sekonyer />
      <TheSpiritOfKalimantan />
      <Divider />
      <ExploreBoats />
      <OurBenefit />
      <Divider />
      <BookYourAdventure />
      <Footer />
    </>
  );
}
