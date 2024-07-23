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
        className="flex items-center rounded-xl  lg:w-[633px] lg:h-[58px] md:w-[450px] md:h-[45px]  "
      >
        <span className="flex items-center justify-center w-full h-full rounded-xl ring-2 ring-black opacity-50 pl-5 pr-5">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 font-bold text-black font-inter rounded-none focus:outline-none placeholder-black"
          />
          <img src={SearchIcon} alt="search icon" />
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
