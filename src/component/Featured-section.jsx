import { Col, Container, Nav, Row } from "react-bootstrap";
import Header from "./Header-section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, filterProducts } from "../rtl/slices/product-slice";
import SpinnerData from "./Spinner";
import CardProduct from "./Card";

function Featured() {
  const products = useSelector((state) => state.products.products) || [];
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("electronics");

  const [categories, setCategory] = useState([]);
  const getCategory = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    getCategory();
    dispatch(filterProducts("electronics"));
  }, [dispatch]);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const filterProduct = (value = "electronics") => {
    dispatch(filterProducts(value));
    setSelectedCategory(value);
  };

  return (
    <>
      {isLoading ? (
        <SpinnerData />
      ) : (
        <>
          <section className="featured-section my-5">
            <Container>
              <Header props={"featured products"} />
              <Nav variant="underline" className="justify-content-center">
                {categories.map((category) => {
                  return (
                    <Nav.Item key={category}>
                      <Nav.Link
                        className={`featured__link text-black text-capitalize ${
                          selectedCategory === category ? "active" : ""
                        }`}
                        eventKey={category}
                        onClick={() => filterProduct(category)}
                      >
                        {category}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
              <Row
                xs={1}
                sm={2}
                md={3}
                lg={4}
                className="g-4 mt-1 mb-4 justify-content-center"
              >
                {filteredProducts.slice(0, 4).map((product) => (
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
        </>
      )}
    </>
  );
}

export default Featured;
