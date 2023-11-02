import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainButton({ variant }) {
  return (
    <Link to="/products">
      <Button variant={variant} className="main-button text-uppercase mt-2">
        Shop Now
      </Button>
    </Link>
  );
}

export default MainButton;
