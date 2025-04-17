'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ImCross } from 'react-icons/im';

interface Prop {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Prop) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = showNav ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showNav]);

  if (!showNav) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[10000]" />

      {/* Mobile Menu */}
      <ul className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-blue-500 z-[10006] text-white flex flex-col items-center justify-center space-y-10 px-4">
        <li className="navlink text-2xl">
          <Link href="#about" onClick={closeNav}>About</Link>
        </li>
        <li className="navlink text-2xl">
          <Link href="#projects" onClick={closeNav}>Projects</Link>
        </li>
        <li className="navlink text-2xl">
          <Link href="#experience" onClick={closeNav}>Experience</Link>
        </li>
        <li className="navlink text-2xl">
          <Link href="#education" onClick={closeNav}>Education</Link>
        </li>
        <li className="navlink text-2xl">
          <Link href="#contact" onClick={closeNav}>Contact</Link>
        </li>

        {/* Close Button */}
        <ImCross
          onClick={closeNav}
          className="absolute top-5 right-5 w-6 h-6 text-white cursor-pointer"
        />
      </ul>
    </>
  );
};

export default MobileNav;
