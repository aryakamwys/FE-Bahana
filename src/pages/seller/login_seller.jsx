import React, { useEffect, useState } from "react";

import LoginImage from "../../assets/images/login-image.png";
import GoogleIcon from "../../assets/images/google.svg";
import AppleIcon from "../../assets/images/apple.svg";
import FacebookIcon from "../../assets/images/facebook.svg";

import ButtonWithImage from "../../components/common/button";
import Textfield from "../../components/common/textfield";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const PetaniLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/petani/login`, {
        email_petani: email,
        password_petani: password,
      })
      .then((res) => {
        const { token, petaniID } = res.data.data;
        cookies.set("token_petani", token, { path: "/" });
        cookies.set("petaniID", petaniID, { path: "/" });
        setSuccess("Login successful! Redirecting to home...");
        setError("");
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      })
      .catch((error) => {
        setError("Login failed. Please check your credentials.");
        setSuccess("");
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div
      id="login"
      className="flex flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-full md:flex-row md:items-center md:justify-evenly bg-no-repeat min-h-screen bg-neutral"
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
        <div className="flex flex-col w-full items-center justify-center md:mt-8 md:mb-0 lg:mt-24 lg:mb-24 mt-6 mb-6">
          <div
            className="flex items-center justify-around bg-greenLight rounded-full p-3"
            style={{ width: 329, height: 59 }}
          >
            <div className="flex flex-row items-center justify-center w-full">
              <div
                className="bg-primary rounded-full flex items-center justify-center text-neutral font-inter font-bold cursor-pointer"
                style={{ width: 146, height: 40 }}
                onClick={() => (window.location.href = "/loginseller")}
              >
                Login
              </div>
              <div
                className="flex items-center justify-center text-primary font-inter font-bold cursor-pointer"
                style={{ width: 146, height: 40 }}
                onClick={() => (window.location.href = "/registerseller")}
              >
                Register
              </div>
            </div>
          </div>
          <div className="font-semibold font-inter text-black text-center mt-10 leading-normal text-3xl md:text-[50px] lg:text-6xl">
            Login As a Seller
          </div>
          <div className="md:flex lg:hidden md:justify-center items-center py-3 md:pt-[52px] md:pb-[40px] lg:mb-0">
            <img
              src={LoginImage}
              className="w-60 h-40 md:w-[309px] md:h-[206px]"
              alt="login-image"
            />
          </div>
          <div className="relative md:mt-0 lg:mt-10 flex flex-col max-w-screen-sm items-center">
            <Textfield
              id={"email"}
              type={"email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
              }
            />
            <div style={{ height: 15 }}></div>
            <Textfield
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
              }
            />
          </div>
          <div className="h-4 lg:h-8"></div>
          <div>
            <form onSubmit={handleLogin}>
              {/* Your form elements here */}
              <button
                className="h-10 md:h-[60px] lg:h-14 flex items-center justify-center rounded-lg lg:rounded-xl bg-primary text-white font-semibold font-inter text-sm lg:text-h5 w-[350px] md:w-[563px] lg:w-[563px]"
                type="submit"
              >
                {loading ? "Loading..." : "Login"}{" "}
                {/* Show loading text while loading */}
              </button>
            </form>
            {success && (
              <div className="flex items-center text-green-700 bg-green-100 border border-green-300 rounded-lg px-4 py-2 text-sm font-inter font-semibold mt-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {success}
              </div>
            )}
            {error && (
              <div className="flex items-center text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-2 text-sm font-inter font-semibold mt-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636L5.636 18.364M5.636 5.636L18.364 18.364"
                  ></path>
                </svg>
                {error}
              </div>
            )}
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
            onClick={() => (window.location.href = "/login")}
          >
            Log in As a Customer
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetaniLoginPage;
