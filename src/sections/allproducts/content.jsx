import React, { useState } from "react";

import CardProduct from "../../components/common/card_produk";

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
      <div style={{ height: 50 }}></div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
        {productData.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
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
