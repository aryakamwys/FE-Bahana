import React, { useState } from "react";

import CardProduct from "../../components/common/card_produk";
import CardProductAll from "../../components/common/card_produk_all";

const Products = () => {
  const productData = [
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
    {
      name: "Nama product loren ipsum ddee wsawAWw",
      price: 100000,
      originalPrice: 150000,
      rating: 4.9,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = productData.slice(
    firstProductIndex,
    lastProductIndex
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="h-[20px] lg:h-[50px] "></div>
      <div className="mx-auto p-4 grid grid-cols-2 lg:grid-cols-3 lg:gap-x-4 gap-x-[10px] gap-y-5 lg:gap-y-12">
        {productData.map((product, index) => (
          <CardProductAll key={index} product={product} />
        ))}
      </div>
      <div className="hidden lg:flex justify-center mt-4">
        <div className="px-6">
          <button
            className="bg-white hover:bg-black hover:text-white text-black font-semibold py-2 px-4 border border-gray border-opacity-50 rounded"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </div>
        {[...Array(Math.ceil(productData.length / productsPerPage)).keys()].map(
          (pageNumber) => (
            <div className="px-3">
              <button
                key={pageNumber}
                className={`bg-white hover:bg-black hover:text-white text-black font-semibold py-2 px-4 border border-gray border-opacity-50 rounded ${
                  pageNumber + 1 === currentPage ? "bg-gray-400" : ""
                }`}
                onClick={() => paginate(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            </div>
          )
        )}
        <div className="px-6">
          <button
            className="bg-white hover:bg-black hover:text-white text-black font-semibold py-2 px-4 border border-gray border-opacity-50 rounded"
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(productData.length / productsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default Products;
