import { Container } from "react-bootstrap";
import Products from "./component/products";
function HomePage() {
  return (
    <main className="App my-5 ">
      <section className="cards my-4">
        <Container>
          <Products />
        </Container>
      </section>
    </main>
  );
}
export default HomePage;
