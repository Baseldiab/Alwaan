import { Accordion, Col, Container, Figure, Row } from "react-bootstrap";
import MainFooter from "../component/Main-Footer";
import "./about.css";
import MainButton from "../component/Main-button";

function AboutUs() {
  const accordines = [
    {
      index: 0,
      header: "Customer Service",
    },
    {
      index: 1,
      header: "Online Consultation",
    },
    {
      index: 2,
      header: "Sales Management",
    },
  ];

  const awards = [
    {
      index: 0,
      src: "images/awards-1.png",
      text: "Winner Seo Master MAGT Smart Start Award 2020",
    },
    {
      index: 1,
      src: "images/awards-2.png",
      text: "Top Social Media Agencies Next Partner 2021",
    },
    {
      index: 2,
      src: "images/awards-3.png",
      text: "5 Fastest Growing Abstract Solution Providers 2022",
    },
    {
      index: 3,
      src: "images/awards-4.png",
      text: "National Excellence Agencie Award Winner 2023",
    },
  ];
  return (
    <>
      <header className="breadcrumb-section py-3">
        <Container>
          <h1 className="text-uppercase text-center">About us</h1>
        </Container>
      </header>

      <section className="about-section1 my-5">
        <Container>
          <h2 className="about-section1-header">
            We’re Devoted Marketing <br /> Consultants Helping Your Business
            Grow
          </h2>
          <p className="about-section1-text">
            Our online ecommerce website offers a wide range of products for
            convenient shopping. Secure payment options and user-friendly
            interface ensure a seamless experience.
          </p>

          <Figure className="mt-5 mx-auto">
            <Figure.Image
              alt="about image"
              src={"images/about-section-1.jpg"}
              rounded
            />
          </Figure>
        </Container>
      </section>

      <section className="service-section my-5">
        <Container>
          <Row className="align-items-center">
            <Col sm={12} md={6}>
              <h3 className="service__header">
                We Provide Continuous & Kind Service for Customers
              </h3>

              <Accordion className="mt-4" defaultActiveKey={["0"]} alwaysOpen>
                {accordines.map((item) => {
                  return (
                    <Accordion.Item key={item.index} eventKey={item.index}>
                      <Accordion.Header>{item.header}</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit eiusamet, consectetur adipiscing
                        elit, sed do eius mod tempor incididunt ut labore et
                        dolore magna aliqua. Venenatis tell us in metus
                        vulputate eu scelerisque felis. Vel pretium vulp.
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Col>
            <Col sm={12} md={6}>
              <Figure className="mb-0">
                <Figure.Image
                  className="mb-0"
                  alt="about image"
                  src={"images/about-service.jpg"}
                  rounded
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="boost-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col sm={12} md={6}>
              <Figure className="mb-0">
                <Figure.Image
                  className="mb-0"
                  alt="about image"
                  src={"images/about-boost.jpg"}
                  rounded
                />
              </Figure>
            </Col>
            <Col sm={12} md={6}>
              <h3 className="service__header my-2">
                We Boost Our Clients’ Bottom Line by Optimizing Their Growth
                Potential
              </h3>
              <p className="secondary-text my-4">
                Our strategic marketing solutions are designed to boost our
                clients' visibility and reach in their target markets. Through
                targeted advertising campaigns and tailored marketing
                strategies, we help our clients increase their customer base and
                drive sales. Our team of experts analyzes market trends and
                consumer behavior to develop effective strategies that maximize
                our clients' ROI.
              </p>
              <MainButton variant={"dark"} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="awards-section py-5">
        <Container className="mx-auto">
          <h3 className="service__header text-center my-3">Awards</h3>
          <Row>
            {awards.map((award) => {
              return (
                <Col
                  lg={3}
                  sm={6}
                  xm={12}
                  key={award.index}
                  className="text-center my-3"
                >
                  <Figure className="award__figure mb-0 mx-auto">
                    <Figure.Image
                      className="mb-0"
                      alt="about image"
                      src={award.src}
                      rounded
                    />
                  </Figure>
                  <p className="secondary-text">{award.text}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <MainFooter />
    </>
  );
}

export default AboutUs;
