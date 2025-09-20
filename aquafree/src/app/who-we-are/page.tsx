import React from "react";
import Link from "next/link";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import ProductionCapacity from "@/components/ProductionCapacity";
import CoreOperations from "@/components/CoreOperations";
import SustainabilitySection from "@/components/SustainabilitySection";
import YarnFeatures from "@/components/YarnFeatures";
import FabricComponent from "@/components/FabricComponent";
import MarketsWeServe from "@/components/MarketsWeServe";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
interface HeroSectionProps {
  className?: string;
}
const page = () => {
  const CheckIcon = () => (
    <svg
      className="h-5 w-5 flex-shrink-0 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div className="relative">
      <Navbar2 />

      {/* banner section  */}
      <section
        className={`relative h-[80vh] flex items-center justify-center z-10`}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="bg" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23334155"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23475569"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23bg)"/%3E%3C/svg%3E')`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Most Important Thing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                In World is Trust
              </span>
            </h1>

            <p className="text-md md:text-2xl text-gray-300 mb-12 max-w-6xl mx-auto leading-relaxed font-montserrat">
              Textiles are more than just fabrics. They are the invisible
              backbone of daily life—woven into fashion, homes, workplaces, and
              industries. At Just Textiles Ltd, we see textiles as a platform
              for innovation, sustainability, and trust. Every fabric we create
              carries a responsibility: it must serve its purpose with
              excellence, meet the highest standards of quality, and leave the
              smallest possible footprint on the planet.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
      </section>

      {/* who we are  */}
      <div className="bg-gray-100 p-4 flex items-center justify-center">
        <section className="relative mx-auto my-12 max-w-7xl">
          <div className="overflow-hidden rounded-lg relativee shadow-lg lg:grid lg:grid-cols-2 lg:gap-4">
            {/* Left Column: Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-[url('/assets/images/bg1.png')] opacity-40 -z-10 rounded-2xl"
              aria-hidden="true"
            ></div>
            <div className="relative aspect-video lg:aspect-auto">
              {/* IMPORTANT: Replace this src with your image path, e.g., "/your-image.jpg" */}
              <Image
                src="/assets/images/who-we-are.png"
                alt="Worker in a factory inspecting a large metal part."
                layout="fill"
                objectFit="cover"
                className="h-full w-full"
              />
              <div className="absolute bottom-8 left-8 max-w-sm rounded-lg bg-gray-900/90 p-6 text-white backdrop-blur-sm">
                <h3 className="text-3xl font-bold leading-tight">
                  Market leadership since 2002
                </h3>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              {/* <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                EXCELLENT PRODUCTS
              </p> */}
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
                Who We Are
              </h2>
              <p className="mt-6 text-lg text-gray-600 text-justify">
                Since our inception, Just Textiles Ltd has specialized in
                dyeing, finishing, and printing fabrics for both woven and knit
                categories. We've evolved from a modest setup into a fully
                integrated, professionally managed textile operation - one of
                the few in India with this scale and scope.
              </p>

              <p className="mt-6 text-lg text-gray-600 text-justify">
                Our expertise ranges across natural fibers, manmade fibers, and
                blended fabrics, making us a trusted partner for both domestic
                buyers and international clients with bulk requirements,
                including defense programs and export houses.
              </p>

              {/* <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckIcon />
                  <p className="ml-3 text-base text-gray-700">
                    Adipiscing voluptas sit amet
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <p className="ml-3 text-base text-gray-700">
                    Lorem ipsum dolor
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <p className="ml-3 text-base text-gray-700">
                    Dicta sunt explicabo lorem ipsum
                  </p>
                </li>
              </ul> */}
              {/* <div className="mt-10">
                <button
                  type="button"
                  className="rounded-full bg-red-600 px-8 py-3 text-base font-medium text-white shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Our Process
                </button>
              </div> */}
            </div>
          </div>
        </section>
      </div>

      {/* Our Production Capacity  */}
      <ProductionCapacity />

      <CoreOperations />

      <SustainabilitySection />

      <YarnFeatures />

      <FabricComponent />

      <MarketsWeServe />

      <WhatSetsUsApart />
    </div>
  );
};

export default page;
