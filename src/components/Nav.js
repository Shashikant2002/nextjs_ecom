import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex alignCenter">
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/category">Categories</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
        nav{
            margin-left: 20px;
        }
          ul {
            gap: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Nav;
