import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { category } from "@/utils/jsonData";
import categoryCss from "./categorySection.module.css";
import Categories from "../allCards/categories";

const CategorySection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="commonSec">
      <div className="container">
        <div className={`${categoryCss.heading} textCenter`}>
          <h2>Product Categories</h2>
        </div>
        <div className="cards">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
          >
            {category &&
              category.map((slide) => {
                return <Categories slide={slide} key={slide._id} />;
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
