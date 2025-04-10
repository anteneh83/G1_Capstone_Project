import React from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import logo1 from "../assets/logo1.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
	return (
		<nav className="bg-[#120B0B82] fixed w-screen glass z-1000">
			<div className="px-10">
				<div className="flex justify-between items-center">
					{/* TITLE */}
					<NavLink to="/" className="">
						<img className="" src={logo1} alt="logo" />
					</NavLink>

					<div className="dropdown dropdown-center pl-10 ml-6">
						<label tabIndex={0} className="btn btn-ghost pl-20 lg:hidden">
							<FaBarsStaggered className="h-6 w-6" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-50"
						>
							<NavLinks />
						</ul>
					</div>
					<div className="hidden lg:flex">
						<ul className="menu md:gap-4 xl:gap-10 lg:gap-4 menu-horizontal">
							<NavLinks />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
