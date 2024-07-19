import React from "react";
import CardReview from "../../components/common/card_review";

const ReviewRatings = () => {
  return (
    <div>
      <div className="flex flex-col col-auto items-start">
        <div
          className="text-black font-inter font-medium"
          style={{ fontSize: 30 }}
        >
          Review & Ratings
        </div>
        <CardReview />
        <CardReview />
        <CardReview />
      </div>
    </div>
  );
};

export default ReviewRatings;
