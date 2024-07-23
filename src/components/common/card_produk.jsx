import React, { useState } from "react";
import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg"; // Add the filled bookmark icon

const CardProduct = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className="w-auto bg-white border border-black rounded-xl overflow-hidden">
      <div>
        <img
          src={imageDummy}
          className="lg:p-6  lg:w-[350px]   lg:h-[250px] xl:h-[305px] md:p-3 "
          alt={product.name}
        />
      </div>
      <div className="lg:p-6 md:p-4 ">
        <div className="font-inter text-black lg:font-semibold text-start  md:font-bold  lg:text-[1.5rem] xl:text-[25px] md:text-[1rem] ">
          {product.name}
        </div>
        <div className="flex flex-row row-auto items-center mt-2 gap-1">
          <div
            className="font-inter font-bold text-primary  lg:text-[25px]  md:text-[1.2rem] flex "
            style={{ lineHeight: 1.2 }}
          >
            <p>Rp</p> {product.price.toLocaleString()}
          </div>
          <div style={{ width: 10 }}></div>
          <div
            className="font-inter font-semibold text-gray opacity-50 line-through lg:text-[20px] md:text-[13px]  flex"
            style={{ lineHeight: 1.2 }}
          >
            <p>Rp</p> {product.originalPrice.toLocaleString()}
          </div>
        </div>
        <div style={{ height: 12 }}></div>
        <div className="flex flex-row row-auto items-center justify-start">
          <img src={starIcon} style={{ width: 24, height: 24 }} alt="star" />
          <div style={{ width: 12 }}></div>
          <div className="font-inter font-semibold" style={{ fontSize: 20 }}>
            <span className="text-yellow">{product.rating}</span>
            <span className="text-yellow ml-1">/ 5</span>
          </div>
        </div>
        <div style={{ height: 12 }}></div>
        <div className="flex flex-row row-auto items-center justify-between">
          <div>
            <button
              className="flex flex-row row-auto border items-center lg:gap-2 border-black lg:rounded-full  lg:px-[20px] xl:px-[49px] px-[15px] md:py-2   xl:py-4  lg:py-3 rounded-[40px]  "
              onClick={() => (window.location.href = "/detailproduct")}
            >
              <img src={buyIcon} alt="buy icon" />
              <div style={{ width: 10 }}></div>
              <span className="font-inter font-semibold text-black  md:text-[14px]  lg:text-[1rem]">
                Buy Now
              </span>
            </button>
          </div>
          <div className="md:hidden lg:block" style={{ width: 30 }}></div>
          <div>
            <button
              className="xl:p-4 md:p-2 border border-gray border-opacity-50 rounded-full"
              onClick={handleBookmarkClick}
            >
              <img
                src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
                alt="bookmark icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
