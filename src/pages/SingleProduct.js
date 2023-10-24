import "./singleProduct.css";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom/dist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

function SingleProduct() {
  let params = useParams();

  const filterParams = params.productId.match(/\d+/g).map(Number);

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/products/${filterParams}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [filterParams]);

  return (
    <main>
      <section className="breadcrumb-section py-3">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link className="text-decoration-underline text-black" to={"/"}>
                <span className="me-1">
                  <FontAwesomeIcon icon={faHouseChimney} />
                </span>
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <Link
                className="text-decoration-underline text-black"
                to={"/products"}
              >
                Products
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{singleProduct.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className="singleProduct my-5">
        <Container>
          <Row>
            <Col xs={12} md={4} className="singleProduct__left">
              <figure className="img-container">
                <Image src={singleProduct.image} thumbnail />
              </figure>
            </Col>
            <Col xs={12} md={8} className="singleProduct__right">
              <h1 className="singleProduct__name fw-bolder">
                {singleProduct.title}
              </h1>

              <h4 className="singleProduct__price fw-medium my-2">
                ${Number(singleProduct.price).toFixed(2)}
              </h4>
              <p className="singleProduct__availability my-2">In Stock</p>
              <div className="singleProduct__description my-2">
                <h4 className="singleProduct__description-head my-3 text-capitalize">
                  description
                </h4>
                <div className="singleProduct__description-text">
                  {singleProduct.description}
                </div>
              </div>
              <div className="singleProduct__buttons my-4">
                <Button
                  className="add-cart add-cart-singleProduct me-2 my-1"
                  variant="primary"
                >
                  Add to Cart
                </Button>
                <Button
                  className="add-wish add-cart-singleProduct me-2 my-1"
                  variant="outline-primary"
                >
                  Add to Wish
                </Button>
              </div>
              <figure class="border-bottom border-black-50 py-2">
                <Image
                  class="my-3 w-100"
                  src={"/images/trustseal_499x.gif"}
                  alt="trustseal_iamge "
                />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
export default SingleProduct;
