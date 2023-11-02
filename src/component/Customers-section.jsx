import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "./customers.css";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Customers() {
  const captions = [
    {
      image: "/images/customer1.jpg",
      name: "Jane Doe",
      job: "Online Marketer",
      index: 0,
    },
    {
      image: "/images/customer2.jpg",
      name: "Leo Messi",
      job: "Football player",
      index: 1,
    },
    {
      image: "/images/customer3.jpg",
      name: "Shikabala",
      job: "Football player",
      index: 2,
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="customers-section my-5 position-relative">
      <Carousel
        className="customers__carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {captions.map((caption) => {
          return (
            <Carousel.Item key={caption.index} className="customers__content ">
              <h2 className="customers__main-head text-light mb-2">
                CUSTOMERS REVIEWS
              </h2>
              <FontAwesomeIcon
                className="customers-icon my-2 text-light"
                icon={faQuoteRight}
              />
              <p className="customers__text secondary-text fw-medium my-1">
                A faucibus ullamcorper metus class suspendisse scelerisque dui a
                eget amet pulvinar purus elementum scelerisque massa cursus
                dolor turpis facilisis a adipiscing penatibus.Id sed molestie mi
                adipiscing bibendum elit a adipiscing ad malesuada a platea
                suspendisse varius a magnis taciti consectetur hac a malesuada
                ante bibendum.
              </p>
              <div className="customers__information d-flex justify-content-center align-items-center my-4">
                <Image
                  src={caption.image}
                  alt="person image"
                  className="customers__img rounded-circle mx-2"
                />
                <div className="customers__description text-start mx-2">
                  <p className="customers__name customers__text fw-bold text-start mx-0 w-100">
                    {caption.name}
                  </p>
                  <p className="customers__job mx-0">{caption.job}</p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Customers;
