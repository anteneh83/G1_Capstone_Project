import { NavLink } from "react-router-dom";
const links = [
	{ id: 1, url: "/", text: "home" },
	{ id: 2, url: "about", text: "About us" },
	{ id: 3, url: "package", text: "package" },
	{ id: 4, url: "bookings", text: "bookings" },
	{ id: 5, url: "singleBlog", text: "blog" },
	{ id: 6, url: "contact", text: "contact" },
    { id: 7, url: "destinations", text: "destinations" },
];

const NavLinks = () => {
	return <>
    {links.map((link)=>{
        const {id,url,text} = link;
        return <li key={id}>
            <NavLink ink className='capitalize lg:text-white'  to={url}>{text}</NavLink>
        </li>
    })}
    </>;
};

export default NavLinks;
