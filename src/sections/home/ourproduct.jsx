import React from "react";
import CardProduct from "../../components/common/card_produk";

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
      <div style={{ height: 120 }}></div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="font-inter font-bold text-black"
          style={{ fontSize: 60 }}
        >
          Our Products
        </div>
        <div style={{ height: 60 }}></div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-16">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        <div style={{ height: 40 }}></div>
        <div>
          <button
            className="border border-black rounded-xl p-5 hover:bg-primary hover:text-greenLight text-primary font-bold font-inter"
            style={{ fontSize: 22 }}
          >
            See Out Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
