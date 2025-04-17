import Link from 'next/link';
import React from 'react'
import {  ImCross } from 'react-icons/im';

interface prop{
  showNav:boolean
  closeNav:()=>void
}
const MobileNav = ({ closeNav, showNav }: prop) => {
  if (!showNav) return null;

  return (
    <>
      {/* overlay */}
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh] z-[10000]' />

      {/* menu */}
      <ul className='text-white justify-center flex fixed top-0 items-center flex-col h-[100vh] w-[60%] bg-blue-500 space-y-10 z-[10006]'>
        <li className='navlink text-[25px]'><Link href="#">About</Link></li>
        <li className='navlink text-[25px]'><Link href="#">Project</Link></li>
        <li className='navlink text-[25px]'><Link href="#">Experience</Link></li>
        <li className='navlink text-[25px]'><Link href="#">Education</Link></li>
        <li className='navlink text-[25px]'><Link href="#">Contact</Link></li>
        <ImCross onClick={closeNav} className="absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white cursor-pointer" />
      </ul>
    </>
  );
}

export default MobileNav;