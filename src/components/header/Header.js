import React from "react";
import HeaderCss from "./header.module.css";
import Image from "next/image";
import { logo } from "@/utils/imageImports";
import Nav from "../nav/Nav";
import { ImSearch } from 'react-icons/im';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
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
      <div className={`container justifySpaceBetween flex ${HeaderCss.mainHeader}`}>
        <div className="flex ">
          <div className={HeaderCss.logo}>
            <Image src={logo} />
          </div>
          <Nav />
        </div>

        <div className={`flex alignCenter ${HeaderCss.gapCard}`}>
          <from className={HeaderCss.search}>
            <input className={HeaderCss.searchInput} type="text" placeholder={"Search Product"} />
            <button type="submit" className={HeaderCss.button}><ImSearch/></button>
          </from>
          <button className={`${HeaderCss.buttonCard}`}><VscAccount /></button>
          <button className={`${HeaderCss.buttonCard}`}><AiOutlineHeart /></button>
          <button className={`${HeaderCss.buttonCard}`}><AiOutlineShoppingCart /></button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
