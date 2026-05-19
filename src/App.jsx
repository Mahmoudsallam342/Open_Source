import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routing/Layout";
import Home from "./components/home/Home";
import Brands from "./components/brands/Brands";
import Categories from "./components/categories/Categories";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notFound/NotFound";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
