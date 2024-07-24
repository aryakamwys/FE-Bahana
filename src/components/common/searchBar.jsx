import { useState } from "react";

import SearchIcon from "../../assets/images/search.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[235px] h-[34px] md:w-[394px] md:h-[44px] lg:w-[633px] lg:h-[58px] flex items-center rounded-md lg:rounded-xl"
      >
        <span className="flex items-center justify-center w-full h-full rounded-[7px] lg:rounded-xl ring-2 ring-black ring-opacity-50 pl-5 pr-5">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 font-bold text-black text-[12px] md:text-[16px] lg:text-[20px] font-inter rounded-none focus:outline-none placeholder-black"
          />
          <img src={SearchIcon} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[40px] lg:h-[40px] " alt="search icon" />
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
