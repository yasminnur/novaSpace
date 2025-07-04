"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [navDropdown, setNavDropdown] = useState(false);
  const toggleDrodown = () => {
    setNavDropdown(!navDropdown);
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <nav
          className={`fixed h-fit left-10 right-10 lg:left-12 lg:right-12 z-50 top-10 flex flex-col lg:flex-row justify-between bg-primary items-center py-5 transition-transform duration-1000 ${
            navDropdown ? "rounded-[40px]" : "rounded-full"
          }`}
        >
          <div className="flex px-6 w-full justify-between items-center">
            <div className="w-[120px] h-[30px] overflow-hidden relative cursor-pointer">
              <Image
                src={"/assets/img/img-logo.svg"}
                fill
                alt=""
                className="absolute inset-0 object-contain"
              />
            </div>
            <div className="text-white text-base font-normal">
              <ul className="hidden lg:flex gap-x-5">
                <li className="relative group overflow-hidden w-[90px] h-[40px] rounded-full hover:bg-white/5 transition-all duration-500 cursor-pointer">
                  <Link href="#about">
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                      About
                    </p>
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
                      About
                    </p>
                  </Link>
                </li>
                <li className="relative group overflow-hidden px-4 py-2 w-[90px] h-[40px] rounded-full hover:bg-white/5 transition duration-600 cursor-pointer">
                  <Link href="#location">
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                      Location
                    </p>
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
                      Location
                    </p>
                  </Link>
                </li>
                <li className="relative group overflow-hidden px-4 py-2 w-[90px] h-[40px] rounded-full hover:bg-white/5 transition duration-600 cursor-pointer">
                  <Link href="#room">
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                      Room
                    </p>
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
                      Room
                    </p>
                  </Link>
                </li>
                <li className="relative group overflow-hidden px-4 py-2 w-[90px] h-[40px] rounded-full hover:bg-white/5 transition duration-600 cursor-pointer">
                  <Link href="#facilites">
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                      Facilities
                    </p>
                    <p className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
                      Facilities
                    </p>
                  </Link>
                </li>
                <li className="flex justify-center items-center border border-black hover:border-white bg-white hover:bg-transparent hover:text-white  px-4 h-[40px] text-black font-medium/[24px] rounded-full">
                  <Link href="#">Booking Now</Link>
                </li>
              </ul>
              {/* hamburger */}
              <button
                onClick={toggleDrodown}
                className="group relative w-7 md:w-8 h-5 md:h-6 flex flex-col justify-between cursor-pointer lg:hidden"
              >
                <span
                  className={`block h-[1px] w-full bg-white rounded ${
                    navDropdown ? "origin-top-left rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[1px] w-full bg-white rounded ${
                    navDropdown ? "hidden" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[1px] w-full bg-white rounded ${
                    navDropdown ? "origin-bottom-left -rotate-45 " : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
          {navDropdown && (
            <>
              <ul className="flex flex-col text-white w-full mt-5 text-base font-normal">
                <li className="group px-6 hover:bg-white/10 cursor-pointer py-3">
                  <Link href="#about">About</Link>
                </li>
                <li className="group px-6 hover:bg-white/10 cursor-pointer py-3">
                  <Link href="#location">Location</Link>
                </li>
                <li className="group px-6 hover:bg-white/10 cursor-pointer py-3">
                  <Link href="#room">Room</Link>
                </li>
                <li className="group px-6 hover:bg-white/10 cursor-pointer py-3">
                  <Link href="#facilities">Facilities</Link>
                </li>

                <li className="flex mx-6 my-3 py-2 justify-center items-center border border-black hover:border-white bg-white hover:bg-transparent text-black hover:text-white font-medium rounded-full cursor-pointer">
                  <Link href="#">Booking Now</Link>
                </li>
              </ul>
            </>
          )}
        </nav>
      </div>
    </>
  );
}
