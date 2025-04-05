import React from "react";
import Navbar from "./Navbar";
import HomeHero from "./Hero";

import header from "../assets/header.png";
import Hero from "./Hero";

const Header = () => {
	return (
		<div
			className="bg-cover bg-center  h-screen"
			style={{ backgroundImage: `url(${header})`, }}
		>		
			
			<Hero />
		</div>
	);
};

export default Header;
