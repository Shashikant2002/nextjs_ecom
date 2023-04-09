import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import BannerCss from "./banner.module.css";
import { sliderData } from "@/utils/jsonData";

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
      <section className={BannerCss.banner}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
        >
          {sliderData &&
            sliderData.map((slide) => {
              return (
                <div
                  style={{
                    background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("${slide.image.default.src}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  key={slide._id}
                  className={`flex alignCenter justifyCenter ${BannerCss.slide}`}
                >
                  <div className="container textCenter">
                    <h1>Luxe Swimwear</h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Provident pariatur quod quo deserunt praesentium
                      perspiciatis voluptatem dolore dignissimos beatae magnam
                      ad ut cumque quisquam blanditiis hic necessitatibus,
                      impedit nulla unde.
                    </p>
                    <button className={BannerCss.buttonBanner}>SHOP NOW</button>
                  </div>
                </div>
              );
            })}
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
