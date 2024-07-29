import React, { useEffect, useState } from "react";
import CardProductAll from "../../components/common/card_produk_all";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Fixed items per page

  useEffect(() => {
    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    const fetchData = (token) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get("http://localhost:4000/produk", config)
        .then((res) => {
          setProducts(res.data.data);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    };

    if (tokenPembeli) {
      fetchData(tokenPembeli);
    } else if (tokenPetani) {
      fetchData(tokenPetani);
    } else {
      console.log("No token found");
    }
  }, []);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <div className="h-[20px] lg:h-[50px] "></div>
      <div className="mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:gap-x-4 gap-x-[10px] gap-y-5 lg:gap-y-12">
        {currentProducts.map((product) => (
          <CardProductAll key={product.produkID} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-white hover:bg-black hover:text-white text-black font-semibold py-2 px-4 border border-gray border-opacity-50 rounded mx-1"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            className={`bg-white hover:bg-black hover:text-white text-black font-semibold py-2 px-4 border border-gray border-opacity-50 rounded mx-1 ${
              pageNumber + 1 === currentPage ? "bg-gray-400" : ""
            }`}
            onClick={() => setCurrentPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          className="bg-white hover:bg-black hover:text-white text-black font-semibold py-2 px-4 border border-gray border-opacity-50 rounded mx-1"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default Products;
