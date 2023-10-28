import { Link, useLocation } from "react-router-dom";
import "./dashNav.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function DashNav() {
  const location = useLocation();

  // Function to determine if a link should be active
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };
  return (
    <Navbar className="dash-nav" expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Link className="navbar-brand" to={"/dashboard"}>
          𝓓𝓪𝓼𝓱𝓫𝓸𝓪𝓻𝓭
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav__list">
          <Nav variant="underline">
            <Nav.Item className="dash-nav__item">
              <Link
                className={`nav-link ${
                  isLinkActive("/dashboard") ? "active" : ""
                }`}
                to="/dashboard"
              >
                Products
              </Link>
            </Nav.Item>
            <Nav.Item className="dash-nav__item">
              <Link
                className={`nav-link pe-0 ${
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
export default DashNav;
