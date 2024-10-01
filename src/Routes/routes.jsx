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
import AboutUs from "../Pages/AboutUs/AboutUs";

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
      // {
      //   path: "/buy/:id",
      //   element: <BuyPage></BuyPage>,
      // },
      {
        path: "/carts",
        element: <Carts></Carts>,
      },
      {
        path: "/check-out",
        element: (
          // <PrivateRoute>
          <CheckOut />
        ),
        // </PrivateRoute> ,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/discount",
      //   element: (
      //     <>
      //       <Discount></Discount>
      //     </>
      //   ),
      // },
      // {
      //   path: "profile",
      //   element: <ProfileLayout/>,
      //   children: [
      //     {
      //       path: "",
      //       element: <UserProfile></UserProfile>,
      //     },
      //     {
      //       path: "orders",
      //       element: <Orders></Orders>,
      //     },
      //     {
      //       path: "payment-history",
      //       element: <PaymentHistory></PaymentHistory>,
      //     },
      //   ],
      // },
    ],
  },
  dashboardRoutes,
  adminDashboard,
]);
