import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			
		</>
	);
};

export default HomeLayout;
