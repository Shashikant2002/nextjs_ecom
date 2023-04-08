import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex alignCenter">
        <ul className="flex">
          <li>
            <Link className="navLink" href="/">Home</Link>
          </li>
          <li>
            <Link className="navLink" href="/category">Categories</Link>
          </li>
          <li>
            <Link className="navLink" href="/services">Services</Link>
          </li>
          <li>
            <Link className="navLink" href="/about">About Us</Link>
          </li>
          <li>
            <Link className="navLink" href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          nav{
            margin-left: 20px;
            // display: none;
          }
          ul {
            gap: 10px;
          }
          @media (max-width: 950px) {
            ul {
              gap: 7px;
            }
          }
          @media (max-width: 770px) {
            nav{
              position: fixed;
              height: 100vh;
              z-index: 9999999;
              background: #111;
              top: 0;
              color: #fff;
              left: 0;
              margin: 0;
              max-width: 500px;
              width: 100%;
            }
            nav ul{
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Nav;
