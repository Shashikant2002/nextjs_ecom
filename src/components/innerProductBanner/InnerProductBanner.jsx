import React from "react";
import productInner from "./productBanner.module.css";

const InnerProductBanner = ({ name }) => {
  return (
    <>
      <div className={`${productInner.innerBanner}`}>
        <div className="container">
          <h1>Product Details</h1>
          <p>Home - Product - {name}</p>
        </div>
      </div>
    </>
  );
};

export default InnerProductBanner;
