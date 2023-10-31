import {
  Button,
  Carousel,
  Col,
  Container,
  Figure,
  Image,
  Row,
} from "react-bootstrap";
import "./carousal.css";
import { Link } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { useState } from "react";
import { useEffect } from "react";

export default function Carousal() {
  const fullYear = new Date().getFullYear();
  const month = new Date().toLocaleString("default", { month: "long" });

  const captions = [
    {
      text: "Men's collection " + month + " " + fullYear,
      head: "Get Up to 50% Off\nSelect Styles.",
      imagePath: "images/slider1.jpg",
      index: 0,
    },
    {
      text: "New women clothing",
      head: `Autumn Jeckets\nCollection in ${fullYear}.`,
      imagePath: "images/slider2.jpg",
      index: 1,
    },
    {
      text: "Top weakly seller",
      head: `Trending collection ${fullYear}.`,
      imagePath: "images/slider3.jpg",
      index: 2,
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === captions.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [captions.length]);

  const fadeUpTransitions = useTransition(captions[currentSlideIndex], {
    from: { opacity: 0, transform: "translateY(200px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });
  return (
    <>
      <section className="carousel-section mx-auto">
        <Carousel
          className="text-center"
          activeIndex={currentSlideIndex}
          onSelect={(index) => setCurrentSlideIndex(index)}
        >
          {captions.map((caption) => {
            return (
              <Carousel.Item key={caption.index}>
                <Image
                  text="First slide"
                  src={caption.imagePath}
                  alt={`Slide ${caption.index}`}
                  className="carousel__img slide-image"
                />
                <Carousel.Caption className="slide-content">
                  {fadeUpTransitions((styles, item) => (
                    <animated.div style={styles} className="slide-content">
                      <h2 className="slide-text text-uppercase">{item.text}</h2>
                      <h2 className="slide-head">{item.head}</h2>
                      <Link to="/products">
                        <Button
                          variant="primary"
                          className="main-button text-uppercase mt-2"
                        >
                          Shop Now
                        </Button>
                      </Link>
                    </animated.div>
                  ))}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>

      <section className="elementor-section mx-auto my-4">
        <Container>
          <Row>
            <Col
              className="elementor__item overflow-hidden"
              md={4}
              sm={12}
              xm={12}
            >
              <Figure className="elementor__figure position-relative m-0 w-100">
                <Figure.Image
                  alt="accessories image"
                  src={"images/elementor1-accessories.jpg"}
                  className="elementor__img m-0 w-100"
                />
                <Figure.Caption>
                  <Link to="/products">
                    <Button
                      variant="outline-primary"
                      className="elementor__btn  rounded-0"
                    >
                      ACCESSORIES
                    </Button>
                  </Link>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col className="elementor__item" md={4} sm={12} xm={12}>
              <Figure className="elementor__figure position-relative m-0 w-100">
                <Figure.Image
                  alt="accessories image"
                  src={"images/elementor-MEN.jpg"}
                  className="elementor__img m-0 w-100"
                />
                <Figure.Caption>
                  <Link to="/products">
                    <Button
                      variant="outline-primary"
                      className="elementor__btn  rounded-0"
                    >
                      ACCESSORIES
                    </Button>
                  </Link>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col className="elementor__item" md={4} sm={12} xm={12}>
              <Figure className="elementor__figure position-relative m-0 w-100">
                <Figure.Image
                  alt="accessories image"
                  src={"images/elementor-WOMEN.jpg"}
                  className="elementor__img m-0 w-100"
                />
                <Figure.Caption>
                  <Link to="/products">
                    <Button
                      variant="outline-primary"
                      className="elementor__btn  rounded-0"
                    >
                      ACCESSORIES
                    </Button>
                  </Link>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
