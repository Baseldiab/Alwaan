import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import DashNav from "./dashboard/component/DashNav";
import Dashboard from "./dashboard/pages/Dashboard";
import AddNewProduct from "./dashboard/pages/AddProduct";
import EditProduct from "./dashboard/pages/EditProduct";
import HomePage from "./Home";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
const Layout = ({ children }) => {
  return <main>{children}</main>;
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
        path: "/dashboard",
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
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
