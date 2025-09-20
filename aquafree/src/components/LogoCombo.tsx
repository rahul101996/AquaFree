import Link from "next/link";
import Image from "next/image";

export default function LogoCombo() {
  return (
    <Link
      href={"/"}
      className="flex justify-start max-md:justify-center w-[100%] h-auto gap-3 max-xl:justify-center"
    >
      <div
        className={`relative w-[100%] max-md:top-[-8] max-md:w-[120px] max-md:h-[80px] max-xl:w-[120px] max-xl:h-[80px] h-[3.5rem] rounded-lg mx-auto max-md:m-0`}
      >
        <Image
          src={`/assets/images/logo2.png`}
          alt={"Just Textiles"}
          fill
          className="object-fill rounded-2xl max-md:object-fill"
        />
      </div>
    </Link>
  );
}
