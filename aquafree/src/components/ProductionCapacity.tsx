// components/ProductionCapacity.tsx
"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Define the structure for our card data with TypeScript
type CapacityCardProps = {
  value: number;
  suffix?: string;
  title: string;
  description: string;
  decimals?: number;
};

// Array holding the content for the three cards
const capacityData: CapacityCardProps[] = [
  {
    value: 150000,
    title: "Meters Per Day",
    description:
      "Our facilities are powered by the latest European continuous processing machines, enabling massive daily fabric throughput.",
  },
  {
    value: 4.5,
    suffix: "M",
    title: "Woven Meters Monthly",
    description:
      "Consistent, high-quality production of woven fabrics serving diverse client needs across markets.",
    decimals: 1,
  },
  {
    value: 250,
    title: "Tons of Knits Monthly",
    description:
      "Specialized processing of knitted textiles, meeting exacting standards for domestic and international markets.",
  },
];

// A single card component that contains the animation logic
const CapacityCard: React.FC<{ card: CapacityCardProps }> = ({ card }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      // Card Background: White
      // Shadow: Added a larger shadow
      // Transition: Scale up on hover, and slight translateY for modern feel
      className="relative overflow-hidden rounded-lg bg-white p-8 text-gray-800 shadow-lg 
                 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1"
    >
      {/* The blue accent bar at the top */}
      {/* Added rounded-b-md to the blue bar for a subtle visual separation at the bottom */}
      <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-500 rounded-b-md"></div>
      <div className="text-5xl font-bold text-gray-900 mb-2">
        {" "}
        {/* Text color adjusted for white bg */}
        {inView && ( // Only render CountUp when the component is in view
          <CountUp
            end={card.value}
            duration={2.75}
            separator=","
            suffix={card.suffix}
            decimals={card.decimals}
          />
        )}
      </div>
      <p className="mb-4 font-semibold text-gray-700">{card.title}</p>{" "}
      {/* Text color adjusted */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {card.description}
      </p>{" "}
      {/* Text color adjusted */}
    </div>
  );
};

// The main component that lays out the section
const ProductionCapacity = () => {
  return (
    <section className="bg-[#f3f4f6] py-10">
      {" "}
      {/* Changed overall section bg to a very light gray for subtle contrast */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--forestGreen)] sm:text-5xl ">
            Our Production Capacity
          </h2>
        </div>

        <div className="absolute right-0 -top-10">
          <div className="relative w-[240px] h-[180px]">
            <Image
              src="/assets/images/thread2.png"
              alt="Thread"
              fill
              objectFit="cover"
              className="h-full w-full opacity-20"
            />
          </div>
        </div>

        <div className="absolute left-10 bottom-0">
          <div className="relative w-[100px] h-[100px]">
            <Image
              fill
              src="/assets/images/knitting.png"
              alt=""
              className="h-full w-full object-cover opacity-20"
            ></Image>
          </div>
        </div>

        {/* Grid for the three cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {capacityData.map((card) => (
            <CapacityCard key={card.title} card={card} />
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {" "}
          {/* Adjusted text color, max-width, and line-height */}
          This significant capacity makes us one of the most productive textile
          manufacturers in the region, allowing us to serve large-scale clients
          with consistent quality and reliability.
        </p>
      </div>
    </section>
  );
};

export default ProductionCapacity;
