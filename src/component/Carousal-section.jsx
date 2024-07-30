import {
  Button,
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
import MainButton from "./Main-button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

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

  const figures = [
    {
      index: 0,
      src: "images/elementor1-accessories.jpg",
      button: "ACCESSORIES",
    },
    {
      index: 1,
      src: "images/elementor-MEN.jpg",
      button: "Men",
    },
    {
      index: 2,
      src: "images/elementor-WOMEN.jpg",
      button: "women",
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
    from: { opacity: 0, transform: "translateY(170px)"},
    enter: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  }); 
  return (
    <>
      <section className="carousel-section mx-auto">
       
        <Swiper
        spaceBetween={30}
        effect={"fade"}
          // loop={true}
          speed={600}
          parallax={true}
        centeredSlides={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper container position-relative"
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
      >
        {captions.map((caption) => {
          return (
            <SwiperSlide
             key={caption.index}
              className="swiper__slide relative"
            >
            <Image
                  text="First slide"
                  src={caption.imagePath}
                  alt={`Slide ${caption.index}`}
                  className="carousel__img slide-image "
              />
              {fadeUpTransitions((styles, item) => (
                    <animated.div style={styles} className="ps-4 swiper__text">
                      <h2  data-swiper-parallax="-300" className="title slide-text text-uppercase text-white">{item.text}</h2>
                      <h2 ata-swiper-parallax="-200" className="slide-head text-white subtitle">{item.head}</h2>
                      <div className="text" data-swiper-parallax="-100">
                      <MainButton variant="primary" />
           
          </div>
                    </animated.div>
                  ))}
             
          
                     
         
         

              {/* {fadeUpTransitions((styles, item) => (
                    <animated.div style={styles} className="swiper__text">
                      <h2 className="slide-text text-uppercase">{item.text}</h2>
                      <h2 className="slide-head">{item.head}</h2>
                      <MainButton variant="primary" />
                    </animated.div>
                  ))} */}
            </SwiperSlide>
          );
        })}

        {/* <div className="max-sm:hidden absolute top-1/2 left-1 transform -translate-y-1/2 z-40">
          <Button title="go back" className="button-prev !h-8 !min-w-8 !W-8 !p-0 !rounded-full">
            <SlArrowLeft className="text-xl text-black" />
          </Button>
        </div>
        <div className="max-sm:hidden absolute top-1/2 right-1 transform -translate-y-1/2 z-40">
          <Button title="go forward" className="button-next !rounded-full !h-8 !min-w-8 !W-8 !p-0">
            <SlArrowRight className="text-xl text-black" />
          </Button>
        </div> */}
      </Swiper>
      </section>

      <section className="elementor-section mx-auto my-4">
        <Container>
          <Row>
            {figures.map((item) => {
              return (
                <Col
                  key={item.index}
                  className="elementor__item overflow-hidden"
                  md={4}
                  sm={12}
                  xm={12}
                >
                  <Figure className="elementor__figure position-relative m-0 w-100">
                    <Figure.Image
                      alt="accessories image"
                      src={item.src}
                      className="elementor__img m-0 w-100"
                    />
                    <Figure.Caption>
                      <Link to="/products">
                        <Button
                          variant="outline-primary"
                          className="elementor__btn  rounded-0 text-uppercase"
                        >
                          {item.button}
                        </Button>
                      </Link>
                    </Figure.Caption>
                  </Figure>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
