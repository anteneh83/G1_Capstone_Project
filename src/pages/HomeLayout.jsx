import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import ScrollToTop from "../components/ScrollToTop"; // ✅ Make sure the path is correct

const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<ScrollToTop /> {/* ✅ Add this here */}
			<Outlet />
			
		</>
	);
};

export default HomeLayout;
