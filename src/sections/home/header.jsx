import React, { useState, useEffect } from "react";
import GlobeImage from "../../assets/images/header-globe.png";
import Skeleton from "../../components/common/skeleton"; // Import the Skeleton component

const HeaderHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed
  }, []);

  if (loading) {
    return (
      <div className="bg-neutral">
        <div className="h-[20px] lg:h-[50px]"></div>
        <div className="flex row-auto w-full justify-between">
          <div className="flex flex-col">
            <Skeleton className="lg:w-[610px] lg:h-[255px] md:w-[348px] md:h-[156px] w-[164px] h-[78px] rounded-md" />
            <div className="h-[35px] lg:h-[65px]"></div>
            <div className="flex row-auto items-start">
              <Skeleton className="w-[64px] h-[26px] md:w-[110px] md:h-[39px] lg:w-[168px] lg:h-[53px] rounded-md" />
            </div>
          </div>
          <Skeleton className="lg:w-[296px] lg:h-[296px] md:w-[234px] md:h-[225px] w-[165px] h-[144px] rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral">
<<<<<<< HEAD
      <div className="" style={{ height: 35 }}></div>
      <div className="flex justify-between items-center md:gap-3 lg:gap-0">
        <div className="font-inter text-black font-bold text-start  md:mr-3 lg:mr-0  lg:text-7xl lg:leading-normal md:text-[3rem] md:leading-normal max-w-xl">
          The future of agriculture is now
        </div>

        <img
          src={GlobeImage}
          className="md:max-w-[250px] lg:max-w-lg h-auto lg:object-cover  object-contain  "
          alt="Globe"
        />
      </div>
      <div style={{ height: 35 }}></div>
      <div className="flex row-auto items-start">
        <button
          className="text-primary text-h5 font-inter border border-primary cursor-pointer lg:w-[168px] md:w-[120px]  md:h-[43px] lg:h-[53px] hover:bg-primary hover:text-white"
          style={{ borderRadius: 10 }}
          onClick={() => (window.location.href = "/aboutus")}
        >
          About us
        </button>
=======
      <div className="h-[20px] lg:h-[50px]"></div>
      <div className="flex row-auto w-full justify-between">
        <div className="flex flex-col">
          <div className="lg:w-[610px] lg:h-[255px] md:w-[348px] md:h-[156px] w-[164px] h-[78px] font-inter text-black font-bold text-start text-[22px] md:text-[40px] lg:text-[70px] lg:leading-normal ">
            The future of agriculture is now
          </div>
          <div className="h-[35px] lg:h-[65px]"></div>
          <div className="flex row-auto items-start">
            <button
              type="button"
              onClick={() => (window.location.href = "/aboutus")}
              className="w-[64px] h-[26px] md:w-[110px] md:h-[39px] lg:w-[168px] lg:h-[53px] rounded-[3px] md:rounded-[7px] lg:rounded-[10px] text-[10px] lg:text-[20px] font-inter text-primary hover:text-white border border-primary border-opacity-80 bg-opacity-80 hover:bg-primary focus:ring-2 focus:outline-none focus:ring-primary focus:ring-opacity-30 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              About Us
            </button>
          </div>
        </div>
        <img
          src={GlobeImage}
          className="lg:w-[388px] lg:h-[296px] md:w-[234px] md:h-[225px] w-[165px] h-[144px]"
          alt="Globe"
        />
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
      </div>
    </div>
  );
};

export default HeaderHome;
