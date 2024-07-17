import React from "react";
import CartIcon from "../../assets/images/cart.svg";

const NavbarPembeli = () => {
  return (
    <nav className="bg-white ">
      <div className="max-w-screen-xl flex row-auto items-center justify-between mx-auto border-b border-gray pb-5">
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
                className="block text-primary700 py-2 px-3 text-gray-900 rounded"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="order-2">
          <img src={CartIcon} alt="cart" />
        </div>
      </div>
    </nav>
  );
};
export default NavbarPembeli;
