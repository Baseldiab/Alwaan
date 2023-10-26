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
import { faEnvelope, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareXTwitter,
  faFacebookF,
  faPinterestP,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useDispatch } from "react-redux";
import { addToWish } from "../rtl/slices/Wish-slice";
import MainNav from "../component/MainNav";
import { addToCart } from "../rtl/slices/Cart-slice";

function SingleProduct() {
  const params = useParams();
  const dispatch = useDispatch();

  const filterParams = params.productId.match(/\d+/g).map(Number);

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/products/${filterParams}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [filterParams]);

  return (
    <main>
      <MainNav />
      <section className="breadcrumb-section py-3">
        <h1 className="text-uppercase text-center">product information</h1>
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
          <Row gap={1}>
            <Col xs={12} md={4} className="singleProduct__left ">
              {singleProduct.image && (
                <InnerImageZoom
                  src={singleProduct.image}
                  zoomType="hover"
                  zoomContainerClassName="img-container custom-zoom-container"
                />
              )}
            </Col>
            <Col xs={12} md={8} className="singleProduct__right">
              <h1 className="singleProduct__name fw-bolder">
                {singleProduct.title}
              </h1>

              <h4 className="singleProduct__price fw-medium my-4">
                ${Number(singleProduct.price).toFixed(2)}
              </h4>
              <p className="singleProduct__availability secondary-text my-2">
                In Stock
              </p>
              <div className="singleProduct__description my-4">
                <h4 className="singleProduct__description-head my-2 text-capitalize">
                  description
                </h4>
                <p className="singleProduct__description-text secondary-text ">
                  {singleProduct.description}
                </p>
              </div>
              <div className="singleProduct__buttons my-4">
                <Button
                  className="main-button add-cart add-cart-singleProduct me-2 my-1"
                  variant="primary"
                  onClick={() => dispatch(addToCart(singleProduct))}
                >
                  Add to Cart
                </Button>
                <Button
                  className="main-button add-wish add-cart-singleProduct me-2 my-1"
                  variant="outline-primary"
                  onClick={() => dispatch(addToWish(singleProduct))}
                >
                  Add to Wish
                </Button>
              </div>
              <figure className="singleProduct__trustSeal border-bottom border-black-50 py-2 my-2">
                <Image
                  className="my-3"
                  src={"/images/trustseal_499x.gif"}
                  alt="trustSeal_image "
                />
              </figure>

              <div className="singleProduct__meta">
                <p className="text-capitalize secondary-text ">
                  <span className="fw-medium">vender:</span> alwaan
                </p>
                <p className="text-uppercase secondary-text">
                  <span className="fw-medium">sku:</span> N/A
                </p>
                <div className="text-capitalize secondary-text">
                  <span className="fw-medium">share:</span>
                  <a href="facebook.com" className="secondary-text px-1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="twitter.com" className="secondary-text px-1">
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                  </a>
                  <a
                    href="mailto:baselDiab21@gmail.com"
                    className="secondary-text px-1"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <p className="secondary-text px-1 d-inline-block">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </p>
                  <p className="secondary-text px-1 d-inline-block">
                    <FontAwesomeIcon icon={faTumblr} />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="information my-5">
        <Container>
          <ul
            className="information__buttons nav nav-tabs"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link information__button text-uppercase active"
                id="details-tab"
                data-bs-toggle="tab"
                data-bs-target="#details-tab-pane"
                type="button"
                role="tab"
                aria-controls="details-tab-pane"
                aria-selected="true"
              >
                Product details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link information__button text-uppercase"
                id="shipping-tab"
                data-bs-toggle="tab"
                data-bs-target="#shipping-tab-pane"
                type="button"
                role="tab"
                aria-controls="shipping-tab-pane"
                aria-selected="false"
              >
                shipping & delivery
              </button>
            </li>
          </ul>
          <div className="tab-content my-5" id="myTabContent">
            <div
              className="tab-pane fade show information__details text-start active"
              id="details-tab-pane"
              role="tabpanel"
              aria-labelledby="details-tab"
              tabIndex="0"
            >
              <p className="text-capitalize information__text text-secondary">
                price:
                <span className="information__price fw-bold ms-1">
                  ${Number(singleProduct.price).toFixed(2)}
                </span>
              </p>

              <p className="text-capitalize information__text text-secondary">
                category:
                <span className="information__pages fw-bold ms-1">
                  {singleProduct.category}
                </span>
              </p>
              <p className="text-capitalize information__text text-secondary">
                Availability:
                <span className="information__language fw-bold ms-1">
                  In Stock
                </span>
              </p>
              <p className="text-capitalize information__text text-secondary">
                Last Update:
                <span className="information__date fw-bold ms-1">
                  2 days ago
                </span>
              </p>
            </div>

            <div
              className="tab-pane fade"
              id="shipping-tab-pane"
              role="tabpanel"
              aria-labelledby="shipping-tab"
              tabIndex="0"
            >
              <Row className="information__shipping">
                <Col xs={12} sm={3}>
                  <Image
                    src={"/images/shipping.avif"}
                    className="mx-auto w-100"
                    alt="person image"
                  />
                </Col>
                <Col xs={12} sm={8} className="information__text ">
                  <p className="secondary-text">
                    Vestibulum curae torquent diam diam commodo parturient
                    penatibus nunc dui adipiscing convallis bulum parturient
                    suspendisse parturient a.Parturient in parturient
                    scelerisque nibh lectus quam a natoque adipiscing a
                    vestibulum hendrerit et pharetra fames.Consequat net <br />
                    <br />
                    Vestibulum parturient suspendisse parturient a.Parturient in
                    parturient scelerisque nibh lectus quam a natoque adipiscing
                    a vestibulum hendrerit et pharetra fames.Consequat netus.
                    <br />
                    <br />
                    Scelerisque adipiscing bibendum sem vestibulum et in a a a
                    purus lectus faucibus lobortis tincidunt purus lectus nisl
                    class eros.Condimentum a et ullamcorper dictumst mus et
                    tristique elementum nam inceptos hac vestibulum amet elit
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
export default SingleProduct;
