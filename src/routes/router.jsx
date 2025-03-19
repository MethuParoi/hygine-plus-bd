import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";

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
        path: "/products",
        element: <Products />,
      },
    ],
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
