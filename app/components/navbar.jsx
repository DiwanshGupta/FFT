"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav className="navbg   w-full   top-0 left-0 fixed  md:p-0 p-2">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto md:p-3 ">
          <span className=" ">
            <Link href="/">
              <Image
                alt="navlogo "
                src="/navlogo.jpg"
                width={80}
                height={80}
                className=" rounded-full"
              />
            </Link>
          </span>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            {isNavbarOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div
            className={`items-center justify-between  rounded-lg w-full md:flex md:w-auto md:order-1 ${
              isNavbarOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <div className="flex  font-bold items-center justify-center text-xl flex-col p-4 md:p-0 mt-4   rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-">
              <div className="">
                <Link
                  href="/"
                  className="block py-2  pl-3 pr-4 font-bold text-2xl text-gray-700 hover:text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/courses"
                  className="block py-2 pl-3 pr-4 font-bold text-2xl  text-gray-700 hover:text-gray-500  rounded "
                >
                  Courses
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 font-bold text-2xl text-gray-700 hover:text-gray-500 rounded "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
