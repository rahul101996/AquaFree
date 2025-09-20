import Link from "next/link";

interface NavitemProps {
  title: string;
  path: string;
}

export default function Navitem({ title, path }: NavitemProps) {
  return (
    <Link
      className="text-white w-fit border-none rounded-2xl font-semibold px-5 h-[50%] bg-[var(--deepOcean)] border-2 flex items-center justify-center "
      href={path}
    >
      {title}
    </Link>
  );
}
