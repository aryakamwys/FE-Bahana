import React from "react";

import ImageDummy from "../../assets/images/sayur.jpg";
import BookmarkFill from "../../assets/images/bookmark_fill.svg";

const CardWishList = () => {
  return (
    <div className="lg:py-6 md:py-4 py-2">
      <div className="min-w-full flex flex-row md:p-2 row-auto border border-gray border-opacity-50 rounded-xl h-auto overflow-hidden">
        <div className="flex items-center">
          <img
            src={ImageDummy}
            className="lg:w-[350px] lg:h-[212px] md:w-[170px] md:h-[121px] w-[200px] h-[100px] object-fill"
            alt="sayur"
          />
        </div>
        <div className="flex flex-col w-full lg:p-6 p-3">
          <div className="flex flex-row justify-between gap-2">
            <div
              className="font-inter font-semibold text-black lg:text-[32px] md:text-[23px] text-[19px] text-start"
              style={{ lineHeight: 1.2 }}
            >
              Nama product loren ipsum ddee
            </div>
            <div className="flex items-center justify-center bg-gray bg-opacity-15 rounded-full sm:p-[5px] lg:w-[37px] lg:h-[37px] w-[25px] h-[25px] md:p-[7px]  p-[5px]">
              <img src={BookmarkFill} alt="bookmark fill" />
            </div>
          </div>
          <div className="lg:block hidden" style={{ height: 12 }}></div>
          <div className="font-inter font-medium text-black text-start lg:text-[17px] text-[13px] mt-1 md:text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur blablbalbalblablbddda.
          </div>
          <div lassName="lg:block hidden" style={{ height: 12 }}></div>
          <div className="flex flex-row row-auto items-center">
            <div className="font-inter font-bold text-primary  lg:text-[30px] text-[16px]  md:text-[20px]">
              Rp. 100.000
            </div>
            <div style={{ width: 10 }}></div>
            <div className="font-inter font-normal text-gray text-opacity-50 line-through lg:text-[20px] text-[13px] md:text-[15px]">
              Rp. 150.000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWishList;
