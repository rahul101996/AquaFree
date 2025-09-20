"use client";
import { useState, useEffect } from "react";
import LogoCombo from "@/components/LogoCombo";
import DropdownIcon from "@/components/DropdownIcon";
// import Sidebar from "@/components/Sidebar";
import AboutItems from "@/components/AboutItems";
import Navitem from "@/components/Navitem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import // faProjectDiagram,
// faCog,
// faBusinessTime,
// faUsers,

"@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function AboutNavbar({ position = "fixed" }) {
  useEffect(() => {
    const handleScroll = () => {
      handleMouseLeave();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const navItems = [
    { title: "Home", link: "/", dropdown: false },
    { title: "About Us", link: "/who-we-are", dropdown: false },
    { title: "Capabilities", link: "#", dropdown: false },
    { title: "Technologies & Innovation", link: "#", dropdown: false },
    { title: "Sustainability", link: "#", dropdown: false },
    { title: "Insights", link: "#", dropdown: false },

    // { title: "Get Involved", link: "get-involved", dropdown: true },
    // { title: "Impact & Insights", link: "impact-and-insights", dropdown: true },
    // { title: "Placement", link: "/placement", dropdown: false },
    // { title: "Donate", link: "/donate", dropdown: false },
  ];

  const renderDropdown = (index: number) => {
    switch (index) {
      case 1: // About
        return (
          <div className="fixed left-0 z-50 flex items-center justify-center w-screen h-auto top-20">
            <div className="w-[80%] flex flex-row items-start justify-start  bg-[var(--secondary)] shadow-xl border-none border-slate-200 h-auto py-5">
              <div className="w-1/3 px-6">
                <div className="relative flex flex-row pl-4">
                  <div className="flex flex-col items-start justify-start gap-6">
                    <div className="flex text-xl font-semibold text-center hover:cursor-pointer hover:text-[var(--heading2)]">
                      <Link href={"/who-we-are"}>
                        <h2>Who We Are</h2>
                      </Link>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3">
                      <AboutItems
                        link="/who-we-are#our-story"
                        title="Our Story"
                      />
                      <AboutItems
                        link="/who-we-are#our-core-values"
                        title="Our Core Values - Purpose, Mission, Vision and Values"
                      />
                      <AboutItems
                        link="who-we-are#our-leadership-and-people"
                        title="Our Leadership and People - Org Structure"
                      />
                    </div>
                  </div>

                  <div className="bg-[#e9e8e8] rounded-full h-auto w-[1px] ml-10 absolute right-0"></div>
                </div>
              </div>

              <div className="w-[2px] h-[100%] bg-slate-200"></div>

              <div className="w-1/3">
                <div className="pl-[2.8rem] flex-col items-start justify-center">
                  <div className="flex items-start justify-start hover:text-[var(--heading2)]">
                    <a
                      href={"/partners-and-collaborators"}
                      className="flex items-center justify-start gap-3 text-xl font-semibold text-center"
                    >
                      <h2>Partners and Collaborators</h2>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl text-blue-500"
                      />
                    </a>
                  </div>
                  <span className="text-sm text-gray-400">Overview</span>
                  <a href={"/how-we-work"}>
                    <div className="relative mt-4 ml-[-0.5rem]">
                      <Image
                        className="brightness-75 mt-2 rounded-lg w-[70%]"
                        src="/assets/images/partners-and-collaborators.jpg"
                        width={100}
                        height={100}
                        alt=""
                      />
                      <p className="mt-4 w-[90%]">Partners & Collaborators</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-[2px] h-[100%] bg-slate-200"></div>

              <div className="w-1/3">
                <div className="pl-[2.8rem] flex-col items-start justify-center">
                  <div className="flex items-start justify-start hover:text-[var(--heading2)]">
                    <a
                      href={"/annual-reports"}
                      className="flex items-center justify-start gap-3 text-xl font-semibold text-center"
                    >
                      <h2>Annual Reports</h2>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl text-blue-500"
                      />
                    </a>
                  </div>
                  <span className="text-sm text-gray-400">Overview</span>
                  <a href={"/how-we-work"}>
                    <div className="relative mt-4 ml-[-0.5rem]">
                      <Image
                        className="brightness-75 mt-2 rounded-lg w-[70%]"
                        src="/assets/images/annual-reports.jpg"
                        width={100}
                        height={100}
                        alt=""
                      />
                      <p className="mt-4 w-[90%]">Annual Reports</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case 2: // What We Do
        return (
          <div className="fixed left-0 z-50 flex items-center justify-center w-screen h-auto top-20">
            <div className="w-[85%] flex flex-row items-start justify-start group bg-[var(--secondary)] shadow-xl border-none  h-auto">
              <div className="w-1/3 ml-4">
                <div className="relative flex flex-col w-full mt-8 mb-8">
                  <div className="flex flex-row justify-start">
                    <a
                      href="/jeevika-mitra-skilling-and-livelihoods"
                      className="flex items-center justify-start gap-3 text-[var(--heading1)] hover:text-[var(--heading2)] text-lg font-semibold"
                    >
                      <h2>Jeevika Mitra - Skilling & Livelihoods</h2>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl font-thin"
                      />
                    </a>
                  </div>
                  <span className="text-sm text-gray-400">Overview</span>

                  <div className="flex flex-col items-start justify-start w-full space-y-2 mt-8">
                    {/* Nari Shakti Mitra - Women Empowerment Programs  */}

                    <div className="flex items-center w-full">
                      <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                        <div className="flex gap-2">
                          <FaAngleDoubleRight className="mt-1" />
                          <p className="hover:text-gray-800 hover:underline hover:underline-offset-4">
                            Nari Shakti Mitra - Women Empowerment Programs
                          </p>
                        </div>

                        <div className="bg-[var(--secondary)] w-full">
                          <div className="w-full transition-all duration-500 ease-out transform text-md">
                            <a href="/sheskills-mitra-vocational-training-for-women">
                              <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                <span>
                                  <BiSolidRightArrow className="text-[10px]" />
                                </span>
                                SheSkills Mitra: Vocational Training For Women
                              </p>
                            </a>
                            <a href="/smart-didi-mitra">
                              <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                <span>
                                  <BiSolidRightArrow className="text-[10px]" />
                                </span>
                                Smart Didi Mitra
                              </p>
                            </a>

                            <a href="/arambh-mitra">
                              <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                <span>
                                  <BiSolidRightArrow className="text-[10px]" />
                                </span>
                                Arambh Mitra
                              </p>
                            </a>

                            <a href="/caregivers-mitra">
                              <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                <span>
                                  <BiSolidRightArrow className="text-[10px]" />
                                </span>
                                CareGivers Mitra
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* KaushalMitra for Undergrads (Under 8th, 8th, 10th & 12th, FY, SY)  */}

                    <a href="/kaushal-mitra-for-undergrads">
                      <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                        <FaAngleDoubleRight />
                        <span>
                          Kaushal Mitra For Undergrads (Under 8th, 9th, 10th &
                          12th, FY, SY)
                        </span>
                      </div>
                    </a>

                    {/* LaunchPad Mitra for Recent Graduates  */}

                    <a href="/launchpad-mitra-for-recent-graduates">
                      <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                        <FaAngleDoubleRight />
                        <span>LaunchPad Mitra For Recent Graduates</span>
                      </div>
                    </a>

                    {/* Unnati Mitra for Working Professionals */}

                    <a href="/unnati-mitra-for-working-professionals">
                      <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                        <FaAngleDoubleRight />
                        <span>Unnati Mitra For Working Professionals</span>
                      </div>
                    </a>

                    {/* Umeed Mitra for Underprivillaged Youth  */}

                    <a href="/umeed-mitra-for-underprivillaged-youth">
                      <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                        <FaAngleDoubleRight />
                        <span>Umeed Mitra For Underprivillaged Youth</span>
                      </div>
                    </a>

                    {/* Skilling - Upskilling  */}

                    <a href="/skilling-upskilling">
                      <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                        <FaAngleDoubleRight />
                        <span>Skilling - Upskilling</span>
                      </div>
                    </a>
                  </div>

                  {/* <div className="bg-[#e9e8e8] h-[100%] w-[1px] ml-10 absolute right-0 rounded-full"></div> */}
                </div>
              </div>

              <div className="w-1/3">
                <div className="relative flex flex-row w-full pl-4 mt-8 mb-8">
                  <div className="bg-gray-400 h-[100%] w-[0.5px] ml-14 absolute left-[-3.5rem] rounded-full"></div>

                  <div className="flex flex-col items-start justify-start w-full gap-6">
                    <a
                      href="/prakriti-mitra-environment-and-sustainability"
                      // className="flex items-center justify-start gap-3 text-xl font-semibold"
                    >
                      <div className="flex gap-2 text-lg text-[var(--heading1)] font-semibold hover:cursor-pointer hover:text-[var(--heading2)]">
                        <h2>Prakriti Mitra - Environment & Sustainability </h2>
                        <FaArrowRightLong className="mt-1" />
                      </div>
                    </a>

                    <div className="flex flex-col items-start justify-start w-full space-y-2">
                      {/* Green Spaces - Tree Plantation (Miyawaki)  */}
                      <Link href="/prakriti-mitra-environment-and-sustainability#green-spaces">
                        <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                          <FaAngleDoubleRight />

                          <span>Green Spaces - Tree Plantation (Miyawaki)</span>
                        </div>
                      </Link>

                      {/* Water Conservation Systems  */}
                      <div className="flex items-center w-full">
                        <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                          <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                            <FaAngleDoubleRight />
                            <span>Water Conservation Systems</span>
                          </div>

                          <div className="bg-[var(--secondary)] w-full">
                            <div className="w-full transition-all duration-500 ease-out transform text-md">
                              <a href="/prakriti-mitra-environment-and-sustainability#rain-water-harvesting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Rain Water Harvesting - Rural & Urban
                                </p>
                              </a>
                              <a href="/prakriti-mitra-environment-and-sustainability#water-recycling">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Water Recycling
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* green energy  */}
                      <a href="/prakriti-mitra-environment-and-sustainability#green-energy">
                        <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                          <FaAngleDoubleRight />

                          <span>Green Energy</span>
                        </div>
                      </a>

                      {/* waste management  */}
                      <a href="/prakriti-mitra-environment-and-sustainability#waste-management">
                        <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                          <FaAngleDoubleRight />

                          <span>Waste Management</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-400 rounded-full h-[100%] w-[0.5px] ml-10 absolute right-0"></div>
                  {/* <div className="bg-[#e9e8e8] rounded-full h-[100%] w-[1px] ml-10 absolute right-[-68%]"></div> */}
                </div>
              </div>

              <div className="w-1/3">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="pl-[0.8rem] flex items-center justify-start hover:text-[var(--heading2)]">
                    <a
                      href="/sanjeevani-mitra-healthcare-and-wellbeing"
                      className="flex items-center justify-start gap-2 text-lg font-semibold hover:text-[var(--heading2)] text-[var(--heading1)]"
                    >
                      <h2>Sanjeevani Mitra - Healthcare & Wellbeing</h2>
                      <FaArrowRightLong className="mt-1" />
                      {/* <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl text-blue-500"
                      /> */}
                    </a>
                  </div>

                  <div className="pl-[0.8rem] flex flex-col gap-2">
                    {/* Community Health Initiative  */}
                    <div className="flex items-center w-full">
                      <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                        <p className="flex items-center gap-2 hover:text-gray-700 hover:underline hover:underline-offset-4">
                          <FaAngleDoubleRight />

                          <span>Community Health Initiative</span>
                        </p>

                        <div className="bg-[var(--secondary)] w-full">
                          <div className="w-full transition-all duration-500 ease-out transform text-md">
                            <a href="/sanjeevani-mitra-healthcare-and-wellbeing#blood-donation">
                              <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                <span>
                                  <BiSolidRightArrow className="text-[10px]" />
                                </span>
                                Blood Donation
                              </p>
                            </a>
                            <a href="/sanjeevani-mitra-healthcare-and-wellbeing#eye-checkup-and-specs">
                              <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                <span>
                                  <BiSolidRightArrow className="text-[10px]" />
                                </span>
                                Eye Checkup & Specs
                              </p>
                            </a>

                            <a href="/sanjeevani-mitra-healthcare-and-wellbeing#general-checkup-van">
                              <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                <span>
                                  <BiSolidRightArrow className="text-[10px]" />
                                </span>
                                General Checkup Van
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a href="/sanjeevani-mitra-healthcare-and-wellbeing#wellness-awareness-initiatives">
                      <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                        <FaAngleDoubleRight />

                        <span>Wellness Awareness Initiatives</span>
                      </div>
                    </a>

                    <a href="/sanjeevani-mitra-healthcare-and-wellbeing#prevention-and-intervention-programs">
                      <div className="flex gap-2 items-center hover:text-gray-700 hover:underline hover:underline-offset-4">
                        <FaAngleDoubleRight />

                        <span>Prevention & Intervention Programs</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: //Get Involved
        return (
          <>
            <div className="absolute z-50 transform -translate-x-1/2 bg-[var(--secondary)] border-none shadow-xl top-full left-1/2 w-[20rem] border-slate-200">
              <ul className="py-2">
                <DropdownItem
                  title="Volunteer With Us"
                  href="/volunteer-with-us"
                />
                <DropdownItem
                  title="Internship Opportunities"
                  href="/internship-opportunities"
                />
                <DropdownItem
                  title="Partner With Us (CSR + Collaboration)"
                  href="/partner-with-us"
                />
                <DropdownItem
                  title="Enrolment Form for Beneficiaries"
                  href="/enrolment-form-for-beneficiaries"
                />

                <DropdownItem title="Governance" href="/governance" />

                <DropdownItem title="Key Partners" href="/key-partners" />

                <DropdownItem title="Careers" href="/careers" />

                <DropdownItem title="FAQ" href="/faq" />
              </ul>
            </div>
          </>
        );
      case 4: // Impact & Insights
        return (
          <>
            <div className="absolute z-50 transform -translate-x-1/2 bg-[var(--secondary)] border-none shadow-xl top-full left-1/2 w-52 border-slate-200">
              <ul className="py-2">
                <DropdownItem
                  title="Video & Gallery"
                  href="/video-and-gallery"
                />
                <DropdownItem title="Press Coverage" href="/press-coverage" />
                <DropdownItem title="Case Studies" href="/case-studies" />
              </ul>
            </div>
          </>
        );
      case 5: // Placement
        return (
          <div className="absolute z-50 transform -translate-x-1/2 bg-[var(--secondary)] border-2 shadow-xl top-full left-1/2 w-52 border-slate-200">
            <ul className="py-2">
              <DropdownItem title="Blogs" href="/blog" />
              <DropdownItem title="Events " href="/events " />
              <DropdownItem title="Gallery" href="/gallery" />
              <DropdownItem title="Videos" href="/video" />
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header
      className={`flex-col w-full flex justify-center items-center shadow-lg h-24 ${
        position === "relative"
          ? "relative bg-white"
          : "fixed top-0 left-0 z-[99] bg-white"
      }`}
    >
      <nav className="w-[95%] h-20 flex items-center justify-between relative">
        <div className="w-[160px] h-full flex items-center max-md:w-full max-md:flex max-xl:w-[100%]">
          {/* <Sidebar /> */}
          <LogoCombo />
        </div>

        <div className="flex items-center w-fit h-full gap-8 justify-evenly px-0 max-md:hidden max-xl:hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.link}
                className="font-semibold flex items-center text-md gap-1 font-lora text-black hover:text-[var(--deepOcean)] transition-colors"
              >
                {item.title}
                {item.dropdown && <DropdownIcon />}
              </a>
              {activeMenu === index && item.dropdown && renderDropdown(index)}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end w-[150px] h-full gap-4 max-md:hidden max-xl:hidden">
          <Navitem title="Contact Us" path="/contact" />
        </div>
      </nav>
    </header>
  );
}

const DropdownItem = ({ title, href }: DropdownItemProps) => (
  <li>
    <a
      href={href}
      className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary)] relative hover:text-gray-700 hover:underline hover:underline-offset-4 hover:cursor-pointer"
    >
      {title}
    </a>
  </li>
);

interface DropdownItemProps {
  title: string;
  href: string;
}
