import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
  const storedProducts = localStorage.getItem("wishlist");
  const products = storedProducts ? JSON.parse(storedProducts) : [];
  return (
    <>
      <section className="products ">
        <Container>
          <Table striped className="products__table my-2">
            <thead>
              <tr>
                <th className="text-capitalize">#</th>
                <th className="text-capitalize"></th>
                <th className="text-capitalize">product name</th>
                <th className="text-capitalize">price</th>
                <th className="text-capitalize text-center">actions</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <th scope="row">
                      <FontAwesomeIcon
                        className="table__delete-icon"
                        icon={faCircleXmark}
                      />
                    </th>
                    <td>
                      <Image src={product.image} className="table__img" />
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
                        <Button variant="warning" className="mx-1">
                          <Link
                            className="text-dark"
                            to={`/dashboard/edit/${product.id}`}
                          >
                            Edit
                          </Link>
                        </Button>
                        <Button variant="danger" className="mx-1">
                          Delete
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
    </>
  );
}
