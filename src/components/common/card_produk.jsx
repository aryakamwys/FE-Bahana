import React, { useState } from "react";
// import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg";

const CardProduct = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  console.log(product.image_produk);

  return (
    <div className="max-w-sm bg-white border border-black rounded-xl">
      <div className="p-[5px] lg:p-6">
        <img
          src={product.image_produk}
          alt={product.nama_produk}
          // onError={handleImageError}
          className="w-[100px] h-[84px] lg:w-[350px] lg:h-[305px]"
        />
      </div>
      <div className="p-[5px] lg:p-6">
        <h2 className="font-inter text-[8px] lg:text-[25px] text-black font-semibold text-start">
          {product.nama_produk}
        </h2>
        <div className="flex flex-row items-center">
          <span className="font-inter font-semibold text-primary text-[8px] lg:text-[25px]">
            Rp {product.harga.toLocaleString()}
          </span>
          <div className="w-[5px] lg:w-[10px]" />
          <span className="font-inter text-[6px] lg:text-[20px] font-semibold text-gray opacity-50 line-through">
            Rp {(product.harga + 50000).toLocaleString()}
          </span>
        </div>
        <div className="lg:h-[12px] h-[5px]" />
        <div className="flex flex-row items-center justify-start">
          <img
            src={starIcon}
            alt="star"
            className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
          />
          <div style={{ width: 12 }} />
          <span className="font-inter font-semibold text-[8px] lg:text-[20px]">
            <span className="text-yellow">4.9</span>
            <span className="text-yellow ml-1">/ 5</span>
          </span>
        </div>
        <div className="lg:h-[12px] h-[5px]" />
        <div className="flex flex-row justify-between">
          <button
            className="w-[78px] h-[18px] lg:w-[261px] lg:h-[55px] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-50 rounded-full lg:pt-4 lg:pb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-opacity-100 active:scale-95 active:bg-gray-200"
            onClick={() => (window.location.href = "/detailproduct")}
          >
            <img
              src={buyIcon}
              alt="buy icon"
              className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <div style={{ width: 10 }} />
            <span className="font-inter font-semibold text-black text-[5px] lg:text-[16px]">
              Beli Sekarang
            </span>
          </button>

          <div className="w-[6px] lg:w-[30px]" />
          <button
            className="flex items-center justify-center w-[20px] h-[20px] lg:w-[55px] lg:h-[55px] border border-gray border-opacity-50 rounded-full hover:border-opacity-100 active:bg-gray-200"
            onClick={handleBookmarkClick}
          >
            <img
              src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
              alt="bookmark icon"
              className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
