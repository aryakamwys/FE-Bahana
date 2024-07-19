import React, { useState } from "react";

import CarrotImage from "../../assets/images/carrot2.png";
import SlideLeft from "../../assets/images/slide_left.svg";
import SlideRight from "../../assets/images/slide_right.svg";

const DetailImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setScrollPosition(scrollPosition - 170);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
      setScrollPosition(scrollPosition + 170);
    }
  };

  return (
    <div>
      <div style={{ height: 25 }}></div>
      <div
        className="relative flex flex-row row-auto"
        style={{ width: 701, height: 171 }}
      >
        <div className=" absolute flex justify-between" style={{ width: 701 }}>
          <div className="p-1">
            <button
              className="flex items-center rounded-l-xl bg-gray bg-opacity-20 px-2"
              style={{ height: 171 }}
              onClick={handleLeftClick}
            >
              <img src={SlideLeft} alt="slide_left" />
            </button>
          </div>
          <div className="p-1">
            <button
              className="flex items-center rounded-r-xl bg-gray bg-opacity-20 px-2"
              style={{ height: 171 }}
              onClick={handleRightClick}
            >
              <img src={SlideRight} alt="slide_right" />
            </button>
          </div>
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-xl"
            style={{ width: 170, height: 170 }}
            alt="carrot"
          />
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-xl"
            style={{ width: 170, height: 170 }}
            alt="carrot"
          />
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-xl"
            style={{ width: 170, height: 170 }}
            alt="carrot"
          />
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-xl"
            style={{ width: 170, height: 170 }}
            alt="carrot"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
