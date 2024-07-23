import React from "react";

const UploadProductField = ({ title, type, placeholder, readOnly }) => {
  return (
    <div className="py-3">
      <div className="flex flex-col items-start">
        <div
          className="font-inter font-semibold text-gray"
          style={{ fontSize: 20 }}
        >
          {title}
        </div>
        <div style={{ height: 7 }}></div>
        <form className="flex flex-row items-center justify-start">
          <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 ring-opacity-50 focus:ring-gray w-[350px] h-[34px] lg:w-[1300px] lg:h-[46px]">
            <input
              type={type}
              placeholder={placeholder}
              className="font-inter font-medium focus:outline-none text-[16px] lg:text-[24px]"
              readOnly={readOnly}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default UploadProductField;
