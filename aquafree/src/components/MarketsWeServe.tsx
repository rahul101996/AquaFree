// import React from "react";
// import Image from "next/image";
// // Import suitable icons from Heroicons for the feature boxes
// import {
//   ShieldCheckIcon,
//   SparklesIcon,
//   TruckIcon,
//   BuildingOfficeIcon,
// } from "@heroicons/react/24/outline";

// // Define types for the market items
// type MarketItem = {
//   icon: React.ElementType; // Heroicon component
//   title: string;
//   description: string;
//   iconColorClass: string; // Tailwind class for icon color
// };

// // Content for the four market segments
// const marketsData: MarketItem[] = [
//   {
//     icon: ShieldCheckIcon, // Example icon
//     title: "Defense Programs",
//     description:
//       "Supplying specialized technical textiles meeting rigorous performance standards for military applications.",
//     iconColorClass: "text-blue-600",
//   },
//   {
//     icon: SparklesIcon, // Example icon
//     title: "Fashion Houses",
//     description:
//       "Creating trend-forward fabrics for domestic and international apparel brands with emphasis on quality and innovation.",
//     iconColorClass: "text-pink-600",
//   },
//   {
//     icon: TruckIcon, // Example icon
//     title: "Export Houses",
//     description:
//       "Supporting global textile trade with consistent, high-volume production meeting international standards.",
//     iconColorClass: "text-green-600",
//   },
//   {
//     icon: BuildingOfficeIcon, // Example icon
//     title: "Uniform Suppliers",
//     description:
//       "Delivering durable, functional fabrics for workwear and institutional uniforms with specialized performance features.",
//     iconColorClass: "text-orange-600",
//   },
// ];
// const MarketsWeServe = () => {
//   return (
//     <section className="bg-white py-16 sm:py-24">
//       <div className="mx-auto flex max-w-7xl items-center gap-x-16 gap-y-12 px-6 lg:px-8">
//         {/* Left Column: Text Content and Feature Boxes */}
//         <div className="w-[60%]">
//           {/* Eyebrow Text */}

//           {/* Main Title */}
//           <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
//             Markets We Serve
//           </h2>

//           {/* Main Description */}
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             We are dedicated to supporting a diverse range of industries with
//             our high-quality textile applications, from highly technical defense
//             fabrics to the latest fashion trends.
//           </p>

//           {/* Grid for the four feature boxes */}
//           <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
//             {marketsData.map((item) => {
//               const IconComponent = item.icon;
//               return (
//                 <div key={item.title} className="">
//                   <div className="flex items-center">
//                     <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
//                       <IconComponent
//                         className={`h-6 w-6 ${item.iconColorClass}`}
//                         aria-hidden="true"
//                       />
//                     </div>
                   
//                   </div>
//                   <h3 className="ml-4 text-xl font-semibold leading-7 text-gray-900">
//                       {item.title}
//                     </h3>
//                   <p className="mt-2 text-base leading-7 text-gray-600">
//                     {item.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right Column: Large Image */}
//         <div className="relative h-[480px] w-[40%] overflow-hidden rounded-xl bg-gray-100 shadow-xl lg:h-[600px]">
//           <Image
//             src="/assets/images/textile-factory.png" // IMPORTANT: Replace with your main image path in /public
//             alt="Textile manufacturing process with various applications"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketsWeServe;

// components/MarketsWeServe.tsx
"use client";
import React from "react";
import Image from "next/image";
import {
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

// Define types for the market items
type MarketItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColorClass: string;
};

// Content for the four market segments
const marketsData: MarketItem[] = [
    {
    icon: ShieldCheckIcon,
    title: "Defense Programs",
    description:
      "Supplying specialized technical textiles meeting rigorous performance standards for military applications.",
    iconColorClass: "text-blue-600",
  },
  {
    icon: SparklesIcon,
    title: "Fashion Houses",
    description:
      "Creating trend-forward fabrics for domestic and international apparel brands with emphasis on quality and innovation.",
    iconColorClass: "text-pink-600",
  },
  {
    icon: TruckIcon,
    title: "Export Houses",
    description:
      "Supporting global textile trade with consistent, high-volume production meeting international standards.",
    iconColorClass: "text-green-600",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Uniform Suppliers",
    description:
      "Delivering durable, functional fabrics for workwear and institutional uniforms with specialized performance features.",
    iconColorClass: "text-orange-600",
  },
];

const MarketsWeServe = () => {
  return (
    <section className="bg-white py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-16 gap-y-12 px-6 lg:flex-row lg:px-8">
        {/* Left Column: Text Content and Feature Boxes */}
        <div className="w-full lg:w-3/5">
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
            Markets We Serve
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are dedicated to supporting a diverse range of industries with
            our high-quality textile applications, from highly technical defense
            fabrics to the latest fashion trends.
          </p>

          {/* Grid for the four feature boxes */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {marketsData.map((item) => {
              const IconComponent = item.icon;
              return (
                // UPDATED: Added group, overflow-hidden and a fixed height to the card
                <div
                  key={item.title}
                  className="group relative h-64 overflow-hidden rounded-xl bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Icon Container - will slide up and fade out */}
                  <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-20 group-hover:opacity-0">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                      <IconComponent
                        className={`h-7 w-7 ${item.iconColorClass}`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Text Container - will slide up */}
                  <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-16">
                    <h3 className="mt-4 text-xl font-semibold leading-7 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Large Image */}
        <div className="relative h-[480px] w-full lg:w-2/5 overflow-hidden rounded-xl bg-gray-100 shadow-xl lg:h-[600px]">
          <Image
            src="/assets/images/textile-factory.png"
            alt="Textile manufacturing process with various applications"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketsWeServe;