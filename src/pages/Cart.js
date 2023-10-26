import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNav from "../component/MainNav";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../rtl/slices/Cart-slice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  console.log(totalPrice);
  const handleDeleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  return (
    <main>
      <MainNav />
      <section className="breadcrumb-section py-3">
        <Container>
          <h1 className="text-uppercase text-center">My Cart</h1>
        </Container>
      </section>

      <section className="products ">
        <Container>
          <Table striped className="products__table my-2">
            <thead>
              <tr>
                <th className="text-capitalize"></th>
                <th className="text-capitalize"></th>
                <th className="text-capitalize">product name</th>
                <th className="text-capitalize">price</th>
                <th className="text-capitalize">quantity</th>
                <th className="text-capitalize text-center">total</th>
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
                        onClick={() => handleDeleteItem(product.id)}
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
                    <td className="quantity">
                      <form>
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          defaultValue={Number(product.quantity).toFixed(2)}
                          className="cart__box border rounded border-dark text-dark  fw-bold text-center"
                        />
                      </form>
                    </td>
                    <td className="totalItem-price fw-bold">
                      ${Number(product.price * product.quantity).toFixed(2)}
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
