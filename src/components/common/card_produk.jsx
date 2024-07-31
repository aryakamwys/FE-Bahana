import React, { useEffect, useState } from "react";
// import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg";
import Skeleton from "../../components/common/skeleton";

const CardProduct = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };
  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  console.log(product.image_produk);

  if (loading) {
    return (
      <div className="max-w-sm bg-white border border-black rounded-xl">
        <div className="p-[5px] lg:p-6">
          <Skeleton className="w-[100px] h-[84px] lg:w-[350px] lg:h-[305px] rounded" />
        </div>
        <div className="p-[5px] lg:p-6">
          <Skeleton className="h-6 w-3/4 mb-2 rounded" />
          <div className="flex flex-row items-center">
            <Skeleton className="h-6 w-1/2 mr-2 rounded" />
            <Skeleton className="h-6 w-1/4 rounded" />
          </div>
          <div className="lg:h-[12px] h-[5px]" />
          <div className="flex flex-row items-center justify-start">
            <Skeleton className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px] rounded-full" />
            <div style={{ width: 12 }} />
            <Skeleton className="h-6 w-1/4 rounded" />
          </div>
          <div className="lg:h-[12px] h-[5px]" />
          <div className="flex flex-row justify-between">
            <Skeleton className="w-[78px] h-[18px] lg:w-[261px] lg:h-[55px] rounded-full" />
            <div className="w-[6px] lg:w-[30px]" />
            <Skeleton className="w-[20px] h-[20px] lg:w-[55px] lg:h-[55px] rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
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
=======
    <div className="max-w-sm bg-white border border-black rounded-xl">
      <button
        className="p-[5px] lg:p-6"
        onClick={() => (window.location.href = "/detailProduct")}
      >
        <img
          src={product.image_produk}
          alt={product.nama_produk}
          // onError={handleImageError}
          className="w-[100px] h-[84px] lg:w-[350px] lg:h-[305px]"
        />
      </button>
      <div className="p-[5px] lg:p-6">
        <h2 className="font-inter text-[8px] lg:text-[25px] text-black font-semibold text-start">
          {product.nama_produk}
        </h2>
        <div className="flex flex-row items-center">
          <span className="font-inter font-semibold text-primary text-[8px] lg:text-[25px]">
            Rp {product.harga.toLocaleString()}
          </span>
          <div className="w-[5px] lg:w-[10px]" />
          <span className="font-inter text-[6px] lg:text-[20px] font-medium text-gray opacity-50 line-through">
            Rp {(product.harga + 150000).toLocaleString()}
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
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
            <span className="text-yellow ml-1">/ 5</span>
          </span>
        </div>
<<<<<<< HEAD
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
=======
        <div className="lg:h-[12px] h-[5px]" />
        <div className="flex flex-row justify-between">
          <button
            className="w-[78px] h-[18px] lg:w-[261px] lg:h-[55px] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-50 rounded-full lg:pt-4 lg:pb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-opacity-100 active:scale-95 active:bg-gray-200"
            onClick={() => (window.location.href = `/detailProduct/${product.produkID}`)}
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
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
