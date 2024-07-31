import React, { useState } from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";
import SearchBar from "../../components/common/searchBar";

const HeaderAllProducts = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <div className="h-[20px] md:h-[50px] lg:h-[50px] "></div>{" "}
      <div className="flex flex-row row-auto items-center justify-between w-[320px] md:w-[486px] lg:w-[928px]">
        <button
          className="flex items-center justify-center border border-black rounded-full w-6 h-6 lg:w-10 lg:h-10"
          onClick={() => window.history.back()}
        >
          <img
            src={ArrowBack}
            className="w-3 h-3 lg:w-4 lg:h-4"
            alt="arrow back"
          />
        </button>
        <SearchBar setProducts={setProducts}/>
      </div>
    </div>
  );
};

export default HeaderAllProducts;
