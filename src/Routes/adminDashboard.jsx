import React, { Children } from 'react';
import AdminDashbardLayout from '../Layout/AdminDashboardLayout/AdminDashbardLayout';
import AdminHome from '../Pages/AdminDashboard/AdminHome/AdminHome';
import AddProduct from '../Pages/AdminDashboard/AddProduct/AddProduct';
import ManageProduct from '../Pages/AdminDashboard/ManageProduct/ManageProduct';
import ManageUser from '../Pages/AdminDashboard/ManageUser/ManageUser';
import ManageOrder from '../Pages/AdminDashboard/ManageOrder/ManageOrder';
import Setting from '../Pages/AdminDashboard/Setting/Setting';
import AddCategory from '../Pages/AdminDashboard/AddCategory/AddCategory';
import PendingPage from '../Pages/AdminDashboard/ManageOrder/PendingPage/PendingPage';
import DeliveredPage from '../Pages/AdminDashboard/ManageOrder/DeliveredPage/DeliveredPage';
import DeneidPage from '../Pages/AdminDashboard/ManageOrder/DeneidPage/DeneidPage';
import UserOrdersHistory from '../Pages/AdminDashboard/ManageUser/UserOdersHistory/UserOrdersHistory';
import UserDetails from '../Pages/AdminDashboard/ManageUser/UserDetails/UserDetails';

const adminDashboard = {
  path: "/admin-dashboard",
  element: <AdminDashbardLayout />,
  children: [
    {
      path: "",
      element: <AdminHome></AdminHome>,
    },
    {
      path: "add-category",
      element: <AddCategory />,
    },
    {
      path: "add-products",
      element: <AddProduct />,
    },
    {
      path: "manage-products",
      element: <ManageProduct />,
    },
    {
      path: "users",
      element: <ManageUser />,
    },
    {
      path: "user-orders/:id",
      element: <UserOrdersHistory />,
      loader: ({ params }) =>
        fetch(
          `${import.meta.env.VITE_BACKEND_URL}/admin/all/users/${params.id}`
        ),
    },
    {
      path: "user-details/:id",
      element: <UserDetails />,
    },
    {
      path: "orders",
      element: <ManageOrder />,
    },
    {
      path: "pending",
      element: <PendingPage />,
    },
    {
      path: "delivered",
      element: <DeliveredPage />,
    },
    {
      path: "denied",
      element: <DeneidPage />,
    },
    {
      path: "settings",
      element: <Setting />,
    },
  ],
};

export default adminDashboard;