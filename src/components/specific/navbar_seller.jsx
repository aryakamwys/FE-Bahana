import React from "react";
import CartIcon from "../../assets/images/cart.svg";

const NavbarPetani = () => {
  return (
    <div>
      <nav className="bg-white fixed pt-2 z-50">
        <div
          className="max-w-screen-xl flex row-auto items-center justify-between border-b border-gray pb-5 pl-3 pr-3"
          style={{ width: 1300 }}
        >
          <a href="/home">
            <div className="text-black text-h5 font-semibold font-inter">
              Logo Website
            </div>
          </a>
          <div className="flex items-center justify-between w-auto order-1">
            <ul className="flex font-semibold font-inter text-primary text-h5">
              <li
                className="bg-white hover:bg-primary50 flex items-center justify-center rounded-md"
                style={{ width: 101, height: 44 }}
              >
                <a
                  href="/homeseller"
                  className="block text-primary700 py-2 px-3 text-gray-900 rounded"
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li
                className="bg-white hover:bg-primary50 flex items-center justify-center rounded-md"
                style={{ width: 207, height: 44 }}
              >
                <a
                  href="/marketpriceseller"
                  className="block text-primary700 py-2 px-3 text-gray-900 rounded"
                >
                  Market Price
                </a>
              </li>
              <li
                className="bg-white hover:bg-primary50 flex items-center justify-center rounded-md"
                style={{ width: 130, height: 44 }}
              >
                <a
                  href="/wishlistseller"
                  className="block text-primary700 py-2 px-3 text-gray-900 rounded"
                >
                  Wishlist
                </a>
              </li>
              <li
                className="bg-white hover:bg-primary50 flex items-center justify-center rounded-md"
                style={{ width: 95, height: 44 }}
              >
                <a
                  href="/profileseller"
                  className="block text-primary700 py-2 px-3 text-gray-900 rounded"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <button
            className="order-2 w-6 h-6"
            onClick={() => (window.location.href = "/cart")}
          >
            <img src={CartIcon} alt="cart" />
          </button>
        </div>
      </nav>
      <div style={{ height: 50 }}></div>
    </div>
  );
};
export default NavbarPetani;
