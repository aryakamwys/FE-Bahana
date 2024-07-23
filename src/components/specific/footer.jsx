import React from "react";

import qrisIcon from "../../assets/images/qris.svg";
import bankIcon from "../../assets/images/bank.svg";
import instagramIcon from "../../assets/images/instagram_footer.svg";
import facebookIcon from "../../assets/images/facebook_footer.svg";
import twitterIcon from "../../assets/images/twitter_footer.svg";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="lg:h-[120px]"></div>
      <footer className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-start ">
          <div className="flex flex-col text-start w-[400px]">
            <div
              className="font-inter text-black font-bold text-2xl mb-2"
              style={{ lineHeight: 1 }}
            >
              Logo Website
            </div>
            <div className="lg:h-[20px]"></div>
            <div className="font-normal font-inter text-gray opacity-50 lg:text-[16px]">
              The website specializes in reducing farmers’ dependency on
              middlemen.
            </div>
          </div>
          <div className="flex flex-row w-full justify-around">
            <div className="w-full flex flex-col items-start ml-[87px]">
              <div
                className="font-inter text-black font-bold text-lg mb-2"
                style={{ lineHeight: 1 }}
              >
                Product
              </div>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  Must-Have Items
                </div>
              </a>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  Produk Utama
                </div>
              </a>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  Wishlist
                </div>
              </a>
            </div>
            <div className="w-full flex flex-col items-start">
              <div
                className="font-inter text-black font-bold text-lg mb-2"
                style={{ lineHeight: 1 }}
              >
                Information
              </div>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  Term of use
                </div>
              </a>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  Blog
                </div>
              </a>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  Cookies Policy
                </div>
              </a>
            </div>
            <div className="w-full flex flex-col items-start">
              <div
                className="font-inter text-black font-bold text-lg mb-2"
                style={{ lineHeight: 1 }}
              >
                Company
              </div>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  About us
                </div>
              </a>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  Contact us
                </div>
              </a>
              <a href="#">
                <div
                  className="text-gray opacity-50 font-inter"
                  style={{ fontSize: 16 }}
                >
                  taniDirect
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start w-[250px]">
            <div
              className="text-black1 font-inter font-bold text-[16px] mb-2"
              style={{ lineHeight: 1 }}
            >
              Payment Methods
            </div>
            <div className="flex flex-row row-auto justify-between">
              <img src={qrisIcon} alt="QRIS" />
              <div style={{ width: 39 }}></div>
              <img src={bankIcon} alt="QRIS" />
            </div>
          </div>
        </div>
      </footer>
      <div className="pt-8 pb-8">
        <hr className="border-gray opacity-50" style={{ borderWidth: 1 }} />
      </div>
      <div className="flex flex-row row-auto justify-end">
        <div className="px-2">
          <button
            className="flex items-center justify-center border border-gray opacity-50 rounded-full"
            style={{ width: 35, height: 35 }}
          >
            <img src={instagramIcon} alt="instagram" />
          </button>
        </div>
        <div className="px-2">
          <button
            className="flex items-center justify-center border border-gray opacity-50 rounded-full"
            style={{ width: 35, height: 35 }}
          >
            <img src={facebookIcon} alt="facebook" />
          </button>
        </div>
        <div className="px-2">
          <button
            className="flex items-center justify-center border border-gray opacity-50 rounded-full"
            style={{ width: 35, height: 35 }}
          >
            <img src={twitterIcon} alt="twitter" />
          </button>
        </div>
      </div>
      <div style={{ height: 20 }}></div>
    </div>
  );
};

export default Footer;
