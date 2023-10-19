// import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import ProductState, { fetchProducts } from "../../atoms/ProductState";
import { useRecoilState } from "recoil";

function Dashboard() {
  const [products, setProducts] = useRecoilState(ProductState);

  useEffect(() => {
    fetchProducts(setProducts);
  }, [setProducts]);

  const deleteProduct = (productId) => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => fetchProducts(setProducts));
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
      <nav aria-label="breadcrumb" className="bg-body-tertiary py-4">
        <div className="container">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link className="text-decoration-underline text-black" to={"/"}>
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              All Products
            </li>
          </ol>
        </div>
      </nav>
      {/* ============================ */}
      <section className="products ">
        <table className="products__table table table-striped container my-2">
          <thead>
            <tr>
              <th className="text-capitalize" scope="col">
                id
              </th>
              <th className="text-capitalize" scope="col">
                product name
              </th>
              <th className="text-capitalize" scope="col">
                product Category
              </th>
              <th className="text-capitalize" scope="col">
                price
              </th>
              <th className="text-capitalize text-center" scope="col">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="table-body align-middle">
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td className="fw-bold">{product.title}</td>
                  <td className="fw-bold">{product.category}</td>
                  <td className="text-danger fw-bold">
                    {Number(product.price).toFixed(2)}
                  </td>
                  <td>
                    <div className="table-btns">
                      <button type="button" className="btn btn-warning mx-1">
                        <Link
                          className="text-dark"
                          to={`/dashboard/edit/${product.id}`}
                        >
                          Edit
                        </Link>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        onClick={() => {
                          deleteItem(product);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
export default Dashboard;
