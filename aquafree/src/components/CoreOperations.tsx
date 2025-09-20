// // components/CoreOperations.tsx

// import React from 'react';
// // We'll import suitable icons from the Heroicons library
// import { SparklesIcon, SwatchIcon, PrinterIcon, ScissorsIcon } from '@heroicons/react/24/outline';

// // Define the structure for our card data, including unique colors for each icon
// type OperationCard = {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   iconBgColor: string;
//   iconTextColor: string;
// };

// // Array holding the content and styling for the four cards
// const operationsData: OperationCard[] = [
//   {
//     icon: SparklesIcon,
//     title: 'Scouring & Bleaching',
//     description: 'Preparing raw textiles for further processing through advanced cleaning and whitening techniques that preserve fiber integrity.',
//     iconBgColor: 'bg-violet-100',
//     iconTextColor: 'text-violet-600',
//   },
//   {
//     icon: SwatchIcon,
//     title: 'Dyeing',
//     description: 'State-of-the-art color application using eco-friendly processes, including our pioneering salt-free cotton dyeing technology.',
//     iconBgColor: 'bg-sky-100',
//     iconTextColor: 'text-sky-600',
//   },
//   {
//     icon: PrinterIcon,
//     title: 'Printing',
//     description: 'Precision pattern application through both traditional and digital methods, offering versatility in design and scale.',
//     iconBgColor: 'bg-red-100',
//     iconTextColor: 'text-red-600',
//   },
//   {
//     icon: ScissorsIcon,
//     title: 'Finishing',
//     description: 'Final treatments that enhance fabric performance, appearance, and durability according to specific client requirements.',
//     iconBgColor: 'bg-amber-100',
//     iconTextColor: 'text-amber-600',
//   },
// ];

// const CoreOperations: React.FC = () => {
//   return (
//     <section className="bg-white py-16 sm:py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="mx-auto max-w-2xl text-center mb-16">
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             Our Core Operations
//           </h2>
//         </div>

//         {/* Grid container for the cards */}
//         <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
//           {operationsData.map((operation) => {
//             const IconComponent = operation.icon;
//             return (
//               <div key={operation.title} className="text-center">
//                 {/* Icon with colored background */}
//                 <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-lg ${operation.iconBgColor}`}>
//                   <IconComponent className={`h-8 w-8 ${operation.iconTextColor}`} aria-hidden="true" />
//                 </div>

//                 {/* Card Title */}
//                 <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
//                   {operation.title}
//                 </h3>

//                 {/* Card Description */}
//                 <p className="mt-2 text-base leading-7 text-gray-600">
//                   {operation.description}
//                 </p>

//                 {/* "Learn More" Link */}
//                 <a href="#" className="mt-4 inline-block font-semibold text-indigo-600 transition hover:text-indigo-800">
//                   Learn More &rarr;
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreOperations;



// ******************************************




// components/CoreOperations.tsx
'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
// UPDATED: Import useSpring for the new animation effect
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SparklesIcon, SwatchIcon, PrinterIcon, ScissorsIcon } from '@heroicons/react/24/outline';

type OperationCard = {
  icon: React.ElementType;
  title: string;
  description: string;
  iconBgColor: string;
  iconTextColor: string;
};

const operationsData: OperationCard[] = [
    {
    icon: SparklesIcon,
    title: 'Scouring & Bleaching',
    description: 'Preparing raw textiles for further processing through advanced cleaning and whitening techniques that preserve fiber integrity.',
    iconBgColor: 'bg-violet-100',
    iconTextColor: 'text-violet-600',
  },
  {
    icon: SwatchIcon,
    title: 'Dyeing',
    description: 'State-of-the-art color application using eco-friendly processes, including our pioneering salt-free cotton dyeing technology.',
    iconBgColor: 'bg-sky-100',
    iconTextColor: 'text-sky-600',
  },
  {
    icon: PrinterIcon,
    title: 'Printing',
    description: 'Precision pattern application through both traditional and digital methods, offering versatility in design and scale.',
    iconBgColor: 'bg-red-100',
    iconTextColor: 'text-red-600',
  },
  {
    icon: ScissorsIcon,
    title: 'Finishing',
    description: 'Final treatments that enhance fabric performance, appearance, and durability according to specific client requirements.',
    iconBgColor: 'bg-amber-100',
    iconTextColor: 'text-amber-600',
  },
];

const CoreOperations: React.FC = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // We still use useTransform to map scroll progress to a position
    const xTransform = useTransform(scrollYProgress, [0.1, 0.8], ["-20%", "100%"]);
    const opacityTransform = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    // UPDATED: We feed the transformed value into useSpring for a smooth, "slippery" effect
    const smoothX = useSpring(xTransform, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={sectionRef} className="bg-white py-20 overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-[var(--forestGreen)] sm:text-5xl">
                        Our Core Operations
                    </h2>
                </div>

                {/* The four cards remain static */}
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
                    {operationsData.map((operation) => {
                        const IconComponent = operation.icon;
                        return (
                            <div key={operation.title} className="text-center">
                                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-lg ${operation.iconBgColor}`}>
                                    <IconComponent className={`h-8 w-8 ${operation.iconTextColor}`} aria-hidden="true" />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                                    {operation.title}
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    {operation.description}
                                </p>
                                <a href="#" className="mt-4 inline-block font-semibold text-indigo-600 transition hover:text-indigo-800">
                                    Learn More &rarr;
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Illustration with the new spring animation */}
                <motion.div
                    className="relative mt-20 h-28 w-[50%]"
                    // UPDATED: The style now uses the smoothed value from useSpring
                    style={{ x: smoothX, opacity: opacityTransform }}
                >
                    <Image
                        src="/assets/images/h1-img-3.png"
                        alt="Textile manufacturing process illustration"
                        layout="fill"
                        objectFit="contain"
                    />
                </motion.div>

                {/* <div className='absolute right-10 bottom-10'>

                    <div className='relative w-[100px] h-[100px]'>

                        <Image fill src="/assets/images/knitting.png" alt='' className='h-full w-full object-cover opacity-25'>

                        </Image>

                    </div>

                </div> */}

            </div>
        </section>
    );
};

export default CoreOperations;