import { Link, useLocation } from "react-router-dom";
import "./mainNav.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Logo from "./Logo";
import { useSelector } from "react-redux";

function MainNav() {
  const location = useLocation();
  const wishProduct = useSelector((state) => state.wish);
  const cartProduct = useSelector((state) => state.cart.cart);
  const totalPrice = cartProduct.reduce((acc, product) => {
    acc += Number(product.price) * product.quantity;
    return acc;
  }, 0);

  // Function to determine if a link should be active
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };
  return (
    <Navbar
      className="main-nav position-sticky top-0 start-0"
      data-bs-theme="dark"
      expand="lg"
    >
      <Container>
        <Logo />
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
                  <FontAwesomeIcon className="fs-5" icon={faHeart} />
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
                  <FontAwesomeIcon className="fs-5" icon={faCartShopping} />
                  <span className="mx-1 main-nav__cart-number">
                    {cartProduct.length}
                  </span>
                  /
                  <span className="ms-1 main-nav__cart-total-price fw-bold">
                    ${totalPrice ? Number(totalPrice).toFixed(2) : 0.0}
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
