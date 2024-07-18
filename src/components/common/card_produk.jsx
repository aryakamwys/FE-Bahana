import React from "react";
import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";

const CardProduct = ({ product }) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-black rounded-xl">
        <div>
          <img
            src={imageDummy}
            className="p-6"
            style={{ width: 350, height: 305 }}
            alt={product.name}
          />
        </div>
        <div className="p-6">
          <div
            className="font-inter text-black font-semibold text-start"
            style={{ fontSize: 25 }}
          >
            {product.name}
          </div>
          <div className="flex flex-row row-auto items-center">
            <div
              className="font-inter font-semibold text-primary"
              style={{ fontSize: 25, lineHeight: 1.2 }}
            >
              Rp {product.price.toLocaleString()}
            </div>
            <div style={{ width: 10 }}></div>
            <div
              className="font-inter font-semibold text-gray opacity-50 line-through"
              style={{ fontSize: 20, lineHeight: 1.2 }}
            >
              Rp {product.originalPrice.toLocaleString()}
            </div>
          </div>
          <div style={{ height: 12 }}></div>
          <div className="flex flex-row row-auto items-center justify-start">
            <img src={starIcon} style={{ width: 24, height: 24 }} alt="star" />
            <div style={{ width: 12 }}></div>
            <div className="font-inter font-semibold" style={{ fontSize: 20 }}>
              <span className="text-yellow ">{product.rating}</span>
              <span className="text-yellow ml-1">/ 5</span>
            </div>
          </div>
          <div style={{ height: 12 }}></div>
          <div className="flex flex-row row-auto">
            <div>
              <button
                className="flex flex-row row-auto border border-black rounded-full pt-4 pb-4"
                style={{ paddingLeft: 49, paddingRight: 49 }}
              >
                <img src={buyIcon} alt="buy icon" />
                <div style={{ width: 10 }}></div>
                <span className="font-inter font-semibold text-black">
                  Beli Sekarang
                </span>
              </button>
            </div>
            <div style={{ width: 30 }}></div>
            <div>
              <button className="p-4 border border-gray opacity-50 rounded-full">
                <img src={bookmarkIcon} alt="bookmark icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;