import React from "react";

import LoginImage from "../assets/images/login-image.png";
import GoogleIcon from "../assets/images/google.svg";
import AppleIcon from "../assets/images/apple.svg";
import FacebookIcon from "../assets/images/facebook.svg";

import ButtonWithImage from "../components/common/button";
import Textfield from "../components/common/textfield";
import Divider from "@mui/material/Divider";

const PetaniLoginPage = () => {
  return (
    <div
      id="login"
      className="flex flex-row justify-evenly bg-no-repeat min-h-screen bg-neutral"
      
    >
      <div className="flex items-center">
        <img src={LoginImage} alt="login-image" />
      </div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black3 opacity-50"
      />
      <div>
        <div className="flex flex-col items-center justify-center" style={{paddingTop:30}}>
          <div
            className="flex items-center justify-around bg-greenLight rounded-full p-3"
            style={{ width: 329, height: 59 }}
          >
            <div className="flex flex-row w-full">
              <div
                className="bg-primary rounded-full flex items-center justify-center text-neutral font-inter font-bold"
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
          <div
            className="font-semibold font-inter text-black"
            style={{ fontSize: 60 }}
          >
            Welcome Back!
          </div>
          <div className="relative">
            <Textfield
              id="email"
              type="email"
              placeholder="Email"
              className="bg-white border border-gray font-inter text-gray font-semibold text-h5 pl-5"
              style={{ width: 563, height: 60, borderRadius: 10 }}
            />
            <div style={{ height: 15 }}></div>
            <Textfield
              id="password"
              type="password"
              placeholder="Password"
              className="bg-white border border-gray font-inter text-gray font-semibold text-h5 pl-5"
              style={{ width: 563, height: 60, borderRadius: 10 }}
            />
          </div>
          <div style={{ height: 30 }}></div>
          <div>
            <button
              className="flex items-center justify-center bg-primary text-white font-semibold font-inter rounded-full "
              style={{ borderRadius: 10, width: 563, height: 54, fontSize: 20 }}
              onClick={() => (window.location.href = "/")}
            >
              Login
            </button>
          </div>
          <div style={{ height: 30 }}></div>
          <Divider className="font-inter text-h5 font-semibold" flexItem>
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
        </div>
      </div>
    </div>
  );
};

export default PetaniLoginPage;
