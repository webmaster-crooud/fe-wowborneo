"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactLenis root>
        {children}
      </ReactLenis>
    </>
  );
}
