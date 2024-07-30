"use client";
import Image from "next/image";
// import { CiMenuBurger, CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <div>
      <nav className="w-full bg-slate-400 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* {LOGO} */}
              <Link href="/">
                <h3 className="text-2xl text-cyan-600 font-bold">LOGO</h3>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaRegUserCircle className="text-3xl text-white"/>
                  ) : (
                    <FaRegUserCircle className="text-3xl text-white"/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 items-center justify-self-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto mt-3 items-center justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div ></div>
          <div className="md:block hidden cursor-pointer">
          <FaRegUserCircle className="text-3xl text-white"/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
