// components/FabricComponent.tsx
"use client";
import React from "react";
import Image from "next/image";

// Define the structure for our card data with TypeScript
type FiberCard = {
  imageSrc: string;
  number: string;
  title: string;
  description: string;
  overlayItems: string[];
};

// Array holding the content for the three cards
const fiberData: FiberCard[] = [
  {
    imageSrc: "/assets/images/natural-fabrics.png",
    number: "01",
    title: "Natural Fibers",
    description:
      "Processed with specialized techniques that preserve natural characteristics while enhancing performance.",
    overlayItems: ["Cotton", "Linen", "Silk", "Wool"],
  },
  {
    imageSrc: "/assets/images/who-we-are.png",
    number: "02",
    title: "Manmade Fibers",
    description:
      "Engineered for specific performance requirements with consistent quality and durability.",
    overlayItems: ["Polyester", "Nylon", "Rayon", "Acrylic"],
  },
  {
    imageSrc: "/assets/images/blended-fabrics.png",
    number: "03",
    title: "Blended Fabrics",
    description:
      "Combining the best properties of multiple fibers to create fabrics with superior characteristics.",
    overlayItems: [
      "Poly-cotton",
      "Cotton-linen",
      "Wool blends",
      "Performance blends",
    ],
  },
];

const FabricComponent: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
            Our Expertise Across Fibers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From raw natural materials to advanced synthetics, our process
            ensures the highest quality at every stage, tailored to your
            specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
          {fiberData.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center relative"
            >
              <div className="relative group h-[20rem] overflow-hidden rounded-lg w-full aspect-w-4 aspect-h-3">
                {/* FIX 2: Set z-index of the image to 0 */}
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  layout="fill" // Use layout="fill" to respect the parent's aspect ratio
                  objectFit="cover"
                  className="z-0 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* The Slide-Up Hover Overlay */}
                <div
                  className="absolute inset-0 z-10 flex translate-y-full flex-col items-center 
                             justify-center bg-black/70 p-4 text-white
                             transition-all duration-500 ease-in-out group-hover:translate-y-0"
                >
                  <ul className="space-y-2">
                    {card.overlayItems.map((item) => (
                      <li key={item} className="text-lg font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Numbered Circle */}
                {/* FIX 3: Increased z-index to ensure it's on top of everything */}
              </div>

              <div className="absolute top-60 left-1/2 z-40 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[var(--vibrantGreen)] text-2xl font-bold text-white ring-8 ring-white">
                {card.number}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricComponent;
