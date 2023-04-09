import React from "react";
import CardCss from "./card.module.css";
import Image from "next/image";

const ProductCard = ({ slide }) => {
  return (
    <>
      <div className={`${CardCss.prodCard} textCenter`} >
        <Image className={CardCss.thumb} src={slide.image.default.src} alt={slide._id} width={1000} height={1000} ></Image>
          <h4 className={CardCss.title}>{slide.heading}</h4>
          <h5><strike className={CardCss.strikePrice}>₹{slide.regPrice}</strike> <span>₹{slide.price}</span></h5>
          <button className={CardCss.buttonCart}>Add To Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
