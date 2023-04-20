import React from "react";
import CardCss from "./card.module.css";
import Image from "next/image";
import { BsFillHeartFill, BsArrowsMove } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from "next/link";

const ProductCard = ({ slide }) => {
  return (
    <>
      <div className={`${CardCss.prodCard}`} >
        <div className={CardCss.Prodimage}>
          <div className={CardCss.cardHover}>
            <div className={`${CardCss.icons} flex justifyCenter alignCenter`}>
              <button className={CardCss.thumbIcons}><AiOutlineShoppingCart /></button>
              <button className={CardCss.thumbIcons}><BsArrowsMove /></button>
              <button className={CardCss.thumbIcons}><BsFillHeartFill /></button>
            </div>
          </div>
          <Image
            className={CardCss.thumb}
            src={slide.image.default.src}
            alt={slide._id}
            width={1000}
            height={1000}
          />
        </div>
        <div className={CardCss.content}>
          <Link href={`/product/${slide._id}`}><h5 className={CardCss.title}>{slide.heading}</h5></Link>
          <p className={CardCss.price}>
            <strike className={CardCss.strikePrice}>₹{slide.regPrice}</strike>{" "}
            <span>
              <b>₹{slide.price}</b>
            </span>
          </p>
          <button className={CardCss.buttonCart}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
