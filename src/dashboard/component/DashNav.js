import { Link, NavLink } from "react-router-dom";
import "./dashNav.css";

function DashNav() {
  return (
    <nav
      className="main-nav navbar nav-underline navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav-list "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item main-nav__item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active nav-link"
                    : isPending
                    ? "pending"
                    : "nav-link"
                }
                aria-current="page"
                to="/dashboard"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item main-nav__item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active nav-link"
                    : isPending
                    ? "pending"
                    : "nav-link"
                }
                to="/dashboard/addProduct"
              >
                Add New Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default DashNav;
