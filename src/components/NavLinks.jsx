import { NavLink } from "react-router-dom";
const links = [
	{ id: 1, url: "/", text: "home" },
	{ id: 2, url: "about", text: "About us" },
	{ id: 3, url: "package", text: "package" },
	{ id: 4, url: "destination", text: "destination" },
	{ id: 5, url: "blog", text: "blog" },
	{ id: 6, url: "contact", text: "contact" },
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
