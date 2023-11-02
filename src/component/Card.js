import { Link } from "react-router-dom";
import "./card.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { addToCart } from "../rtl/slices/Cart-slice";
import { addToWish } from "../rtl/slices/Wish-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "../Auth";
import Swal from "sweetalert2";

function CardProduct(props) {
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleAddToWish = () => {
    if (auth.user.length) {
      dispatch(addToWish(props));
    } else {
      Swal.fire({
        title:
          "<strong>SIGN IN TO SYNC YOUR SAVED ITEMS ACROSS ALL YOUR DEVICES</strong>",
        icon: "warning",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "<a class= 'text-light' href='/login' >SIGN IN</a>",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "CONTINUE SHOPPING",
        cancelButtonAriaLabel: "Thumbs down",
      });
    }
  };

  return (
    <Card className="h-100 card-section overflow-hidden">
      <Link
        className="card__img-link img-container "
        to={`/products/productId=${props.id}`}
      >
        <Card.Img
          className="card__front-img"
          variant="top"
          src={props.image}
          alt={props.title}
        />
      </Link>
      <Card.ImgOverlay
        className="card__back-img w-100 h-100"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))`,
        }}
      >
        <Link className="text-light" to={`/products/productId=${props.id}`}>
          <Card.Text className="h-75 overflow-hidden">
            {props?.description?.slice(0, 300) + "..."}
          </Card.Text>
        </Link>
        <div className="card__btns h-25">
          <Button
            className=" button-card add-cart add-cart-products  my-1"
            variant="light"
            onClick={() => dispatch(addToCart(props))}
          >
            Add to Cart
          </Button>
          <Button
            className=" button-card add-wish add-cart-singleProduct  my-1"
            variant="outline-light"
            onClick={handleAddToWish}
          >
            Add to Wish
          </Button>
        </div>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>
          <Link
            className="text-dark text-capitalize"
            to={`/products/productId=${props.id}`}
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
