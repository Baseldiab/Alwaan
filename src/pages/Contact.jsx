import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainFooter from "../component/Main-Footer";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <header className="breadcrumb-section py-3">
        <Container>
          <h1 className="text-uppercase text-center">contact</h1>
        </Container>
      </header>

      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d221140.70479715196!2d30.92881503650773!3d29.998865772488205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szamalek%20club!5e0!3m2!1sen!2seg!4v1684875101201!5m2!1sen!2seg"
          style={{ border: "0", display: "block" }}
          allowFullScreen=""
          title="Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-section py-5">
        <Container>
          <Row>
            <Col sm={12} md={6} className="contact__left py-2">
              <Row className="my-2 ">
                <h2 className="contact__left-header text-uppercase fs-3 my-2">
                  get in touch
                </h2>
                <Col sm={12} md={6} className="contact__get-touch">
                  <div className="contact__touchItem my-4">
                    <h6 className="contact__header">LOCATION</h6>
                    <p className="contact__text">
                      <a
                        className="footer__text footer__link"
                        href="https://www.google.com/maps/d/viewer?mid=1ksBysRv_ZSolbXZfUY7bqdJDYXM&hl=en_US&ll=30.069614000000037%2C31.222285999999986&z=17"
                      >
                        26, July Street - Mohandseen
                      </a>
                    </p>
                    <p className="contact__text">
                      <a
                        className="footer__text footer__link"
                        href="https://www.google.com/maps/place/Bronx,+NY,+USA/@40.85166,-73.840934,12z/data=!3m1!4b1!4m6!3m5!1s0x89c28b553a697cb1:0x556e43a78ff15c77!8m2!3d40.8447819!4d-73.8648268!16zL20vMDE1MzE?entry=ttu"
                      >
                        Bronx, NY 16544
                      </a>
                    </p>
                  </div>
                  <div className="contact__touchItem my-4">
                    <h6 className="contact__header">OUR HOURS</h6>
                    <p className="contact__text">MON-FRI 09:00 - 19:00 </p>
                    <p className="contact__text">SAT-SUN 10:00 - 14:00</p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="contact__touchItem my-4">
                    <h6 className="contact__header">CONTACT US</h6>
                    <p className="contact__text">
                      <a
                        className="footer__text footer__link"
                        href="tel:(08) 8827 633354"
                      >
                        (08) 8827 633354
                      </a>
                    </p>
                    <p className="contact__text">
                      <a
                        className="footer__text footer__link"
                        href="mailto:BaselDiab21@gmail.com"
                      >
                        BaselDiab21@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="contact__touchItem my-4">
                    <h6 className="contact__header">FOLLOW US</h6>
                    <a
                      className="footer__link text-capitalize me-2"
                      href="https://www.facebook.com/"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      className="footer__link text-capitalize me-2"
                      href="https://twitter.com/"
                    >
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a
                      className="footer__link text-capitalize me-2"
                      href="https://www.instagram.com/"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      className="footer__link text-capitalize me-2"
                      href="https://www.youtube.com/"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} className="contact__right py-2">
              <Row className="my-2 ">
                <h2 className="contact__left-header text-uppercase fs-3 my-2">
                  Send Us An Email
                </h2>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="Customer service">Customer service</option>
                      <option value="Webmaster">Webmaster</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex deserunt."
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <MainFooter />
    </>
  );
}

export default Contact;
