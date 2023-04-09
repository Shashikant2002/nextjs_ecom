import React from "react";
import CardCss from "./card.module.css";

const OfferCards = ({ slide }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("${slide.image.default.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
      className={`${CardCss.offerCard} textCenter`}
    >
      <div className={CardCss.content}> 
        <h3 className={CardCss.heading}>GET</h3>
        <h2 className={CardCss.heading}>{slide.heading}</h2>
        <h3 className={CardCss.heading}>OFF</h3>
      </div>
    </div>
  );
};

export default OfferCards;
