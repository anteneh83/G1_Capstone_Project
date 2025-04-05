import React from "react";
import header from "../assets/choose.png";
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
			<div className="absolute text-center top-10 left-1/2 -translate-x-1/2">
				<div className="flex flex-col gap-7">
					<h1 className="text-5xl font-bold text-white">
						Why choose us?
					</h1>
					<p className="text-white opacity-70">
						our services have been trusted by world travelers.
					</p>
				</div>
                <div>
                    <div className="bg-white">

                    </div>
                </div>
			</div>
		</section>
	);
};

export default Choose;
