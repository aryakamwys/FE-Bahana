import React from "react";

const TextfieldProfile = ({ title, placeholder, type, readOnly, width }) => {
  return (
    <div className="py-3">
      <div className="flex flex-col items-start">
        <div
          className="font-inter font-semibold text-black"
          style={{ fontSize: 26 }}
        >
          {title}
        </div>
        <div style={{ height: 7 }}></div>
        <form
          className="flex items-center justify-start"
          style={{ width: width, height: 70 }}
        >
          <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
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

export default TextfieldProfile;