import React from "react";
import header from "../assets/choose.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import bestService from "../assets/best-service.svg";
const Choose = () => {
	return (
		<section className="relative">
			<div className="carousel w-full h-[100vh]">
				<div
					id="slide1"
					className="carousel-item relative w-full h-[70vh]"
				>
					<img src={header} className="w-full" />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div
					id="slide2"
					className="carousel-item relative w-full h-[70vh]"
				>
					<img src={header} className="w-full" />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
			<div className="absolute top-10 left-1/2 -translate-x-1/2">
				<div className="flex flex-col gap-7 text-center ">
					<h1 className="text-5xl font-bold text-white">
						Why choose us?
					</h1>
					<p className="text-white opacity-70">
						our services have been trusted by world travelers.
					</p>
				</div>
				<div className="mt-20 mx-[-15%] flex gap-20">
					
					<div className="bg-white shadow-md rounded-lg p-5 pr-8  flex  flex-col ">
						<img
							className="w-1/3 mb-4"
							src={bestService}
							alt="best service"
						/>
						<h3 className="font-bold text-xl mb-3 capitalize">Best Service</h3>
						<p className="text-[#858585] mb-6">
							our service is reliable and convenient, our service
							is quality.
						</p>
						<p className="flex mb-6 items-center font-bold text-md relative">
							Learn more <FaArrowRightLong className="relative left-3 top-1" />
						</p>
					</div>
					<div className="bg-white shadow-md rounded-lg p-5 pr-8  flex  flex-col ">
						<img
							className="w-1/3 mb-4"
							src={bestService}
							alt="best service"
						/>
						<h3 className="font-bold text-xl mb-3 capitalize">Best Service</h3>
						<p className="text-[#858585] mb-6">
							our service is reliable and convenient, our service
							is quality.
						</p>
						<p className="flex mb-6 items-center font-bold text-md relative">
							Learn more <FaArrowRightLong className="relative left-3 top-1" />
						</p>
					</div><div className="bg-white shadow-md rounded-lg p-5 pr-8  flex  flex-col ">
						<img
							className="w-1/3 mb-4"
							src={bestService}
							alt="best service"
						/>
						<h3 className="font-bold text-xl mb-3 capitalize">Best Service</h3>
						<p className="text-[#858585] mb-6">
							our service is reliable and convenient, our service
							is quality.
						</p>
						<p className="flex mb-6 items-center font-bold text-md relative">
							Learn more <FaArrowRightLong className="relative left-3 top-1" />
						</p>
					</div>
				</div>
			</div>
			
		</section>
	);
};

export default Choose;
