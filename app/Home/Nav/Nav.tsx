'use client';
import React from 'react';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';

interface Prop {
  openNav?: () => void;
}

const Nav = ({ openNav }: Prop) => {
  return (
    <div className="fixed top-0 z-50 w-full h-[13vh] bg-[#181a1d] shadow-md">
      <div className="flex items-center justify-between w-[90%] xl:w-[70%] h-full mx-auto">
        {/* Logo */}
        <div className="text-[28px] md:text-[35px] font-semibold text-white">
          Pav<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-300">it</span>hra
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex text-white items-center space-x-6 xl:space-x-10">
          {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
            <li key={item} className="navlink capitalize">
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="relative hidden md:inline-flex group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#887373] via-[#df87d6] to-[#d3067d] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            className="border border-amber-700 relative inline-flex items-center justify-center px-6 py-3 text-sm md:text-lg font-bold text-white bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <HiBars3BottomRight
          className="w-8 h-8 text-white cursor-pointer lg:hidden"
          onClick={openNav}
        />
      </div>
    </div>
  );
};

export default Nav;
