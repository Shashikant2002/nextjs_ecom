import React, { useEffect, useState } from "react";
import innerProduct from "./productInner.module.css";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { reviews } from "@/utils/jsonData";
import { AiFillHeart } from 'react-icons/ai';

const InnerProductContent = ({ data }) => {
  const [qut, setQut] = useState(0);

  const tabContent = (ind) => {
    const tabs = document.getElementsByClassName("tabContentForTar");
    const butoonTab = document.getElementsByClassName("butoonTab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove(`${innerProduct.active}`);
      butoonTab[i].classList.remove(`${innerProduct.activeTab}`);
    }
    tabs[ind].classList.add(`${innerProduct.active}`);
    butoonTab[ind].classList.add(`${innerProduct.activeTab}`);
  };

  useEffect(() => {
    tabContent(0);
  }, []);

  return (
    <>
      <div className={`${innerProduct.innerProduct} commonSec`}>
        <div className={`${innerProduct.containerMainInner} container flex`}>
          <div className={`${innerProduct.image}`}>
            <Carousel showIndicators={false}>
              <div>
                <img src={data[0].image.default.src} width={700} height={700} />
                {/* <Image src={data[0].image.default.src} width={700} height={700} /> */}
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={data[1].image.default.src} width={700} height={700} />
                {/* <Image src={data[1].image.default.src} width={700} height={700} /> */}
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={data[2].image.default.src} width={700} height={700} />
                {/* <Image src={data[2].image.default.src} width={700} height={700} /> */}
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
          <div className={`${innerProduct.content}`}>
            <div>
              <h5>
                {
                  <>
                    <Link className={`${innerProduct.category}`} href={"/"}>
                      Fashions
                    </Link>
                    ,{" "}
                    <Link className={`${innerProduct.category}`} href={"/"}>
                      Men
                    </Link>
                  </>
                }
              </h5>
            </div>
            <h3 className={`${innerProduct.name}`}>
              Men’s blue cotton t-shirt
            </h3>
            <h3 className={`${innerProduct.price}`}>$39</h3>
            <div
              className={`${innerProduct.reviewStock} flex justifySpaceBetween alignCenter`}
            >
              <div className="star flex alignCenter">
                <p className={`${innerProduct.rating}`}>⭐⭐⭐⭐⭐ 3 Review</p>
              </div>
              <div className="stock">
                <p className={`${innerProduct.stockInd}`}>
                  Available:{" "}
                  <span className={`colorGreen colorRed`}>In Stock</span>
                </p>
              </div>
            </div>
            <p className={`${innerProduct.description}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusncididunt ut labo re et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamc oaliquip ex ea commodo
              consequa uis aute irure dolor...
            </p>
            <div className={`${innerProduct.colorSize}`}>
              <p className={`${innerProduct.colorFilter} flex`}>
                <span className={`${innerProduct.setColorCategory}`}>
                  Color:
                </span>
                <span className={`${innerProduct.socal}`}>
                  <button title="Red" className={`${innerProduct.colorButton}`}>
                    🔴
                  </button>
                  <button
                    title="Green"
                    className={`${innerProduct.colorButton}`}
                  >
                    🟢
                  </button>
                  <button
                    title="Yellow"
                    className={`${innerProduct.colorButton}`}
                  >
                    🟡
                  </button>
                </span>
              </p>
              <p className={`${innerProduct.colorFilter} flex`}>
                <span className={`${innerProduct.setColorCategory}`}>
                  Size:
                </span>
                <button title="Red" className={`${innerProduct.sizeButton}`}>
                  L
                </button>
                <button title="Green" className={`${innerProduct.sizeButton}`}>
                  S
                </button>
                <button title="Yellow" className={`${innerProduct.sizeButton}`}>
                  XL
                </button>
              </p>
            </div>
            <div className={`${innerProduct.qutCartWish} flex`}>
              <div className={`${innerProduct.quentity} flex`}>
                <button onClick={() => setQut(qut - 1)}>-</button>
                <input value={qut} className="textCenter" type="text" readOnly={true} />
                <button onClick={() => setQut(qut + 1)}>+</button>
              </div>

              <button>Add to Cart</button>

              <button><AiFillHeart /></button>
            </div>
            <p
              className={`${innerProduct.tagsProduct} colorDark flex alignCenter`}
            >
              <span className={`${innerProduct.setColorCategory}`}>SKU: </span>
              <span className="colorDark">3489 JE0765-37</span>
            </p>
            <p className={`${innerProduct.tagsProduct} colorDark flex`}>
              <span className={`${innerProduct.setColorCategory}`}>Tags: </span>
              {
                <>
                  <Link className={`${innerProduct.category}`} href={"/"}>
                    Bags
                  </Link>
                  ,{" "}
                  <Link className={`${innerProduct.category}`} href={"/"}>
                    Fashion
                  </Link>
                  ,
                  <Link className={`${innerProduct.category}`} href={"/"}>
                    Girls
                  </Link>
                </>
              }
            </p>
            <p className={`${innerProduct.tagsProduct} colorDark flex`}>
              <span className={`${innerProduct.setColorCategory}`}>
                Share:{" "}
              </span>
              <span className={`${innerProduct.socal} flex alignCenter`}>
                <Link href={"/"}>
                  <BsFacebook />
                </Link>
                <Link href={"/"}>
                  <BsTwitter />
                </Link>
                <Link href={"/"}>
                  <BsLinkedin />
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className={`${innerProduct.moreDetail}`}>
          <div className="container">
            <div className={`${innerProduct.tabs} flex justifyCenter`}>
              <button
                onClick={() => tabContent(0)}
                className={`${innerProduct.tabButton} butoonTab`}
              >
                Description
              </button>
              <button
                onClick={() => tabContent(1)}
                className={`${innerProduct.tabButton} butoonTab`}
              >
                Additional Information
              </button>
              <button
                onClick={() => tabContent(2)}
                className={`${innerProduct.tabButton} butoonTab`}
              >
                Reviews (3)
              </button>
            </div>
            <div className={`${innerProduct.contentTab}`}>
              <div
                className={`${innerProduct.tabContent} flex tabContentForTar`}
              >
                <div className={`${innerProduct.desc}`}>
                  <h4 className="colorDark">Product Details</h4>
                  <p className="colorPata">
                    Desectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore ma na alihote pare ei gansh
                    es gan qua.
                  </p>
                  <p className="colorPata">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi uet aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in volupteat velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupiatat non proiden re dolor in reprehend.
                  </p>
                </div>
                <div className={`${innerProduct.desc}`}>
                  <h4 className="colorDark">Product Features</h4>
                  <p className={`colorPata ${innerProduct.pointarrow}`}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                  <p className={`colorPata ${innerProduct.pointarrow}`}>
                    Letotam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis
                  </p>
                  <p className={`colorPata ${innerProduct.pointarrow}`}>
                    Vitae dicta sunt explicabo. Nemo enim ipsam volupta aut odit
                    aut fugit
                  </p>
                  <p className={`colorPata ${innerProduct.pointarrow}`}>
                    Lesed quia consequuntur magni dolores eos qui ratione
                    voluptate.
                  </p>
                </div>
              </div>
              <div className={`${innerProduct.tabContent} tabContentForTar`}>
                <div className={`${innerProduct.additional}`}>
                  <h4 className="colorDark">Additional Information</h4>
                  <p className="colorPata">
                    <b className="colorDark">Weight: </b> <span>2 kg</span>
                  </p>
                  <p className="colorPata">
                    <b className="colorDark">Dimensions: </b>{" "}
                    <span>12 × 42 × 20 cm</span>
                  </p>
                  <p className="colorPata">
                    <b className="colorDark">Item Code: </b>{" "}
                    <span>AB42 – 2394 – DS023</span>
                  </p>
                  <p className="colorPata">
                    <b className="colorDark">Brand: </b> <span>Ulina</span>
                  </p>
                  <p className="colorPata">
                    <b className="colorDark">Color: </b>{" "}
                    <span>Blue, Red, Yellow</span>
                  </p>
                  <p className="colorPata">
                    <b className="colorDark">Size: </b> <span>L, M, S, XL</span>
                  </p>
                  <p className="colorPata">
                    <b className="colorDark">Specification: </b>{" "}
                    <span>1 cleaner, 1 pc soap, 1pc dress</span>
                  </p>
                  <p className="colorPata">
                    <b className="colorDark">Warranty: </b> <span> 1 year</span>
                  </p>
                </div>
              </div>
              <div
                className={`${innerProduct.tabContent} flex tabContentForTar`}
              >
                <div className={`${innerProduct.reviews}`}>
                  <h4 className="colorDark">3 Reviews</h4>

                  {reviews &&
                    reviews.slice(0, 3).map((ele) => {
                      return (
                        <>
                          <div className={`${innerProduct.review} flex`}>
                            <Image src={ele.profime} />
                            <div className="content">
                              <h5>{ele.title}</h5>
                              <p className="colorPata">{ele.description.slice(0, 50)}{ele.description.length > 50 ? "..." : ""}</p>
                              <p className={`${innerProduct.star}`}>
                                ⭐⭐⭐⭐⭐
                              </p>
                              <p className="colorPata">
                                <b className="colorDark">{ele.name}</b> on{" "}
                                {ele.date}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div className={`${innerProduct.formReview}`}>
                  <h4 className="colorDark">Add a Review</h4>
                  <form className={`${innerProduct.form}`}>
                    <div className="ratingInput flex">
                      <p className="colorPata">Your Rating*</p> ⭐⭐⭐⭐⭐
                    </div>
                    <input type="text" placeholder="Review Title*" />
                    <textarea
                      type="text"
                      placeholder="Write Your Review*"
                    ></textarea>
                    <div className="nameEmail flex">
                      <input type="text" placeholder="Your Name*" />
                      <input type="email" placeholder="Your Email*" />
                    </div>
                    <button type="submit">Submit Review</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerProductContent;
