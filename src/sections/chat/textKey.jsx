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
    <div>
      <div style={{ height: 52 }}></div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center rounded-xl"
        style={{ height: 100 }}
      >
        <span className="flex items-center justify-center w-full h-full rounded-xl ring-2 ring-black pr-5 bg-gray-100">
          <input
            type="text"
            placeholder="Type a new message here"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 font-semibold text-black font-inter rounded-none focus:outline-none placeholder-black"
          />
          <button>
            <img src={OpenFileIcon} alt="open file icon" />
          </button>
          <button>
            <img src={SendIcon} alt="send icon" />
          </button>
        </span>
      </form>
    </div>
  );
};

export default TextKeyboard;
