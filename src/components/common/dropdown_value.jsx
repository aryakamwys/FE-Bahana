import React, { useState } from "react";

import DropdownIcon from "../../assets/images/dropdown.svg";
import DropdownUpIcon from "../../assets/images/dropdown_up2.svg";

const DropdownValue = ({ title, options, placeholder, className, width }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-start ">
      <div className="font-inter font-semibold text-black text-[14px] lg:text-[26px] ">
        {title}
      </div>
      <div style={{ height: 7 }}></div>
      <div className={className}>
        <div
          className={`h-[60px] w-[${width}] lg:w-[345px] lg:h-[70px] flex flex-row justify-between items-center border-2 border-gray border-opacity-50 rounded-md lg:rounded-xl pl-10 pr-10 cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="h-18 pr-[5px] lg:mr-0 flex justify-start items-center font-medium font-inter text-[14px] lg:text-[26px]">
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          {isOpen ? (
            <img
              src={DropdownUpIcon}
              className="w-[25px] h-[25px] lg:w-[40px] lg:[40px]"
              alt="dropdown up"
            />
          ) : (
            <img
              src={DropdownIcon}
              className="w-[25px] h-[25px] lg:w-[40px] lg:[40px]"
              alt="dropdown"
            />
          )}
        </div>
        {isOpen && (
          <div className="absolute w-full mt-3 bg-white border border-gray rounded-lg lg:rounded-xl shadow-lg z-10 max-h-36 overflow-y-auto ">
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
