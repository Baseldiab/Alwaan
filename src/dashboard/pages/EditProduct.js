import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";

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
      <div className="bg-body-tertiary py-3">
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
      </div>

      <section className="editProduct container my-3">
        <form className="editProduct-form" onSubmit={formatSubmit}>
          <div className="form__title mb-3 ">
            <label className="form-label" htmlFor="floatingTitle">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              defaultValue={singleProduct.title}
              required
            />
          </div>

          <div className="form__price mb-3 ">
            <label className="form-label" htmlFor="inputPrice">
              Product Price
            </label>
            <input
              type="number"
              min="0"
              step="any"
              className="form-control"
              id="inputPrice"
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={singleProduct.price}
              required
            />
          </div>

          <div className="form__description mb-3 ">
            <label className="form-label" htmlFor="floatingDescription">
              Product Description
            </label>
            <textarea
              className="form-control"
              // placeholder="Description your product"
              id="floatingDescription"
              defaultValue={singleProduct.description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form__category mb-3 ">
            <label className="form-label" htmlFor="floatingCategory">
              Product Category
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingCategory"
              onChange={(e) => setCategory(e.target.value)}
              //   placeholder="Product Category"
              defaultValue={singleProduct.category}
              required
            />
          </div>

          <div className="form__image mb-3">
            <label className="form-label" htmlFor="floatingImage">
              Product Image Url
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingImage"
              onChange={(e) => setImage(e.target.value)}
              //   placeholder="Product Image Url"
              defaultValue={singleProduct.image}
              required
            />
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
export default EditProduct;
