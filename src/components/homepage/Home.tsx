"use client";

import React, { useEffect } from "react";
import Hero from "./Hero";
import Privacy from "./Privacy";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

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
      <Privacy />
      <Footer />
    </>
  );
}
