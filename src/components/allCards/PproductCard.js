import React from "react";
import CardCss from "./card.module.css";
import Image from "next/image";

const ProductCard = ({ slide }) => {
  return (
    <>
      <div className={`${CardCss.prodCard}`}>
        <Image
          className={CardCss.thumb}
          src={slide.image.default.src}
          alt={slide._id}
          width={1000}
          height={1000}
         />
        <div className={CardCss.content}>
          <h5 className={CardCss.title}>{slide.heading}</h5>
          <p className={CardCss.price}>
            <strike className={CardCss.strikePrice}>₹{slide.regPrice}</strike>{" "}
            <span><b>₹{slide.price}</b></span>
          </p>
          <button className={CardCss.buttonCart}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
