import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import AdminLogin from "../pages/AdminLogin";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:main_category",
        element: <Products />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
    ],
  },

  // admin layout
  {
    path: "/admin/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
