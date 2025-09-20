// import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
interface AboutNewItemProps {
  title: string;
  link: string;

  // img: string;
}

export default function AboutNewItem({ title, link }: AboutNewItemProps) {
  return (
    <Link
      className="relative w-auto text-left after:hover:w-[70%] after:w-0 after:h-[2px] after:bg-[#152869] after:transition-all after:absolute after:bottom-[-5PX] after:left-3 h-full flex items-center justify-center text-[#919191] max-lg:text-xs"
      href={link}
    >
      <h3 className="flex items-center justify-center gap-1 text-md font-normal text-black hover:text-[var(--heading2)]">
      <FaAngleDoubleRight className=""/><span className="mr-1"></span> {title}
      </h3>
    </Link>
  );
}
