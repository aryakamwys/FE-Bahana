import React from "react";
import PetaniCardProduct from "../../components/common/card_produk_seller";

const OurProduct = () => {
  const products = [
    {
      id: 1,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.5,
      image: "sayur.jpg",
    },
    {
      id: 2,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 120000,
      originalPrice: 180000,
      rating: 4.2,
      image: "sayur.jpg",
    },
    {
      id: 3,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 90000,
      originalPrice: 120000,
      rating: 4.8,
      image: "sayur.jpg",
    },
    {
      id: 4,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 110000,
      originalPrice: 160000,
      rating: 4.1,
      image: "sayur.jpg",
    },
    {
      id: 5,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 130000,
      originalPrice: 190000,
      rating: 4.6,
      image: "sayur.jpg",
    },
    {
      id: 6,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 105000,
      originalPrice: 155000,
      rating: 4.3,
      image: "sayur.jpg",
    },
    {
      id: 7,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 125000,
      originalPrice: 185000,
      rating: 4.4,
      image: "sayur.jpg",
    },
    {
      id: 8,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 115000,
      originalPrice: 165000,
      rating: 4.7,
      image: "sayur.jpg",
    },
    {
      id: 9,
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 140000,
      originalPrice: 200000,
      rating: 4.9,
      image: "sayur.jpg",
    },
  ];

  return (
    <div>
      <div className="h-[40px] lg:h-[120px] "></div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="font-inter text-[20px] md:text-[25px] lg:text-[60px] font-bold text-black"
        >
          Our Products
        </div>
        <div className="h-[20px] lg:h-[60px] "></div>
        <div className="grid grid-cols-3 gap-x-[11px] gap-y-[13px] md:gap-x-5 md:gap-y-[34px] lg:gap-x-5 lg:gap-y-16">
          {products.map((product) => (
            <PetaniCardProduct key={product.id} product={product} />
          ))}
        </div>
        <div style={{ height: 40 }}></div>
        <div>
          <button
            className="border border-black rounded-md lg:rounded-xl p-[10px] md:p-[15px] lg:p-5 hover:bg-primary hover:text-white text-primary font-bold text-[10px] md:text-[18px] lg:text-[22px] font-inter"
            onClick={() => (window.location.href = "/allproducts")}
          >
            See Our Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
