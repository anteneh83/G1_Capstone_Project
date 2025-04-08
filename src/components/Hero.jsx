import React from "react";
import { Link } from "react-router-dom";
const Hero = ({ className, children, title, link }) => {
	if (link === "home" || title === "destination" || title === "single blog") return <>{children}</>;
	return (
		<div
			className={`h-screen opacity-100 flex flex-col gap-6 ${className} justify-center `}
		>
			<h1 className="text-white text-5xl font-bold capitalize">
				{title}
			</h1>
			<div className="text-md text-white breadcrumbs">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to={`/${link}`}>{link}</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Hero;
