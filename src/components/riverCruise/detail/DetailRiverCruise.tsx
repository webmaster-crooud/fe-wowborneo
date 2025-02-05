"use client"

import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import useVariantsOnScroll from '@/hooks/useVariantsOnScroll';
import { toggleNavbar } from '@/stores/navbar';
import React, { useEffect } from 'react'
import Hero from './Hero';
import Introduction from './Introduction';
import DaySection from './DaySection';
import Adventure from './Adventure';
import Package from './Package';

const DetailRiverCruise = () => {
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
            <Introduction />
            <DaySection />
            <Adventure />
            <Package />
            <Footer />
        </>
    )
}

export default DetailRiverCruise