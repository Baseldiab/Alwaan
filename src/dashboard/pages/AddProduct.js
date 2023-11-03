import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import MainNav from "../../component/MainNav";
import MainFooter from "../../component/Main-Footer";

function AddNewProduct() {
  let navigate = useNavigate();
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState([]);

  const getCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    getCategory();
  }, []);

  const formatSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", {
        title,
        price,
        description,
        category,
        image,
      })
      .then((data) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
      });
  };

  return (
    <main>
      <MainNav />
      <section className="breadcrumb-section py-3">
        <Container>
          <h1 className="main-head text-uppercase text-center">
            Add new product
          </h1>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link
                className="text-decoration-underline text-black"
                to={"/dashboard"}
              >
                Dashboard
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <span>Add New Product</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className="addProduct my-5">
        <Container>
          <Form className="addProduct-form" onSubmit={formatSubmit}>
            <FloatingLabel
              controlId="floatingTitle"
              label="Product Name"
              className="form__title mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Product Name"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPrice"
              label="Price"
              className="form__price mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Price in Dollar"
                min="0"
                step="any"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingDescription"
              label="Description"
              className="form__description mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Description"
                style={{ height: "100px" }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FloatingLabel>

            <Form.Select
              aria-label="Default select example"
              className="form__category mb-3"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Choose your category</option>
              {categories.map((category) => (
                <option
                  className="text-capitalize"
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </Form.Select>

            <FloatingLabel
              controlId="floatingImage"
              label="Product Image Url"
              className="form__image mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => setImage(e.target.value)}
                placeholder="Product Image Url"
                required
              />
            </FloatingLabel>

            <Row className="form__submit-btn mx-0">
              <Col xs={12} sm={4} className="ps-0">
                <Button className="w-100" variant="primary" type="submit">
                  Confirm
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>

      <MainFooter />
    </main>
  );
}
export default AddNewProduct;
