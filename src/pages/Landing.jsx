import React from "react";

import { Footer, Header, Hero, Explore,Choose, Testimonials } from "../components";
import header from "../assets/header.png";
import { Link } from "react-router-dom";
const Landing = () => {
	return (
		<>
			<section
				className="bg-cover bg-center  h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>
				

				<Hero link="home">
					<div className="h-screen opacity-100 flex flex-col gap-6 items-left justify-center pl-2 md:pl-20">
						<h1 className="text-white text-5xl font-bold">
							Make in <br />
							your journey
						</h1>
						<p className="text-white opacity-80">
							Explore the world with what you love beautiful{" "}
							<br /> natural beauty.
						</p>
						
							<Link to={'destinations'} className="bg-black text-white rounded-2xl py-1 px-4 w-fit">
								Explore now
							</Link>
						
						<p className="text-white">
							Popular Place :{" "}
							<span className="text-[#6e1010]">
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
