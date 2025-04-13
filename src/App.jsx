import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';  
import {
  HomeLayout,
  Contact,
  About,
  Package,
  SingleBlog,
  Error,
  Landing,
  BookingList,
  DestinationList,
} from "./pages";
import ServicesPage from "./components/ServicesPage"; 


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
      {
        path: "services", 
        element: <ServicesPage />, 
      },
      
      {
        path: "*",
        element: <Error />,
      }
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
};

export default App;
