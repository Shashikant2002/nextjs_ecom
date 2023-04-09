import Link from "next/link";
import React from "react";
import NavCss from "./nav.module.css";
import { MdClose } from 'react-icons/md';

const Nav = ({setNav, togleNav}) => {
  return (
    <>
      <nav className={`${NavCss.nav} ${setNav ? NavCss.showNav : ""} flex alignCenter mainNavigation`}>
        <span onClick={togleNav} className={NavCss.close}><MdClose /></span>
        <ul className={`${NavCss.ul} flex`}>
          <li>
            <Link className={NavCss.navLink} href="/">Home</Link>
          </li>
          <li>
            <Link className={NavCss.navLink} href="/category">Categories</Link>
          </li>
          <li>
            <Link className={NavCss.navLink} href="/services">Services</Link>
          </li>
          <li>
            <Link className={NavCss.navLink} href="/about">About Us</Link>
          </li>
          <li>
            <Link className={NavCss.navLink} href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
