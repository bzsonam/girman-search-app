import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header>
      <div className="md:hidden">
        <nav class="flex justify-between w-[auto] h-[60px]  p-[40px] items-center  border-b border-gray-300">
          <Link href="https://girmantech.com">
            <img class=" h-[30px] w-[106]" src="/assets/Logo.png" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            ☰
          </button>
        </nav>
      </div>

      <div>
        <div class="hidden md:flex h-[60px] md:h-[110px] justify-center items-center border-b border-gray-300">
          <nav class=" md:flex justify-between w-[1000px] h-[30px] md:h-[60px] items-center">
            <img class="h-[30px] w-[auto] md:h-[60px]" src="/assets/Logo.png" />
            <ul class="md:text-[22px] flex justify-around gap-[40px]">
              <li>
                <Link
                  className="visited:text-blue-600 underline font-semibold"
                  href="/"
                >
                  SEARCH
                </Link>
              </li>
              <li>
                <Link href="https://girmantech.com">WEBSITE</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/girmantech">
                  LINKEDIN
                </Link>
              </li>
              <li>
                <a href="mailto:contact@girmantech.com">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>

        <ul
          className={`md:hidden absolute top-[60px] right-[30px] z-10 text-[12px] right-0 p-2 bg-white shadow-md ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 active:text-blue-600 active:underline active:font-semibold transition-all duration-200 ease-in-out"
            >
              SEARCH
            </Link>
          </li>
          <li>
            <Link
              href="https://girmantech.com"
              className="block px-4 py-2 active:text-blue-600 active:underline active:font-semibold transition-all duration-200 ease-in-out"
            >
              WEBSITE
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/girmantech"
              className="block px-4 py-2 active:text-blue-600 active:underline active:font-semibold transition-all duration-200 ease-in-out"
            >
              LINKEDIN
            </Link>
          </li>
          <li>
            <a
              href="mailto:contact@girmantech.com"
              className="block px-4 py-2 active:text-blue-600 active:underline active:font-semibold transition-all duration-200 ease-in-out"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
