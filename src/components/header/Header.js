import React from "react";
import HeaderCss from "./header.module.css";
import Image from "next/image";
import { logo } from "@/utils/imageImports";
import Nav from "../Nav";

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

        <div className="flex alignCenter">
          <from className={HeaderCss.search}>
            <input className={HeaderCss.searchInput} type="text" placeholder={"Search Product"} />
            <button className={HeaderCss.button}>Search</button>
          </from>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
