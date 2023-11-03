import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import "./footer.css";
import MainButton from "./Main-button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function MainFooter() {
  return (
    <>
      <section className="subscribe-section">
        <Container>
          <Row className=" py-2 align-items-center justify-content-lg-between justify-content-center">
            <Col xl={6} xm={12} className="subscribe__left text-light">
              <Row className="align-items-center text-sm-start text-center">
                <Col sm={2} xm={12}>
                  <FontAwesomeIcon
                    className="subscribe__email-icon"
                    icon={faEnvelope}
                  />
                </Col>
                <Col sm={10} xm={12} className="subscribe__text">
                  <h5 className="my-0">SUBSCRIBE TO OUR NEWSLETTER</h5>
                  <p className="my-0">
                    Get all the latest information on Events, Sales and Offers.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xl={6} xm={12} className="subscribe__right">
              <Row className="align-items-center">
                <Col xl={9} xm={12}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mt-2 py-0"
                  >
                    <Form.Control
                      className="subscripe__input"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </Col>
                <Col sm={3} xm={12} className="subscribe__text">
                  <MainButton variant={"dark"} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="bg-dark py-5">
        <Container className="my-3">
          <Row className="my-3 footer__lists pt-3">
            <Col xm={12} md={6} lg={3} className="footer__about-store">
              <h4 className="footer__about-header">
                <Logo />
              </h4>
              <p className="footer__about-text secondary-text footer__text">
                Our online ecommerce website offers a wide range of products for
                convenient shopping. Secure payment options and user-friendly
                interface ensure a seamless experience.
              </p>
            </Col>
            <Col xm={12} md={6} lg={3} className="footer__contact">
              <h4 className="footer__header">contact us</h4>
              <p className="footer__text">
                <span className="text-light me-1">Address :</span>
                <a
                  className="footer__text footer__link"
                  href="https://www.google.com/maps/d/viewer?mid=1ksBysRv_ZSolbXZfUY7bqdJDYXM&hl=en_US&ll=30.069614000000037%2C31.222285999999986&z=17"
                >
                  26, July Street - Mohandseen
                </a>
              </p>
              <p className="footer__text">
                <span className="text-light me-1">Phone :</span>
                <a
                  className="footer__text footer__link"
                  href="tel:(08) 8827 633354"
                >
                  (08) 8827 633354
                </a>
              </p>
              <p className="footer__text">
                <span className="text-light me-1">Fax :</span>
                <a
                  className="footer__text footer__link"
                  href="fax:(08) 8827 633354"
                >
                  (08) 8827 633354
                </a>
              </p>
              <p className="footer__text">
                <span className="text-light me-1">Mail :</span>
                <a
                  className="footer__text footer__link"
                  href="mailto:BaselDiab21@gmail.com"
                >
                  BaselDiab21@gmail.com
                </a>
              </p>
              <p className="footer__text">
                <span className="text-light me-1">Openning :</span>
                <a
                  className="footer__text footer__link"
                  href="mailto:BaselDiab21@gmail.com"
                >
                  9:00-16:00,Sat-Thur
                </a>
              </p>
            </Col>
            <Col xm={12} md={6} lg={3} className="footer__pages">
              <h4 className="footer__header">pages</h4>
              <p>
                <Link className="footer__link text-capitalize" to="/products">
                  products
                </Link>
              </p>
              <p>
                <Link className="footer__link text-capitalize" to="/contact">
                  Contact
                </Link>
              </p>
              <p>
                <Link className="footer__link text-capitalize" to="/about">
                  about us
                </Link>
              </p>
              <p>
                <Link className="footer__link text-capitalize" to="/cart">
                  Cart
                </Link>
              </p>
            </Col>
            <Col xm={12} md={6} lg={3} className="footer__follow">
              <h4 className="footer__header">follow us</h4>
              <p>
                <a
                  className="footer__link text-capitalize"
                  href="https://www.facebook.com/"
                >
                  <FontAwesomeIcon icon={faFacebookF} /> facebook
                </a>
              </p>
              <p>
                <a
                  className="footer__link text-capitalize"
                  href="https://twitter.com/"
                >
                  <FontAwesomeIcon icon={faXTwitter} /> twitter
                </a>
              </p>
              <p>
                <a
                  className="footer__link text-capitalize"
                  href="https://www.instagram.com/"
                >
                  <FontAwesomeIcon icon={faInstagram} /> instagram
                </a>
              </p>
              <p>
                <a
                  className="footer__link text-capitalize"
                  href="https://www.youtube.com/"
                >
                  <FontAwesomeIcon icon={faYoutube} /> youtube
                </a>
              </p>
            </Col>
          </Row>
          <div className="footer__bottom text-center text-light py-3">
            <p className="footer-text mb-2">
              All Right Reserved &copy;
              <span className="footer-year"> 2023 - </span>
              <span className="name">
                <a
                  className="footer__name text-primary"
                  href="https://github.com/Baseldiab"
                >
                  Basel Diab
                </a>
              </span>
            </p>
            <Image
              className="mx-auto"
              src="images/footer.jpg"
              alt="credit-cards"
            />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default MainFooter;
