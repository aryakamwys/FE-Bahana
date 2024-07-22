import React from "react";


const UploadProductField = ({
  title,
  width,
  height,
  type,
  placeholder,
  readOnly,
}) => {
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
        <form
          className="flex flex-row items-center justify-start"
          style={{ width: width }}
        >
          <span
            className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray"
            style={{ width: width, height: height }}
          >
            <input
              type={type}
              placeholder={placeholder}
              className="font-inter font-medium focus:outline-none"
              style={{ fontSize: 24 }}
              readOnly={readOnly}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default UploadProductField;
