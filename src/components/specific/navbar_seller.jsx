import React from "react";
import CartIcon from "../../assets/images/cart.svg";

const NavbarPetani = (className) => {
  return (
    <div>
      <nav className={`bg-white fixed pt-2 z-50 ${className}`}>
        <div className="max-w-full lg:max-w-screen-xl flex row-auto items-center justify-between lg:border-b border-gray lg:pb-5 lg:pl-3 lg:pr-3 w-[350px] lg:w-[1300px]">
          <a href="/homeseller">
            <div className="text-black text-[10px] lg:text-h5 font-semibold font-inter">
              Logo Website
            </div>
          </a>
          <div className="flex items-center justify-between w-auto order-1">
            <ul className="flex font-semibold font-inter text-primary text-[8px] lg:text-h5">
              <li className="w-[35px] h-[10px] lg:w-[101px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/homeseller"
                  className="block text-primary700  lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li className="w-[60px] h-[10px] lg:w-[207px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/marketpriceseller"
                  className="block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                >
                  Market Price
                </a>
              </li>
              <li className="w-[38px] h-[10px] lg:w-[130px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/wishlistseller"
                  className="block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                >
                  Wishlist
                </a>
              </li>
              <li className="w-[30px] h-[10px] lg:w-[95px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/profileseller"
                  className="block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <button
            className="order-2 w-[15px] h-[15px] lg:w-6 lg:h-6"
            onClick={() => (window.location.href = "/cart")}
          >
            <img src={CartIcon} alt="cart" />
          </button>
        </div>
      </nav>
      <div className="h-[20px] lg:h-[50px]"></div>
    </div>
  );
};
export default NavbarPetani;
