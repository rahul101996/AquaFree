// components/SustainabilitySection.tsx

import React from "react";
import Image from "next/image";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

type ListItem = {
  text: string;
};

const sectionContent = {
  eyebrowText: "01. ABOUT US",
  title: "Our Commitment to Sustainability",
  paragraph: `What truly sets Just Textiles apart is not just capacity - it is our relentless pursuit of innovation and sustainability.
              From pioneering salt-free cotton dyeing to recycling process water, we are constantly pushing the boundaries of what textile manufacturing can achieve while reducing environmental impact. Our sustainability initiatives extend throughout our production chain, from raw material selection to final packaging, ensuring we minimize our ecological footprint at every stage.`,
  listItems: [
    // { text: "Pioneering salt-free cotton dyeing" },
    { text: "Advanced water recycling processes" },
    { text: "Full production chain sustainability" },
    { text: "Minimizing ecological footprint" },
  ],
  buttonText: "View More",
  imageUrl: "/assets/images/9.jpg",
  imageAlt: "Water recycling illustration in a factory",
};

const SustainabilitySection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-16 gap-y-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Column: Image */}
        <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-xl">
          {/* Using Next.js Image component for optimization */}
          <Image
            src={sectionContent.imageUrl}
            alt={sectionContent.imageAlt}
            width={700}
            height={500}
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div>
          {/* Eyebrow Text */}
          {/* <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
          
            <span className="inline-block h-1 w-4 bg-orange-500 align-middle mr-2 rounded-full"></span>
            {sectionContent.eyebrowText}
          </p> */}

          {/* Main Title */}
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
            {sectionContent.title}
          </h2>

          {/* Paragraph Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {sectionContent.paragraph}
          </p>

          {/* List of points (like checkboxes in Image 1) */}
          <ul className="mt-8 space-y-4">
            {sectionContent.listItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon
                  className="h-6 w-6 flex-shrink-0 text-[var(--vibrantGreen)] mr-2"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
