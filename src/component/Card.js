import { Link } from "react-router-dom";
import "./card.css";
import Card from "react-bootstrap/Card";

function CardProduct(props) {
  return (
    <Card className="h-100">
      <Link
        className="card__img-link img-container"
        to={`/products/productId=${props.id}`}
      >
        <Card.Img variant="top" src={props.image} alt={props.title} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link
            className="text-dark text-capitalize"
            to={`products/productId=${props.id}`}
          >
            {props.title}
          </Link>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="border-0 bg-transparent">
        <Card.Text className=" m-0 fw-medium text-secondary text-capitalize ">
          {props.category}
        </Card.Text>
        <Card.Text className=" m-0 text-danger fw-bold">
          ${Number(props.price).toFixed(2)}
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}

export default CardProduct;
