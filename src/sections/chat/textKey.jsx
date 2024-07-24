import React, { useState } from "react";

import OpenFileIcon from "../../assets/images/openFIle.svg";
import SendIcon from "../../assets/images/send.svg";

const TextKeyboard = () => {
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
    <div className="py-[20px]">
      <div className="lg:h-[52px]"></div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center rounded-xl h-11 md:h-[58px] lg:h-28"
      >
        <span className="flex items-center justify-center w-full h-full rounded-xl ring-2 ring-black pr-5 bg-gray-100">
          <input
            type="text"
            placeholder="Type a new message here"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-1 px-2 md:px-4 md:py-2 text-xs md:text-[20px] lg:text-2xl font-semibold text-black font-inter rounded-none focus:outline-none placeholder-black"
          />
          <button>
            <img src={OpenFileIcon} className="w-6 h-6 md:w-9 md:h-9" alt="open file icon" />
          </button>
          <button>
            <img src={SendIcon} className="w-6 h-6 md:w-9 md:h-9" alt="send icon" />
          </button>
        </span>
      </form>
    </div>
  );
};

export default TextKeyboard;
