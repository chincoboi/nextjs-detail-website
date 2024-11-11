"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Asset 3@1.5x.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const showMenu = () => setIsMenuOpen(true);
  const hideMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${isSticky ? "sticky" : ""}`}>
      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navLinks">
       <FontAwesomeIcon icon={faTimes} className="fa-times" onClick={hideMenu} />
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/services">SERVICES</Link></li>
          <li><Link href="/blog">BLOG</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>
      </div>
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={showMenu} />
    </nav>
  );
};

export default Navbar;
