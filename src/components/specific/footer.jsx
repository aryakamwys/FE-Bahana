import React from "react";

import qrisIcon from "../../assets/images/qris.svg";
import bankIcon from "../../assets/images/bank.svg";
import instagramIcon from "../../assets/images/instagram_footer.svg";
import facebookIcon from "../../assets/images/facebook_footer.svg";
import twitterIcon from "../../assets/images/twitter_footer.svg";

const Footer = () => {
  return (
    <div>
      <div style={{ height: 120 }}></div>
      <footer className="flex flex-row row-auto justify-between items-start">
        <div className="flex flex-col text-start" style={{ width: 400 }}>
          <div
            className="font-inter text-black font-bold"
            style={{ fontSize: 30, lineHeight: 3 }}
          >
            Logo Website
          </div>
          <div
            className="font-normal font-inter text-gray opacity-50"
            style={{ fontSize: 16 }}
          >
            The website specializes in reducing farmers’ dependency on
            middlemen.
          </div>
        </div>
        <div className="flex flex-col items-start" style={{ width: 130 }}>
          <div
            className="font-inter text-black font-bold"
            style={{ fontSize: 16, lineHeight: 2.8 }}
          >
            Product
          </div>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              Must-Have Items
            </div>
          </a>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              Produk Utama
            </div>
          </a>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              Wishlist
            </div>
          </a>
        </div>
        <div className="flex flex-col items-start" style={{ width: 130 }}>
          <div
            className="font-inter text-black font-bold"
            style={{ fontSize: 16, lineHeight: 2.8 }}
          >
            Information
          </div>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              Term of use
            </div>
          </a>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              Blog
            </div>
          </a>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              Cookies Policy
            </div>
          </a>
        </div>
        <div className="flex flex-col items-start" style={{ width: 130 }}>
          <div
            className="font-inter text-black font-bold"
            style={{ fontSize: 16, lineHeight: 2.8 }}
          >
            Company
          </div>
          <a href="/aboutus">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              About us
            </div>
          </a>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              Contact us
            </div>
          </a>
          <a href="#">
            <div
              className="text-gray opacity-50 font-inter"
              style={{ fontSize: 16, lineHeight: 1.9 }}
            >
              TaniDirect
            </div>
          </a>
        </div>

        <div className="flex flex-col items-start">
          <div
            className="text-black1 font-inter font-bold"
            style={{ fontSize: 16, lineHeight: 2.8 }}
          >
            Payment Methods
          </div>
          <div className="flex flex-row row-auto ">
            <img src={qrisIcon} alt="QRIS" />
            <div style={{ width: 39 }}></div>
            <img src={bankIcon} alt="QRIS" />
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
