import React from "react";

const BlogArticle = () => {
  return (
    <button className="pl-14 py-4" onClick={() => (window.location.href = "/detailblog")}>
      <div className="flex flex-col items-start border-b-2 border-gray border-opacity-50 py-1">
        <div
          className="font-inter font-semibold text-black py-1"
          style={{ fontSize: 15 }}
        >
          Judul Berita
        </div>
        <div
          className="font-inter font-medium text-black text-start py-1"
          style={{ fontSize: 15 }}
        >
          Lorem ipsum dolor sit amet consectetur. Nunc pharetra molestie viverra
          eleifend facilisis proin vitae arcu eu. Pharetra sit nibh a lorem at
          fusce magna amet vel. Tincidunt aliquet mattis sit elit aliquam lorem
          velit. Porttitor cursus nibh in tincidunt dignissim diam tincidunt eu
          integer. Mauris aliquet amet tellus nulla fermentum etiam leo.
        </div>
        <div
          className="font-inter font-medium text-gray text-start py-1"
          style={{ fontSize: 12 }}
        >
          24 June 2024 ・6 min
        </div>
      </div>
    </button>
  );
};

export default BlogArticle;
