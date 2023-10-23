import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Button, Col, Container, Form, Row } from "react-bootstrap";

function EditProduct() {
  let params = useParams();
  let navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const getProduct = () => {
    fetch(`http://localhost:3000/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  };

  useEffect(() => {
    getProduct();
  });

  const formatSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/products/${params.productId}`, {
        title: title || singleProduct.title,
        price: price || singleProduct.price,
        description: description || singleProduct.description,
        category: category || singleProduct.category,
        image: image || singleProduct.image,
      })
      .then((data) => {
        console.log(data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
      });
  };

  return (
    <>
      <section className="breadcrumb-section bg-body-tertiary py-3">
        <Container>
          <Breadcrumb>
            {/* <ol className="breadcrumb m-0"> */}
            <Breadcrumb.Item>
              <Link
                className="text-decoration-underline text-black"
                to={"/dashboard"}
              >
                Dashboard
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Edit product</Breadcrumb.Item>
            <Breadcrumb.Item active>{singleProduct.title}</Breadcrumb.Item>
            {/* </ol> */}
          </Breadcrumb>
        </Container>
      </section>

      <section className="editProduct container my-3">
        <Container>
          <Form className="editProduct-form" onSubmit={formatSubmit}>
            <Form.Group className="form__title mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="floatingTitle">Product Name</Form.Label>
              <Form.Control
                id="floatingTitle"
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                defaultValue={singleProduct.title}
                required
              />
            </Form.Group>

            <Form.Group className="form__price mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="inputPrice">Product Name</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="any"
                id="inputPrice"
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={singleProduct.price}
                required
              />
            </Form.Group>

            <Form.Group
              className="form__description mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label htmlFor="floatingDescription">
                Product Name
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="floatingDescription"
                defaultValue={singleProduct.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="form__category mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label htmlFor="floatingCategory">Product Name</Form.Label>
              <Form.Control
                type="text"
                id="floatingCategory"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={singleProduct.category}
                required
              />
            </Form.Group>

            <Form.Group className="form__image mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="floatingImage">Product Name</Form.Label>
              <Form.Control
                type="text"
                id="floatingImage"
                onChange={(e) => setImage(e.target.value)}
                defaultValue={singleProduct.image}
                required
              />
            </Form.Group>

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
    </>
  );
}
export default EditProduct;
