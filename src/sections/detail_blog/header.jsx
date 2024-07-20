import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderDetailBlog = () => {
  return (
    <div>
      <div style={{ height: 60 }}></div>
      <div className="flex flex-row row-auto items-center">
        <button
          className="flex items-center justify-center border border-black rounded-full"
          style={{ width: 40, height: 40 }}
          onClick={() => window.history.back()}
        >
          <img src={ArrowBack} alt="arrow back" />
        </button>
        <div style={{ width: 20 }}></div>
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-semibold text-black"
            style={{ fontSize: 32 }}
          >
            Judul Blog Bahanananana 
          </div>
          <div
            className="font-inter font-medium text-gray"
            style={{ fontSize: 15 }}
          >
            24 June 2024 ・6 min
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetailBlog;
