import React from "react";

import ImageDummy from "../../assets/images/sayur.jpg";
import BookmarkFill from "../../assets/images/bookmark_fill.svg";

const CardWishList = () => {
  return (
    <div className="py-6">
      <div
        className="min-w-full flex flex-row row-auto border border-gray border-opacity-50 rounded-xl"
        style={{ height: 260 }}
      >
        <div className="flex items-center">
          <img
            src={ImageDummy}
            style={{ width: 350, height: 212 }}
            alt="sayur"
          />
        </div>
        <div className="flex flex-col w-full p-6">
          <div className="flex flex-row justify-between">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 32, lineHeight: 1.2 }}
            >
              Nama product loren ipsum ddee
            </div>
            <div
              className="flex items-center justify-center bg-gray bg-opacity-15 rounded-full"
              style={{ width: 37, height: 37 }}
            >
              <img src={BookmarkFill} alt="bookmark fill" />
            </div>
          </div>
          <div style={{ height: 12 }}></div>
          <div
            className="font-inter font-medium text-black text-start"
            style={{ fontSize: 17 }}
          >
            Lorem ipsum dolor sit amet consectetur. In in pellentesque
            sollicitudin aliquam tincidunt fermentum pharetra. Tellus in magna
            tortor turpis volutpat sollicitudin pellentesque bibendu tempor.
            Viverra porttitor praesent eu nulla lectus integer nulla aliquet.
            Ullamcorper elementu sit faucibus consequat sapien pretium fringilla
            risus.
          </div>
          <div style={{ height: 12 }}></div>
          <div className="flex flex-row row-auto items-center">
            <div
              className="font-inter font-bold text-primary"
              style={{ fontSize: 30 }}
            >
              Rp. 100.000
            </div>
            <div style={{ width: 10 }}></div>
            <div
              className="font-inter font-normal text-gray text-opacity-50 line-through"
              style={{ fontSize: 22 }}
            >
              Rp. 150.000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWishList;
