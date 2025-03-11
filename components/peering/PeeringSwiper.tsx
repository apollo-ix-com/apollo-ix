"use client";

import { features6 } from "@/data/features";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function PeeringSwiper() {
  return (
    
    <div className="sticky-scene panel gap-4 sm:gap-6 xl:gap-8">
    {/* className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8" */}
    {/* {features6.map((feature) => (
      <div
        key={feature.id}
        className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
        data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
      >
        <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
          <div className="order-0 lg:order-1">
            <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
              <Image
                src={feature.imgSrc}
                width={780}
                height={728}
                alt={feature.imgAlt}
              />
            </div>
          </div>
          <div className="order-1 lg:order-0 col-12 sm:col-5">
            <div className="panel vstack justify-center gap-4 h-100">
              <div>
                <div className="panel vstack gap-2">
                  <span className="fs-6 fw-bold m-0 text-primary">
                    {feature.id.toString().padStart(2, "0")}.
                  </span>
                  <h3 className="h4 lg:h2 m-0">{feature.title}</h3>
                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                    {feature.description}
                  </p>
                  {feature.link && (
                    <a
                      href={feature.link.href}
                      className="uc-link fw-bold hstack gap-narrow"
                    >
                      <span>{feature.link.text}</span>
                      <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))} */}
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      centeredSlides={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1000}
      pagination={{
        el: ".custom-pagination", // Custom pagination element
        clickable: true,
      }}
      breakpoints={{
        240: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 1, spaceBetween: 0 },
        1024: { slidesPerView: 1, spaceBetween: 20 },
      }}
    >
      {features6.map((feature) => (
        <SwiperSlide key={feature.id}>
          <div
            className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
            data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
          >
            <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
              <div className="order-0 lg:order-1">
                <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                  <Image
                    src={feature.imgSrc}
                    width={780}
                    height={728}
                    alt={feature.imgAlt}
                  />
                </div>
              </div>
              <div className="order-1 lg:order-0 col-12 sm:col-5">
                <div className="panel vstack justify-center gap-4 h-100">
                  <div>
                    <div className="panel vstack gap-2">
                      <span className="fs-6 fw-bold m-0 text-primary">
                        {feature.id.toString().padStart(2, "0")}.
                      </span>
                      <h3 className="h4 lg:h2 m-0">
                        {feature.title}
                      </h3>
                      <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                        {feature.description}
                      </p>
                      {feature.link && (
                        <a
                          href={feature.link.href}
                          className="uc-link fw-bold hstack gap-narrow"
                        >
                          <span>{feature.link.text}</span>
                          <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="custom-pagination"></div>
  </div>
  );
}
