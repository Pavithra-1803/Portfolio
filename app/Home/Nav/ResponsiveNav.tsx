"use client";
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setshowNav] = useState(false);

  const ShownavHandler = () => setshowNav(true);
  const closenavhandler = () => setshowNav(false);

  return (
    <div>
      <Nav openNav={ShownavHandler} />
      <MobileNav closeNav={closenavhandler} showNav={showNav} />
    </div>
  );
};

export default ResponsiveNav;
