import { useDispatch, useSelector } from "react-redux";
import Header from "./Header-section";
import { useEffect } from "react";
import { fetchProducts } from "../rtl/slices/product-slice";
import CardProduct from "./Card";
import { Col, Container, Row } from "react-bootstrap";

function Bestsellers() {
  const products = useSelector((state) => state.products.products) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="bestsellers-section my-5">
      <Container>
        <Header props={"our bestsellers"} />
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={5}
          className="g-1 my-4 justify-content-center"
        >
          {products.slice(0, 5).map((product) => (
            <Col key={product.id}>
              <CardProduct
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                price={product.price}
                description={product.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Bestsellers;
