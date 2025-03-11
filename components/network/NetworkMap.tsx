"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically load LocationPicker component
const ExchangeMap = dynamic(() => import("@/components/network/ExchangeMap"), {
  ssr: false, // Disable server-side rendering
});

const NetworkMap: React.FC = () => (
  <section className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
    <div
      className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
      data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
    >
      <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
        <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
          Apollo-IX - Networks
        </span>
        <h1 className="h2 sm:h1 lg:display-6 xl:display-2 m-0">
          Global Interconnection Points
        </h1>
        <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
          Connecting networks across the globe with high-performance interconnection points.
        </p>
      </div>
      <ExchangeMap height="70vh" />
    </div>
  </section>
);

export default NetworkMap;
