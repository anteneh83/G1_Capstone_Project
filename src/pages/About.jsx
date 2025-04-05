import React from "react";
import { Footer, Hero, Navbar } from "../components";
import header from "../assets/AboutHero.jpg";
const About = () => {
	return (
		<>
			<section
				className="bg-cover bg-center  h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>	<p>Hello about us</p>
				<Hero
					className={`items-center`}
					title="about us"
					link={`about`}
				/>
			</section>
			<main>
				<Footer/>
			</main>
		</>
	);
};

export default About;
