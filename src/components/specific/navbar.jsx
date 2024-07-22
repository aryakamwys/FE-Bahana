import React from "react";
import CartIcon from "../../assets/images/cart.svg";

const NavbarPembeli = () => {
  return (
    <div className="flex items-center">
      <nav className="bg-white fixed top-0 z-50 lg:w-3/4 md:w-full">
        <div className="container mx-auto p-4">
          <div className="lg:max-w-screen-xl md:max-w-screen-lg flex items-center justify-between border-b mx-auto border-gray py-3 px-4 md:px-8">
            <a
              href="/home"
              className="text-black text-xl font-semibold font-inter"
            >
              Logo Website
            </a>
            <div className="md:flex items-center space-x-6">
              <ul className="flex space-x-4 font-semibold font-inter text-primary text-lg">
                <li>
                  <a
                    href="/home"
                    className="block bg-white hover:bg-primary50 text-primary700 py-2 px-4 rounded transition duration-300"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/marketprice"
                    className="block bg-white hover:bg-primary50 text-primary700 py-2 px-4 rounded transition duration-300"
                  >
                    Market Price
                  </a>
                </li>
                <li>
                  <a
                    href="/wishlist"
                    className="block bg-white hover:bg-primary50 text-primary700 py-2 px-4 rounded transition duration-300"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="/profile"
                    className="block bg-white hover:bg-primary50 text-primary700 py-2 px-4 rounded transition duration-300"
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="md:w-8 md:h-8 w-6 h-6"
              onClick={() => (window.location.href = "/cart")}
            >
              <img src={CartIcon} alt="cart" />
            </button>
            {/* Add a mobile menu toggle button */}
            <button
              className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 hover:text-gray-800"
              id="mobile-menu-toggle"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </div>
  );
};

export default NavbarPembeli;