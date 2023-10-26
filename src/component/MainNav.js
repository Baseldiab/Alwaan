import { Link, useLocation } from "react-router-dom";
import "./mainNav.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function MainNav() {
  const location = useLocation();
  const wishProduct = useSelector((state) => state.wish);
  const cartProduct = useSelector((state) => state.cart);

  // Function to determine if a link should be active
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };
  return (
    <Navbar className="main-nav" data-bs-theme="dark" expand="lg">
      <Container>
        <Link
          className="logo-name navbar-brand fw-bold fs-4 text-decoration-none text-uppercase"
          to={"/"}
        >
          <span className="logo-name__A">A</span>lwaan
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav__list">
          <Nav variant="underline">
            <Nav.Item className="main-nav__item">
              <Link
                className={`nav-link ${isLinkActive("/") ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </Nav.Item>

            <Nav.Item className="main-nav__item">
              <Link
                className={`nav-link  ${
                  isLinkActive("/products") ? "active" : ""
                }`}
                to="/products"
              >
                Products
              </Link>
            </Nav.Item>

            <Nav.Item className="main-nav__item main-nav__wish">
              <Link
                className={`nav-link ${
                  isLinkActive("/wishList") ? "active" : ""
                }`}
                to="/wishList"
              >
                <div className="main-nav__badge ">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="main-nav__number main-nav__wish-number">
                    {wishProduct.length}
                  </span>
                </div>
              </Link>
            </Nav.Item>

            <Nav.Item className="main-nav__item main-nav__cart">
              <Link
                className={`nav-link ${isLinkActive("/cart") ? "active" : ""}`}
                to="/cart"
              >
                <div className="main-nav__badge ">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="main-nav__number main-nav__cart-number">
                    {cartProduct.length}
                  </span>
                </div>
              </Link>
            </Nav.Item>

            <Nav.Item className="main-nav__item">
              <Link
                className={`nav-link  ${
                  isLinkActive("/dashboard") ? "active" : ""
                }`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </Nav.Item>

            <Nav.Item className="main-nav__item">
              <Link
                className={`nav-link  ${
                  isLinkActive("/dashboard/addProduct") ? "active" : ""
                }`}
                to="/dashboard/addProduct"
              >
                Add New Product
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNav;
