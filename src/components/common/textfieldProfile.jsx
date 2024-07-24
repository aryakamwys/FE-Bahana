import React from "react";

const TextfieldProfile = ({ title, placeholder, type, readOnly, className }) => {
  return (
    <div className="py-3">
      <div className="flex flex-col items-start">
        <div className="font-inter font-semibold text-black text-base md:text-[20px] lg:text-2xl">
          {title}
        </div>
        <div style={{ height: 7 }}></div>
        <form className="flex items-center justify-start max-w-screen-sm lg:max-w-full">
          <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 ring-opacity-50 focus:ring-gray lg:max-w-full h-10">
            <input
              type={type}
              placeholder={placeholder}
              className={className}
              readOnly={readOnly}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default TextfieldProfile;
