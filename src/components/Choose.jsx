
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import bestService from "../assets/best-service.svg";
const Choose = () => {
  return (
    <section className="relative bg-[url('./src/assets/choose.png')] bg-cover bg-center">
      <div className="flex flex-col p-5   justify-center items-center my-4">
        <h2 className="text-3xl font-extrabold text-shadow-white m-2">Why choose us?</h2>
        <p className="" >Out services have been trusted by world travellers.</p>
      </div>
      <div className="carousel w-full md:flex md:space-x-4 md:carousel-none ">
        <div id="slide1" className="carousel-item relative w-full flex justify-center md:w-1/3">
          <div className="bg-white opacity-65 shadow-md rounded-lg p-5 pr-8  flex  flex-col items-center ">
            <img className="w-1/3 mb-4" src={bestService} alt="best service" />
            <h3 className="font-bold text-xl mb-3 capitalize">Best Service</h3>
            <p className="text-[#858585] mb-6 text-center">
              our service is reliable and convenient, our service is quality.
            </p>
            <p className="flex mb-6 items-center font-bold text-md relative">
              Learn more <FaArrowRightLong className="relative left-3 top-1" />
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:hidden">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex justify-center md:w-1/3">
          <div className="bg-white opacity-65 shadow-md rounded-lg p-5 pr-8  flex  flex-col items-center">
            <img className="w-1/3 mb-4" src={bestService} alt="best service" />
            <h3 className="font-bold text-xl mb-3 capitalize">Best Service</h3>
            <p className="text-[#858585] mb-6 text-center">
              our service is reliable and convenient, our service is quality.
            </p>
            <p className="flex mb-6 items-center font-bold text-md relative">
              Learn more <FaArrowRightLong className="relative left-3 top-1" />
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:hidden">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full flex justify-center md:w-1/3">
          <div className="bg-white opacity-65 shadow-md rounded-lg p-5 pr-8  flex  flex-col items-center">
            <img className="w-1/3 mb-4" src={bestService} alt="best service" />
            <h3 className="font-bold text-xl mb-3 capitalize">Best Service</h3>
            <p className="text-[#858585] mb-6 text-center">
              our service is reliable and convenient, our service is quality.
            </p>
            <p className="flex mb-6 items-center font-bold text-md relative">
              Learn more <FaArrowRightLong className="relative left-3 top-1" />
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:hidden">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
