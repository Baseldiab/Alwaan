import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import DashNav from "./dashboard/component/DashNav";
import MainNav from "./component/MainNav";
import Dashboard from "./dashboard/pages/Dashboard";
import AddNewProduct from "./dashboard/pages/AddProduct";
import EditProduct from "./dashboard/pages/EditProduct";
import HomePage from "./Home";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./rtl/store";
import ProductsPage from "./pages/productPage";
import SingleProduct from "./pages/SingleProduct";
const Layout = ({ children }) => {
  return (
    <main>
      <MainNav />
      {children}
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  // {
  //   path: "/products/:productId",
  //   element: <SingleProduct />,
  // },

  {
    path: "/products",
    element: (
      <Layout>
        <div id="detail">
          <Outlet />
        </div>
      </Layout>
    ),
    children: [
      {
        path: "",
        element: <ProductsPage />,
      },

      {
        path: ":productId",
        element: <SingleProduct />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <Layout>
        <DashNav />
        <div id="detail">
          <Outlet />
        </div>
      </Layout>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },

      {
        path: "addProduct",
        element: <AddNewProduct />,
      },

      {
        path: "edit/:productId",
        element: <EditProduct />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
