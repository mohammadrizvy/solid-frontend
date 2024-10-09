import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import DashboardLayoutBasic from "../Layout/DashboardLayout/DashboardLayout";
import dashboardRoutes from "./DashboardRoutes";
import Carts from "../Pages/Carts/Carts";
import SignUp from "../Pages/Authintication/SignUp/SignUp";
import Login from "../Pages/Authintication/Login/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AllProducts from "../Pages/AllProducts/AllProducts";
import adminDashboard from "./adminDashboard";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute ";
import AboutUs from "../Pages/About/AboutUs";
import HoneyFarm from "../Pages/About/HoneyFarm";
import MediaCoverage from "../Pages/About/MediaCoverage";
import FairCampaing from "../Pages/About/FairCampaing";
import Gellery from "../Pages/About/Gellery";
import Notice from "../Pages/About/Notice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all",
        element: <Home></Home>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/all/product/${params.id}`),
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/media-coverage",
        element: <MediaCoverage></MediaCoverage>,
      },
      {
        path: "/honey-farm",
        element: <HoneyFarm></HoneyFarm>,
      },
      {
        path: "/fair-campaign",
        element: <FairCampaing></FairCampaing>,
      },
      {
        path: "/gallery",
        element: <Gellery></Gellery>,
      },
      {
        path: "/update-notice",
        element: <Notice></Notice>,
      },
      {
        path: "/carts",
        element: (
          <PrivateRoute>
            <Carts></Carts>
          </PrivateRoute>
        ),
      },
      {
        path: "/check-out",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  dashboardRoutes,
  adminDashboard,
]);
