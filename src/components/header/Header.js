import React, { useState } from "react";
import HeaderCss from "./header.module.css";
import Image from "next/image";
import { logo } from "@/utils/imageImports";
import Nav from "../nav/Nav";
import { ImSearch } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(true);
  const togleNav = () => {
    setNav(!nav);
  };

  return (
    <header className={HeaderCss.header}>
      <div className={HeaderCss.upHead}>
        <div className="container textCenter">
          <p>
            Refer a friend & get <span className="colorRed">$20</span> in
            credits each ✨
          </p>
        </div>
      </div>
      <div
        className={`container alignCenter justifySpaceBetween flex ${HeaderCss.mainHeader}`}
      >
        <div className="flex ">
          <div className={HeaderCss.logo}>
            <Image src={logo} />
          </div>
          <Nav togleNav={togleNav} setNav={nav} />
        </div>

        <div
          className={`flex alignCenter ${HeaderCss.gapCard} ${
            HeaderCss.inPhone
          } ${nav ? HeaderCss.showInPhone : ""}`}
        >
          <from className={HeaderCss.search}>
            <input
              className={HeaderCss.searchInput}
              type="text"
              placeholder={"Search Product"}
            />
            <button type="submit" className={HeaderCss.button}>
              <ImSearch />
            </button>
          </from>
          <button className={`${HeaderCss.buttonCard}`}>
            <VscAccount />
          </button>
          <button className={`${HeaderCss.buttonCard}`}>
            <AiOutlineHeart />
          </button>
          <button className={`${HeaderCss.buttonCard}`}>
            <AiOutlineShoppingCart />
          </button>
        </div>
        <span onClick={togleNav} className={HeaderCss.faBar}>
          <FaBars />
        </span>
      </div>
    </header>
  );
};

export default Header;
