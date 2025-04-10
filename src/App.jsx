import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Contact,
  About,
  Package,
  SingleBlog,
  Error,
  Landing,
  BookingList,
  DestinationList
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
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "package",
        element: <Package />,
      },
      {
        path: "singleBlog",
        element: <SingleBlog />,
      },
      {
        path: "bookings",
        element: <BookingList />,
      },
      {
        path: "destinations",
        element: <DestinationList />,
      },
      // Add this catch-all route for 404s
      {
        path: "*",
        element: <Error />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;