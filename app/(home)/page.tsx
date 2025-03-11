"use client";

import React from "react";
import Link from "next/link";
import Blog from "@/components/blog/Blogs1";
import NetworkMap from "@/components/network/NetworkMap";
import Brands from "@/components/common/Brands";
import TyperComponent from "@/components/common/TyperComponent";

export default function HomePage() {
  return (
    <>
      <div
        id="hero_header"
        className="hero-header hero-five-scene section panel overflow-hidden"
      >
        <div className="position-cover bg-gradient-to-t from-secondary to-white dark:from-gray-800 dark:to-gray-900" />
        <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              <div className="row child-cols-12 justify-center lg:justify-between items-center g-6 lg:g-0">
                <div className="sm:col-8 lg:col-5">
                  <div
                    className="panel vstack gap-2 text-center lg:text-start rtl:lg:text-end xl:me-4"
                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  >
                    <h1 className="h6 sm:display-5 xl:display-3 fw-light mb-1 xl:mb-2 text-blue">
                      Enabling seamless,{" "}
                      <span
                        className="text-tertiary dark:text-primary"
                        data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
                      >
                        <TyperComponent
                          strings={[
                            "network interconnection" ,"optimized traffic flow" ,"and secure peering"
                          ]}
                        />
                      </span>
                    </h1>
                    <p className="fs-6 xl:fs-4 mb-6">
                      {/* <br className="d-none lg:d-block" /> */}
                      Simplify network peering with scalable, low-latency
                      interconnection services with fast, resilient, and
                      cost-effective interconnection solutions
                    </p>
                    {/* <div className="vstack gap-1 mt-2 xl:mt-4">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="row child-cols g-1"
                    >
                      <div>
                        <div className="form-group inline-block">
                          <input
                            type="email"
                            className="form-control rounded-default h-48px w-full text-black bg-white"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 sm:col-auto">
                        <button className="btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white">
                          Get a demo
                        </button>
                      </div>
                    </form>
                    <p className="fs-7 text-dark dark:text-white text-opacity-70">
                      We care about your data in our
                      <Link
                        href={`/page-privacy`}
                        className="uc-link text-underline dark:text-secondary"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div> */}
                    {/* <div className="vstack md:hstack justify-center lg:justify-start gap-2 mt-2 xl:mt-4 fdr">
                    <div className="hstack justify-center gap-0">
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900"
                        src="/assets/images/avatars/02.jpg"
                        width="96"
                        height="96"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/05.png"
                        width="150"
                        height="150"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/02.png"
                        width="150"
                        height="150"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/01.jpg"
                        width="96"
                        height="96"
                      />
                    </div>
                    <div className="panel ">
                      <ul className="nav-x justify-center md:justify-start gap-0">
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <span className="fs-8 fw-medium ms-narrow">5.0</span>
                        </li>
                      </ul>
                      <span className="fs-7 fw-medium">
                        Based on 200+ reviews
                      </span>
                    </div>
                  </div> */}
                  </div>
                </div>

                <div className="sm:col-auto">
                  <div
                    className="hero-scroll-scene panel sm:w-550px sm:h-600px lg:w-450px lg:h-500px xl:w-600px xl:h-650px"
                    data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  >
                    <div
                      className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
                      data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                      <div className="panel max-w-750px mx-auto">
                        <form
                          onSubmit={(e) => e.preventDefault()}
                          className="vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20"
                        >
                          <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                            Have questions or need more information? Request a
                            callback, and our team will get in touch with you
                            shortly.
                          </p>
                          <input
                            className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                            type="text"
                            placeholder="Full name"
                            required
                          />
                          <input
                            className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                            type="text"
                            placeholder="Contact number"
                            required
                          />
                          <input
                            className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                            type="email"
                            placeholder="Email id"
                            required
                          />

                          <div className="hstack text-start">
                            <div className="form-check text-start rtl:text-end">
                              <input
                                id="uc_form_check_terms"
                                className="form-check-input rounded-0 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                                type="checkbox"
                                required
                              />
                              <label
                                htmlFor="uc_form_check_terms"
                                className="hstack justify-between form-check-label fs-6"
                              >
                                I read and accept the
                                <Link
                                  href={`#`}
                                  className="uc-link ltr:ms-narrow rtl:me-narrow"
                                >
                                  terms of use
                                </Link>
                                .
                              </label>
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-primary text-white mt-2"
                            type="submit"
                          >
                            Request Callback
                          </button>
                          <p className="text-center">
                            Or drop us a message via{" "}
                            <a
                              className="uc-link"
                              href="mailto:hello@Apollo-IX.co"
                            >
                              email
                            </a>
                            .
                          </p>
                        </form>
                      </div>
                    </div>
                    {/* <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-3 h-100 overflow-hidden">
                    <Image
                      className="media-cover image"
                      alt="image"
                      src="/assets/images/template/hero-05.jpg"
                      width="1184"
                      height="1280"
                    />
                  </figure> */}
                    {/* <div
                    className="hero-five-contries position-absolute sm:w-300px lg:w-250px xl:w-350px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ top: "20%" }}
                  >
                    <Image
                      alt="Countries"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [-100, 0];"
                      src="/assets/images/template/hero-05-countries.png"
                      width="710"
                      height="854"
                    />
                  </div> */}
                    {/* <div
                    className="hero-five-account position-absolute sm:w-250px lg:w-200px xl:w-300px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ bottom: "20%" }}
                  >
                    <Image
                      alt="Account"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [100, 0];"
                      src="/assets/images/template/hero-05-account.png"
                      width="605"
                      height="274"
                    />
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="companies_sponsores"
        className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
      >
        <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
          <div className="container sm:max-w-lg xl:max-w-xl">
            <div className="section-inner panel">
              <div
                className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
              >
                <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                  Bringing industries together, driving transformation
                </p>
                <div className="block-panel panel">
                  <div className="element-brands text-black dark:text-white mask-x">
                    <Brands />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Features /> */}
      <NetworkMap />
      {/* 
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Cta />
          <Howworks />
          <Pricing />
          <Testimonials />
          <Faq />
          <Support /><Team />
         */}
      <Blog />
    </>
  );
}
