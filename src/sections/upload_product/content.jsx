import React, { useState, useRef } from "react";
import UploadProductField from "../../components/common/upload_product_field";
import AddProductIcon from "../../assets/images/add_product.svg";
import AddImagesIcon from "../../assets/images/add_image2.png";

const ContentUploadProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Optionally, you can handle the file upload here
      console.log(file);
    }
  };
  return (
    <div>
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-gray text-[16px] md:text-[20px]">
            Product Name
          </div>
          <div style={{ height: 7 }}></div>
          <form
            className="flex flex-row items-center justify-start w-[350px] md:w-[602px] lg:w-[1300px]"
          >
            <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 ring-opacity-50 focus:ring-gray w-[350px] h-[34px] md:w-[604px] lg:w-[1300px] md:h-[46px] ">
              <img src={AddProductIcon} className="pr-2" alt="add_product" />
              <input
                type={"text"}
                className="font-inter font-medium focus:outline-none text-[16px] md:text-[20px] lg:text-[24px]"
                readOnly={false}
              />
            </span>
          </form>
        </div>
      </div>
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-semibold text-gray text-[16px] md:text-[20px]"
          >
            Product Images
          </div>
          <div style={{ height: 7 }}></div>
          <button
            className="flex flex-col h-[206px] md:h-[263px] lg:h-[300px] md:w-[604px] w-[226px] lg:w-[1300px] items-center justify-center border-4 border-dashed border-gray border-opacity-30 rounded-xl"
            onClick={handleButtonClick}
          >
            <img src={AddImagesIcon} className="w-[30px] h-[30px] md:w-[56px] md:h-[56px] " alt="add_image" />
            <div
              className="font-inter font-normal text-gray text-[12px] lg:text-[20px]"
            >
              Browser or Dekstop
            </div>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {selectedFile && (
            <div className="mt-2 text-sm text-gray-600">
              Selected file: {selectedFile.name}
            </div>
          )}
        </div>
      </div>
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between w-[350px] md:w-[604px] lg:w-[1300px]">
            <div
              className="font-inter font-semibold text-gray text-[16px] md:text-[20px]"
            >
              Product Description
            </div>
            <div
              className="flex items-end font-inter font-light text-gray text-[10px] md:text-[13px]"
            >
              0/800
            </div>
          </div>
          <div style={{ height: 7 }}></div>
          <form className="flex items-center justify-start ">
            <span className="flex items-start justify-start rounded-md ring-1 ring-gray p-5 ring-opacity-50 focus:ring-gray  w-[350px] md:w-[604px] lg:w-[1300px] h-[64px] md:h-[142px]">
              <textarea
                placeholder="A detailed description of the product helps customers to learn more about the product."
                className="font-inter font-medium focus:outline-none text-[12px] lg:text-[24px] w-[325px] md:w-[580px] lg:w-[1285px] resize-none"
                readOnly={false}
              />
            </span>
          </form>
        </div>
      </div>
      <UploadProductField
        title={"Product Price"}
        type={"text"}
        width={750}
        height={46}
        readOnly={false}
      />
      <UploadProductField
        title={"Product Quantity"}
        type={"text"}
        width={750}
        height={46}
        readOnly={false}
      />
      <div className="flex flex-row justify-start pt-[20px] lg:pt-0">
        <button className="border-2 border-primary rounded-md pl-[26px] pr-[26px] lg:pl-11 lg:pr-11 pt-2 pb-2 font-inter font-medium text-primary text-[16px] lg:text-[28px] ">
          Cancel
        </button>
        <div className="w-[24px] lg:w-10"></div>
        <button className="bg-primary rounded-md pl-[26px] pr-[26px] lg:pl-14  lg:pr-14 pt-2 pb-2 font-inter font-medium text-white text-[16px] lg:text-[28px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default ContentUploadProduct;
