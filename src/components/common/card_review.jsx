import React from "react";

import ProfileReview from "../../assets/images/profile_review.png";
import StarFill from "../../assets/images/star_review_fill.svg";
import Star from "../../assets/images/star_review.svg";

const CardReview = () => {
  return (
<<<<<<< HEAD
    <div className="pt-5 pb-5">
      <div className="w-full h-auto border border-gray border-opacity-50 rounded-xl">
        <div className="flex flex-col p-6">
=======
    <div className="py-[10px] lg:py-5">
      <div className="w-[350px] h-[92px] md:w-full md:h-[126px] lg:h-[235px] border border-gray border-opacity-50 rounded-xl">
        <div className="flex flex-col p-[15px] lg:p-6">
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row items-center">
              <img
                src={ProfileReview}
                alt="profile_review"
                className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[70px] lg:h-[70px]"
              />
              <div className="w-[14px]" />
              <span className="text-[12px] md:text-[20px] font-medium font-inter text-black">
                Jasmine
              </span>
            </div>
            <div className="flex flex-row">
              {[1, 2, 3, 4, 5].map((index) => (
                <img
                  key={index}
                  src={index === 1 ? Star : StarFill}
                  alt={index === 1 ? "star" : "star_fill"}
                  className="pr-1 w-[12px] h-[12px] md:w-[23px] md:h-[22px] lg:w-6 lg:h-6"
                />
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <div className="h-4"></div>
          <div
            className="text-start font-normal font-inter text-black "
            style={{ fontSize: 20, lineHeight: 1.3 }}
          >
=======
          <div className="md:h-4" />
          <div className="text-start font-normal font-inter text-black text-[8px] md:text-[12px] lg:text-[20px] lg:leading-snug overflow-y-auto">
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
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