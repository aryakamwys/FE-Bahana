import React, { useState } from "react";
import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg"; // Add the filled bookmark icon

const CardProductAll = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className="max-w-sm bg-white border border-gray border-opacity-50 rounded-xl w-[165px] lg:w-full">
      <div className="p-[10px]">
        <img
          src={`http://localhost:4000/uploads/default_pfp.png`}
          className=" lg:p-6 w-[145px] h-[117px] lg:w-[350px] lg:h-[305px] "
          alt={product.nama_produk}
        />
      </div>
      <div className="p-[10px] lg:p-6">
        <div
          className="font-inter text-[10px] lg:text-[25px] text-black font-semibold text-start"
        >
          {product.nama_produk}
        </div>
        <div className="flex flex-row row-auto items-center">
          <div
            className="font-inter font-semibold text-primary text-[10px] lg:text-[25px] lg:leading-normal"
          >
            Rp {product.harga.toLocaleString()}
          </div>
          <div className="w-[5px] lg:w-[10px] "></div>
          <div
            className="font-inter text-[8px] lg:text-[20px] lg:leading-normal font-semibold text-gray opacity-50 line-through"
          >
            Rp {(product.harga + 50000).toLocaleString()}
          </div>
        </div>
        <div className="lg:h-[12px] h-[5px] "></div>
        <div className="flex flex-row row-auto items-center justify-start">
          <img src={starIcon} className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" alt="star" />
          <div style={{ width: 12 }}></div>
          <div className="font-inter font-semibold text-[10px] lg:text-[20px]">
            <span className="text-yellow">4.9</span>
            <span className="text-yellow ml-1">/ 5</span>
          </div>
        </div>
        <div className="lg:h-[12px] h-[5px] "></div>
        <div className="flex flex-row row-auto">
          <div>
            <button
              className="w-[110px] h-[21px] lg:w-[261px] lg:h-[55px] flex flex-row row-auto justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-50 rounded-full lg:pt-4 lg:pb-4"
              onClick={() => (window.location.href = "/detailproduct")}
            >
              <img src={buyIcon} className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px] " alt="buy icon" />
              <div style={{ width: 10 }}></div>
              <span className="font-inter font-semibold text-black text-[8px] lg:text-[16px]">
                Beli Sekarang
              </span>
            </button>
          </div>
          <div className="w-[6px] lg:w-[30px] "></div>
          <div>
            <button
              className="flex items-center justify-center w-[20px] h-[20px] lg:w-[55px] lg:h-[55px] border border-gray border-opacity-50 rounded-full"
              onClick={handleBookmarkClick}
            >
              <img
                src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
                className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px] "
                alt="bookmark icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductAll;
