import React from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import NavLinks from './NavLinks'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
	return (
		<nav className="bg-[#120B0B82] fixed w-screen glass z-1000">
			<div className="px-3 sm:px-4 md:px-7 lg:px-10">
				<div className="flex justify-between items-center">
					<NavLink
						to="/"
						className="w-[27%] min-w-[8rem] min-[340px]:min-w-[12rem] "
					>
						<img className="" src={logo1} alt="logo" />
					</NavLink>

					<div className="dropdown dropdown-center hidden mx-5 max-[1093px]:block">
						<label tabIndex={0} className="btn btn-ghost">
							<GiHamburgerMenu className="w-7 h-7" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm px-5 mr-15 dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500/80 text-white rounded-box w-50"
						>
							<NavLinks />
						</ul>
					</div>
					<div className="hidden w-[69%] min-w-[45rem] lg:min-[1093px]:block">
						<ul className="menu min-w-[45rem] w-[100%] justify-between flex-nowrap menu-horizontal">
							<NavLinks />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
