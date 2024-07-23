import React from "react";

import ProfileReview from "../../assets/images/profile_review.png";
import StarFill from "../../assets/images/star_review_fill.svg";
import Star from "../../assets/images/star_review.svg";

const CardReview = () => {
  return (
    <div className="pt-[10px] pb-[10px] lg:pt-5 lg:pb-5">
      <div className="w-[350px] h-[92px] lg:w-full lg:h-[235px] border border-gray border-opacity-50 rounded-xl">
        <div className="flex flex-col p-[15px] lg:p-6">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row row-auto items-center">
              <img
                src={ProfileReview}
                className="w-[25px] h-[25px] lg:w-[70px] lg:h-[70px] "
                alt="profile_review"
              />
              <div className="w-[14px]"></div>
              <div className="text-[12px] lg:text-[20px] font-medium font-inter text-black">
                Jasmine
              </div>
            </div>
            <div className="flex flex-row row-auto">
              <img
                src={Star}
                className="pr-1 w-[12px] h-[12px] lg:w-6 lg:h-6"
                alt="star"
              />
              <img
                src={StarFill}
                className="pr-1 w-[12px] h-[12px] lg:w-6 lg:h-6"
                alt="star_fill"
              />
              <img
                src={StarFill}
                className="pr-1 w-[12px] h-[12px] lg:w-6 lg:h-6"
                alt="star_fill"
              />
              <img
                src={StarFill}
                className="pr-1 w-[12px] h-[12px] lg:w-6 lg:h-6"
                alt="star_fill"
              />
              <img
                src={StarFill}
                className="pr-1 w-[12px] h-[12px] lg:w-6 lg:h-6"
                alt="star_fill"
              />
            </div>
          </div>
          <div className="lg:h-4"></div>
          <div className="text-start font-normal font-inter text-black text-[8px] lg:text-[20px] lg:leading-snug overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur. Faucibus vel quis tellus
            semper bibendum. Sem id facilisis fermentum erat augue cras facilisi
            eget. Ridiculus euismod vestibulum duis eleifend. Netus placerat
            velit pellentesque congue.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
