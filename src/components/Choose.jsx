import React from "react";
import { Link } from "react-router-dom"; 
import header from "../assets/choose.png";
import { FaArrowRightLong } from "react-icons/fa6";
import bestService from "../assets/best-service.svg";

const Choose = () => {
  return (
    <section className="relative">
      <div className="w-full h-[100vh] overflow-hidden">
        <img
          src={header}
          className="w-full h-full object-cover"
          alt="choose background"
        />
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full px-6">
        <div className="flex flex-col items-center text-center text-white pt-70">
          <h1 className="text-5xl font-bold mb-4">Why choose us?</h1>
          <p className="text-white opacity-80 text-lg mb-16">
            Our services have been trusted by world travelers.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-12 mb-40">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 w-full md:w-[300px] h-[390px]"
            >
              <img
                src={bestService}
                alt="Best Service"
                className="w-1/3 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-3 text-center">
                Best Service
              </h3>
              <p className="text-[#858585] mb-6 text-center">
                Our service is reliable and convenient. Our service is quality.
              </p>

              {/* ✅ Interactive and styled link */}
              <p className="flex items-center justify-center font-bold text-md text-blue-600 hover:underline">
                <Link to="/services" className="flex items-center">
                  Learn more <FaArrowRightLong className="ml-2 mt-[2px]" />
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
