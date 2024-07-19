import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";
import SearchBar from "../../components/common/searchBar";

const HeaderAllProducts = () => {
  return (
    <div style={{ width: 928 }}>
      <div style={{ height: 40 }}></div>
      <div className="flex flex-row row-auto items-center justify-between">
        <button
          className="flex items-center justify-center border border-black rounded-full"
          style={{ width: 40, height: 40 }}
          onClick={() => window.history.back()}
        >
          <img src={ArrowBack} alt="arrow back" />
        </button>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderAllProducts;
