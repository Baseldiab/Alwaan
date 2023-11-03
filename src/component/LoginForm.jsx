import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import MainNav from "../component/MainNav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Auth";
import Swal from "sweetalert2";

function LoginForm(props) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [username, setName] = useState(props.username);
  const [password, setPassword] = useState(props.password);
  const location = useLocation();
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath;
  };

  const auth = useAuth();
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const succesLogin = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };

  const formatSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((data) => {
        auth.login(data.config.data);
        auth.checkAdmin(JSON.parse(data.config.data).username);
        navigateLogin();
        setErrorMsg(null);
        succesLogin();
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
        setErrorMsg(error.response.data);
      });
  };

  const redirectPath = location.state?.path || "/";

  const navigateLogin = () => {
    if (auth.isAdmin) {
      navigate(redirectPath, { replace: true });
    } else navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <MainNav />

      <section className="breadcrumb-section py-3">
        <Container>
          <h1 className=" main-head text-uppercase text-center">Account</h1>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link className="text-decoration-underline text-black" to={"/"}>
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Account</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>
      {/* ========================== */}
      <Container className=" login-header my-4 ">
        <Breadcrumb className="my-2">
          <Breadcrumb.Item active>
            <Link
              className={`${
                isLinkActive("/login") ? "text-primary fw-bold" : "text-dark"
              }`}
              to="/login"
            >
              User Login
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <Link
              className={`${
                isLinkActive("/login/admin")
                  ? "text-primary fw-bold"
                  : "text-dark"
              }`}
              to={"/login/admin"}
            >
              Admin Login
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      {/* ========================== */}
      <section className="my-2 pb-5">
        <Container>
          <Form className="addProduct-form" onSubmit={formatSubmit}>
            <FloatingLabel
              controlId="floatingName"
              label="username"
              className="form__title mb-3"
            >
              <Form.Control
                type="text"
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
                defaultValue={props.username}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="form__password mb-3"
            >
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                defaultValue={props.password}
                required
              />
            </FloatingLabel>
            {errorMsg && <Alert variant={"danger"}>{errorMsg}</Alert>}
            <Row className="form__submit-btn mx-0">
              <Col xs={12} sm={4} className="ps-0">
                <Button className="w-100" variant="primary" type="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </>
  );
}

export default LoginForm;
