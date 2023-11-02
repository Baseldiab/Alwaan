import { Container } from "react-bootstrap";
import MainButton from "./Main-button";
import "./stylish.css";

function Stylish() {
  return (
    <section className="stylish-section">
      <Container className="">
        <div className="stylish__texts ">
          <h5 className="stylish__secondary-head text-uppercase">
            WE MAKE IT EASY TO EXPRIENCE CREATIVITY
          </h5>
          <h3 className="stylish__main-head text-uppercase">
            STYLISH NEW DESIGN
          </h3>
          <p className="stylish__text">
            Welcome to the home of women's fashion clothing & accessories at
            Italy
          </p>
          <MainButton variant="primary" />
        </div>
      </Container>
    </section>
  );
}

export default Stylish;
