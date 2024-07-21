import Image from "next/image";
import SelectLanguage from "./SelectLanguage";
import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b border-gray-300">
      <div className="container m-auto flex justify-between items-center py-10">
        <div className="flex items-center">
          <Link href="/">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-5"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /></Link>
          <h2>Internationalization</h2>
        </div>
        <SelectLanguage />
      </div>
    </div>
  );
}
