import React, { useState } from "react";

import DropdownIcon from "../../assets/images/dropdown.svg";
import DropdownUpIcon from "../../assets/images/dropdown_up2.svg";

const DropdownValue = ({ title, options, placeholder, width }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-start">
      <div
        className="font-inter font-semibold text-black"
        style={{ fontSize: 26 }}
      >
        {title}
      </div>
      <div style={{ height: 7 }}></div>
      <div className="relative" style={{width: width}}> 
        <div
          className="flex flex-row justify-between items-center border border-gray-300 border-opacity-50 rounded-xl pl-10 pr-10 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-80 h-18 flex items-center font-medium font-inter text-xl">
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          {isOpen ? (
            <img src={DropdownUpIcon} alt="dropdown up" />
          ) : (
            <img src={DropdownIcon} alt="dropdown" />
          )}
        </div>
        {isOpen && (
          <div className="absolute w-full mt-3 bg-white border border-gray-300 rounded-xl shadow-lg z-10 max-h-36 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className="p-4 hover:bg-gray-200 cursor-pointer hover:bg-greenLight border-b-2 border-gray border-opacity-10"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownValue;
