import Swal from "sweetalert2";
import { useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtl/slices/product-slice";
import MainNav from "../../component/MainNav";
import SpinnerData from "../../component/Spinner";
import DashNav from "../component/DashNav";

function Dashboard() {
  const products = useSelector((state) => state.products.products) || [];
  const isLoading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const deleteProduct = (productId) => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => dispatch(fetchProducts()));
  };

  const deleteItem = (product) => {
    Swal.fire({
      title: `Are you sure to delete ${product.title}`,
      icon: "warning",
      confirmButtonText: "delete",
      input: "checkbox",
      inputValue: 0,
      inputPlaceholder: "I agree with the terms and conditions",
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      },
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        deleteProduct(product.id);
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <SpinnerData />
      ) : (
        <main>
          <MainNav />
          <DashNav />
          <section className="breadcrumb-section py-3">
            <Container className="text-center">
              <h1 className="main-head text-uppercase text-center">Products</h1>
              <Breadcrumb>
                <Breadcrumb.Item active>
                  <Link
                    className="text-decoration-underline text-black"
                    to={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>All Products</Breadcrumb.Item>
              </Breadcrumb>
            </Container>
          </section>

          <section className="products dashboard my-5">
            <div className="dashboard__container">
              <Table striped className="products__table dashboard__table my-2">
                <thead>
                  <tr>
                    <th className="text-capitalize">id</th>
                    <th className="text-capitalize">product name</th>
                    <th className="text-capitalize">price</th>
                    <th className="text-capitalize text-center">actions</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td className="fw-bold">
                          <p>{product.title}</p>
                          <p className="text-secondary mb-0">
                            {product.category}
                          </p>
                        </td>
                        <td className="text-danger fw-bold">
                          ${Number(product.price).toFixed(2)}
                        </td>
                        <td>
                          <div className=" dashboard__btns text-center">
                            <Button variant="warning">
                              <Link
                                className="text-dark"
                                to={`/dashboard/edit/${product.id}`}
                              >
                                Edit
                              </Link>
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => {
                                deleteItem(product);
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
export default Dashboard;
