import React from "react";

import LoginImage from "../assets/images/login-image.png";
import GoogleIcon from "../assets/images/google.svg";
import AppleIcon from "../assets/images/apple.svg";
import FacebookIcon from "../assets/images/facebook.svg";

import ButtonWithImage from "../components/common/button";
import Textfield from "../components/common/textfield";
import Divider from "@mui/material/Divider";

const PembeliLoginPage = () => {
  return (
    <div
      id="login"
      className="flex flex-col max-w-screen-sm lg:max-w-full md:flex-row md:items-center md:justify-evenly bg-no-repeat min-h-screen bg-neutral"
    >
      <div className="hidden lg:flex items-center lg:mb-0">
        <img src={LoginImage} alt="login-image" />
      </div>
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:block bg-black3 opacity-50"
      />
      <div>
        <div className="flex flex-col w-full items-center justify-center md:mt-24 md:mb-24 lg:mt-24 lg:mb-24 mt-6 mb-6">
          <div
            className="flex items-center justify-around bg-greenLight rounded-full p-3"
            style={{ width: 329, height: 59 }}
          >
            <div className="flex flex-row items-center justify-center w-full">
              <div
                className="bg-primary rounded-full flex items-center justify-center text-neutral font-inter font-bold cursor-pointer"
                style={{ width: 146, height: 40 }}
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </div>
              <div
                className="flex items-center justify-center text-primary font-inter font-bold cursor-pointer"
                style={{ width: 146, height: 40 }}
                onClick={() => (window.location.href = "/register")}
              >
                Register
              </div>
            </div>
          </div>
          <div className="font-semibold font-inter text-black text-center mt-10 leading-normal text-3xl md:text-6xl lg:text-6xl">
            Welcome Back!
          </div>
          <div className="md:flex sm: lg:hidden md:justify-center items-center py-3 lg:mb-0">
            <img
              src={LoginImage}
              className="w-60 h-40 md:w-72 md:h-48"
              alt="login-image"
            />
          </div>
          <div className="relative md:mt-0 lg:mt-10 flex flex-col max-w-screen-sm items-center">
            <Textfield
              id={"email"}
              type={"email"}
              placeholder={"Email"}
              className={
                "h-10 lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] lg:w-[563px]"
              }
            />
            <div style={{ height: 15 }}></div>
            <Textfield
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              className={
                "h-10 lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] lg:w-[563px]"
              }
            />
          </div>
          <div className="h-4 lg:h-8"></div>
          <div>
            <button
              className="h-10 lg:h-14 flex items-center justify-center rounded-lg lg:rounded-xl bg-primary text-white font-semibold font-inter text-sm lg:text-h5 w-[350px] lg:w-[563px]"
              onClick={() => (window.location.href = "/home")}
            >
              Login
            </button>
          </div>
          <div style={{ height: 30 }}></div>
          <Divider
            className="font-inter text-h5 font-semibold px-20 md:px-0"
            flexItem
          >
            or
          </Divider>
          <div style={{ height: 30 }}></div>
          <div>
            <ButtonWithImage
              imgSrc={GoogleIcon}
              text="Continue with Google"
              onClick={() => console.log("Google button clicked")}
            />
            <div style={{ height: 9 }}></div>
            <ButtonWithImage
              imgSrc={AppleIcon}
              text="Continue with Apple"
              onClick={() => console.log("Apple button clicked")}
            />
            <div style={{ height: 9 }}></div>
            <ButtonWithImage
              imgSrc={FacebookIcon}
              text="Continue with Facebook"
              onClick={() => console.log("Facebook button clicked")}
            />
          </div>
          <div style={{ height: 20 }}></div>
          <div
            className="font-inter font-bold text-primary cursor-pointer lg:text-h5"
            onClick={() => (window.location.href = "/loginseller")}
          >
            Log in As a Seller
          </div>
        </div>
      </div>
    </div>
  );
};

export default PembeliLoginPage;
