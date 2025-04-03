import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import header from "../assets/header.png";

const Header = () => {
	return (
		<div
			className="bg-cover bg-center  h-screen"
			style={{ backgroundImage: `url(${header})`, }}
		>
			<Navbar />
			<Hero />
			<h1>content</h1>
		</div>
	);
};

export default Header;
