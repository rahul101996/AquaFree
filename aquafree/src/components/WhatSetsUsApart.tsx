// // components/WhatSetsUsApart.tsx
// "use client";
// import React from "react";
// // Import suitable icons from the Heroicons library
// import {
//   BuildingLibraryIcon,
//   CpuChipIcon,
//   GlobeAltIcon,
//   ScaleIcon,
// } from "@heroicons/react/24/outline";

// // Define the structure for each feature item with TypeScript
// type FeatureItem = {
//   icon: React.ElementType;
//   number: string;
//   title: string;
//   description: string;
// };

// // Array holding the content for the four feature items
// const featuresData: FeatureItem[] = [
//   {
//     icon: BuildingLibraryIcon,
//     number: "01.",
//     title: "Vertical Integration",
//     description:
//       "Complete control over the entire production process, ensuring consistency, quality, and timely delivery across all stages.",
//   },
//   {
//     icon: CpuChipIcon,
//     number: "02.",
//     title: "Technological Excellence",
//     description:
//       "Latest European continuous processing machines and advanced manufacturing techniques enabling superior product quality.",
//   },
//   {
//     icon: GlobeAltIcon,
//     number: "03.",
//     title: "Sustainable Practices",
//     description:
//       "Pioneering eco-friendly processes like salt-free cotton dyeing and water recycling that reduce environmental impact.",
//   },
//   {
//     icon: ScaleIcon,
//     number: "04.",
//     title: "Scale & Flexibility",
//     description:
//       "Capacity to handle large-scale projects while maintaining the flexibility to accommodate specialized requirements.",
//   },
// ];

// const WhatSetsUsApart: React.FC = () => {
//   return (
//     <section className="bg-gray-50 py-16 sm:py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="mx-auto max-w-3xl text-center mb-16">
//           <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             What Sets Us Apart
//           </h2>
//         </div>

//         {/* Grid container for the four feature items */}
//         <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
//           {featuresData.map((feature) => {
//             const IconComponent = feature.icon;
//             return (
//               // The `group` class here is the trigger for the hover effect on the line
//               <div
//                 key={feature.title}
//                 className="group flex flex-col items-center text-center"
//               >
//                 {/* Circular Icon */}
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--vibrantGreen)] p-4">
//                   <IconComponent
//                     className="h-10 w-10 text-white"
//                     aria-hidden="true"
//                   />
//                 </div>

//                 {/* Numbered Title */}
//                 <h3 className="mt-8 text-xl font-bold text-gray-900">
//                   {feature.number} {feature.title}
//                 </h3>

//                 {/* The Animated Line */}
//                 <div className="mt-2 h-1 w-0 bg-[var(--vibrantGreen)] transition-all duration-300 ease-in-out group-hover:w-1/2"></div>

//                 {/* Description */}
//                 <p className="mt-4 text-base leading-7 text-gray-600">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatSetsUsApart;

// ********************************************

// components/WhatSetsUsApart.tsx
"use client";
import React from "react";
// Import suitable icons from the Heroicons library
import {
  BuildingLibraryIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

// Define the structure for each feature item with TypeScript
type FeatureItem = {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
};

// Array holding the content for the four feature items
const featuresData: FeatureItem[] = [
  {
    icon: BuildingLibraryIcon,
    number: "01.",
    title: "Vertical Integration",
    description:
      "Complete control over the entire production process, ensuring consistency, quality, and timely delivery across all stages.",
  },
  {
    icon: CpuChipIcon,
    number: "02.",
    title: "Technological Excellence",
    description:
      "Latest European continuous processing machines and advanced manufacturing techniques enabling superior product quality.",
  },
  {
    icon: GlobeAltIcon,
    number: "03.",
    title: "Sustainable Practices",
    description:
      "Pioneering eco-friendly processes like salt-free cotton dyeing and water recycling that reduce environmental impact.",
  },
  {
    icon: ScaleIcon,
    number: "04.",
    title: "Scale & Flexibility",
    description:
      "Capacity to handle large-scale projects while maintaining the flexibility to accommodate specialized requirements.",
  },
];

const WhatSetsUsApart: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
            What Sets Us Apart
          </h2>
        </div>

        {/* Grid container is now relative to position the continuous line */}
        <div className="relative grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. The Continuous Gray Line (Background Layer) */}
          {/* UPDATED: Line position moved from top-10 to top-20 */}
          <div className="absolute top-24 left-0 h-0.5 w-full bg-gray-200"></div>

          {featuresData.map((feature) => {
            const IconComponent = feature.icon;
            return (
              // The `group` class here is the trigger for the hover effect
              <div
                key={feature.title}
                className="group relative flex flex-col items-center text-center"
              >
                {/* 2. The Hidden Colored Line Segment (Hover Layer) */}
                {/* UPDATED: Line position moved from top-10 to top-20 */}
                <div className="absolute top-24 left-0 h-0.5 w-full bg-[var(--vibrantGreen)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* 3. The Circular Icon (Top Layer) */}
                {/* The icon's background is now the main section background to create a "punched-out" look */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 p-4 ring-8 ring-gray-50">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--vibrantGreen)]">
                    <IconComponent
                      className="h-20 w-20 px-2 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Numbered Title */}
                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  {feature.number} {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-md leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
