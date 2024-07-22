import React, { useState } from "react";

import LoginImage from "../assets/images/login-image.png";
import Divider from "@mui/material/Divider";
import Textfield from "../components/common/textfield";

const PembeliRegisterPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      id="login"
      className="flex flex-col lg:flex-row items-center justify-evenly bg-no-repeat min-h-screen bg-neutral"
    >
      <div className="hidden lg:flex items-center lg:mb-0">
        <img src={LoginImage} alt="login-image" />
      </div>
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:block bg-black3 opacity-50"
      />
      <div
        className="flex flex-col items-center justify-center md:mt-24 md:mb-24 mb-28 pb-10 lg:pb-6"
      >
        <div
          className="flex items-center justify-around bg-greenLight rounded-full p-3"
          style={{ width: 329, height: 59 }}
        >
          <div className="flex flex-row  w-full">
            <div
              className="flex items-center justify-center font-inter text-primary font-semibold cursor-pointer"
              style={{ width: 146, height: 40 }}
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </div>
            <div
              className="bg-primary rounded-full flex items-center justify-center text-neutral font-inter font-bold"
              style={{ width: 146, height: 40 }}
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </div>
          </div>
        </div>
        <div
          className="font-semibold font-inter text-black text-center text-3xl lg:text-6xl  mt-10"
        >
          Create your account
        </div>
        <div className="md:flex lg:hidden md:justify-center items-center py-4 lg:py-0 lg:mb-0">
            <img src={LoginImage} className="w-60 h-40 md:w-72 md:h-48" alt="login-image" />
          </div>
        <div className="relative md:mt-0 lg:mt-10">
          <div>
          <Textfield
              id={"username"}
              type={"text"}
              placeholder={"Username"}
              className={
                "h-10 lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] lg:w-[563px]"
              }
            />
            <div style={{ height: 15 }}></div>
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
              id={"phone"}
              type={"text"}
              placeholder={"Phone"}
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
            <div style={{ height: 15 }}></div>
            <Textfield
              id={"password"}
              type={"password"}
              placeholder={"Confirm Password"}
              className={
                "h-10 lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] lg:w-[563px]"
              }
            />
          </div>
          <div style={{ height: 20 }}></div>
          <div className="flex items-start">
            <div className="flex flex-row items-center">
              <button
                className="w-5 h-5 rounded-md border border-black flex items-center justify-center"
                onClick={toggleCheck}
              >
                {isChecked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <div style={{ width: 10 }}></div>
              <div
                className="font-inter font-medium text-black text-xs lg:text-base"
              >
                I agree with our{" "}
                <span className="font-semibold">
                  Terms of Service and Privacy Policy
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: 20 }}></div>
        </div>

        <div>
        <button
              className="h-10 lg:h-14 flex items-center justify-center rounded-lg lg:rounded-xl bg-primary text-white font-semibold font-inter text-sm lg:text-h5 w-[350px] lg:w-[563px]"
              onClick={() => (window.location.href = "/home")}
            >
              Create Account
            </button>
        </div>
        <div style={{ height: 30 }}></div>
      </div>
    </div>
  );
};

export default PembeliRegisterPage;
