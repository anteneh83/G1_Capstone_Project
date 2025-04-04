import React from "react";
import header from "../assets/contact-hero.png";
import Hero from "../components/Hero";
import { Navbar } from "../components";

const Contact = () => {
	return (
		<section
			className="bg-cover bg-center  h-screen"
			style={{ backgroundImage: `url(${header})` }}
		>
			<Hero className="items-center" title="contact" link={`contact`} />

			<h1>content</h1>
		</section>
	);
};

export default Contact;
