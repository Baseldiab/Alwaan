import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";

function AddNewProduct() {
  let navigate = useNavigate();
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);

  const formatSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/products", {
        title,
        price,
        description,
        category,
        image,
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
      <div className="bg-body-tertiary py-3">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link
                className="text-decoration-underline text-black"
                to={"/dashboard"}
              >
                Dashboard
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add New Product</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>

      <section className="addProduct container my-3">
        <form className="addProduct-form" onSubmit={formatSubmit}>
          <div className="form__title mb-3 form-floating ">
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Product Name"
              required
            />
            <label htmlFor="floatingTitle">Product Name</label>
          </div>

          <div className="form__price mb-3 form-floating ">
            <input
              type="number"
              min="0"
              step="any"
              className="form-control"
              id="inputPrice"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
            />
            <label htmlFor="inputPrice">Price</label>
          </div>

          <div className="form__description mb-3 form-floating ">
            <textarea
              className="form-control"
              placeholder="Description your product"
              id="floatingDescription"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="floatingDescription">Description</label>
          </div>

          <div className="form__category mb-3 form-floating ">
            <input
              type="text"
              className="form-control"
              id="floatingCategory"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Product Category"
              required
            />
            <label htmlFor="floatingCategory">Product Category</label>
          </div>

          <div className="form__image mb-3 form-floating ">
            <input
              type="text"
              className="form-control"
              id="floatingImage"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Product Image Url"
              required
            />
            <label htmlFor="floatingImage">Product Image Url</label>
          </div>

          <div className="form__submit-btn row mx-0">
            <button className="btn btn-primary col-sm-3 col-12" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default AddNewProduct;
