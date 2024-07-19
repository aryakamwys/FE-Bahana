import React from "react";

import ProfileReview from "../../assets/images/profile_review.png";
import StarFill from "../../assets/images/star_review_fill.svg";
import Star from "../../assets/images/star_review.svg";

const CardReview = () => {
  return (
    <div className="pt-5 pb-5">
      <div
        className="w-full border border-gray border-opacity-50 rounded-xl"
        style={{ height: 235 }}
      >
        <div className="flex flex-col p-6">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row row-auto items-center">
              <img
                src={ProfileReview}
                style={{ width: 70, height: 70 }}
                alt="profile_review"
              />
              <div style={{ width: 15 }}></div>
              <div className="text-h5 font-medium font-inter text-black">
                Jasmine
              </div>
            </div>
            <div className="flex flex-row row-auto">
              <img src={Star} className="pr-1 w-6 h-6" alt="star" />
              <img src={StarFill} className="pr-1 w-6 h-6" alt="star_fill" />
              <img src={StarFill} className="pr-1 w-6 h-6" alt="star_fill" />
              <img src={StarFill} className="pr-1 w-6 h-6" alt="star_fill" />
              <img src={StarFill} className="pr-1 w-6 h-6" alt="star_fill" />
            </div>
          </div>
          <div className="h-4"></div>
          <div
            className="text-start font-normal font-inter text-black"
            style={{ fontSize: 20, lineHeight: 1.3 }}
          >
            Lorem ipsum dolor sit amet consectetur. Faucibus vel quis tellus
            semper bibendum. Sem id facilisis fermentum erat augue cras facilisi
            eget. Ridiculus euismod vestibulum duis eleifend. Netus placerat
            velit pellentesque congue. Ultrices volutpat lectus commodo turpis
            ipsum diam nunc. Molestie sagittis lectus tortor senectus sem mattis
            elit sollicitudin. Pharetra ut at aliquam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
