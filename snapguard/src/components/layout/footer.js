import React from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@awesome.me/kit-KIT_CODE/icons/classic/solid";

function Footer() {
  return (
    <main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white text-black">
        <p className="text-xs text-black ">
          © 2024 Content Shield. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://zeroonetech.xyz/"
          >
            Powered by Zero One Technologies
          </Link>
        </nav>
      </footer>
    </main>
  );
}

export default Footer;
