import {
  faCartArrowDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteItem } from "../rtl/slices/Wish-slice";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "../component/MainNav";
import { addToCart } from "../rtl/slices/Cart-slice";

export default function Wish() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wish);

  const handleDelete = (productId) => {
    dispatch(deleteItem(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <main id="wish">
      <MainNav />
      <section className="breadcrumb-section py-3">
        <Container>
          <h1 className="text-uppercase text-center">Wishlist</h1>
        </Container>
      </section>

      <section className="products my-5">
        <Container>
          <Table striped className="products__table my-2">
            <thead>
              <tr>
                <th className="text-capitalize"></th>
                <th className="text-capitalize"></th>
                <th className="text-capitalize">product name</th>
                <th className="text-capitalize">price</th>
                <th className="text-capitalize text-center">actions</th>
              </tr>
            </thead>
            <tbody className="align-middle table-body">
              {products.map((product) => {
                return (
                  <tr
                    key={product.id}
                    className="wish-products table__products"
                  >
                    <th scope="row" className="table__deleteIem">
                      <Button
                        onClick={() => handleDelete(product.id)}
                        className="border-0 bg-transparent"
                      >
                        <FontAwesomeIcon
                          className="table__delete-icon deleteBtn"
                          icon={faCircleXmark}
                        />
                      </Button>
                    </th>
                    <td>
                      <Link to={`/products/productId=${product.id}`}>
                        <Image
                          src={product.image}
                          alt="Product image"
                          className="table__img mx-auto"
                        />
                      </Link>
                    </td>
                    <td className="fw-bold">
                      <p>{product.title}</p>
                      <p className="text-secondary mb-0">{product.category}</p>
                    </td>
                    <td className="text-danger fw-bold">
                      ${Number(product.price).toFixed(2)}
                    </td>
                    <td>
                      <div className="table-btns">
                        <Button
                          variant="primary"
                          className="mx-1"
                          onClick={() => handleAddToCart(product)}
                        >
                          <FontAwesomeIcon icon={faCartArrowDown} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </section>
    </main>
  );
}
