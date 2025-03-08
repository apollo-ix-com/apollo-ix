"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically load LocationPicker component
const ExchangeMap = dynamic(() => import("./ExchangeMap"), {
  ssr: false, // Disable server-side rendering
});

const NetworkMap: React.FC = () => {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div
          className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
        >
          <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
          Apollo-IX - Networks
          </span>
          <h2 className="h3 sm:h2 lg:h1 xl:display-7 m-0">
          Global Interconnection Points
          </h2>
          {/* <p className="fs-7 sm:fs-6 lg:fs-5 xl:fs-4 text-opacity-70">
          Our globally recognized exchange locations provide a unified platform designed to foster innovation, enhance connectivity, and streamline data management.  
      Discover how our interconnection services empower businesses to navigate complex network challenges, unlocking new possibilities for growth and performance.
     </p> */}
        </div>
        <ExchangeMap />
      </div>
    </div>
  );
};

export default NetworkMap;
