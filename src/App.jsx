import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	HomeLayout,
	Contact,
	About,
	Package,
	SingleBlog,
	Landing,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <Error />,
			},
			{
				path: "about",
				element: <About />,
				errorElement: <Error />,
			},
			{
				path: "contact",
				element: <Contact />,
				errorElement: <Error />,
			},
			{
				path: "package",
				element: <Package />,
				errorElement: <Error />,
			},{
				path: "singleBlog",
				element: <SingleBlog />,
				errorElement: <Error />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router}/>
};

export default App;
