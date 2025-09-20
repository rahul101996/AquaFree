import AboutNavbar from "@/components/AboutNavbar";
import Image from "next/image";
import EnvironmentalLeadership from "@/components/EnvironmentalLeadership";
import ScalingExcellenceProps from "@/components/ScalingExcellenceProps";

export default function Home() {
  return (
    <div>
      <AboutNavbar />
      {/* style={{ backgroundImage: "url('/assets/images/bg1.png')" }}  */}
      <div
        className="p-20"
        style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
      >
        <div className="relative isolate w-[90%] bg-[#fcf8f4]/60 h-[28rem] overflow-hidden rounded-2xl mx-auto mt-20 flex flex-row max-md:flex-col max-xl:flex-col font-sans">
          {/* <div
            className="absolute inset-0 bg-cover bg-center bg-[url('/assets/images/bg1.png')] opacity-30 -z-10 rounded-2xl"
            aria-hidden="true"
          ></div> */}

          {/* Left Section (Your content remains unchanged and fully opaque) */}
          <section className="flex flex-col justify-center w-[60%] h-[28rem] py-20 max-md:w-full max-xl:w-full text-[#044413] px-6 md:px-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-medium mb-10 text-[#044413] relative group hover:cursor-pointer">
                Just Textiles Ltd: Pioneering Innovation in Sustainable Textile
                Manufacturing
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#044413] w-0 group-hover:cursor-pointer transition-all duration-500 ease-in-out group-hover:w-68"></span>
              </h2>

              <div className="relative border-l-0 border-[#e4d8c7] pl-[0] space-y-12">
                <div className="relative text-[22px] text-[#06304F] flex items-start gap-4 pl-[-10] font-sans">
                  Our story is not simply one of growth - it's a journey marked
                  by continuous innovation, conscious choices, and bold steps
                  toward a sustainable future. Every milestone reflects our
                  belief that textiles can be manufactured with perfect balance
                  of performance, quality, and environmental responsibility.
                </div>
              </div>
            </div>
          </section>

          {/* Right Section (Your content remains unchanged and fully opaque) */}
          <div className="w-[40%] max-md:hidden max-xl:hidden">
            <div className="w-[100%] h-[100%] relative">
              <Image
                src="/assets/images/2.png"
                alt="Smiling girl representing foundation impact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-20 relative"
        style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
      >
        <section className="bg-[#fcf8f4]/60 px-12 max-lg:px-8 max-sm:px-6 w-[90%] mx-auto p-10 rounded-2xl relative">
          <div className="w-full">
            <div className="flex gap-6 max-md:gap-8 items-center w-full relative">
              {/* Text Content */}
              <div className="space-y-6 w-[70%]">
                <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-medium text-[var(--greenShade)] leading-tight">
                  Foundation: Setting the Standard
                </h2>

                <div className="space-y-4 text-[var(--bodyContent)] leading-relaxed">
                  <p className="text-[22px] max-md:text-base">
                    From our early years as dyeing and finishing specialists,
                    Just Textiles recognized that technology and process control
                    would be the keys to long-term success. While the industry
                    focused on volume over precision, we chose a different path
                    - delivering reliability through bulk orders with consistent
                    color, handled with speed and unwavering discipline.
                  </p>

                  <p className="text-[22px] max-md:text-base text-[var(--bodyContent)]">
                    This foundation principle of quality over shortcuts became
                    the DNA of our company, setting us apart from competitors
                    who prioritized quick gains over sustainable excellence.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-[30%] h-[30rem]">
                <div className="relative w-[100%] h-[100%]">
                  <Image
                    src="/assets/images/4.jpg"
                    alt="Laboratory technician conducting quality control testing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="p-20"
        style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
      >
        <section className="w-[90%] bg-[#fcf8f4]/60 mx-auto py-16 px-12 max-lg:px-8 max-sm:px-6 rounded-2xl relative">
          <div className="w-full mx-auto relative">
            {/* Main Heading */}
            <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-medium text-[var(--greenShade)] mb-12 max-md:mb-8">
              Strategic Vertical Integration
            </h2>

            {/* Steps Container */}
            <div className="space-y-8 max-md:space-y-6 mb-12">
              {/* Step 1 */}
              <div className="flex gap-6 max-md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 max-md:w-16 max-md:h-16 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-3xl max-md:text-2xl font-bold text-[var(--bodyContent)]">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl max-md:text-lg font-bold text-[var(--bodyContent)] text-[22px]">
                    Challenge Identified
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xl">
                    External supplier dependence created quality variability and
                    delivery risks for our clients
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 max-md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 max-md:w-16 max-md:h-16 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-3xl max-md:text-2xl font-bold text-[var(--bodyContent)]">
                      2
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl max-md:text-lg font-bold text-[var(--bodyContent)] text-[22px]">
                    Strategic Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xl">
                    Backward integration by adding scouring, bleaching, and
                    finishing capabilities in-house
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 max-md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 max-md:w-16 max-md:h-16 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-3xl max-md:text-2xl font-bold text-[var(--bodyContent)]">
                      3
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl max-md:text-lg font-bold text-[var(--bodyContent)] text-[22px]">
                    Competitive Advantage
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xl">
                    End-to-end quality control with reduced lead times and
                    continuously improved standardization
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Summary */}
            <div className="border-t border-gray-700 pt-8 max-md:pt-6">
              <p className="text-xl max-md:text-base text-gray-700 leading-relaxed max-w-4xl">
                By building a professionally managed vertical operation, we
                ensured that every stage of fabric processing could be
                monitored, standardized, and improved continuously - delivering
                unprecedented reliability to our partners.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className="p-20"
        style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
      >
        <section className="bg-[#fcf8f4]/60 rounded-2xl overflow-hidden">
          <div className="flex flex-row items-center w-full">
            {/* Left Image */}
            <div className="relative w-[100%] h-[40rem] overflow-hidden">
              <Image
                src="/assets/images/10.png"
                alt="Advanced textile manufacturing facility with colorful fabric production"
                fill
                className="object-cover overflow-hidden"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 max-md:space-y-6 py-20 px-6">
              {/* Main Heading */}
              <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-medium text-[var(--greenShade)] leading-tight">
                Technology as Our Differentiator
              </h2>

              {/* Description */}
              <p className="text-lg max-md:text-base text-gray-700 leading-relaxed">
                While competitors continued with traditional machines, Just
                Textiles invested boldly in state-of-the-art European continuous
                processing systems. This strategic technology investment
                transformed our operations and elevated our market position from
                local supplier to trusted global partner.
              </p>

              {/* Feature Boxes */}
              <div className="grid grid-cols-2 mx-4 max-sm:grid-cols-1 gap-6 max-md:gap-4">
                {/* Higher Efficiency */}
                <div className="bg-purple-50 p-6 max-md:p-4 rounded-lg border border-blue-100">
                  <h3 className="text-lg max-md:text-base font-bold text-gray-700 mb-3">
                    Higher Efficiency
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    24/7 continuous production capabilities enabling
                    unprecedented throughput and reliability
                  </p>
                </div>

                {/* Superior Consistency */}
                <div className="bg-purple-50 p-6 max-md:p-4 rounded-lg border border-purple-100">
                  <h3 className="text-lg max-md:text-base font-bold text-gray-700 mb-3">
                    Superior Consistency
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Critical shade matching for export and defense clients with
                    zero tolerance for variation
                  </p>
                </div>

                {/* Quality Excellence - Full width */}
                <div className="bg-purple-50 p-6 max-md:p-4 rounded-lg border border-green-100 col-span-2 max-sm:col-span-1">
                  <h3 className="text-lg max-md:text-base font-bold text-gray-700 mb-3">
                    Quality Excellence
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Dramatically lower defect rates ensuring fewer rejections
                    and faster delivery cycles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <EnvironmentalLeadership />
      <ScalingExcellenceProps />
    </div>
  );
}
