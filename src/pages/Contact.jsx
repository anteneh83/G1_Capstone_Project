import React from "react";
import header from "../assets/contact-hero.png";
import Hero from "../components/Hero";
import { ContactInfo, Footer, Navbar } from "../components";

const Contact = () => {
	return (
		<>
			<section
				className="bg-cover bg-center  h-screen"
				style={{ backgroundImage: `url(${header})` }}
			>
				<Hero
					className="items-center"
					title="contact"
					link={`contact`}
				/>
			</section>
			<main>
				<ContactInfo/>
				<Footer/>
			</main>
		</>
	);
};

export default Contact;
