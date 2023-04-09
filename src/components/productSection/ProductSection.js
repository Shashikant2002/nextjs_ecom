import React from "react";
import productCss from "./product.module.css";
import "react-multi-carousel/lib/styles.css";
import { product } from "@/utils/jsonData";
import ProductCard from "../allCards/PproductCard";
import ProductCss from "./product.module.css"

const ProductSection = () => {
  return (
    <>
      <div className="productSection commonSec">
        <div className="container">
          <div className={`${ProductCss.heading} textCenter`}>
            <h2>Top Products</h2>
          </div>
          <div className={`${ProductCss.center550} cards flex justifySpaceBetween flexWrap`}>
            {product &&
              product.map((slide) => {
                return <ProductCard slide={slide} key={slide._id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
