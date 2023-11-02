import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import "./footer.css";
import MainButton from "./Main-button";

function MainFooter() {
  return (
    <>
      <section className="subscribe-section">
        <Container>
          <Row className=" py-3 align-items-center justify-content-lg-between justify-content-center">
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
                      classNaem="subscripe__input"
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
      {/* <Footer></Footer> */}
    </>
  );
}

export default MainFooter;
