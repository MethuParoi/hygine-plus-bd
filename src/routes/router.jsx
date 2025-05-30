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
import About from "../pages/About";
import Support from "../pages/Support";
import NewArrivals from "../pages/NewArrivals";
import Carrers from "../pages/Carrers";

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
        path: "/new-arrivals",
        element: <NewArrivals />,
      },
      {
        path: "/careers",
        element: <Carrers />,
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/support",
        element: <Support />,
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
