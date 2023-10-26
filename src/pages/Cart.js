import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNav from "../component/MainNav";
import { useDispatch, useSelector } from "react-redux";
import {
  calcTotalPrice,
  deleteCartItem,
  onChangeQuantity,
} from "../rtl/slices/Cart-slice";
import { useState } from "react";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  dispatch(calcTotalPrice());
  const totalPrice = localStorage.getItem("totalPrice");

  const handleDeleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  // for modal component
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main id="cart">
      <MainNav />
      <section className="breadcrumb-section py-3">
        <Container>
          <h1 className="text-uppercase text-center">My Cart</h1>
        </Container>
      </section>

      <section className="products table-section my-4">
        <Row className="cart__cards">
          <Col xs={12} xl={9}>
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
                        <p className="text-secondary mb-0">
                          {product.category}
                        </p>
                      </td>
                      <td className="text-danger fw-bold">
                        ${Number(product.price).toFixed(2)}
                      </td>
                      <td className="quantity">
                        <form
                          className="text-center m-0 w-100"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <input
                            className="cart__box border rounded border-dark text-dark  fw-bold text-center "
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            defaultValue={product.quantity}
                            onChange={(e) =>
                              dispatch(
                                onChangeQuantity({
                                  productId: product.id,
                                  qty: e.target.value,
                                })
                              )
                            }
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
          </Col>
          <Col xs={12} xl={3} className="sub-totalPrice mt-5">
            <div className="sub-totalPrice__head px-3 pb-5 border border-3 position-relative border-primary container">
              <h2 className="text-uppercase sub-totalPrice__h2">cart total</h2>
              <table className="sub-totalPrice__table w-75">
                <tbody>
                  <tr>
                    <td className="sub-totalPrice__text main-text  me-2">
                      subtotal
                    </td>
                    <td className="sub-totalPrice__price main-text fw-bold">
                      {Number(totalPrice).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>

              <Button
                variant="outline-primary"
                className="sub-totalPrice__button mt-3  w-75 d-block mx-auto"
                onClick={handleShow}
              >
                PROCEED TO CHECKOUT
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="modal-title text-primary">
                    successfully placed the order
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Thank for ordering. We received your order and will begin
                  processing it soon.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
}
