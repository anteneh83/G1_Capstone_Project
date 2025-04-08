import React from "react";

import { Footer, Header, Hero, Explore,Choose, Testimonials } from "../components";
import header from "../assets/header.png";
const Landing = () => {
	return (
		<>
			<section
				className="bg-cover bg-center  h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>
				

				<Hero link="home">
					<div className="h-screen opacity-100 flex flex-col gap-6 items-left justify-center pl-20">
						<h1 className="text-white text-5xl font-bold">
							Make in <br />
							your journey
						</h1>
						<p className="text-white opacity-80">
							Explore the world with what you love beautiful{" "}
							<br /> natural beauty.
						</p>
						<div className="bg-white w-lg h-12 flex rounded-4xl px-3 justify-between items-center">
							<select className="">
								<option>Location</option>
							</select>

							<select defaultValue="Pick a date" className="">
								<option>Date</option>
							</select>
							<select defaultValue="Pick a color" className="">
								<option>Date</option>
							</select>
							<button className="bg-black text-white rounded-2xl py-1 px-4">
								Explore now
							</button>
						</div>
						<p className="text-white">
							Popular Place :{" "}
							<span className="text-[#CFCFCF]">
								Bali, Istanbul, Rome, Paris.
							</span>{" "}
						</p>
					</div>
				</Hero>
			</section>
				<Explore/>
				<Choose/>
				<Testimonials/>
				<Footer/>
		</>
	);
};

export default Landing;
