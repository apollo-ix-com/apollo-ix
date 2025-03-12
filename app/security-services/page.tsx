"use client";

import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
// import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/features/Cta";
// import Brands2 from "@/components/common/Brands2";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import PeeringSwiper from "@/components/peering/PeeringSwiper";
import Brands from "@/components/common/Brands";

export default function PeeringPage() {
  return (
    <>
      <div
        id="hero_header"
        className="hero-header section panel overflow-hidden"
      >
        <div className="position-absolute top-0 start-0 end-0 h-500px xl:h-screen bg-gray-900" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/apps/global-network.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    color: "white", // Ensures text remains visible
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: "url('/assets/images/demos/screenshots/blog-details-2.jpg')",
    // backgroundSize: "cover",
    // backgroundPosition: "top",
    // backgroundRepeat: "no-repeat",
    // height: "100vh",
    // width: "100%",
  }}/>

        <div className="section-outer panel pb-6 sm:pb-9 pt-9 sm:pt-10">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              <div className="vstack gap-6 sm:gap-8 xl:gap-9">
                <div className="panel text-center max-w-850px mx-auto uc-dark">
                  <div
                    className="vstack items-center gap-2 text-white"
                    data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <h1 className="h2 mt-2 mt-sm-0 text-sm-h1 text-lg-display-2 text-xl-display-1">
                      Empowering Your Connectivity.<br className="d-none d-sm-block" />
                    </h1>
                    <h6 className="h4 mt-1 mt-sm-0 text-sm-h5 text-lg-display-3 text-xl-display-5">
                      Redefining Peering Excellence.
                    </h6>
                    <Link
                      href={`#`}
                      className="btn btn-md lg:btn-lg btn-primary text-white min-w-150px sm:mt-1 lg:mt-2"
                    >
                      Join Our Peering Platform
                    </Link>

                    {/* <h1 className="h2 sm:h1 lg:display-6 xl:display-4 mt-4 sm:mt-0">
  Empowering Your Connectivity. <br className="d-none sm:d-block" />
  Redefining Peering Excellence.
</h1>
<p className="lead text-muted mt-3">
  Experience seamless data exchange with our high-performance peering platform. 
  Maximize network efficiency, reduce latency, and enhance user experience.
</p>
<ul className="list-unstyled mt-4">
  <li><i className="bi bi-check-circle-fill text-primary"></i> Blazing-fast interconnections for optimal performance</li>
  <li><i className="bi bi-check-circle-fill text-primary"></i> Enhanced redundancy and improved network resilience</li>
  <li><i className="bi bi-check-circle-fill text-primary"></i> Flexible port speeds and scalable solutions to fit your needs</li>
</ul>
<Link
  href={`/page-pricing`}
  className="btn btn-md lg:btn-lg btn-primary text-white min-w-150px sm:mt-1 lg:mt-2"
>
  Join Our Peering Platform
</Link> */}
                  </div>
                </div>
                <PeeringSwiper />
              </div>
              <div className="brands panel overflow-hidden mt-4 sm:mt-6 xl:mt-8 opacity-50">
                <div
                  className="block-panel panel"
                  data-anime="onview: -100; opacity: [0, 1]; duration: 450; delay: 200;"
                >
                  <div className="element-brands text-gray-900 dark:text-white">
                    <Brands />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyFeatures />
      <div className="pt-6 xl:pt-9"></div>
      <Faq />
      {/* <Testimonials />
      <div
        id="clients_brands"
        className="clients-brands section panel overflow-hidden"
      >
        <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
          <h5
            className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
            data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
          >
            Bringing industries together, driving transformation.
          </h5>
          <div
            className="block-panel panel"
            data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
          >
            <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
              <Brands2 />
            </div>
          </div>
        </div>
      </div> */}
      <Cta />
    </>
  );
}
