import React, {useEffect, useState } from "react";

import LoginImage from "../assets/images/login-image.png";
import GoogleIcon from "../assets/images/google.svg";
import AppleIcon from "../assets/images/apple.svg";
import FacebookIcon from "../assets/images/facebook.svg";

import ButtonWithImage from "../components/common/button";
import Textfield from "../components/common/textfield";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const PembeliLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/pembeli/login`, {
      email_pembeli : email,
      password_pembeli : password,
    })
    .then((res) => {
      const { token, pembeliID } = res.data.data;
      cookies.set("token_pembeli", token, { path: '/' });
      cookies.set("pembeliID", pembeliID, { path: '/' }); 
      window.location.href = "/home"
    }).catch((error) => {
      setError("Login failed. Please check your credentials.");
      console.log(error);
    })
  }

  return (
    <div
      id="login"
      className="flex flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-full md:flex-row md:items-center md:justify-evenly bg-no-repeat min-h-screen bg-neutral"
    >
      {/* Login Image */}
      <div className="hidden lg:flex items-center lg:mb-0">
        <img src={LoginImage} alt="login-image" />
      </div>

      {/* Divider */}
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:block bg-black3 opacity-50"
      />

      {/* Login Form */}
      <div>
        <div className="flex flex-col w-full items-center justify-center md:mt-0 md:mb-0 lg:mt-0 lg:mb-0 mt-6 mb-6">
          {/* Login/Register Button */}
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

          {/* Welcome Message */}
          <div className="font-semibold font-inter text-black text-center mt-10 leading-normal text-3xl md:text-[50px] lg:text-6xl">
            Welcome Back!
          </div>

          {/* Login Image (Mobile) */}
          <div className="md:flex lg:hidden md:justify-center items-center py-3 md:pt-[52px] md:pb-[40px] lg:mb-0">
            <img
              src={LoginImage}
              className="w-60 h-40 md:w-[309px] md:h-[206px]"
              alt="login-image"
            />
          </div>

          {/* Email and Password Fields */}
          <div className="relative md:mt-0 lg:mt-10 flex flex-col max-w-screen-sm items-center">
            <Textfield
              id={"email"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Email"}
              className={
                "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
              }
            />
            <div style={{ height: 15 }}></div>
            <Textfield
              id={"password"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Password"}
              className={
                "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
              }
            />
          </div>

          <div className="h-4 lg:h-8"></div>

          {/* Login Button */}
          <div>
            <form onSubmit={handleLogin}>
              <button
                className="h-10 md:h-[60px] lg:h-14 flex items-center justify-center rounded-lg lg:rounded-xl bg-primary text-white font-semibold font-inter text-sm lg:text-h5 w-[350px] md:w-[563px] lg:w-[563px]"
                type="submit"
              >
                Login
              </button>
            </form>
            {/* Error message */}
            {error && (
              <div className="text-red-500 text-sm font-inter font-semibold mt-2">
                {error}
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={{ height: 30 }}></div>
          <Divider
            className="font-inter text-h5 font-semibold px-20 md:px-0"
            flexItem
          >
            or
          </Divider>

          {/* Social Media Buttons */}
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

          {/* Log in as Seller Button */}
          <div
            className="font-inter font-bold py-[20px] text-primary cursor-pointer lg:text-h5"
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
