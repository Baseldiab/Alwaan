import { Link } from "react-router-dom";
import "./card.css";

function Card(props) {
  return (
    <div className="card h-100">
      <Link className="card__img-link" to={`/product/${props.id}`}>
        <img src={props.image} className="card-img-top" alt={props.title} />
      </Link>
      <div className="card-body ">
        <h5 className="card-title">
          <Link className="text-dark" to={`/product/${props.id}`}>
            {props.title}
          </Link>
        </h5>
      </div>
      <div className="card-footer border-0 bg-transparent">
        <p className=" m-0 fw-medium text-secondary text-capitalize ">
          {props.category}
        </p>
        <p className=" m-0 text-danger fw-bold">
          ${Number(props.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Card;
