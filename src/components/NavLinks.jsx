import { NavLink } from "react-router-dom";
import dropdownIcon from "../assets/dropdown-icon.svg";

import SearchBar from "./SearchBar"; 

const links = [
	{ id: 1, url: "/", text: "home" },
	{ id: 2, url: "about", text: "About us" },
	{ id: 3, url: "package", text: "package" },
	{ id: 4, url: "destination", text: "destination" },
	{ id: 5, url: "singleBlog", text: "blog" },
	{ id: 6, url: "contact", text: "contact" },
	{ id: 7, url: "bookings", text: "bookings" },
];

const NavLinks = () => {
	return (
		<>
			{links.map((link) => {
				const { id, url, text } = link;
				const showIcons = ["package", "destination", "singleBlog"].includes(url);

				return (
					<li key={id} className="flex items-center gap-2">
						<NavLink className="capitalize lg:text-white flex items-center gap-1" to={url}>
							<span>{text}</span>
							{showIcons && (
								<>
									<img src={dropdownIcon} alt="dropdown" className="w-3 h-3" />
								</>
							)}
						</NavLink>
					</li>
				);
			})}
			
			<li className="ml-10">
				<SearchBar />
			</li>
		</>
	);
};

export default NavLinks;
