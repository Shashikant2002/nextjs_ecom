import React from "react";
import OfferCss from "./offcer.module.css";
import OfferCards from "../allCards/OfferCards";
import { offer } from "@/utils/jsonData";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const OfferSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className={`${OfferCss.offerSection} commonSec`}>
        <div className="container">
          <div className={`${OfferCss.heading} textCenter`}>
            <h2>Product Categories</h2>
          </div>
          <div className="cards">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
            >
              {offer &&
                offer.map((slide) => {
                  return <OfferCards slide={slide} key={slide._id} />;
                })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
