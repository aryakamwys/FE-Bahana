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
          <div
            className="font-inter font-semibold text-gray"
            style={{ fontSize: 20 }}
          >
            Product Name
          </div>
          <div style={{ height: 7 }}></div>
          <form
            className="flex flex-row items-center justify-start"
            style={{ width: 1300 }}
          >
            <span
              className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray"
              style={{ width: 1300, height: 46 }}
            >
              <img src={AddProductIcon} className="pr-2" alt="add_product" />
              <input
                type={"text"}
                className="font-inter font-medium focus:outline-none"
                style={{ fontSize: 24 }}
                readOnly={false}
              />
            </span>
          </form>
        </div>
      </div>
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-semibold text-gray"
            style={{ fontSize: 20 }}
          >
            Product Images
          </div>
          <div style={{ height: 7 }}></div>
          <button
            className="w-full flex flex-col items-center justify-center border-4 border-dashed border-gray border-opacity-30 rounded-xl"
            style={{ height: 300 }}
            onClick={handleButtonClick}
          >
            <img src={AddImagesIcon} alt="add_image" />
            <div
              className="font-inter font-normal text-gray"
              style={{ fontSize: 20 }}
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
          <div className=" w-full flex flex-row justify-between">
            <div
              className="font-inter font-semibold text-gray"
              style={{ fontSize: 20 }}
            >
              Product Description
            </div>
            <div
              className="flex items-end font-inter font-light text-gray"
              style={{ fontSize: 13 }}
            >
              0/800
            </div>
          </div>
          <div style={{ height: 7 }}></div>
          <form
            className="flex flex-row items-center justify-start"
            style={{ width: 1300 }}
          >
            <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
              <textarea
                placeholder="A detailed description of the product helps customers to learn more about the product."
                className="font-inter font-light focus:outline-none w-full"
                style={{ fontSize: 16, height: 142, resize: "none" }}
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
      <div className="w-full flex flex-row justify-between py-5">
        <button
          className="border-2 border-primary rounded-md pl-11 pr-11 pt-2 pb-2 font-inter font-medium text-primary"
          style={{ fontSize: 28 }}
        >
          Cancel
        </button>
        <div className="w-10"></div>
        <button
          className="bg-primary rounded-md pl-14 pr-14 pt-2 pb-2 font-inter font-medium text-white"
          style={{ fontSize: 28 }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ContentUploadProduct;
