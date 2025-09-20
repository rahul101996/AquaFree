// components/YarnFeatures.tsx

import React from "react";
import Image from "next/image";
import {
  ShieldCheckIcon,
  SwatchIcon,
  Cog6ToothIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

// Define the structure for our card data with TypeScript
type FeatureCard = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Array holding the dummy content for the four cards
const featureData: FeatureCard[] = [
  {
    icon: ShieldCheckIcon,
    title: "Foundation",
    description:
      "Established with a vision to create textiles that combine technological excellence with uncompromising quality.",
  },
  {
    icon: SwatchIcon,
    title: "Building Trust",
    description:
      "Recognized by clients for our precision, punctuality, and consistency in dyeing and finishing operations.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Backward Integration",
    description:
      "Began investing in bringing more processes under our control to ensure quality at every stage.",
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Vertical Integration",
    description:
      "Developed a comprehensive facility including scouring, bleaching, dyeing, printing and finishing under professional management.",
  },
];

const YarnFeatures: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-[1290px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
            Our Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Textiles are materials made from fibers or yarn, and they are used
            to create the widest range of products such as clothing and
            industrial goods.
          </p>
        </div>

        {/* UPDATED: Main grid to hold cards on the left and the image on the right */}
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-5">
          {/* Left Column: Container for the four feature cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {featureData.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-xl bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                        <IconComponent
                          className="h-7 w-7 text-yellow-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large Image */}
          <div className="relative h-[38rem] w-full lg:col-span-2">
            <Image
              src="/assets/images/textile-factory.png" // IMPORTANT: Replace with your image path in /public
              alt="High-quality yarn spools on a manufacturing machine"
              width={500}
              height={750}
              className="rounded-xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YarnFeatures;
