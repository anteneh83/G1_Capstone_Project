import React from "react";
import { Hero, Navbar } from "../components";
import header from "../assets/AboutHero.jpg";
const About = () => {
	return (
		<section
			className="bg-cover bg-center  h-screen"
			style={{ backgroundImage: `url(${header})` }}
		>
			<Hero className={`items-center`} title='about us' link={`about`} />
			<h1>content</h1>
		</section>
	);
};

export default About;
