import React from "react";
import Image from "next/image";

// Define a type for the component props for better type-checking.
type EnvironmentalLeadershipProps = {};

const EnvironmentalLeadership: React.FC<EnvironmentalLeadershipProps> = () => {
  return (
    <section className="py-12 md:py-20 font-sans relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto p-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-[url('/assets/images/bg1.png')] opacity-40 -z-10 rounded-2xl"
            aria-hidden="true"
          ></div>
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b3b1e] mb-10 md:mb-12">
            Environmental Leadership: World-Class Wastewater Management
          </h2>

          {/* Main Content Grid */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-12">
            {/* Left Column: Image */}
            <div className="w-full md:w-2/5">
              <div className="w-[70%] mx-auto h-[20rem] relative">
                <Image
                  src="/assets/images/12.jpg"
                  alt="Smiling girl representing foundation impact"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full md:w-3/5 text-gray-800">
              <p className="text-base md:text-[22px] leading-relaxed mb-6">
                Recognizing textiles as one of the world's most water-intensive
                industries, we chose to treat environmental responsibility as a
                core business principle, not merely a compliance requirement.
                Our world-class wastewater treatment plant represents
                industry-leading innovation in sustainable manufacturing.
              </p>
              <ul className="space-y-4 text-base md:text-[22px]">
                <li className="flex items-start">
                  <span className="text-[#0b3b1e] mr-3 mt-1.5">&#9642;</span>
                  <span>
                    87% process water recycling through advanced Reverse Osmosis
                    (RO)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0b3b1e] mr-3 mt-1.5">&#9642;</span>
                  <span>
                    Salt recovery from effluents using Multi-Effect Evaporator
                    (MEE) and ATFD
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0b3b1e] mr-3 mt-1.5">&#9642;</span>
                  <span>
                    Reduced freshwater intake protecting local ecosystems
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Highlight Box / Alert */}
          <div className="bg-[#e9f5ee] rounded-lg p-5 flex items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <svg
                className="w-7 h-7 text-[#157347]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L10.5 12.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {/* Text */}
            <p className="text-sm md:text-base text-[#0b3b1e] leading-relaxed">
              Our efforts earned Zero Liquid Discharge (ZLD) consent from
              Maharashtra Pollution Control Board, placing Just Textiles among
              India's leading sustainable textile manufacturers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalLeadership;
