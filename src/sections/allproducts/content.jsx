import React, { useEffect, useState } from "react";

// import CardProduct from "../../components/common/card_produk";
import CardProductAll from "../../components/common/card_produk_all";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Products = () => {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(
    firstProductIndex,
    lastProductIndex
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
  useEffect(() => {
    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    if (tokenPembeli) {
      fetchData(tokenPembeli);
    } else if (tokenPetani) {
      fetchData(tokenPetani);
    } else {
      console.log("No token found");
    }
  }, []);

  return (
    <div>
      <div className="h-[20px] lg:h-[50px] "></div>
      <div className="mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:gap-x-4 gap-x-[10px] gap-y-5 lg:gap-y-12">
        {products.map((product) => (
          <CardProductAll key={product.produkID} product={product} />
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
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(
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
              currentPage === Math.ceil(products.length / productsPerPage)
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
