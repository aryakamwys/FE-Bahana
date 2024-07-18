import React from "react";

import imageDummy from "../../assets/images/sayur.jpg";

const CardProductRecomendations = ({ image, title, isActive }) => {
  const cardStyle = isActive
   ? {
        width: 300,
        height: 245,
        transform: 'cale(1)',
        transition: 'transform 0.3s ease-in-out',
      }
    : {
        width: 200,
        height: 180,
        transform: 'cale(0.8)',
        transition: 'transform 0.3s ease-in-out',
      };

  return (
    <div>
      <div className="max-w-sm bg-white border border-black rounded-xl">
        <div className="flex items-center justify-center">
          <img
            src={imageDummy}
            className="p-6"
            style={cardStyle}
            alt="sayur"
          />
        </div>
        <div className="flex flex-col p-6">
          <div
            className="font-bold text-black font-inter text-start"
            style={{ fontSize: 20 }}
          >
            {title}
          </div>
          <div style={{ height: 5 }}></div>
          <div
            className="flex items-center  justify-center bg-greenLight rounded-md "
            style={{ width: 58, height: 26 }}
          >
            <div
              className="font-inter font-normal text-primary"
              style={{ fontSize: 12 }}
            >
              Quality
            </div>
          </div>
          <div style={{ height: 7 }}></div>
          <div
            className="text-start font-inter font-normal"
            style={{ fontSize: 14 }}
          >
            Produk (x) ini memiliki keunggulan dalam (x) menurut (x) pengguna
            dan telah terjual (x) dalam kurung waktu x minggu
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductRecomendations;