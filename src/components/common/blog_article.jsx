import React from "react";

const BlogArticle = ({title, text, time}) => {
  return (
<<<<<<< HEAD
    <button
      className="lg:pl-14 py-2 lg:py-4"
      onClick={() => (window.location.href = "/detailblog")}
    >
      <div className="flex flex-col items-start border-b-2 border-gray border-opacity-50 py-1">
        <div className="font-inter font-semibold text-black py-1 text-[14px] lg:text-[20px] md:text-[18px] ">
          Judul Berita
        </div>
        <div className="font-inter font-medium text-black text-start py-1 text-[10px] lg:text-[15px] md:text-[13px]  ">
          Lorem ipsum dolor sit amet consectetur. Nunc pharetra molestie viverra
          eleifend facilisis proin vitae arcu eu. Pharetra sit nibh a lorem at
          fusce magna amet vel. Tincidunt aliquet mattis sit elit aliquam lorem
          velit. Porttitor cursus nibh in tincidunt dignissim diam tincidunt eu
          integer. Mauris aliquet amet tellus nulla fermentum etiam leo.
        </div>
        <div className="font-inter font-medium text-gray text-start py-1 text-[8px] lg:text-[15px] md:text-[12px]  ">
          24 June 2024 ・6 min
=======
    <button className="lg:pl-14 md:py-[14px] py-2 lg:py-4" onClick={() => (window.location.href = "/detailblog")}>
      <div className="flex flex-col items-start border-b-2 border-gray border-opacity-50 py-1">
        <div
          className="font-inter font-semibold text-black py-1 text-[14px] md:text-[16px] lg:text-[15px]"
        >
          {title}
        </div>
        <div
          className="font-inter font-medium text-black text-start py-1 text-[10px] md:text-[12px] lg:text-[15px] "
        >
          {text}
        </div>
        <div
          className="font-inter font-medium text-gray text-start py-1 text-[8px] md:text-[10px] lg:text-[12px] "
        >
          {time}
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
        </div>
      </div>
    </button>
  );
};

export default BlogArticle;
