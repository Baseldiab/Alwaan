import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./dashboard/pages/Dashboard";
import AddNewProduct from "./dashboard/pages/AddProduct";
import EditProduct from "./dashboard/pages/EditProduct";
import HomePage from "./Home";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./rtl/store";
import ProductsPage from "./pages/productPage";
import SingleProduct from "./pages/SingleProduct";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
import ScrollToTopButton from "./component/ScrollToTopButton";
import AdminLogin from "./pages/AdminLogin";
import Login from "./pages/LoginPage";
import { ContextProvider } from "./Auth";
import RequireAuth from "./Require-Auth";
import RequireAdminAuth from "./Require-AdminAuth";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/About.jsx";
import MainNav from "./component/MainNav.js";
const Layout = ({ children }) => {
  return (
    <main>
      <ScrollToTopButton />
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

  {
    path: "/wishList",
    element: (
      <RequireAuth>
        <Layout>
          <Wish />
        </Layout>
      </RequireAuth>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <MainNav />
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <MainNav />
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/login",
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
        element: <Login />,
      },
      {
        path: "admin",
        element: <AdminLogin />,
      },
    ],
  },

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
        {/*    <DashNav /> */}
        <RequireAdminAuth>
          <div id="detail">
            <Outlet />
          </div>
        </RequireAdminAuth>
      </Layout>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },

      {
        path: "addProduct",
        element: (
          <>
            <AddNewProduct />
          </>
        ),
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
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
