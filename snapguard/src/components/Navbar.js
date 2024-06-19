import Link from "next/link";
import React from "react";
import Image from "next/image";
// import Logo from "@/assets/logo.svg";

function Navbar() {
  return (
    <main>
      <div className="navbar fixed top-0 left-0 w-full bg-white border-b-2 border-customYellow text-black z-50">
        <div className="navbar-start">
          <div>
            {/* <Image
              src={Logo}
              width={50}
              height={50}
              className="image-full"
              alt="CTX Travel Logo"
            /> */}
          </div>
        </div>
        <div className="navbar-end flex lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 font-medium card card-compact bg-white"
            >
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex font-semibold bg-white">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
