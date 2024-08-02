import React from "react";

const ButtonWithImage = ({ imgSrc, text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-white border border-gray rounded-md w-[350px] md:w-[563px] lg:w-[563px] h-[54px]"
      onClick={onClick}
    >
      <img src={imgSrc} alt={text} />
      <div className="pl-2 text-black font-semibold font-inter lg:text-lg">
        {text}
      </div>
    </button>
  );
};

export default ButtonWithImage;
