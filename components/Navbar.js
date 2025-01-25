import Link from "next/link";

export default function Navbar() {
  console.log("navbar");
  return (
    <header class=" h-[60px] md:h-[110px] flex justify-center items-center border-b border-gray-300">
      <nav class="flex justify-between w-[1000px] h-[30px] md:h-[60px] items-center ">
        <img class="h-[30px] w-[auto] md:h-[60px]" src="/assets/Logo.png" />
        <ul class="md:text-[22px] flex justify-around gap-[40px]">
          <li>
            <Link href="/">SEARCH</Link>
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
    </header>
  );
}
