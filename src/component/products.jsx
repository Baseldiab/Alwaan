// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardProduct from "./Card";
import "./products.css";
import { Container, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  filterProducts,
  searchProducts,
} from "../rtl/slices/product-slice";
import SpinnerData from "./Spinner";
import MainNav from "./MainNav";
import MainFooter from "./Main-Footer";

function Products() {
  const products = useSelector((state) => state.products.products) || [];
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getCategory = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    getCategory();
  }, [dispatch]);

  const filterProduct = (value) => {
    if (value === "all") {
      dispatch(fetchProducts());
    } else {
      dispatch(filterProducts(value));
    }
    setSelectedCategory(value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  return (
    <>
      {isLoading ? (
        <SpinnerData />
      ) : (
        <>
          <MainNav />
          <Container>
            <Row className="product-cards my-4">
              <Col md={3} className="left-side d-md-inline d-none">
                <Form
                  className=" w-100"
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <FormControl
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                </Form>
                <h3 className="left-side__head my-1">categories</h3>

                <ul className="left-side__list list-unstyled ms-2">
                  <li
                    className=" d-flex justify-content-between text-capitalize my-1 align-items-center"
                    onClick={() => filterProduct("all")}
                  >
                    All
                  </li>
                  {categories.map((category) => {
                    return (
                      <div key={category}>
                        <li
                          className="d-flex justify-content-between text-capitalize my-1 align-items-center"
                          onClick={() => filterProduct(category)}
                        >
                          {category}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </Col>

              <Col xs={12} md={9} className="right-side col-md-9 col-12">
                <div className="select-category ">
                  <Form className="product__filter">
                    <Form.Label
                      className="select__label text-capitalize   ms-0 me-2"
                      htmlFor="categoryName"
                    >
                      choose your category
                    </Form.Label>
                    <select
                      className="p-1"
                      id="categoryName"
                      value={selectedCategory}
                      onChange={(e) => filterProduct(e.target.value)}
                    >
                      <option className="text-capitalize" value="all">
                        All Products
                      </option>
                      {categories.map((category) => (
                        <option
                          className="text-capitalize"
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      ))}
                    </select>
                  </Form>
                  <h5 className="right-side__head my-1">
                    {products.length} product is found
                  </h5>
                </div>

                <Row xs={1} sm={2} lg={3} className="g-4 my-2">
                  {products.map((product) => (
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
              </Col>
            </Row>
          </Container>
          <MainFooter />
        </>
      )}
    </>
  );
}

export default Products;
