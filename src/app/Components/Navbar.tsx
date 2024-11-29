"use client";
import React from "react";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <div className="bg-black ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  Logo
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {["Home", "About", "Services", "Feedback", "Contact"].map(
                  (link, index) => (
                    <Link
                      href="/"
                      className="text-white hover:bg-white hover:text-black rounded-lg p-2 "
                      key={index}
                    >
                      {link}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="md:hidden flex items-center ">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <RxCross2 className="h-6 w-6 " />
                ) : (
                  <LuMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:p-3">
              {["Home", "About", "Services", "Feedback", "Contact"].map(
                (link, index) => (
                  <Link
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    key={index}
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
